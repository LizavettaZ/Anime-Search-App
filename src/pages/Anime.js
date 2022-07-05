import React, { Fragment, useContext, useEffect, memo } from 'react'
import classes from '../style/pages/Anime.module.scss'
import Header from '../components/UI/Header'
import Loader from '../components/UI/Loader'
import { RequestContext } from '../context/request/requestContect'
import { useParams } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'


const Anime = () => {
  const { id } = useParams()
  const { getAnime, loading, anime } = useContext(RequestContext)

  useEffect( () => {
    getAnime(id.slice(1))
  },[])

  return (
    <Fragment>
      <Header zIndex={1}/>
      <div className={classes.Anime}>
        {loading
          ? <Loader />
          : <AnimeCard anime={anime}/>
        }
      </div>
    </Fragment>
  )
}

export default memo(Anime)
