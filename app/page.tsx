import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillBadge from '@/components/SkillBadge';
import { ProjectCard } from '@/components/ProjectCard';
import AIChat from '@/components/AIChat';
import ContactForm from '@/components/ContactForm';

export default function Page() {
  return (
    <main>
      <Navbar />

      <section className="section container" id="hero">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <span className="badge">Full?Stack Developer ? AI</span>
            <h1 className="h1 mt-4">I build intelligent, delightful web apps</h1>
            <p className="p mt-4">I specialize in designing, building and shipping end?to?end products powered by AI ? from data pipelines and APIs to accessible, high?performance interfaces.</p>
            <div className="mt-6 flex gap-3">
              <a className="btn" href="#contact">Work together</a>
              <a className="btn bg-white/10 hover:bg-white/15" href="#projects">See projects</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-accent/10"></div>
          </div>
        </div>
      </section>

      <section className="section container" id="about">
        <h2 className="h2">About</h2>
        <p className="p mt-4 max-w-3xl">
          I have shipped products across startups and enterprises, focusing on AI?assisted workflows, developer platforms, and delightful UX. I enjoy turning ambiguous problems into working software that users love.
        </p>
      </section>

      <section className="section container" id="skills">
        <h2 className="h2">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {["TypeScript","Next.js","Node.js","PostgreSQL","Prisma","Python","FastAPI","LangChain","OpenAI","Pinecone","Redis","Tailwind","Vercel"].map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      </section>

      <section className="section container" id="projects">
        <h2 className="h2">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="AI Documentation Copilot"
            description="Semantic search + retrieval?augmented generation for technical docs with feedback loops."
            tags={["Next.js","RAG","Embeddings","Edge Functions"]}
          />
          <ProjectCard
            title="Realtime Collaboration Suite"
            description="WebSocket?driven collaborative editing with CRDTs and granular permissions."
            tags={["WebSockets","CRDT","Postgres","tRPC"]}
          />
          <ProjectCard
            title="ML Experiment Tracker"
            description="Track runs, metrics, artifacts with clean dashboards and model registry."
            tags={["Python","FastAPI","Postgres","S3"]}
          />
          <ProjectCard
            title="E?commerce Platform"
            description="Headless storefront with server components, caching, and resilient payments."
            tags={["Next.js","Stripe","ISR","Redis"]}
          />
        </div>
      </section>

      <section className="section container" id="ai">
        <h2 className="h2">Ask my AI</h2>
        <p className="p mt-2">Curious about my experience? Ask anything ? the AI is grounded in my portfolio content.</p>
        <div className="mt-6">
          <AIChat />
        </div>
      </section>

      <section className="section container" id="contact">
        <h2 className="h2">Contact</h2>
        <p className="p mt-2">Tell me about your project. I\'ll get back within 24 hours.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
