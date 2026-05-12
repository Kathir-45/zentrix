"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Team Members" },
];

function useCounter(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, isVisible }) {
  const count = useCounter(value, isVisible);
  return (
    <div className={styles.stat}>
      <span className={styles.value}>
        {count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={ref} aria-label="Company statistics">
      <div className={`container ${styles.grid}`}>
        {stats.map((s) => (
          <StatItem key={s.label} {...s} isVisible={visible} />
        ))}
      </div>
    </section>
  );
}
