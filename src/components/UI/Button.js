import React from 'react'
import classes from '../../style/components/Button.module.scss'
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    <div className={classes.Button}>
      <NavLink to="/Search" className={classes.button__link}>Get Started</NavLink>
    </div>
  )
}

export default Button
