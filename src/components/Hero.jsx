import styles from "./Hero.module.css";

const clientLogos = ["Stripe", "Shopify", "Notion", "Slack", "Vercel"];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.bgMesh} aria-hidden="true" />
      <div className="dot-pattern" aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Trusted by 200+ Businesses Worldwide
        </div>

        <h1 className={styles.heading}>
          We Build Digital Experiences
          <br />
          That <span className="gradient-text">Drive Growth</span>
        </h1>

        <p className={styles.subheading}>
          From stunning websites to powerful apps — Zentrix delivers end-to-end
          digital solutions that help businesses scale, convert, and stand out
          in a competitive market.
        </p>

        <div className={styles.actions}>
          <a href="#portfolio" className="btn btn-primary">
            View Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Book a Free Consultation
          </a>
        </div>

        <div className={styles.clients}>
          <span className={styles.clientsLabel}>Trusted by industry leaders</span>
          <div className={styles.clientLogos}>
            {clientLogos.map((name) => (
              <span key={name} className={styles.clientLogo}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />
    </section>
  );
}
