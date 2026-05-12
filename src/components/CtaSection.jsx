"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  const ref = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meennwaa", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className={styles.cta} id="contact" ref={ref} aria-label="Contact us">
      <div className="dot-pattern" aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className="reveal">
          <span className="section-label" style={{ justifyContent: "center" }}>Get Started</span>
          <h2 className={styles.heading}>
            Ready to Transform Your
            <br />
            <span className="gradient-text">Digital Presence?</span>
          </h2>
          <p className={styles.subtext}>
            Let&apos;s discuss your project. Book a free consultation and get a
            custom proposal within 48 hours.
          </p>
        </div>

        <form
          className={`${styles.form} reveal`}
          onSubmit={handleSubmit}
          aria-label="Get consultation form"
        >
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="cta-name" className={styles.srOnly}>Your name</label>
              <input
                id="cta-name"
                name="name"
                type="text"
                placeholder="Your name"
                className={styles.input}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="cta-email" className={styles.srOnly}>Your email address</label>
              <input
                id="cta-email"
                name="email"
                type="email"
                placeholder="Your email"
                className={styles.input}
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="cta-service" className={styles.srOnly}>Service you&apos;re interested in</label>
            <select
              id="cta-service"
              name="service"
              className={styles.input}
              defaultValue=""
              required
              aria-required="true"
            >
              <option value="" disabled>Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="App Development">App Development</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="cta-message" className={styles.srOnly}>Your message</label>
            <textarea
              id="cta-message"
              name="message"
              placeholder="Tell us about your project..."
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${styles.submitBtn}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Message Sent!
              </>
            ) : (
              <>
                Get Free Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>
              ✓ Thank you! We&apos;ll get back to you within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <p className={styles.disclaimer}>
            No commitment required. We&apos;ll respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
