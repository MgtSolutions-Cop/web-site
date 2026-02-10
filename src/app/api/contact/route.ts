// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. Desempaquetamos los datos que vienen del formulario
    const data = await request.json();
    const { name, email, service, message } = data;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    // 2. Configuramos el "Cartero" (Transporter)
    // Aquí le decimos a Next.js cómo conectarse a tu VPS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true para puerto 465, false para otros
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3. DISEÑO DEL CORREO PARA TI (ADMIN)
    // Este es el correo que te llega a ti avisándote del nuevo lead
    const mailOptionsAdmin = {
      from: `"Web MGD Bitforge" <${process.env.SMTP_USER}>`, // Remitente
      to: process.env.SMTP_USER, // Destinatario (Tú mismo)
      subject: `🔥 Nuevo Lead: ${service?.toUpperCase() || 'GENERAL'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #9e1616;">Nueva Solicitud de Contacto</h2>
          <p>Has recibido un mensaje desde el formulario web.</p>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Servicio de interés:</strong> ${service}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #9e1616;">
            ${message}
          </blockquote>
        </div>
      `,
    };

    // 4. DISEÑO DEL CORREO PARA EL CLIENTE (CONFIRMACIÓN)
    // Este le llega al usuario para que sepa que recibimos su mensaje
    const mailOptionsUser = {
      from: `"MGD Bitforge" <${process.env.SMTP_USER}>`,
      to: email, // Le respondemos al correo que puso en el formulario
      subject: 'Hemos recibido tu solicitud - MGD Bitforge',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #000; padding: 20px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">MGD BITFORGE</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd;">
            <h2 style="color: #9e1616;">Hola ${name},</h2>
            <p>Gracias por contactarnos. Hemos recibido tu solicitud correctamente.</p>
            <p>Nuestro equipo de <strong>${service === 'software' ? 'Desarrollo' : 'Gestión Documental'}</strong> analizará tu requerimiento y te responderemos en breve.</p>
            <br/>
            <p>Atentamente,</p>
            <p><strong>El equipo de MGD Bitforge</strong></p>
            <a href="https://mgdbitforge.cloud" style="color: #9e1616; text-decoration: none;">www.mgdbitforge.cloud</a>
          </div>
        </div>
      `,
    };

    
    // 5. ENVIAR LOS CORREOS
    // Usamos Promise.all para enviarlos al tiempo y no esperar uno por uno
    await Promise.all([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsUser),
    ]);

    return NextResponse.json({ success: true, message: 'Correos enviados' });

  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ success: false, error: 'Error en el servidor de correo' }, { status: 500 });
  }
}   