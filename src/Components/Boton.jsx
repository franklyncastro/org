import '../CSS/Boton.css'

const Boton = ({title}) => {
  return (
    <div className='container_btn'>
      <button className='btn'>{title}</button>
    </div>
  )
}

export default Boton
