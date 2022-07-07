import React, { useState, memo} from 'react'
import classes from '../style/components/AnimeCard.module.scss'
import { Link } from 'react-router-dom'


const AnimeCard = ({ anime }) => {
  const {canonicalTitle, titles, ageRatingGuide, averageRating, status, coverImage, posterImage, description, endDate,
    episodeCount, episodeLength, startDate, youtubeVideoId, popularityRank} = anime

  const details = [
    {'Age rank': ageRatingGuide},
    {'User rank': averageRating + ' %'},
    {'Popularity rank': popularityRank},
    {'Start date': startDate},
    {'End date': endDate},
    {'Number of episodes': episodeCount},
    {'Episode length': episodeLength + ' min'}
    ]

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(44, 44, 44, 0.8) 0%, rgba(44, 44, 44, 0.8) 0%), url(${coverImage && coverImage.original})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: 'cover',
  }

  const [showMore, setShowMore] = useState(false)

  return (
    <div className={classes.anime_page}>
      <Link to="/search" className={classes.page__link}>&#9029; Back</Link>
      <div className={classes.page__content}>
        <div className={classes.content__img}>
          {posterImage && <img src={posterImage.large} alt="Cover anime"/>}
        </div>
        <div className={classes.content__description} style={style}>
          <div className={classes.description__title}>
            {canonicalTitle && <span>{canonicalTitle + ' '}</span>}
            {titles && <span>({titles.ja_jp})</span>}
          </div>
          {description && <div className={classes.description__text}>
            <div>
              {showMore
                ? description
                : description.substring(0, 300) + '...'
              }
            </div>
            <button className={classes.text__btn} onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>}
          <div className={classes.description__status}>
            {status && <p>Status: <strong>{status}</strong> </p>}
          </div>
          <div className={classes.description__video}>
            {youtubeVideoId && <iframe
              src={`https://youtube.com/embed/${youtubeVideoId}`}
              title={canonicalTitle}
            >{canonicalTitle}</iframe>}
          </div>
        </div>
        <div className={classes.content__details}>
          <div className={classes.details__title}>Anime Details</div>
          <div className={classes.details__list}>
            {details.map((detail, index) => {
              return (
                detail &&
                <li className={classes.list__item} key={detail+index}>
                  <strong>{Object.keys(detail)}</strong><span>{Object.values(detail)}</span>
                </li>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AnimeCard)
