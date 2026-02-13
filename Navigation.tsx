// app/components/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="nav-header">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          Logo here
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/partners">Partners</Link>
        </nav>
        <Link href="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
