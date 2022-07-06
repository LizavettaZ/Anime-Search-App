import React from 'react'
import classes from '../style/components/NotFound.module.scss'
import Search from '../img/Search/search.png'

const NotFound = () => {
  return (
    <div className={classes.NotFound}>
      <p>No anime with this name found</p>
      <p>Try again!</p>
      <img src={Search} alt="Girl with loupe"/>
    </div>
  )
}

export default NotFound