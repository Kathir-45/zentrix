"use client";
import { useEffect, useRef } from "react";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    desc: "Our designers create stunning mockups and prototypes that align with your brand vision and user expectations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    desc: "We build with clean, maintainable code using modern technologies — with regular updates and transparent progress tracking.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    desc: "We deploy, monitor, and optimize — providing ongoing support to ensure your digital product continues to excel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);

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

  return (
    <section className={`section ${styles.process}`} id="process" ref={ref} aria-label="Our Process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-subtitle">
            A streamlined, transparent workflow that keeps you informed at every
            stage — from initial concept to final launch.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.number} className={`${styles.step} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.stepIcon}>
                {step.icon}
                {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
