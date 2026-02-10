import type { Metadata } from 'next';
import Link from 'next/link';
// Agregamos los nuevos iconos para las tecnologías
import { LuCode, LuFlame, LuLayers, LuSmartphone, LuCloudCog, LuArrowRight,LuShare2,LuRocket,LuBrush } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import styles from './software.module.css';

export const metadata: Metadata = {
  title: 'Desarrollo de Software y Prometeo SGD | MGD Bitforge',
  description: 'Fábrica de software a la medida y creadores de Prometeo: El sistema de gestión documental moderno que reemplaza a los tradicionales.',
};

// --- NUEVO COMPONENTE: BANDA DE TECNOLOGÍAS (MARQUESINA) ---
function TechMarquee() {
  const techs = [
    { icon: TbBrandNextjs, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: LuShare2, name: "n8n" },
  ];

  // Duplicamos la lista para crear el efecto de scroll infinito sin cortes
  const marqueeItems = [...techs, ...techs];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {marqueeItems.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <tech.icon className={styles.techIcon} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// ---------------------------------------------------------

export default function SoftwarePage() {
  return (
    <main className={styles.mainContainer}>
      
      {/* --- HERO: CÓDIGO Y POTENCIA --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          
          <div className={styles.statusBadge}>
            <span className={styles.blink}>_</span> Compilando Soluciones
          </div>

          {/* --- AQUÍ INSERTAMOS LA NUEVA BANDA DE TECNOLOGÍAS --- */}
          <TechMarquee />
          {/* --------------------------------------------------- */}
          
          <h1 className={styles.title}>Ingeniería de Software <br /><span className={styles.redText}>Sin Límites</span></h1>
          <p className={styles.subtitle}>
            Desde plataformas SaaS escalables hasta sistemas corporativos a la medida. 
            No solo escribimos código, construimos el motor digital de tu empresa.
          </p>
        </div>
      </section>

      {/* --- EL BUQUE INSIGNIA: PROMETEO --- */}
      <section className={styles.prometeoSection}>
        <div className={styles.prometeoContainer}>
          <div className={styles.prometeoContent}>
            <div className={styles.prometeoBadge}>BUQUE INSIGNIA</div>
            <h2 className={styles.prometeoTitle}>
              <LuFlame className={styles.fireIcon} /> PROMETEO <span className={styles.versionText}>v1.0</span>
            </h2>
            <h3 className={styles.prometeoSubtitle}>La evolución de la Gestión Documental.</h3>
            
            <p className={styles.prometeoDesc}>
              Olvídate de interfaces de los años 90. <strong>Prometeo</strong> llega para competir con los gigantes (Orfeo/Siga) ofreciendo lo que ellos no tienen: 
              <strong> Velocidad, Experiencia de Usuario (UX) moderna y Arquitectura Cloud nativa.</strong>
            </p>

            <ul className={styles.prometeoFeatures}>
              <li><LuRocket /> <strong>Rendimiento:</strong> Cargas instantáneas, sin esperas.</li>
              <li><LuBrush /> <strong>Interfaz Intuitiva:</strong> Curva de aprendizaje mínima.</li>
              <li><LuCloudCog/> <strong>Cloud Native:</strong> Accede desde cualquier lugar, seguro.</li>
            </ul>

            <Link href="/?service=prometeo#contacto" className={styles.prometeoBtn}>
              Solicitar Demo <LuArrowRight />
            </Link>
          </div>
          
          {/* Decoración visual abstracta para Prometeo */}
          <div className={styles.prometeoVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.windowBody}>
                <code>
                  <span className={styles.cPurple}>const</span> <span className={styles.cBlue}>Prometeo</span> = <span className={styles.cYellow}>{`{`}</span><br/>
                  &nbsp;&nbsp;security: <span className={styles.cGreen}>"AES-256"</span>,<br/>
                  &nbsp;&nbsp;speed: <span className={styles.cGreen}>"Lightning"</span>,<br/>
                  &nbsp;&nbsp;legacy_systems: <span className={styles.cRed}>false</span><br/>
                  <span className={styles.cYellow}>{`}`}</span>;
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS A LA MEDIDA & SAAS --- */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Nuestro Stack de Servicios</h2>
          <p>No nos cerramos a la banda. Si lo puedes imaginar, lo podemos programar.</p>
        </div>

        <div className={styles.grid}>
          
          {/* Tarjeta 1: A la medida */}
          <div className={styles.card}>
            <div className={styles.iconBox}><LuCode /></div>
            <h3>Software a la Medida</h3>
            <p>
              Desarrollamos exactamente lo que tu negocio necesita. Sin plantillas genéricas. 
              Arquitecturas robustas que crecen contigo.
            </p>
          </div>

          {/* Tarjeta 2: SaaS */}
          <div className={styles.card}>
            <div className={styles.iconBox}><LuCloudCog /></div>
            <h3>Desarrollo SaaS</h3>
            <p>
              Creamos productos de Software como Servicio. Tenemos nuestros propios productos en incubadora y podemos ayudarte a lanzar el tuyo.
            </p>
          </div>

          {/* Tarjeta 3: Integraciones */}
          <div className={styles.card}>
            <div className={styles.iconBox}><LuLayers /></div>
            <h3>Integraciones & API</h3>
            <p>
              Conectamos tus sistemas actuales. Hacemos que tu CRM hable con tu ERP y tu sitio web. Automatización total.
            </p>
          </div>

           {/* Tarjeta 4: Mobile */}
           <div className={styles.card}>
            <div className={styles.iconBox}><LuSmartphone /></div>
            <h3>Apps Móviles</h3>
            <p>
              Extensiones nativas o híbridas de tus sistemas para llevar el control en el bolsillo. Android & iOS.
            </p>
          </div>

        </div>

        <div className={styles.ctaFooter}>
          <h3>¿Tienes una idea disruptiva?</h3>
          <Link href="/?service=software#contacto" className={styles.ctaLink}>
            Hablemos de Código <LuArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}