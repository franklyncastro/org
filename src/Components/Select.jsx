import style from '../CSS/Select.module.css';
import { equipo } from "./data";



const Select = () => {
  return (
    <div className={style.container}>
      <label>Equipo</label>
      <select className={style.select} >
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
