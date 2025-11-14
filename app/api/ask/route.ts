import { NextRequest, NextResponse } from 'next/server';
import { knowledgeBase } from '@/lib/knowledgeBase';
import { tokenize, termFrequency, cosineSimilarity } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: 'Invalid question' }, { status: 400 });
    }

    const qTokens = tokenize(question);
    const qTf = termFrequency(qTokens);

    let best = { score: 0, answer: "I couldn't find that in my portfolio yet." };

    for (const item of knowledgeBase) {
      const docTokens = tokenize(item.content);
      const docTf = termFrequency(docTokens);
      const score = cosineSimilarity(qTf, docTf);
      if (score > best.score) {
        // Return a concise, relevant snippet
        best = { score, answer: `${item.title}: ${item.snippet}` };
      }
    }

    return NextResponse.json({ answer: best.answer });
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
