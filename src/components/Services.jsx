"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Services.module.css";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Custom websites built with modern frameworks — fast, responsive, and optimized for conversion.",
    color: "#3b82f6",
    modalContent: {
      longDesc: "We build high-performance, scalable websites using cutting-edge technologies like React, Next.js, and Vue.js. Every site we create is custom-tailored to your business goals — from blazing-fast landing pages to complex web applications with real-time data processing.",
      features: ["Custom responsive design", "SEO-optimized architecture", "CMS integration (WordPress, Strapi)", "Performance optimization (Core Web Vitals)", "Progressive Web App (PWA) support", "API development & third-party integrations"],
      tools: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      startingAt: "₹3,000",
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: "Ecommerce",
    desc: "End-to-end ecommerce solutions — Shopify, WooCommerce, or custom builds with seamless UX.",
    color: "#10b981",
    modalContent: {
      longDesc: "From boutique Shopify stores to enterprise-level custom ecommerce platforms, we create online stores that convert. Our solutions include payment gateway integration, inventory management, and data-driven UX optimizations that maximize revenue.",
      features: ["Shopify & WooCommerce development", "Custom checkout experiences", "Payment gateway integration", "Inventory & order management", "Analytics & conversion tracking", "Multi-currency & international support"],
      tools: ["Shopify", "WooCommerce", "Stripe", "React", "Magento", "BigCommerce"],
      startingAt: "₹4,000",
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS & Android with intuitive interfaces.",
    color: "#8b5cf6",
    modalContent: {
      longDesc: "We design and develop mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers high-quality apps with smooth performance, push notifications, offline support, and seamless backend integration.",
      features: ["iOS & Android native development", "Cross-platform with React Native / Flutter", "UI/UX design & prototyping", "Push notifications & real-time features", "App Store & Play Store deployment", "Ongoing maintenance & updates"],
      tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      startingAt: "₹8,000",
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: "Video Editing",
    desc: "Professional video production and editing — promotional videos, motion graphics, and more.",
    color: "#f43f5e",
    modalContent: {
      longDesc: "From concept to final cut, we produce compelling video content that tells your brand's story. Our team handles everything from promotional videos and social media content to motion graphics and animated explainers that captivate your audience.",
      features: ["Promotional & brand videos", "Social media content creation", "Motion graphics & animation", "Video ads (YouTube, Meta, TikTok)", "Product demos & tutorials", "Color grading & sound design"],
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Blender", "Audition"],
      startingAt: "₹1,500",
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Graphic Design",
    desc: "Logos, branding, marketing materials, and UI/UX design that elevates your brand identity.",
    color: "#f59e0b",
    modalContent: {
      longDesc: "Great design is the foundation of a strong brand. We create visually stunning logos, brand identities, marketing materials, and user interfaces that resonate with your target audience and set you apart from the competition.",
      features: ["Logo & brand identity design", "Marketing collateral (brochures, flyers)", "Social media graphics & templates", "UI/UX design & wireframing", "Packaging design", "Brand style guidelines"],
      tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Sketch", "Canva Pro"],
      startingAt: "₹1,000",
    },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: "More Services",
    desc: "SEO, digital marketing, cloud solutions, DevOps, and consulting — we've got you covered.",
    color: "#06b6d4",
    modalContent: {
      longDesc: "Beyond our core offerings, we provide a full spectrum of digital services. Whether you need SEO to boost your rankings, cloud infrastructure setup, DevOps pipelines, or strategic digital marketing — our team has the expertise to deliver.",
      features: ["Search Engine Optimization (SEO)", "Google Ads & social media marketing", "Cloud architecture (AWS, GCP, Azure)", "CI/CD pipelines & DevOps", "Technical consulting & audits", "Data analytics & reporting"],
      tools: ["Google Analytics", "SEMrush", "AWS", "Docker", "GitHub Actions", "HubSpot"],
      startingAt: "₹2,000",
    },
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [modalService, setModalService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalService]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalService(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className={`section ${styles.services}`} id="services" ref={sectionRef} aria-label="Our Services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Services Built for Growth</h2>
            <p className="section-subtitle">
              We offer a comprehensive suite of digital services designed to help
              your business thrive in the modern landscape.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service, i) => (
              <article
                key={service.title}
                className={`glass-card ${styles.card} reveal`}
                style={{ transitionDelay: `${i * 0.1}s`, "--card-accent": service.color }}
              >
                <div className={styles.cardGlow} aria-hidden="true" />
                <div className={styles.iconWrap} style={{ background: `${service.color}15`, color: service.color }}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <button
                  className={styles.cardLink}
                  onClick={() => setModalService(service)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {modalService && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalService(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalService.title} details`}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setModalService(null)}
              aria-label="Close dialog"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalIcon} style={{ background: `${modalService.color}15`, color: modalService.color }}>
                {modalService.icon}
              </div>
              <div>
                <h3 className={styles.modalTitle}>{modalService.title}</h3>
                <span className={styles.modalPrice}>Starting at {modalService.modalContent.startingAt}</span>
              </div>
            </div>

            <p className={styles.modalDesc}>{modalService.modalContent.longDesc}</p>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>What&apos;s Included</h4>
              <ul className={styles.featureList}>
                {modalService.modalContent.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke={modalService.color} strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" stroke={modalService.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.modalSectionTitle}>Technologies We Use</h4>
              <div className={styles.toolRow}>
                {modalService.modalContent.tools.map((t) => (
                  <span key={t} className={styles.toolBadge} style={{ borderColor: `${modalService.color}30`, color: modalService.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.modalActions}>
              <a href="#contact" className="btn btn-primary" onClick={() => setModalService(null)}>
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button className="btn btn-outline" onClick={() => setModalService(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
