import React, { useCallback, useContext, useState } from 'react'
import classes from '../../style/components/SearchForm.module.scss'
import { AlertContext } from '../../context/alert/alertContext'
import { RequestContext } from '../../context/request/requestContect'

const SearchForm = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const request = useContext(RequestContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }
    request.clearList()

    if (value.trim()) {
      alert.hide()
      request.search(value.trim())
    } else {
      alert.show('Enter Anime name')
    }
  }
  const onChange = useCallback(event => setValue(event.target.value), [])

  return (
    <div className={classes.SearchForm} >
      <input
        type = "text"
        className={classes.search_form__input}
        placeholder="Search Anime"
        value={value}
        onChange={onChange}
        onKeyPress={onSubmit}
      />
    </div>
  )
}

export default SearchForm
