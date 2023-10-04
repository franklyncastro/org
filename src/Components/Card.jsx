import style from "../CSS/Card.module.css";

const Card = ({ colorCard, Users }) => {
  const { nombre, puesto, foto } = Users;

  return (
    <div className={style.container}>
      <div className={style.card} style={{ backgroundColor: colorCard }}>
        <img src={foto} alt='Img not found' />
      </div>
      <div className={style.info}>
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};

export default Card;
