import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      


      {/* SECCIÓN MEDIA: Columnas de información */}
      <div className={styles.grid}>
        
        {/* COLUMNA 1: MARCA */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>MGD BITFORGE</div>
          <p className={styles.mission}>
            Transformando datos en activos estratégicos. Consultoría experta y desarrollo de software a medida.
          </p>
          <div className={styles.socials}>
            {/* LinkedIn Icon */
            <a href="https://www.linkedin.com/in/mgd-bitforge-927a5a3a4/" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>}
            {/* Instagram Icon 
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>*/}
          </div>
        </div>

        {/* COLUMNA 2: SERVICIOS */}
        <div className={styles.linkCol}>
          <h3 className={styles.colTitle}>Servicios</h3>
          <ul className={styles.linkList}>
            <li><Link href="/gestion-documental">Gestión Documental</Link></li>
            <li><Link href="/desarrollo-software">Desarrollo Software</Link></li>
            <li><Link href="/prometeo">Sistema Prometeo</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: EMPRESA */}
        <div className={styles.linkCol}>
          <h3 className={styles.colTitle}>Empresa</h3>
          <ul className={styles.linkList}>
            <li><Link href="/nosotros">Sobre Nosotros</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contacto</h3>
          <p>Bogotá, Colombia</p>
          <a href="mailto:contacto@mgdbitforge.cloud" className={styles.emailLink}>contacto@mgdbitforge.cloud</a>
        </div>

      </div>

      {/* SECCIÓN INFERIOR: Copyright */}
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} MGD Bitforge S.A.S. Todos los derechos reservados.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacidad">Política de Privacidad</Link>
          <Link href="/terminos">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}