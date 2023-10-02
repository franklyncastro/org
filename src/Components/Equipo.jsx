import style from '../CSS/Equipo.module.css'
import Card from './Card';


const equipo = ({team}) => {
  
  return (
    <section className={style.container} style={{backgroundColor: team.colorTwo}}>
      <h3 style={{borderColor: team.colorOne}}>{team.title}</h3>
      <div className={style.team}>
        <Card colorCard={team.colorOne}/>
        <Card colorCard={team.colorOne} />
        <Card colorCard={team.colorOne} />
        <Card colorCard={team.colorOne} />
      </div>
    </section>
  );
};

export default equipo;
