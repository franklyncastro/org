import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";



function App() {
  const [mostrarForm, setMostrarForm] = useState(false);

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  return (
    <>
      <Header />
      {mostrarForm === false ? <div> </div> : <Form />}
      <MiOrg mostrarFormulario={mostrarFormulario} />
      <Equipo/>
    </>
  );
}

export default App;
