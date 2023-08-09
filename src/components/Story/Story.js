import React from "react";
import "./Story.css";
import { Link } from 'react-router-dom'; 
import schoolPhoto from '../../images/schoolPhoto.png';

function Story() {

  return (
    <section className="story">
      <h1 className="story__title">история<br /><span className="story__title_italic">пополнения в рядах IT</span></h1>
      <img src={schoolPhoto} alt="Фото из старшей школы" className="story__img"></img>
      <div className="story__info">
        <h2 className="story__header">применение алгоритмическому мышлению в совокупности с тягой к творчеству</h2>
        <div className="story__text">
          <p className="story__paragraph">Программирование заинтересовало меня по многим причинам. Впервые я начала изучать программирование в школе, в профильном физико-техническом классе. Язык программирования Python был тем, с чего мы начали.</p>
          <p className="story__paragraph">Я ощущала детский восторг от создания собственных программ и видела, как идеи материализуются в виде рабочего кода (пусть они и были не сложнее калькулятора). Но главное, что меня привлекло — это возможность объединить технические аспекты с творчеством и дизайном, видеть не просто строки в редакторе, но и красивый и функциональный веб-сайт, которым будут пользоваться другие люди. Это был новый уровень творчества в моем понимании. И я хотела идти дальше.</p>
          <p className="story__paragraph">Так я решила пройти курс Практикума, чтобы получить практические навыки веб-разработки. Курс был непростым, но, безусловно, принес мне новые знания и опыт. Я узнала о языках, которые смогу применить для создания интерактивных и интуитивно понятных пользовательских интерфейсов.</p>
          <p className="story__paragraph">По окончании курса, я решила развивать полученные навыки на фрилансе, и до сих пор успешно этим занимаюсь. Я получила возможность работать над разнообразными проектами, от создания email писем до разработки интернет магазина. Каждый новый проект стал для меня возможностью привнести свое видение.</p>
          <Link to="/login" className="story__link">Узнать больше</Link>
        </div>
      </div>
    </section>
  );
}

export default Story;
