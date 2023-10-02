import style from "../CSS/Card.module.css";

const Card = ({colorCard}) => {

  return (
    <div className={style.container}>
      <div className={style.card} style={{backgroundColor: colorCard}}>
        <img src="https://github.com/franklyncastro.png" alt="img not found" />
      </div>
      <div className={style.info}>
        <h4>Franklyn Castro</h4>
        <h5>Instructor</h5>
        <p>Desarrollador de software e instructor</p>
      </div>
    </div>
  );
};

export default Card;
