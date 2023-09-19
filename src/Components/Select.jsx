import React from "react";
import "../CSS/Select.css";

const equipo = [
  "Programación",
  "Front End",
  "Data Science",
  "Devops",
  "UX y Diseño",
  "Móvil",
  "Innovación y  Gestión",
];

// equipo.map((team, index) => {
//   console.log(team, index);
// });

const Select = () => {
  return (
    <div className="container">
      <label>Equipo</label>
      <select className="select">
        <option value="0" selected disabled>
          Seleccione un equipo
        </option>
        
        {/* Map de las opciones a seleccionar */}
        {equipo.map((team, index) => {
          return (
            <option key={index} value={team}>
              {team}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
