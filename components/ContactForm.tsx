"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setStatus(data.ok ? 'Message sent!' : 'Something went wrong.');
    if (data.ok) {
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <form onSubmit={submit} className="card space-y-4">
      <div>
        <label className="block text-sm text-white/70">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/50" />
      </div>
      <div>
        <label className="block text-sm text-white/70">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/50" />
      </div>
      <div>
        <label className="block text-sm text-white/70">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/50" rows={4} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <button type="submit" className="btn">Send</button>
        {status && <span className="text-sm text-white/70">{status}</span>}
      </div>
    </form>
  );
}
