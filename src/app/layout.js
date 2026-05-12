import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Zentrix — Digital Agency | Web, App & Design Services",
  description:
    "Zentrix is a full-service digital agency offering web development, ecommerce, app development, video editing, and graphic design. Trusted by 200+ businesses worldwide.",
  keywords: [
    "digital agency",
    "web development",
    "app development",
    "ecommerce",
    "graphic design",
    "video editing",
  ],
  authors: [{ name: "Zentrix" }],
  openGraph: {
    title: "Zentrix — Digital Agency | Web, App & Design Services",
    description:
      "Full-service digital agency trusted by 200+ businesses. Web development, ecommerce, app development, video editing & graphic design.",
    type: "website",
    locale: "en_US",
    siteName: "Zentrix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentrix — Digital Agency",
    description:
      "Full-service digital agency trusted by 200+ businesses worldwide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zentrix",
              description:
                "Full-service digital agency offering web, app, ecommerce, design & video services.",
              url: "https://nexora.agency",
              logo: "https://nexora.agency/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-NEXORA",
                contactType: "sales",
              },
              sameAs: [
                "https://twitter.com/nexora",
                "https://linkedin.com/company/nexora",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ecommerce Solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "App Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Video Editing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Graphic Design",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
