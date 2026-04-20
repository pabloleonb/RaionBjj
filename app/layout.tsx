import type { Metadata } from "next";
import { Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
});

const archivoBlack = Archivo_Black({ 
  subsets: ["latin"],
  variable: '--font-archivo-black',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Raion BJJ - Academia de Jiu-Jitsu Brasileño | Lo Barnechea",
  description: "Academia especialista en Jiu-Jitsu Brasileño en Lo Barnechea. Clases de BJJ para principiantes, niños y competidores. ¡Reserva tu clase de prueba gratis y únete a nuestra manada!",
  keywords: ["BJJ", "Jiu-Jitsu", "Lo Barnechea", "Santiago", "Academia", "Clases de BJJ", "Jiu-Jitsu Niños", "Defensa Personal"],
  authors: [{ name: "Raion BJJ" }],
  openGraph: {
    title: "Raion BJJ - Academia de Jiu-Jitsu Brasileño",
    description: "Únete a la manada en Lo Barnechea. Disciplina y maestría en el tatami.",
    images: ['/img/logored.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/FaviconRaion.png" type="image/png" />
        {/* JSON-LD Schema for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Raion BJJ",
              "url": "https://www.raionbjj.cl",
              "description": "Academia especialista en Jiu-Jitsu Brasileño en Lo Barnechea, Santiago.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. El Rodeo #12850 (Dentro de W FITNESS LA DEHESA)",
                "addressLocality": "Lo Barnechea",
                "addressRegion": "RM",
                "postalCode": "7690000",
                "addressCountry": "CL"
              },
              "telephone": "+56996787321",
              "openingHours": "Mo,Tu,We,Th,Fr 11:30-22:00, Sa 10:00-12:00",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${archivoBlack.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
