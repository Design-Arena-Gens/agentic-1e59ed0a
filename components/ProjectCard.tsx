import { ReactNode } from 'react';

export function ProjectCard({ title, description, tags, link }: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}) {
  return (
    <a href={link ?? '#'} className="card block hover:bg-white/[0.07] transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="p mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
    </a>
  );
}
