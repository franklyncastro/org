import { useState } from 'react'
import '../CSS/Input.css'


const Input = ({title, placeholder,values, updateValue}) => {


  const changeInput =(e)=>{
    updateValue(e.target.value)
  }


  return (
    <div className='container'>
      <label  className='label'>{title}</label>
      <input type="text" placeholder={placeholder} className='input' value={values} onChange={changeInput}/>
    </div>
  )
}

export default Input
