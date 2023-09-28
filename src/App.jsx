import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";
import { team } from "./Components/data";

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
      {team.map((team, index) => {
        return <Equipo key={index} team={team} />;
      })}
      
    </>
  );
}

export default App;
