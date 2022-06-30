import React, {Fragment} from 'react'
import Header from '../components/UI/Header'
import classes from '../style/Home.module.scss'
import Button from "../components/UI/Button";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const arr = [1, 2, 3, 4]

  return (
    <Fragment>
      <Header zIndex={2}/>
      <div className={classes.Home}>
        <div className={classes.home__content}>
          <div className={classes.content__list}>
            {arr.map((item) => (
              <div key={item}>
                <HomeCard/>
              </div>
              ) )}
          </div>
          <div className={classes.content__btn}>
            <Button/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home