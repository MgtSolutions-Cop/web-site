import styles from './FeaturesGrid.module.css';
import { LuLockKeyhole,LuZap,LuHandshake,LuSunrise } from "react-icons/lu";
export default function FeaturesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>¿Por qué MGD Bitforge?</h2>
        <p className={styles.subheading}>Fusionamos seguridad legal con potencia tecnológica.</p>
      </div>

      <div className={styles.grid}>
        
        {/* CAJA 1: GRANDE (Seguridad) */}
        <div className={`${styles.card} ${styles.colSpan2}`}>
          <div className={styles.cardContent}>
            <div className={styles.icon}><LuLockKeyhole /></div>
            <h3>Custodia Blindada</h3>
            <p>Tus documentos físicos y digitales bajo los más estrictos protocolos de seguridad y encriptación bancaria.</p>
          </div>
        </div>

        {/* CAJA 2: PEQUEÑA (Velocidad) */}
        <div className={styles.card}>
           <div className={styles.cardContent}>
            <div className={styles.icon}><LuZap /></div>
            <h3>Fast Deploy</h3>
            <p>Desarrollo ágil con Next.js para entregas rápidas.</p>
          </div>
        </div>

        {/* CAJA 3: PEQUEÑA (Soporte) */}
        <div className={styles.card}>
           <div className={styles.cardContent}>
            <div className={styles.icon}><LuHandshake /></div>
            <h3>Consultoría</h3>
            <p>Acompañamiento experto en normativa documental.</p>
          </div>
        </div>

        {/* CAJA 4: GRANDE (Tecnología) */}
        <div className={`${styles.card} ${styles.colSpan2}`}>
           <div className={styles.cardContent}>
            <div className={styles.icon}><LuSunrise /></div>
            <h3>Tecnología de Punta</h3>
            <p>No usamos plantillas viejas. Creamos software a medida con arquitecturas escalables y modernas.</p>
          </div>
        </div>

      </div>
    </section>
  );
}