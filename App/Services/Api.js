// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// default headers request
const headers = {
  'Content-Type': 'application/json'
}

const create = (baseURL = 'https://dog.ceo/api/') => {
  const api = apisauce.create({
    baseURL,
    headers,
    timeout: 15000
  })

  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})
  const getDogList = () => api.get('breeds/list')
  const getSubDogList = (param) => api.get(`breed/${param}/list`)
  const getSubImageList = (param) => api.get(`breed/${param}/images`)

  return {
    getRoot,
    getRate,
    getUser,
    // Dog 
    getDogList,
    getSubDogList,
    getSubImageList,
    
    api
  }
}

export default {
  create
}
