"use client";

import { useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. Ask about my skills, projects, or experience.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const question = input.trim();
    setMessages((m) => [...m, { role: 'user', content: question }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.answer ?? 'Sorry, I\'m not sure yet.' }]);
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'There was an error answering. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      void send();
    }
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold">Ask about me</h3>
      <div className="mt-4 space-y-3 max-h-72 overflow-auto pr-2">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={`inline-block max-w-[90%] rounded-2xl px-3 py-2 ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white/10'}`}>
              {m.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-white/60 text-sm">Thinking?</div>}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask e.g. What\'s your favorite AI stack?"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button onClick={send} className="btn">Send</button>
      </div>
    </div>
  );
}
