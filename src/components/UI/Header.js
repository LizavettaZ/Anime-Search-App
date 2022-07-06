import React from 'react'
import classes from '../../style/components/Header.module.scss'
import Logo from '../../img/Logo.png'


const Header = ({ zIndex }) => {
  return (
    <div className={classes.Header} style={{ zIndex: zIndex }}>
      <div className={classes.header__img}>
        <img src= {Logo} alt = "logo"/>
      </div>
      <p>ANIMEHUB</p>
    </div>
  )
}

export default Header
