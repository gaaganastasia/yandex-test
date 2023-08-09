import React from "react";
import "./Feedback.css";

function Feedback(props) {
  const [formValue, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);    
  };

  const resetForm = React.useCallback(
    (newValue = '') => {
      setValue(newValue);
    },
    [setValue]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (formValue) {
      props.handleSendFeedback(formValue, resetForm);
    }
  }

  return (
    <section className="feedback">
      <h2 className="feedback__title">остались<br /><span className="feedback__title_italic">вопросы или предложения?</span></h2>
      <form className="feedback__form" 
        method="post"
        action="index.html"
        name="application"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>

        <textarea name="feedback"
          type="text"
          minLength="2"
          maxLength="500"
          id="feedback"
          rows="11"
          placeholder='Оставьте обратную связь'
          className="feedback__input"
          required
          value={formValue || ''}
          onChange={handleChange}></textarea>

        <span className={`feedback__error ${props.isSuccess !== 2 && 'feedback__error_visible'} ${props.isSuccess === 1 && 'feedback__error_success'}`}>{props.isSuccess === 1 ? 'Ваш ответ отправлен' : 'Произошла ошибка, попробуйте позже'}</span>
        <button disabled={!formValue || formValue.length < 2 || props.loading} type="submit" className="feedback__submit">Отправить</button>
      </form>
    </section>
  );
}

export default Feedback;
