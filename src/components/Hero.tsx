
import styles from './Hero.module.css';
import Link from 'next/link';
// 1. Importamos el nuevo componente
import LightPillar from './LightPillar'; 
import Plasma from './Plasma';
import Iridescence from './Iridescence';
export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      
      {/* 2. Ponemos el LightPillar como fondo absoluto.
          Le pasamos tus colores rojos personalizados. */}
      <div className={styles.backgroundWrapper}>
       {/*<LightPillar/>*/} 
       <Iridescence color="#831919"speed={0.8}amplitude={0.0}/> 
      </div>

      {/* 3. El contenido debe estar ENCIMA del fondo */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>
          MGD <span className={styles.highlight}>BITFORGE</span>
        </h1>
        <p className={styles.subtitle}>
          Ingeniería de Software & Gestión Documental Inteligente.
        </p>
        
        <div className={styles.buttons}>
          <Link href="#servicios" className={styles.primaryButton}>
            Conoce nuestros servicios
          </Link>
        </div>
      </div>

     
    </section>
  );
}