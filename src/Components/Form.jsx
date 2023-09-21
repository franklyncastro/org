import "../CSS/Form.css";
import Input from "./Input";
import Boton from "./Boton";
import Select from "./Select";
import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");


  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container">
      <form className="form" onSubmit={prevent}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <Input title="Nombre" placeholder="Ingresar nombre..." values={nombre} updateValue={setNombre}/>
        <Input title="Puesto" placeholder="Ingresar puesto..." values={puesto} updateValue={setPuesto}/>
        <Input title="Foto" placeholder="Ingresar link de la url..." values={foto} updateValue={setFoto}/>

        <Select />

        <Boton title="Crear" />
      </form>
    </section>
  );
};

export default Form;
