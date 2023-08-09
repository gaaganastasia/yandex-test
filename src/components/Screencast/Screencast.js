import React from "react";
import "./Screencast.css";

function Screencast() {

  return (
    <section className="screencast">
      <h1 className="screencast__title">название<br /><span className="screencast__title_italic">любой функции CSS</span></h1>
      <div className="screencast__content">
        <iframe width="660" height="360" src="https://www.youtube.com/embed/EPgNcBxfJv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="screencast__links">
          <a href="https://github.com/gaaganastasia/yandex-test" target="_blank" rel="noreferrer" className="screencast__link screencast__link_dark">Фронтенд</a>
          <a href="https://github.com/gaaganastasia/yandex-test-api" target="_blank" rel="noreferrer" className="screencast__link screencast__link_light">Бэкенд</a>
        </div>
      </div>
    </section>
  );
}

export default Screencast;
