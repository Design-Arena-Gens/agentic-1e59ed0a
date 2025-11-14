import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-dark/70 backdrop-blur supports-[backdrop-filter]:bg-dark/50 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">Your Name</Link>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#skills" className="hover:text-white">Skills</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#ai" className="hover:text-white">AI</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
        <a href="#contact" className="btn">Hire me</a>
      </div>
    </header>
  );
}
