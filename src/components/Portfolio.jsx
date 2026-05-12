"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const categories = ["All", "Web", "Ecommerce", "Apps", "Design"];

const projects = [
  {
    title: "JHA Course Generator",
    category: "Web",
    desc: "AI-powered course creation platform that generates personalized learning paths. Custom education tailored to individual goals and pace.",
    image: "/projects/ai-project.png",
    tech: ["React", "AI/ML", "Node.js"],
    featured: true,
    liveUrl: "https://jha-course-generator.vercel.app/",
    modalContent: {
      longDesc: "JHA Course Generator is an innovative AI-powered platform that revolutionizes online education. It dynamically creates personalized learning paths based on user goals, skill level, and preferred pace. The platform leverages cutting-edge AI to curate and structure course content, making quality education accessible and tailored to everyone.",
      highlights: ["AI-driven course content generation", "Personalized learning paths", "Adaptive difficulty progression", "Interactive lessons & quizzes", "Progress tracking dashboard", "Responsive cross-device experience"],
      techStack: ["React", "Node.js", "AI/ML APIs", "Vercel", "Tailwind CSS"],
      duration: "4 weeks",
      client: "JHA Education",
    },
  },
  {
    title: "Wedding Invitation",
    category: "Design",
    desc: "Elegant digital wedding invitation with bilingual support, glassmorphism design, music integration, and animated guest experience.",
    image: "/projects/invitation-project.png",
    tech: ["Next.js", "CSS", "Animation"],
    featured: true,
    liveUrl: "https://saronivi-invitation.vercel.app/",
    modalContent: {
      longDesc: "A beautifully crafted digital wedding invitation featuring bilingual Tamil-English support, stunning glassmorphism aesthetics, and an immersive animated experience. Complete with background music integration, RSVP functionality, and a personalized guest greeting system that creates a memorable first impression.",
      highlights: ["Bilingual Tamil & English support", "Glassmorphism UI with golden accents", "Background music with toggle", "Animated particle effects & transitions", "Personalized guest names via URL", "Mobile-first responsive design"],
      techStack: ["Next.js", "CSS Animations", "Web Audio API", "Vercel"],
      duration: "2 weeks",
      client: "Saravanan & Nivetha",
    },
  },
  {
    title: "FinFlow Dashboard",
    category: "Web",
    desc: "Real-time financial analytics platform with interactive charts and AI insights.",
    gradient: "linear-gradient(135deg, #1e3a5f, #2563eb)",
    tech: ["React", "D3.js", "Node"],
    modalContent: {
      longDesc: "FinFlow is a comprehensive financial analytics dashboard that provides real-time market insights, portfolio tracking, and AI-powered investment recommendations. Built for financial advisors and individual investors who need instant access to complex data visualizations.",
      highlights: ["Real-time data streaming", "Interactive D3.js charts", "AI-powered insights", "Portfolio management tools", "Custom alert system", "Multi-device sync"],
      techStack: ["React", "D3.js", "Node.js", "WebSocket", "PostgreSQL"],
      duration: "8 weeks",
      client: "FinFlow Inc.",
    },
  },
  {
    title: "StyleHaven Store",
    category: "Ecommerce",
    desc: "Luxury fashion ecommerce store with AR try-on and personalized recommendations.",
    gradient: "linear-gradient(135deg, #064e3b, #10b981)",
    tech: ["Shopify", "React", "AR.js"],
    modalContent: {
      longDesc: "StyleHaven is a premium fashion ecommerce platform featuring augmented reality try-on capabilities, AI-driven personalized recommendations, and a seamless checkout experience. The store handles thousands of SKUs with advanced filtering and instant search.",
      highlights: ["AR virtual try-on feature", "AI product recommendations", "Advanced filtering & search", "Multi-payment gateway", "Inventory management", "Customer loyalty program"],
      techStack: ["Shopify", "React", "AR.js", "Stripe", "Algolia"],
      duration: "10 weeks",
      client: "StyleHaven Fashion",
    },
  },
  {
    title: "MedConnect App",
    category: "Apps",
    desc: "Telehealth mobile application connecting patients with doctors in real-time.",
    gradient: "linear-gradient(135deg, #3b1c6e, #8b5cf6)",
    tech: ["React Native", "Firebase"],
    modalContent: {
      longDesc: "MedConnect is a HIPAA-compliant telehealth application that enables seamless video consultations between patients and healthcare providers. Features include appointment scheduling, prescription management, health records, and real-time chat support.",
      highlights: ["HD video consultations", "Appointment scheduling system", "E-prescription management", "Secure health records", "Real-time chat & notifications", "Insurance integration"],
      techStack: ["React Native", "Firebase", "WebRTC", "Node.js", "MongoDB"],
      duration: "12 weeks",
      client: "HealthBridge Medical",
    },
  },
  {
    title: "FreshCart Marketplace",
    category: "Ecommerce",
    desc: "Multi-vendor grocery marketplace with delivery tracking and subscription boxes.",
    gradient: "linear-gradient(135deg, #831843, #f43f5e)",
    tech: ["WooCommerce", "React", "Stripe"],
    modalContent: {
      longDesc: "FreshCart is a multi-vendor grocery marketplace connecting local farmers and producers with consumers. Features real-time delivery tracking, subscription box management, and a vendor dashboard for inventory and order management.",
      highlights: ["Multi-vendor marketplace", "Real-time delivery tracking", "Subscription box management", "Vendor analytics dashboard", "Automated inventory alerts", "Customer review system"],
      techStack: ["WooCommerce", "React", "Stripe", "Google Maps API", "Redis"],
      duration: "10 weeks",
      client: "FreshCart Foods",
    },
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const headerRef = useRef(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalProject]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleFilter = (cat) => {
    setActive(cat);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <section className={`section ${styles.portfolio}`} id="portfolio" aria-label="Portfolio">
        <div className="container">
          <div className="section-header reveal" ref={headerRef}>
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore our latest work — each project is a testament to our
              commitment to quality and innovation.
            </p>
          </div>

          <div className={styles.filters} role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
                onClick={() => handleFilter(cat)}
                role="tab"
                aria-selected={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid} key={animKey}>
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className={`${styles.card} ${project.featured ? styles.featured : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={styles.cardImage}
                  style={project.gradient ? { background: project.gradient } : undefined}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.projectImg}
                    />
                  )}
                  <div className={styles.cardShine} aria-hidden="true" />
                  <div className={styles.cardOverlay}>
                    <span className={styles.tag}>{project.category}</span>
                    {project.featured && <span className={styles.featuredBadge}>★ Featured</span>}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.desc}</p>
                  <div className={styles.techRow}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <button
                    className={styles.cardLink}
                    onClick={() => setModalProject(project)}
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {modalProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} case study`}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setModalProject(null)}
              aria-label="Close dialog"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Project image header */}
            {modalProject.image && (
              <div className={styles.modalImage}>
                <Image
                  src={modalProject.image}
                  alt={`${modalProject.title} screenshot`}
                  fill
                  sizes="560px"
                  className={styles.modalImg}
                />
              </div>
            )}
            {!modalProject.image && modalProject.gradient && (
              <div className={styles.modalImage} style={{ background: modalProject.gradient }} />
            )}

            <div className={styles.modalBody}>
              <div className={styles.modalHeader}>
                <div>
                  <div className={styles.modalMeta}>
                    <span className={styles.modalTag}>{modalProject.category}</span>
                    {modalProject.featured && <span className={styles.modalFeatured}>★ Featured Project</span>}
                  </div>
                  <h3 className={styles.modalTitle}>{modalProject.title}</h3>
                </div>
              </div>

              <div className={styles.modalInfoRow}>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalInfoLabel}>Client</span>
                  <span className={styles.modalInfoValue}>{modalProject.modalContent.client}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalInfoLabel}>Duration</span>
                  <span className={styles.modalInfoValue}>{modalProject.modalContent.duration}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalInfoLabel}>Category</span>
                  <span className={styles.modalInfoValue}>{modalProject.category}</span>
                </div>
              </div>

              <p className={styles.modalDesc}>{modalProject.modalContent.longDesc}</p>

              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>Key Highlights</h4>
                <ul className={styles.featureList}>
                  {modalProject.modalContent.highlights.map((h) => (
                    <li key={h} className={styles.featureItem}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                        <polyline points="22 4 12 14.01 9 11.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>Tech Stack</h4>
                <div className={styles.toolRow}>
                  {modalProject.modalContent.techStack.map((t) => (
                    <span key={t} className={styles.toolBadge}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalActions}>
                {modalProject.liveUrl && (
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.liveLinkBtn}`}
                  >
                    View Live Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <a href="#contact" className="btn btn-outline" onClick={() => setModalProject(null)}>
                  Start Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
