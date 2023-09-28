import style from '../CSS/MiOrg.module.css'


const MiOrg = ({mostrarFormulario}) => {
  
  return (
    <section className={style.orgSection}>
        <h3 className={style.title}>Mi organización</h3>
        <img src="/img/add.png" alt="icon add" onClick={mostrarFormulario}/>
    </section>
  )
}

export default MiOrg
