import Link from 'next/link';
import styles from '../legal.module.css'; // Importamos el estilo compartido

export const metadata = {
  title: 'Política de Privacidad | MGD Bitforge',
};

export default function PrivacidadPage() {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Política de Privacidad y Tratamiento de Datos</h1>
          <p className={styles.lastUpdate}>Última actualización: Febrero 2026</p>
        </div>

        <section className={styles.section}>
          <h2>1. Responsable del Tratamiento</h2>
          <p>
            <strong>MGD BITFORGE</strong> (en adelante, "La Empresa"), con domicilio en Bogotá D.C., Colombia, es la responsable del tratamiento de los datos personales recolectados a través de este sitio web.
          </p>
          <p>
            Correo de contacto: <strong>contacto@mgdbitforge.cloud</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Cumplimiento Normativo (Habeas Data)</h2>
          <p>
            Dando cumplimiento a lo dispuesto en la <strong>Ley 1581 de 2012</strong> y su Decreto Reglamentario 1377 de 2013, MGD Bitforge manifiesta que los datos personales que se obtengan por parte del usuario serán tratados de manera confidencial y segura.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Finalidad de la Recolección</h2>
          <p>Los datos solicitados en nuestros formularios (Nombre, Email, Teléfono) serán utilizados exclusivamente para:</p>
          <ul>
            <li>Dar respuesta a sus solicitudes de cotización, diagnóstico o información.</li>
            <li>El envío de propuestas comerciales relacionadas con Gestión Documental o Desarrollo de Software.</li>
            <li>Procesos administrativos internos (facturación, contratos) en caso de convertirse en cliente.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Derechos del Titular (ARCO)</h2>
          <p>
            Como titular de sus datos, usted tiene derecho a Acceder, Rectificar, Cancelar y Oponerse al tratamiento de los mismos. Puede ejercer estos derechos enviando una solicitud escrita al correo electrónico mencionado anteriormente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Seguridad de la Información</h2>
          <p>
            Implementamos medidas de seguridad técnicas (SSL, encriptación) y administrativas para evitar la adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento de su información.
          </p>
        </section>

        <Link href="/" className={styles.backLink}>← Volver al Inicio</Link>

      </div>
    </main>
  );
}