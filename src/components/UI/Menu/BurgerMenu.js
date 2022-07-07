import React, {useCallback} from 'react'
import classes from '../../../style/components/Menu.module.scss'

const BurgerMenu = ({ menuActive, setMenuActive }) => {

  const onClick = useCallback(() => setMenuActive(!menuActive), [menuActive])

  return (
    <div className={classes.BurgerMenu} onClick={onClick}>
      <span/>
    </div>
  )
}

export default BurgerMenu