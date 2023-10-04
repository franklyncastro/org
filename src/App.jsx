import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";
import { team } from "./Components/data";
import Footer from "./Components/Footer";

function App() {
  const [mostrarForm, setMostrarForm] = useState(false);


  const [Users, setUsers] = useState([
    {
      nombre: "Franklyn Yawerlyn Castro",
      puesto: "Desarrollador",
      foto: "https://github.com/franklyncastro.png",
      equipo: "Programación",
    },
  ]);

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const registerUser = (user) => {
    setUsers([...Users, user]);
  };

  const deleteUser =(id)=>{
      
  }
  
  return (
    <>
      <Header />

      {/* {mostrarForm === false ? <div> </div> : <Form registerUser={registerUser}/>} */}

      {mostrarForm && <Form registerUser={registerUser} />}

      <MiOrg mostrarFormulario={mostrarFormulario} />

      {team.map((team, index) => (
        <Equipo
          key={index}
          team={team}
          Users={Users.filter((usr) => usr.equipo === team.title)}
          deleteUser={deleteUser}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
