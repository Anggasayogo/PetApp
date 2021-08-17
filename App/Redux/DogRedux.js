import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  dogListRequest: ['data'],
  dogListSuccess: ['data'],
  dogListFailure: ['error'],

  subDogRequest: ['data'],
  subDogSuccess: ['data'],
  subDogFailure: ['error'],

  subDogImageRequest: ['data'],
  subDogImageSuccess: ['data'],
  subDogImageFailure: ['error'],
})

export const DogTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  dogList: { data: [], fetching: false, error: null },
  subDog: { data: [], fetching: false, error: null },
  subDogImage: { data: [], fetching: false, error: null }
})

/* ------------- Selectors ------------- */
export const DogSelectors = {
  getData: state => state.dog.dogList
}

/* ------------- Reducers ------------- */
export const dogListRequest = (state, { data }) =>
  state.merge({ ...state, dogList: { ...state.dogList, fetching: true, error: null } })
export const dogListSuccess = (state, { data }) =>
  state.merge({ ...state, dogList: { ...state.dogList, data, fetching: false, error: null } })
export const dogListFailure = (state, { error }) =>
  state.merge({ ...state, dogList: { ...state.dogList, fetching: false, error } })

export const subDogRequest = (state, { data }) =>
  state.merge({ ...state, subDog: { ...state.subDog, fetching: true, error: null } })
export const subDogSuccess = (state, { data }) =>
  state.merge({ ...state, subDog: { ...state.subDog, data, fetching: false, error: null } })
export const subDogFailure = (state, { error }) =>
  state.merge({ ...state, subDog: { ...state.subDog, fetching: false, error } })

export const subDogImageRequest = (state, { data }) =>
  state.merge({ ...state, subDogImage: { ...state.subDogImage, fetching: true, error: null } })
export const subDogImageSuccess = (state, { data }) =>
  state.merge({ ...state, subDogImage: { ...state.subDogImage, data, fetching: false, error: null } })
export const subDogImageFailure = (state, { error }) =>
  state.merge({ ...state, subDogImage: { ...state.subDogImage, fetching: false, error } })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DOG_LIST_REQUEST]: dogListRequest,
  [Types.DOG_LIST_SUCCESS]: dogListSuccess,
  [Types.DOG_LIST_FAILURE]: dogListFailure,

  [Types.SUB_DOG_REQUEST]: subDogRequest,
  [Types.SUB_DOG_SUCCESS]: subDogSuccess,
  [Types.SUB_DOG_FAILURE]: subDogFailure,

  [Types.SUB_DOG_IMAGE_REQUEST]: subDogImageRequest,
  [Types.SUB_DOG_IMAGE_SUCCESS]: subDogImageSuccess,
  [Types.SUB_DOG_IMAGE_FAILURE]: subDogImageFailure,
})
