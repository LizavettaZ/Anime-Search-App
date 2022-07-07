import React, { memo } from 'react'
import classes from '../style/pages/About.module.scss'
import phone from '../img/About/phone.png'
import Button from '../components/UI/Button'


const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.about__title}>
        ANIMEHUB
      </div>
      <div className={classes.about__content}>
        <div className={classes.content__description}>
          <div className={classes.description__text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
            <p>when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className={classes.description__btn}>
            <Button/>
          </div>
        </div>
        <div className={classes.content__img}>
          <img src={phone} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default memo(About)
