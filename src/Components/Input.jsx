import style from '../CSS/Input.module.css';

const Input = ({ title, placeholder, values, updateValue }) => {
  const changeInput = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <label className={style.label}>{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={style.input}
        value={values}
        onChange={changeInput}
      />
    </div>
  );
};

export default Input;
