"use client";  // Marca este componente como Client Component

import React from 'react';
import '../style/loginPopup.css';  // Asegúrate de tener un archivo CSS separado para los estilos del popup

export default function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h2 className='title2'>Crear</h2>
        <button className="login-button">Registrarse</button>
        <button className="login-button">Iniciar con Email</button>
        <button className="login-button">Iniciar con Facebook</button>
        <button className="close-popup" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
