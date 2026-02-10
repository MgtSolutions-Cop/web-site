import type { Metadata } from 'next';
import Link from 'next/link';
import { LuClipboardCheck, LuLibrary, LuShieldCheck, LuCpu, LuGraduationCap, LuFileSearch, LuCheck } from "react-icons/lu";
import styles from './gestion.module.css';

// --- SEO Y METADATOS ---
export const metadata: Metadata = {
  title: 'Consultoría en Gestión Documental y Archivo | MGD Bitforge',
  description: 'Asesoría experta en TRD, TVD, PGD, digitalización y normativa archivística en Colombia. Soluciones técnicas para entidades públicas y privadas.',
  keywords: ['Gestión Documental Colombia', 'Consultoría Archivística', 'Tablas de Retención Documental TRD', 'Digitalización de Archivos', 'Normativa AGN', 'Organización de Archivos', 'Preservación Digital', 'PGD', 'PINAR'],
};

export default function GestionDocumentalPage() {
  return (
    <main className={styles.mainContainer}>
      
      {/* --- HERO INTERNO --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>SERVICIO ESPECIALIZADO</span>
          <h1 className={styles.title}>Gestión Documental <span className={styles.redText}>Integral</span></h1>
          <p className={styles.subtitle}>
            Transformamos el caos físico en activos de información estratégica. Cumplimiento normativo, eficiencia y transparencia para tu entidad.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE INSTRUMENTOS (Bento Grid Mini) --- */}
      <section className={styles.instrumentsSection}>
        <h2 className={styles.sectionTitle}>Instrumentos Archivísticos</h2>
        <div className={styles.instrumentsGrid}>
          {['TRD', 'TVD', 'PGD', 'PINAR', 'SIC', 'MGDA'].map((item) => (
            <div key={item} className={styles.instrumentCard}>
              <span className={styles.instrumentText}>{item}</span>
            </div>
          ))}
        </div>
        <p className={styles.instrumentsDesc}>
          Diseño e implementación de Tablas de Retención, Valoración, Programas de Gestión y Planes Institucionales.
        </p>
      </section>

      {/* --- SERVICIOS DETALLADOS --- */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          
          {/* Tarjeta 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuFileSearch /></div>
            <h3>Consultoría y Diagnóstico</h3>
            <p>
              Diagnóstico integral del estado de sus archivos. Asesoría para el cumplimiento de la Ley General de Archivos y lineamientos del AGN. Acompañamiento a Comités de Archivo.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuLibrary /></div>
            <h3>Organización de Archivos</h3>
            <p>
              Intervención técnica de fondos acumulados, archivos de gestión y centrales. Clasificación, ordenación y descripción documental. Inventarios y transferencias.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuCpu /></div>
            <h3>Gestión Electrónica</h3>
            <p>
              Transición a entornos digitales (Cero Papel). Implementación de expedientes electrónicos, firma digital y preservación a largo plazo. Articulación con TI.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuShieldCheck /></div>
            <h3>Conservación y Custodia</h3>
            <p>
              Estrategias de conservación preventiva. Diagnóstico de riesgos, saneamiento ambiental y adecuación de depósitos físicos bajo norma técnica.
            </p>
          </div>

          {/* Tarjeta 5 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuGraduationCap /></div>
            <h3>Capacitación</h3>
            <p>
              Formación al talento humano. Talleres prácticos sobre aplicación de TRD, ventanilla única, foliación y cultura archivística.
            </p>
          </div>

          {/* Tarjeta 6 */}
          <div className={styles.serviceCard}>
            <div className={styles.iconBox}><LuClipboardCheck /></div>
            <h3>Auditoría y Control</h3>
            <p>
              Preparación para visitas de entes de control. Auditorías internas, elaboración de informes técnicos y respuesta a requerimientos oficiales.
            </p>
          </div>

        </div>
      </section>

      {/* --- POR QUÉ ELEGIRNOS --- */}
<section className={styles.whyUsSection}>
  <h2 className={styles.sectionTitle}>¿Por qué MGD Bitforge?</h2>
  <ul className={styles.checkList}>
    {/* Cambiamos LuCheckCircle por LuCheck aquí */}
    <li><LuCheck className={styles.checkIcon}/> Enfoque técnico y normativo riguroso.</li>
    <li><LuCheck className={styles.checkIcon}/> Experiencia en entidades públicas y educativas.</li>
    <li><LuCheck className={styles.checkIcon}/> Soluciones ajustadas a la realidad institucional.</li>
    <li><LuCheck className={styles.checkIcon}/> Compromiso con la memoria institucional.</li>
  </ul>
  
  <div className={styles.ctaBox}>
    <h3>¿Necesitas poner en orden tu archivo?</h3>
    <Link href="/?service=documental#contacto" className={styles.ctaButton}>
            Solicitar Diagnóstico
          </Link>
  </div>
</section>

    </main>
  );
}