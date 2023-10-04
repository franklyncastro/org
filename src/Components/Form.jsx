import style from "../CSS/Form.module.css";
import Input from "./Input";
import Boton from "./Boton";
import Select from "./Select";
import { useState } from "react";

const Form = ({registerUser}) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

 


  const prevent = (e) => {
    e.preventDefault();

    let datos = {
      nombre,
      puesto,
      foto,
      equipo
    };

    registerUser(datos)
    

    setNombre("");
    setPuesto("");
    setFoto("");
    setEquipo("")

    alert("Datos enviados con exito");
  };

  return (
    <section className={style.container}>
      <form className={style.form} onSubmit={prevent}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <Input
          title="Nombre"
          placeholder="Ingresar nombre..."
          values={nombre}
          updateValue={setNombre}
        />
        <Input
          title="Puesto"
          placeholder="Ingresar puesto..."
          values={puesto}
          updateValue={setPuesto}
        />
        <Input
          title="Foto"
          placeholder="Ingresar link de la url..."
          values={foto}
          updateValue={setFoto}
        />

        <Select values={equipo} updateValue={setEquipo} />

        <Boton title="Crear" />
      </form>
    </section>
  );
};

export default Form;
