import React from "react";
import "./Header.css";
import { Link, useLocation } from 'react-router-dom'; 

function Header(props) {
  let location = useLocation();

  return (
    <header className="header">
      {
        location.pathname === '/nice-to-meet-you'
        ?
        <button onClick={props.handleLogOut} type="button" className="header__link">Выйти</button>
        :
        <Link to="/login" className="header__link">Войти</Link>
      }
    </header>
  );
}

export default Header;
