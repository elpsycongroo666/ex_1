import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:8888'

export const getAllCate = () => {
  return axios({
    url: '/getAllCate'
  })
}

export const getPostById = (params) => {
  return axios({
    url: '/getPostById',
    params
  })
}

export const addNewCate = (data) => {
  return axios({
    method: 'post',
    url: '/addNewCate',
    data
  })
}
