import { SEARCH_ANIME_LIST, GET_ANIME, CLEAR_ANIME, SET_LOADING, GET_LINKS, GET_POPULAR_ANIME,
  GET_ANIME_MORE, NOT_FOUND } from '../types'


const handlers = {
  [SEARCH_ANIME_LIST]: (state, {payload}) => ({ ...state, animeList: payload }),
  [GET_ANIME_MORE]: (state, {payload}) => ({ ...state, animeList: payload }),
  [GET_POPULAR_ANIME]: (state, {payload}) => ({ ...state, popularAnime: payload }),
  [GET_ANIME]: (state, {payload}) => ({ ...state, anime: payload }),
  [GET_LINKS]: (state, {payload}) => ({ ...state, links: payload }),
  [CLEAR_ANIME]: (state) => ({ ...state, animeList: [] }),
  [SET_LOADING]: (state, {payload}) => ({ ...state,  loading: payload }),
  [NOT_FOUND]: (state, {payload}) => ({ ...state, notFound: payload }),
  DEFAULT: state => state
}

export const requestReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
