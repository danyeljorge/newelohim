import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SITE_INFO } from "@/data/site-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_INFO.name} | Residência Assistida para Idosos em Itaboraí`,
  description:
    "Casa de Repouso Elohim em Itaboraí/RJ. Cuidado humanizado, equipe multidisciplinar 24h (médico geriatra, enfermagem, nutrição, fisioterapia e psicologia), ambiente acolhedor e seguro.",
  keywords: [
    "Casa de Repouso Elohim",
    "Casa de Repouso em Itaboraí",
    "Residência para idosos Itaboraí",
    "ILPI Itaboraí RJ",
    "Geriatria e Enfermagem 24h",
    "Lar de idosos Itaboraí",
    "Asilo em Itaboraí",
  ],
  authors: [{ name: SITE_INFO.authorCredit.text, url: SITE_INFO.authorCredit.url }],
  creator: SITE_INFO.name,
  openGraph: {
    title: `${SITE_INFO.name} | Cuidado Humanizado para a Melhor Idade`,
    description:
      "Residência assistida com carinho, dignidade e supervisão médica e de enfermagem 24h em Itaboraí/RJ.",
    url: "https://www.casaderepousoelohim.com.br",
    siteName: SITE_INFO.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-color.png",
        width: 800,
        height: 600,
        alt: SITE_INFO.name,
      },
    ],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#faf9f6] text-[#1b241d] antialiased selection:bg-elohim-green-100 selection:text-elohim-green-900">
        {children}
      </body>
    </html>
  );
}
