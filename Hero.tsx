import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">
              <span className="line-1">Engineering your dreams</span>
              <span className="accent">BUILDING the future</span>
            </h1>
            <p className="lead">
              Trusted construction solutions for commercial, residential, and
              industrial projects. Quality that lasts.
            </p>
          </div>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">
              Explore our projects
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>

        <div
          className="hero-media"
          role="img"
          aria-label="Illustration of tiger mark security"
        >
          <Image
            src="/hero.jpg"
            alt="Tiger's Mark security illustration"
            width={700}
            height={420}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
