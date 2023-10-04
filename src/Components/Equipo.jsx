import style from "../CSS/Equipo.module.css";
import Card from "./Card";

const equipo = ({ team, Users }) => {

  return (
    <section
      className={style.container}
      style={{ backgroundColor: team.colorTwo }}
    >
      <h3 style={{ borderColor: team.colorOne }}>{team.title}</h3>
      <div className={style.team}>
        {Users.map((u, i) => (
          <Card key={i} colorCard={team.colorOne} Users={u}/>
        ))}
      </div>
    </section>
  );
};

export default equipo;
