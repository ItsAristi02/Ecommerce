import React from 'react';
import '../assets/Contact.css'
import {
  Formulario, Input, ContenedorBoton, Boton, MensajeExito, MensajeError
} from '../elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input.js';

const Contact = () => {
  return (
    <section className='SeccionFormulario'>
      <Formulario action="">
        <Input />
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b> Error:</b> Por favor rellene el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBoton>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
        </ContenedorBoton>


      </Formulario>
    </section>
  )
}



export default Contact;