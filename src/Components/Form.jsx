import "../CSS/Form.css";
import Input from "./Input";

const Form = () => {
  return (
    <section className="container">
      <form className="form">
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input/>
        <Input/>
        <Input/>
      </form>
    </section>
  );
};

export default Form;
