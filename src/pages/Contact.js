import React, { memo } from 'react'
import classes from '../style/pages/Contact.module.scss'
import Instagram from '../img/icons/Instagram.svg'
import Git from '../img/icons/Git.svg'
import LinkedIn from '../img/icons/LinkedIn.svg'
import phone from '../img/About/phone.png'


const Contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.contact__img}>
        <img src={phone} alt="logo"/>
      </div>
      <div className={classes.contact__description}>
        <div className={classes.description__title}>
            ANIMEHUB
          </div>
        <div className={classes.description__text}>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className={classes.description__email}>
          <a href="mailto:us@animehub.com" rel="noreferrer">
            us@animehub.com
          </a>
        </div>
        <div className={classes.description__links}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://github.com/LizavettaZ" target="_blank" rel="noreferrer">
            <img src={Git} alt="instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default memo(Contact)
