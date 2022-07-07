import React, { Fragment, memo, useContext, useEffect } from 'react'
import classes from '../style/pages/Search.module.scss'
import Header from '../components/UI/Header'
import SearchForm from '../components/UI/SearchForm'
import SearchCard from '../components/SearchCard'
import Alert from '../components/UI/Alert'
import { RequestContext } from '../context/request/requestContect'
import Loader from '../components/UI/Loader'
import NotFound from '../components/NotFound'
import ButtonGetMore from '../components/ButtonGetMore'


const Search = () => {
  const { loading, animeList, popularAnime, notFound } = useContext(RequestContext)
  const request = useContext(RequestContext)

    useEffect(() => {
      request.getPopularAnime()
    }, [])

  return (
    <Fragment>
      <Header zIndex={1}/>
      <div className={classes.Search}>
        <Alert/>
        <SearchForm/>
        { loading
          ? <Loader/>
          : notFound
            ? <NotFound/>
            :<div className={classes.search__list}>
            { animeList.length
              ? animeList.map((anime) => (
                <div key={anime.id}>
                  <SearchCard anime={anime}/>
                </div>
              ))
              : popularAnime.map((anime) => (
                <div key={anime.id}>
                  <SearchCard anime={anime}/>
                </div>
              ))
            }
          </div>
        }
        { animeList.length > 9 && <ButtonGetMore/> }
      </div>
    </Fragment>
  )
}

export default memo(Search)
