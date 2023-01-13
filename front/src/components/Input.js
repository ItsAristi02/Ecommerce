import React from "react";
import {Label, GrupoInput, Error, IconoValidacion } from "./../elements/Formularios";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const Input = () => {
    return(
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="usuario" id='nombre' />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <Error>Lorem ipsum dolor sit amet</Error>
        </div>
    );
}

export default Input;