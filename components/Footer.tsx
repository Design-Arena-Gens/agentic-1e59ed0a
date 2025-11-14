export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-white/60">
      <div className="container">
        <p>
          ? {new Date().getFullYear()} Your Name ? Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
