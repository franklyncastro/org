import style from "../CSS/Card.module.css";
import '../CSS/icons/icons.css'

const Card = ({ colorCard, Users, deleteUser }) => {
  const { nombre, puesto, foto } = Users;  

  console.log(deleteUser)


  return (
    <div className={style.container}>

      <span onClick={deleteUser}><i className="fa-solid fa-circle-xmark"></i></span>
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
