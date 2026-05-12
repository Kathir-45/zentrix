"use client";
import { useEffect, useRef } from "react";
import styles from "./Team.module.css";

const team = [
  {
    name: "Kathirvel",
    role: "Lead developer",
    bio: "5+ years in digital strategy. Previously led product at two Fortune 500 companies.",
    initials: "S",
    gradient: "linear-gradient(135deg, #2563eb, #6366f1)",
    wa:"https://wa.me/916381272552",
    li:"https://www.linkedin.com/in/kathirvel45?text=Hello%2C%20I'm%20interested%20in%20your%20services."
  },
  {
    name: "Yugendiran",
    role: "Lead Designer",
    bio: "Award-winning UX designer passionate about creating intuitive, beautiful digital experiences.",
    initials: "S",
    gradient: "linear-gradient(135deg, #f43f5e, #f59e0b)",
    wa:"https://wa.me/919080872386?text=Hello%2C%20I'm%20interested%20in%20your%20services.",
    li:"#"
  },
  
];

export default function Team() {
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
    <section className={`section ${styles.team}`} id="team" ref={ref} aria-label="Our Team">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">The People Behind Zentrix</h2>
          <p className="section-subtitle">
            A talented team of strategists, designers, and developers committed
            to delivering exceptional results.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <article key={member.name} className={`glass-card ${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.avatar} style={{ background: member.gradient }}>
                {member.initials}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.socials}>
                <a href={`${member.li}`} aria-label={`${member.name} on LinkedIn`} className={styles.socialLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </a>
                <a href={`${member.wa}`} aria-label={`${member.name} on Twitter`} className={styles.socialLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
