"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo} aria-label="Zentrix home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
              <path d="M9 22V10l7 12 7-12v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>Zentrix</span>
          </a>

          <ul className={styles.links} role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a href={link.href} className={styles.link} role="menuitem">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Get a Quote
          </a>

          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerInner}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
