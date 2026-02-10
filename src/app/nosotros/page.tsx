import type { Metadata } from 'next';
import Link from 'next/link';
import { LuUsers, LuTarget, LuFingerprint, LuBriefcase, LuArrowRight, LuRocket } from "react-icons/lu";
import styles from './nosotros.module.css';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | MGD Bitforge',
  description: 'Conoce a MGD Bitforge: Una empresa colombiana que fusiona la experiencia en gestión documental con la innovación del desarrollo de software.',
};

export default function NosotrosPage() {
  return (
    <main className={styles.mainContainer}>
      
      {/* --- HERO: LA IDENTIDAD --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>NUESTRA ESENCIA</span>
          <h1 className={styles.title}>Más que código y papel. <br />Somos <span className={styles.redText}>Arquitectos de Orden</span>.</h1>
          <p className={styles.subtitle}>
            MGD Bitforge nace con una misión clara: cerrar la brecha entre la gestión documental tradicional y el futuro digital.
          </p>
        </div>
      </section>

      {/* --- NUESTRA HISTORIA (EL ORIGEN) --- */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2>El Origen</h2>
            <p>
              Somos una empresa de <strong>capital 100% colombiano</strong>, fundada bajo la convicción de que la tecnología debe servir a la eficiencia administrativa.
            </p>
            <p>
              Nuestra fuerza radica en la <strong>fusión generacional</strong>: combinamos décadas de experiencia en normativa archivística y administración pública, con la energía disruptiva de la ingeniería de software moderna.
            </p>
            <p>
              Mientras otros siguen implementando soluciones de hace 20 años, en MGD Bitforge construimos con las herramientas del mañana (Next.js, Cloud Computing, IA), garantizando que tu entidad no solo cumpla la norma, sino que lidere la transformación.
            </p>
          </div>
          
          <div className={styles.storyVisual}>
            <div className={styles.statCard}>
              <LuUsers className={styles.statIcon} />
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Socios Fundadores</span>
            </div>
            <div className={styles.statCard}>
              <LuRocket className={styles.statIcon} />
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Líneas de Negocio</span>
            </div>
            <div className={styles.decorationLine}></div>
          </div>
        </div>
      </section>

      {/* --- NUESTROS PILARES (VALORES) --- */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Nuestros Pilares</h2>
        
        <div className={styles.valuesGrid}>
          
          {/* Valor 1 */}
          <div className={styles.valueCard}>
            <LuFingerprint className={styles.valueIcon} />
            <h3>Identidad Única</h3>
            <p>
              No creemos en las soluciones "talla única". Entendemos que cada entidad tiene un ADN distinto y diseñamos estrategias a la medida de sus necesidades.
            </p>
          </div>

          {/* Valor 2 */}
          <div className={styles.valueCard}>
            <LuBriefcase className={styles.valueIcon} />
            <h3>Rigor Técnico</h3>
            <p>
              Ya sea aplicando una Tabla de Retención Documental o escribiendo una API segura, la excelencia técnica no es negociable para nosotros.
            </p>
          </div>

          {/* Valor 3 */}
          <div className={styles.valueCard}>
            <LuTarget className={styles.valueIcon} />
            <h3>Visión de Futuro</h3>
            <p>
              No venimos a parchar problemas del pasado, venimos a construir sistemas escalables que duren años. Apostamos por la innovación real, como nuestro sistema <strong>Prometeo</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* --- EQUIPO DIRECTIVO (Placeholder abstracto) --- */}
      {/* Si en el futuro tienes fotos, cambiamos estos iconos por imágenes */}
      <section className={styles.teamSection}>
        <div className={styles.teamHeader}>
          <h2>Liderazgo</h2>
          <p>Un equipo multidisciplinario comprometido con tu éxito.</p>
        </div>
        
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.avatarPlaceholder}>CEO</div>
            <h3>Dirección General</h3>
            <p>Estrategia & Tecnología</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.avatarPlaceholder}>COO</div>
            <h3>Dirección Operativa</h3>
            <p>Gestión Documental & Procesos</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.avatarPlaceholder}>CLO</div>
            <h3>Dirección Jurídica</h3>
            <p>Normativa & Cumplimiento</p>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para trabajar con nosotros?</h2>
          <p>Hablemos de cómo podemos transformar tu organización.</p>
          <Link href="/#contacto" className={styles.ctaButton}>
            Contactar al Equipo <LuArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}