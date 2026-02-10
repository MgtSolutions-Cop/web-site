'use client'; 

import { useState } from 'react';
import styles from "./Navbar.module.css"; // Asegúrate de que la ruta sea correcta
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* BARRA FLOTANTE PRINCIPAL */}
      <nav className={styles.navWrapper}>
        
        {/* ISLA 1: LOGO (AHORA CLICKEABLE) */}
        <div className={styles.pillContainer}>
          {/* Envolvemos en Link para ir al inicio */}
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
             <div className={styles.logo}>MGD BITFORGE</div>
          </Link>
        </div>

        {/* ISLA 2: MENU CENTRAL (Desktop) */}
        <ul className={styles.navPill}>
          <li><Link href="/">Inicio</Link></li>
          {/* Eliminé "Servicios" porque ya está detallado en los otros links, 
              pero si lo quieres mantener, descomenta la línea de abajo */}
          {/* <li><Link href="/servicios">Servicios</Link></li> */}
          <li><Link href="/gestion-documental">Gestión Documental</Link></li>
          <li><Link href="/desarrollo-software">Software</Link></li>
          {/* Prometeo ahora lleva a la sección específica */}
          <li><Link href="/desarrollo-software">Prometeo</Link></li>
        </ul>

        {/* ISLA 3: BOTÓN + MENU HAMBURGUESA */}
        <div className={styles.rightPillContainer}>
          
          {/* BOTÓN CONTACTARME INTELIGENTE */}
          {/* Lleva al ID #contacto en la home */}
          <Link href="/#contacto" className={styles.ctaPill}>
            Contactarme
          </Link>

          {/* Botón Hamburguesa (Solo móvil) */}
          <button 
            className={styles.hamburger} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              // Icono X
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              // Icono Hamburguesa
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE MÓVIL (Overlay) */}
      <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link href="/gestion-documental" onClick={closeMenu}>Gestión Documental</Link></li>
          <li><Link href="/desarrollo-software" onClick={closeMenu}>Software</Link></li>
          <li><Link href="/desarrollo-software" onClick={closeMenu}>Prometeo</Link></li>
          {/* Contacto también en el menú móvil para fácil acceso */}
          <li><Link href="/#contacto" onClick={closeMenu} className={styles.mobileCta}>Contactarme</Link></li>
        </ul>
      </div>
    </>
  );
}