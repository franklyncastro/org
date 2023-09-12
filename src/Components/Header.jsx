import logo from '../../public/img/header.png'
import '../CSS/header.css'



const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="img not found" className='logo' />
    </header>
  )
}

export default Header
