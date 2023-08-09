import React from "react";
import "./Main.css";
import portrait from '../../images/portrait.png';

function Main() {

  return (
    <section className="main">
      <p className="main__quote">Я наслаждаюсь процессом создания чего-то нового,</p>
      <img src={portrait} alt="Одно из последних фото" className="main__img"></img>
      <div className="main__right-section">
        <p className="main__quote main__quote_right">воплощая свои идеи в код и видя, как они работают в реальном мире.</p>
        <p className="main__caption">— Гааг Анастасия</p>
      </div>
    </section>
  );
}

export default Main;
