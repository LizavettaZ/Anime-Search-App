import {SEARCH_ANIME_LIST, GET_ANIME, GET_REPOS, CLEAR_ANIME, SET_LOADING, GET_LINKS, GET_POPULAR_ANIME} from '../types'
const handlers = {
  [SEARCH_ANIME_LIST]: (state, {payload}) => ({...state, animeList: payload, loading: false}),
  [GET_POPULAR_ANIME]: (state, {payload}) => ({...state, popularAnime: payload, loading: false}),
  [GET_ANIME]: (state, {payload}) => ({...state, anime: payload, loading: false}),
  [GET_LINKS]: (state, {payload}) => ({...state, links: payload, loading: false}),
  [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
  [CLEAR_ANIME]: (state) => ({...state, animeList: []}),
  [SET_LOADING]: (state) => ({...state,  loading: true}),
  DEFAULT: state => state
}

export const requestReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}