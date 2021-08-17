import { call, put } from 'redux-saga/effects'
import DogActions from '../Redux/DogRedux'
// import { DogSelectors } from '../Redux/DogRedux'

export function * getDogList (api, action) {
  const { data } = action
  const response = yield call(api.getDogList, data)

  // success?
  if (response.ok) {
    let sum = []
    response?.data?.message?.map((item, index)=> {
      if(index < 50){
        sum.push(item)
      }
    })
    yield put(DogActions.dogListSuccess({message: sum}))
  } else {
    yield put(DogActions.dogListFailure(response))
  }
}

export function * getSubDogList (api, action) {
  const { data } = action
  const response = yield call(api.getSubDogList, data)

  // success?
  if (response.ok) {
    yield put(DogActions.subDogSuccess(response?.data?.message))
  } else {
    yield put(DogActions.subDogFailure(response))
  }
}


export function * getSubDogImage (api, action) {
  const { data } = action
  const response = yield call(api.getSubImageList, data)

  // success?
  if (response.ok) {
    let sum = []
    response?.data?.message?.map((item, index)=> {
      if(index < 20){
        sum.push(item)
      }
    })
    yield put(DogActions.subDogImageSuccess(sum))
  } else {
    yield put(DogActions.subDogImageFailure(response))
  }
}