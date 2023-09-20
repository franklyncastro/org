import '../CSS/MiOrg.css'


const MiOrg = ({mostrarFormulario}) => {
  
  return (
    <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt="icon add" onClick={mostrarFormulario}/>
    </section>
  )
}

export default MiOrg
