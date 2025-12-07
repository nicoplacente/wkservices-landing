import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./(landing)/components/header";
import WhatsAppButton from "./(landing)/components/whatsapp-button";
import Footer from "./(landing)/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const title = "WK Services | Reparación de Electrodomésticos y Electricidad";
const description =
  "Soluciones rápidas y confiables en reparación de electrodomésticos y venta de materiales eléctricos. Técnicos matriculados en Coronel Suárez.";

export const metadata = {
  title: title,
  description: description,
  keywords: [
    "desarrollo web",
    "sitios web personalizados",
    "Next.js",
    "Strapi",
    "aplicaciones web",
    "freelancer",
    "diseño web",
    "Codeluxe",
    "web moderna",
    "landing page",
    "ecommerce",
    "tienda online",
  ],
  metadataBase: new URL("https://wkservices.vercel.app/"),
  openGraph: {
    title: title,
    description: description,
    icons: {
      icon: "/logo-wk.ico",
    },
    url: "https://wkservices.vercel.app/",
    siteName: title,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo-wk.webp",
        width: 630,
        height: 630,
        alt: "WK Services - Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/logo-wk.webp"],
  },
  authors: [{ name: title, url: "https://wkservices.vercel.app/" }],
  creator: title,
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "services",
};

export const viewport = {
  themeColor: "#86efacff",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className}  antialiased `}>
        <Header />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
