import React from "react";
import { Label, GrupoInput, Input, Error, IconoValidacion } from "./../elements/Formularios";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({ estado, cambiarEstado, tipo, label, placeholder, name, error, expresionRegular }) => {

  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  }

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
      } else {
        cambiarEstado({ ...estado, valido: 'false' });
      }
    }

  }
  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />

        <IconoValidacion 
        icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle }
        valido={estado.valido}

        />
      </GrupoInput>
      <Error valido={estado.valido}>{error}</Error>
    </div>
  );
}

export default InputComponent;