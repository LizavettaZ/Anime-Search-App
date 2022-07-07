import React, { Fragment, memo, useContext, useEffect } from 'react'
import Header from '../components/UI/Header'
import classes from '../style/pages/Home.module.scss'
import Button from '../components/UI/Button'
import HomeCard from '../components/HomeCard'
import { RequestContext } from '../context/request/requestContect'
import Loader from '../components/UI/Loader'


const Home = () => {
  const { loading, popularAnime } = useContext(RequestContext)
  const request = useContext(RequestContext)

  useEffect(() => {
    request.getPopularAnime(4)
  }, [])

  return (
    <Fragment>
      <Header zIndex={2}/>
      <div className={classes.Home}>
        <div className={classes.home__content}>
          <div className={classes.content__list}>
            { loading
              ? <Loader/>
              : popularAnime.map((anime) => (
                <div key={anime.id}>
                  <HomeCard anime={anime}/>
                </div>
              ))
            }
          </div>
          <div className={classes.content__btn}>
            <Button/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default memo(Home)
