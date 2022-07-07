import React, { memo, useContext } from 'react'
import classes from '../../style/components/Alert.module.scss'
import { AlertContext } from '../../context/alert/alertContext'

const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert) return

  return (
    <div
      className={classes.Alert}
      role="alert">
      {alert.text}
      <button type="button" className= {classes.btnClose} aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default memo(Alert)
