import style from "../CSS/Boton.module.css";

const Boton = ({ title }) => {
  return (
    <div className={style.container_btn}>
      <button className={style.btn}>{title}</button>
    </div>
  );
};

export default Boton;
