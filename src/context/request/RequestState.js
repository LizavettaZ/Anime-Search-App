import React, { useReducer } from 'react'
import { RequestContext } from './requestContect'
import { requestReducer } from './requestReducer'
import { CLEAR_ANIME, GET_ANIME, GET_LINKS, GET_POPULAR_ANIME, SEARCH_ANIME_LIST, SET_LOADING } from '../types'
import axios from 'axios'

const RequestState = ({ children }) => {
  const initialState = {
    anime: {},
    popularAnime: [],
    animeList: [],
    links: {},
    loading: false
  }
  const [state, dispatch] = useReducer(requestReducer, initialState)

  const { animeList, popularAnime, anime, links, loading } = state

  const getPopularAnime = async (limit= 10) => {
    try{
      setLoading(true)
      const response = await axios.get(`https://kitsu.io/api/edge/trending/anime?limit=${limit}`)

      dispatch({
        type: GET_POPULAR_ANIME,
        payload: response.data.data
      })
      setLoading(false)

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const search = async (value) => {
    try{
      setLoading(true)
      const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${value}`)

      dispatch({
        type: SEARCH_ANIME_LIST,
        payload: response.data.data
      })

      dispatch({
        type: GET_LINKS,
        payload: response.data.links
      })
      setLoading(false)

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const getAnime = async (id) => {
    try{
      setLoading(true)
      const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}`)

      dispatch({
        type: GET_ANIME,
        payload: response.data.data.attributes
      })
      setLoading(false)

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const clearList = () => dispatch({ type: CLEAR_ANIME })

  const setLoading = (payload) => dispatch({ type: SET_LOADING, payload: payload })

  return (
    <RequestContext.Provider value={{
      getPopularAnime, search, getAnime, clearList, setLoading,
      popularAnime, animeList, anime, links, loading
    }}>
      {children}
    </RequestContext.Provider>
  )
}

export default RequestState
