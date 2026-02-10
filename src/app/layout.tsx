import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
// IMPORTANTE: Asegúrate que la ruta sea correcta y la N mayúscula si tu archivo empieza con mayúscula
import Navbar from "@/components/navbar"; 
//La configuramos (latin es para caracteres occidentales)
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800"],

});
export const metadata: Metadata = {
  metadataBase: new URL('https://mgdbitforge.cloud'), 

  title: {
    default: "MGD Bitforge | Software y Gestión Documental en Colombia",
    template: "%s | MGD Bitforge" 
  },
  description: "Expertos en Desarrollo de Software a la medida, Sistemas SaaS y Consultoría en Gestión Documental (TRD, TVD, PGD). Transformación digital desde Bogotá para toda Colombia.",
  
  keywords: ["Gestión Documental Colombia", "Desarrollo de Software Bogotá", "Sistema de Gestión Documental", "Digitalización de Archivos", "Prometeo SGD", "Next.js", "Transformación Digital"],
  
  authors: [{ name: "MGD Bitforge Team" }],
  
  creator: "MGD Bitforge",
// 2. OPEN GRAPH (Para que se vea bonito al compartir en WhatsApp/LinkedIn)
  openGraph: {
    title: "MGD Bitforge - Arquitectos de Orden Digital",
    description: "Fusionamos la normativa archivística con la ingeniería de software moderna. Conoce Prometeo y nuestros servicios.",
    url: 'https://mgdbitforge.cloud',
    siteName: 'MGD Bitforge',
    locale: 'es_CO',
    type: 'website',
  },
  
  // 3. ROBOTS (Le damos permiso a Google de leer todo)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
      <JsonLd />
        {/* El Navbar va AQUÍ, fuera del children */}
        <Navbar /> 
        
        {/* El children es el contenido cambiante (Home, Contacto, etc.) */}
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}