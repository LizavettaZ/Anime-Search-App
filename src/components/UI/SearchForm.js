import React, {useContext, useState} from 'react'
import classes from '../../style/components/SearchForm.module.scss'
import {AlertContext} from "../../context/alert/alertContext";


const SearchForm = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }
    if (value.trim()){
      console.log(value)
    } else {
      show('Enter Anime name')
    }
  }

  return (
    <div className={classes.SearchForm} >
      <input
        type = "text"
        className={classes.search_form__input}
        placeholder="Search Anime"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}

export default SearchForm