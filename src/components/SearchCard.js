import React from 'react'
import classes from '../style/components/SearchCard.module.scss'
import { Link } from 'react-router-dom'


const SearchCard = ({anime}) => {
  const { averageRating, canonicalTitle, posterImage } = anime.attributes

  return (
    <div className={classes.SearchCard}>
        <div className={classes.card__img}>
          <img src={posterImage.small} alt="Anime picture"/>
          <div className={classes.rating}>{averageRating}</div>
        </div>
      <Link to= {'anime/:' + anime.id}>{canonicalTitle}</Link>
    </div>
  )
}

export default SearchCard
