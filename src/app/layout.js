import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "InfiniDev — Digital Agency | Web, App & Design Services",
  description:
    "InfiniDev is a full-service digital agency offering web development, ecommerce, app development, video editing, and graphic design. Trusted by 200+ businesses worldwide.",
  keywords: [
    "digital agency",
    "web development",
    "app development",
    "ecommerce",
    "graphic design",
    "video editing",
  ],
  authors: [{ name: "InfiniDev" }],
  openGraph: {
    title: "InfiniDev — Digital Agency | Web, App & Design Services",
    description:
      "Full-service digital agency trusted by 200+ businesses. Web development, ecommerce, app development, video editing & graphic design.",
    type: "website",
    locale: "en_US",
    siteName: "InfiniDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfiniDev — Digital Agency",
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
              name: "InfiniDev",
              description:
                "Full-service digital agency offering web, app, ecommerce, design & video services.",
              url: "https://infinidev.agency",
              logo: "https://infinidev.agency/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-INFINIDEV",
                contactType: "sales",
              },
              sameAs: [
                "https://twitter.com/infinidev",
                "https://linkedin.com/company/infinidev",
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
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
