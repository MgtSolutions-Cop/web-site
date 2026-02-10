import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Términos y Condiciones | MGD Bitforge',
};

export default function TerminosPage() {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Términos y Condiciones de Uso</h1>
          <p className={styles.lastUpdate}>Última actualización: Febrero 2026</p>
        </div>

        <section className={styles.section}>
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de <strong>MGD BITFORGE</strong>, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos no utilizar nuestros servicios.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido presente en este sitio, incluyendo pero no limitado a: código fuente, logotipos, textos, gráficos y software (especialmente la marca y sistema <strong>PROMETEO</strong>), es propiedad exclusiva de MGD BITFORGE y está protegido por las leyes de derechos de autor de Colombia y tratados internacionales.
          </p>
          <p>
            Está prohibida la reproducción, ingeniería inversa o explotación comercial de nuestro software sin autorización escrita.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Uso de los Servicios</h2>
          <p>
            Nuestros servicios de Gestión Documental y Desarrollo de Software se rigen por contratos de prestación de servicios específicos que se firman con cada cliente. La información contenida en este sitio web es de carácter informativo y comercial.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Limitación de Responsabilidad</h2>
          <p>
            MGD BITFORGE no se hace responsable por daños directos o indirectos que puedan surgir del uso o la imposibilidad de uso de este sitio web. Aunque nos esforzamos por mantener la información actualizada, no garantizamos que el sitio esté libre de errores o interrupciones.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Bogotá D.C.
          </p>
        </section>

        <Link href="/" className={styles.backLink}>← Volver al Inicio</Link>

      </div>
    </main>
  );
}