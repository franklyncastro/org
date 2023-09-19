import '../CSS/Input.css'


const Input = ({title, placeholder}) => {
  return (
    <div className='container'>
      <label  className='label'>{title}</label>
      <input type="text" placeholder={placeholder} className='input'/>
    </div>
  )
}

export default Input
