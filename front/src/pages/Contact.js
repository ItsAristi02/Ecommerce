import React, { useState } from 'react';
import '../assets/Contact.css'
import {
  Formulario, ContenedorBoton, Boton, MensajeExito, MensajeError
} from '../elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputComponent from '../components/Input.js';

const Contact = () => {

  const[nombre, cambiarNombre] = useState({campo: '', valido: null });
  const[formularioValido, cambiarFormularioValido] = useState(null);
  
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(nombre.valido === 'true'){
      cambiarFormularioValido(true);
      cambiarNombre({campo: '', valido: null})
    } else{
      cambiarFormularioValido(false);
    }
  }

  
  return (
    <section className='SeccionFormulario'>
      <Formulario action="" onSubmit={onSubmit}>
        <InputComponent
        estado={nombre}
        cambiarEstado={cambiarNombre}
        tipo="text" 
        label="Nombre"
        placeholder="Didier Galvis"
        name="nombre"
        error="Campo Incorrecto"
        expresionRegular={expresiones.nombre}
        />
        
        
        
        
        {!formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b> Error:</b> Por favor rellene el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBoton>
          <Boton type="submit">Enviar</Boton>
        { formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBoton>


      </Formulario>
    </section>
  )
}



export default Contact;