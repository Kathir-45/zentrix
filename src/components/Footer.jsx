"use client";
import styles from "./Footer.module.css";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Ecommerce", href: "#services" },
    { label: "App Development", href: "#services" },
    { label: "Video Editing", href: "#services" },
    { label: "Graphic Design", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#team" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo} aria-label="InfiniDev home">
            <img src="/logo-main.png" alt="InfiniDev" width="48" height="48" style={{ borderRadius: 6 }} />
            <span className={styles.logoText}>InfiniDev</span>
          </a>
          <p className={styles.brandDesc}>
            Full-service digital agency helping businesses thrive in the digital
            age. From concept to launch — we&apos;ve got you covered.
          </p>
          <div className={styles.socials}>
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a key={s} href="#" className={styles.socialIcon} aria-label={`InfiniDev on ${s}`}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className={styles.column}>
            <h3 className={styles.columnTitle}>{title}</h3>
            <ul className={styles.columnList}>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.columnLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} InfiniDev. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={styles.backToTop}
              aria-label="Back to top"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 12V4m0 0L4 8m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
