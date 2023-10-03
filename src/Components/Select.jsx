import style from "../CSS/Select.module.css";
import { equipo } from "./data";

const Select = ({ updateValue, values }) => {
  const changeSelect = (e) => {
    // console.log(e.target.value)
    updateValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <label>Equipo</label>
      <select className={style.select} onChange={changeSelect} value={values}>
        <option >Seleccione un equipo</option>

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
