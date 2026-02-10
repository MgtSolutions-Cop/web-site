import Link from 'next/link';
import styles from './SplitServices.module.css';

export default function SplitServices() {
  return (
    <section className={styles.heroContainer}>
      
      {/* --- LADO IZQUIERDO: GESTIÓN DOCUMENTAL --- */}
      <div className={`${styles.split} ${styles.splitLeft}`}>
        
        {/* LOGO GIGANTE DE FONDO (Marca de agua) */}
        <div className={styles.watermarkIcon}>
          {/* Icono de Carpeta/Archivo */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
        </div>
        
        <div className={styles.contentCard}>
          <span className={styles.subtitle}>01 — CUSTODIA</span>
          <h2 className={styles.title}>Gestión Documental</h2>
          <p className={styles.description}>
            Digitalización certificada y organización física. Ponemos orden en el caos de la información.
          </p>
          <Link href="/gestion-documental" className={styles.linkGroup}>
            <span>Explorar Servicios</span>
            <div className={styles.iconCircle}>→</div>
          </Link>
        </div>
      </div>

      {/* --- LADO DERECHO: DESARROLLO SOFTWARE --- */}
      <div className={`${styles.split} ${styles.splitRight}`}>
        
        {/* LOGO GIGANTE DE FONDO (Marca de agua) */}
        <div className={styles.watermarkIcon}>
          {/* Icono de Código/Terminal */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        
        <div className={styles.contentCard}>
          <span className={styles.subtitle}>02 — INNOVACIÓN</span>
          <h2 className={styles.title}>Desarrollo Software</h2>
          <p className={styles.description}>
            Sistemas a la medida y la potencia de Prometeo. Ingeniería para el futuro de tu empresa.
          </p>
          <Link href="/desarrollo-software" className={styles.linkGroup}>
            <span>Ver Tecnologías</span>
            <div className={styles.iconCircle}>→</div>
          </Link>
        </div>

      </div>

    </section>
  );
}