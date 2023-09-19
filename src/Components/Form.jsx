import "../CSS/Form.css";
import Input from "./Input";
import Boton from "./Boton";
import Select from "./Select";

const Form = () => {

  const prevent = (e) =>{
    e.preventDefault();
  }
  
  return (
    <section className="container">
      <form className="form" onSubmit={prevent}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input title='Nombre' placeholder='Ingresar nombre...'/>
        <Input title='Puesto' placeholder='Ingresar puesto...'/>
        <Input title='Foto' placeholder='Ingresar link de la url...'/>
        <Select/>
        <Boton title='Crear'/>
      </form>
    </section>
  );
};

export default Form;
