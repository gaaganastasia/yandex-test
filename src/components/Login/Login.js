import React from "react";
import "./Login.css";

function Login(props) {
  const [formValues, setFormValues] = React.useState({});
  const [radio, setRadio] = React.useState('войти');

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({ ...formValues, [name]: value });    
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
    setFormValues({});
  }

  const handleChangeRadio = (e) => {
    handleRadioChange(e);
  }

  const resetForm = React.useCallback(
    (newValues = {}) => {
      setFormValues(newValues);
    },
    [setFormValues]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (formValues.loginMail && formValues.loginPassword) {
      props.handleLogin(formValues.loginMail, formValues.loginPassword, resetForm);
    }

    if (formValues.signupMail && formValues.signupPassword) {
      props.handleSignUp(formValues.signupMail, formValues.signupPassword, resetForm);
    }
  }

  return (
    <section className="login">
      <h1 className="login__header">аккаунт</h1>
      <form className="login__form"
        method="post"
        action="index.html"
        name="application"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        
        <div className="login__radio-btns">
          <label className={`login__radio-btn ${radio === 'войти' && 'login__radio-btn_checked'}`}>
            <input type="radio" name="purpose" value="войти" onChange={handleChangeRadio} checked={radio === 'войти'} className='login__radio-btn-input'></input>
            войти
          </label>
          <label className={`login__radio-btn ${radio === 'зарегистрироваться' && 'login__radio-btn_checked'}`}>
            <input type="radio" name="purpose" value="зарегистрироваться" checked={radio === 'зарегистрироваться'} onChange={handleChangeRadio} className="login__radio-btn-input"></input>
            зарегистрироваться
          </label>
        </div>
        <div className="login__fields">
          {
            radio === 'войти'
            ?
            <>
              <input
                name="loginMail"
                type="text"
                minLength="2"
                maxLength="100"
                placeholder='почта'
                className="login__field-input"
                required
                onChange={handleChange}
                value={formValues.loginMail || ''}
              ></input>
              <input
                name="loginPassword"
                type="password"
                minLength="8"
                maxLength="100"
                placeholder='пароль'
                className="login__field-input"
                required
                onChange={handleChange}
                value={formValues.loginPassword || ''}
              ></input>
            </>
            :
            <>
              <input
                name="signupMail"
                type="text"
                minLength="2"
                maxLength="100"
                placeholder='почта'
                className="login__field-input"
                required
                onChange={handleChange}
                value={formValues.signupMail || ''}
              ></input>
              <input
                name="signupPassword"
                type="password"
                minLength="8"
                maxLength="100"
                placeholder='пароль'
                className="login__field-input"
                required
                onChange={handleChange}
                value={formValues.signupPassword || ''}
              ></input>
            </>
          }
        </div>
        <span className={`login__error ${props.isError && 'login__error_visible'}`}>{props.error}</span>
        <button disabled={props.loading || (radio === 'войти' && !(formValues.loginMail && formValues.loginPassword && formValues.loginMail.length > 1 && formValues.loginPassword.length > 7)) || (radio === 'зарегистрироваться' && !(formValues.signupMail && formValues.signupPassword && formValues.signupMail.length > 1 && formValues.signupPassword.length > 7))} type="submit" className="login__submit">{radio === 'войти' ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
    </section>
  );
}

export default Login;
