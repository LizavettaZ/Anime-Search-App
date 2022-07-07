import React, {Fragment, useCallback, useState} from 'react'
import classes from '../../../style/components/Menu.module.scss'
import { NavLink } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'


const NavMenu = () => {
  const [menuActive, setMenuActive] = useState(false)

  const cls = [
    classes.NavMenu_list,
    menuActive ? classes.active : null
  ]

  const onClick = useCallback(() => setMenuActive(false), [])

  return (
    <Fragment>
      <nav className={classes.NavMenu}>
        <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
        <ul className={cls.join(' ')} onClick={onClick}>
          <li className={classes.list__item}>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink to= "/about"> About </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink to = "/contact"> Contact us </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default NavMenu
