import style from '../CSS/Equipo.module.css'


const equipo = ({team}) => {
  return (
    <section className={style.container}>
      <h3>{team.title}</h3>
      <div className={style.team}>

      </div>
    </section>
  );
};

export default equipo;
