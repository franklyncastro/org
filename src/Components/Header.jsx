import logo from "../../public/img/header.png";
import style from '../CSS/Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="img not found" className={style.logo} />
      </header>
    </div>
  );
};

export default Header;
