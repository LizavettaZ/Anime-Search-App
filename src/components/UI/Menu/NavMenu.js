import React from 'react'
import classes from '../../../style/Menu.module.scss'
import {NavLink} from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className={classes.NavMenu}>
      <ul className="NavMenu_list">
        <li className="list__item">
          <NavLink to="/" className="list__link"> Home </NavLink>
        </li>
        <p></p>
        <li className="list__item">
          <NavLink to= "/about" className="list__link"> About </NavLink>
        </li>
        <p></p>
        <li className="list__item">
          <NavLink to = "/contact" className="list__link"> Contact us </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu