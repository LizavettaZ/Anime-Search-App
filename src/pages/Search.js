import React, { Fragment, useContext, useEffect } from 'react'
import classes from '../style/pages/Search.module.scss'
import Header from '../components/UI/Header'
import SearchForm from '../components/UI/SearchForm'
import SearchCard from '../components/SearchCard'
import Alert from '../components/UI/Alert'
import { RequestContext } from '../context/request/requestContect'
import Loader from '../components/UI/Loader'


const Search = () => {
  const { loading, animeList, popularAnime } = useContext(RequestContext)
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
        {loading
          ? <Loader/>
          : <div className={classes.search__list}>
            {animeList.length
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
      </div>
    </Fragment>
  )
}

export default Search
