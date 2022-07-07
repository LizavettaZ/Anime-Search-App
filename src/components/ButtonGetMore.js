import React, { Fragment, useContext, memo } from 'react'
import classes from '../style/components/ButtonGetMore.module.scss'
import { RequestContext } from '../context/request/requestContect'


const ButtonGetMore = () => {
  const { animeList, links } = useContext(RequestContext)
  const request = useContext(RequestContext)

  return (
    <Fragment>
      { !!animeList.length  &&  !!Object.keys(links).length &&
        <div className={classes.ButtonGetMore}>
          { 'next' in links
            ? <button onClick={() => request.getMoreAnime()}>Show more anime</button>
            : animeList.length > 10 && <button onClick={() => window.scrollTo(0, 0)}> Up </button>
          }
        </div>
      }
    </Fragment>
  )
}

export default memo(ButtonGetMore)
