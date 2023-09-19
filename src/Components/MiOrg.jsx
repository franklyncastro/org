import {useState} from 'react'
import '../CSS/MiOrg.css'


const MiOrg = () => {
    const [change, setChange] = useState(true)

    const changeOnClick =()=>{
        setChange(!change)
    }


  return (
    <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt="icon add" onClick={changeOnClick}/>
      
    </section>
  )
}

export default MiOrg
