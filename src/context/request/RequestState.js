import React, {useReducer} from 'react'
import {RequestContext} from './requestContect'
import {requestReducer} from './requestReducer'
import {CLEAR_ANIME, GET_ANIME, GET_LINKS, GET_POPULAR_ANIME, GET_REPOS, SEARCH_ANIME_LIST, SET_LOADING} from '../types'
import axios from "axios";

const RequestState = ({children}) => {
  const initialState = {
    anime: {},
    popularAnime: [],
    animeList: [],
    links: {},
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(requestReducer, initialState)

  const {animeList, popularAnime, anime, links, loading, repos} = state

  const getPopularAnime = async (limit= 10) => {
    setLoading()
    try{
      const response = await axios.get(`https://kitsu.io/api/edge/trending/anime?limit=${limit}`)

      dispatch({
        type: GET_POPULAR_ANIME,
        payload: response.data.data
      })
    } catch (e) {
      console.log(e)
    }
  }

  const search = async (value) => {
    setLoading()
    try{
      const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${value}`)

      dispatch({
        type: SEARCH_ANIME_LIST,
        payload: response.data.data
      })

      dispatch({
        type: GET_LINKS,
        payload: response.data.links
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getAnime = async (slug) => {
    setLoading()
    try{
      const response = await axios.get(`https://kitsu.io/api/edge/anime/${slug}`)
        .then(r => {
          console.log(r)
        })

      dispatch({
        type: GET_ANIME,
        payload: {}
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getRepos = async (slug) => {
    setLoading()
    try{

      dispatch({
        type: GET_REPOS,
        payload: {}
      })
    } catch (e) {
      console.log(e)
    }
  }

  const clearList = () => dispatch({type: CLEAR_ANIME})

  const setLoading = () => dispatch({type: SET_LOADING})

  return (
    <RequestContext.Provider value={{
      getPopularAnime, search, getAnime, getRepos, clearList, setLoading,
      popularAnime, animeList, anime, links, loading, repos
    }}>
      {children}
    </RequestContext.Provider>
  )
}

export default RequestState