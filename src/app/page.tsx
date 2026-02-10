import Hero from "@/components/Hero";
import SplitServices from "@/components/SplitServices";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
// src/app/page.tsx
export default function Home() {
  return (
    // Padding top grande (pt-32 aprox 130px) para que el texto no quede debajo de la barra
    <div style={{ paddingTop: '8px', paddingLeft: '5px', paddingRight: '5px' }}>
     <Hero/>
     <div id="servicios">
        <SplitServices />
        <FeaturesGrid />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
}