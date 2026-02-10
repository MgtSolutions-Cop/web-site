'use client'; 

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // <--- Importamos esto
import styles from './Contact.module.css';
import { LuMailCheck, LuPhoneForwarded, LuCompass, LuLoader } from "react-icons/lu"; // Agregué LuLoader2

function ContactFormContent() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '', 
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // NUEVO: Estado de carga
  const [errorMessage, setErrorMessage] = useState(''); // NUEVO: Manejo de errores

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    { value: 'documental', label: 'Gestión Documental & Custodia' },
    { value: 'software', label: 'Desarrollo de Software / Apps' },
    { value: 'prometeo', label: 'Sistema Prometeo' },
    { value: 'otro', label: 'Consultoría General' }
  ];

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceOptions.some(opt => opt.value === serviceParam)) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectService = (value: string) => {
    setFormData({ ...formData, service: value });
    setIsDropdownOpen(false);
  };

  const getSelectedLabel = () => {
    const option = serviceOptions.find(opt => opt.value === formData.service);
    return option ? option.label : "Selecciona una opción";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- AQUÍ ESTÁ LA NUEVA LÓGICA DE ENVÍO ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // 1. Activamos carga
    setErrorMessage('');

    try {
      // 2. Enviamos los datos a nuestra API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // 3. Si todo sale bien
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' }); // Limpiamos
      } else {
        // 4. Si hay error
        setErrorMessage('Hubo un problema enviando tu solicitud. Intenta de nuevo.');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Revisa tu internet.');
    } finally {
      setIsLoading(false); // 5. Terminamos carga
    }
  };
  // -------------------------------------------

  return (
    <section className={styles.contactSection} id="contacto">
      <div className={styles.container}>
        
        {/* COLUMNA IZQUIERDA (Igual que antes) */}
        <div className={styles.infoCol}>
          <span className={styles.label}>HABLEMOS</span>
          <h2 className={styles.title}>Empieza tu transformación <span className={styles.redText}>digital</span>.</h2>
          <p className={styles.description}>
            Ya sea para blindar tus documentos o construir tu próximo software, estamos listos.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <h3><LuMailCheck /> Email</h3>
              <p>contacto@mgdbitforge.cloud</p>
            </div>
            <div className={styles.detailItem}>
              <h3><LuCompass/> Ubicación</h3>
              <p>Bogotá D.C., Colombia</p>
            </div>
            <div className={styles.detailItem}>
              <h3><LuPhoneForwarded /> Telefono</h3>
              <p>+57 3132294537</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.formCol}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <h3>¡Mensaje Recibido!</h3>
              <p>Nuestro equipo analizará tu requerimiento y te contactará pronto.</p>
              <button onClick={() => setIsSubmitted(false)} className={styles.resetBtn}>Enviar otro</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Ej. Andrés Pérez" disabled={isLoading}/>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Correo Corporativo</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="nombre@empresa.com" disabled={isLoading}/>
              </div>

              <div className={styles.inputGroup} ref={dropdownRef}>
                <label>¿Qué servicio te interesa?</label>
                <div 
                  className={`${styles.customSelectTrigger} ${isDropdownOpen ? styles.open : ''}`} 
                  onClick={() => !isLoading && setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={!formData.service ? styles.placeholderText : ''}>
                    {getSelectedLabel()}
                  </span>
                  <div className={styles.arrowIcon}>▼</div>
                </div>

                {isDropdownOpen && (
                  <div className={styles.customOptionsList}>
                    {serviceOptions.map((option) => (
                      <div 
                        key={option.value}
                        className={`${styles.customOption} ${formData.service === option.value ? styles.selected : ''}`}
                        onClick={() => handleSelectService(option.value)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Cuéntanos sobre tu proyecto</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Necesito digitalizar un archivo de..." disabled={isLoading}></textarea>
              </div>

              {/* Mensaje de error si falla */}
              {errorMessage && <p style={{color: 'red', marginTop: '10px'}}>{errorMessage}</p>}

              <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                {isLoading ? (
                  <span style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <LuLoader className="spin" /> Enviando...
                  </span>
                ) : (
                  "Enviar Solicitud"
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div style={{padding: '4rem', textAlign:'center', color:'white'}}>Cargando formulario...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}