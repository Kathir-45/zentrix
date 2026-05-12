"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Zentrix completely transformed our online presence. Our website traffic increased by 300% and conversions doubled within the first quarter. They truly understand digital strategy.",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVentures Inc.",
    rating: 5,
    initials: "SC",
  },
  {
    quote: "The ecommerce platform they built for us is incredibly smooth. Our customers love the shopping experience, and we've seen a 45% increase in average order value since launch.",
    name: "Marcus Johnson",
    role: "Founder",
    company: "StyleHaven",
    rating: 5,
    initials: "MJ",
  },
  {
    quote: "Working with Zentrix felt like having an in-house team. They were responsive, creative, and delivered our mobile app ahead of schedule. Highly recommended for any serious project.",
    name: "Emily Rodriguez",
    role: "Product Director",
    company: "HealthBridge",
    rating: 5,
    initials: "ER",
  },
  {
    quote: "Their graphic design work elevated our brand to a whole new level. From logo to marketing collateral — everything is cohesive, professional, and on-brand.",
    name: "David Kim",
    role: "Marketing Lead",
    company: "Artisan Coffee Co.",
    rating: 5,
    initials: "DK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const ref = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials" ref={ref} aria-label="Client testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
        </div>

        <div className={`${styles.carousel} reveal`}>
          <div className={styles.card} key={current}>
            <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            <blockquote className={styles.quote}>
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">{t.initials}</div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorRole}>{t.role}, {t.company}</div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={() => { prev(); resetTimer(); }} className={styles.arrowBtn} aria-label="Previous testimonial">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => { setCurrent(i); resetTimer(); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={() => { next(); resetTimer(); }} className={styles.arrowBtn} aria-label="Next testimonial">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
