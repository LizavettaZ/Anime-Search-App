import React, { memo } from 'react'
import classes from '../style/components/HomeCard.module.scss'
import { Link } from 'react-router-dom'


const HomeCard = ({ anime }) => {
  const { posterImage } = anime.attributes

  return (
    <div className={classes.HomeCard}>
      <div>
        <Link to= {'anime/:' + anime.id}>
          <img src={posterImage.medium} alt="Anime picture"/>
        </Link>
      </div>
    </div>
  )
}

export default memo(HomeCard)
