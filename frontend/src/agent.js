import superagentPromise from 'superagent-promise'
import _superagnet from 'superagent'

const superagent = superagentPromise(_superagnet, global.Promise)
let token = null

const responseBody = res => res.body

const API_ROOT = 'http://127.0.0.1:8000/api'
// const API_ROOT = 'https://api.realworld.io/api'

const encode = encodeURIComponent

const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`)
  }
}

const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
}

const Auth = {
  current: () => requests.get('/user/'),
  login: (email, password) =>
    requests.post('/users/login/', { user: { email, password } }),
  register: (username, email, password) => {
    return requests.post('/users/', {
      user: { username, email, password }
    })
  },
  save: (username, email, password, bio, image) => {
    console.log(bio, image)

    return requests.put('/user/', {
      user: {
        username,
        email,
        password,
        profile: {
          bio,
          image
        }
      }
    })
  }
}

const limit = (count, p) =>
  `limit=${count}&offset=${p ? p * count : 0}`
const omitSlug = article =>
  Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page => requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(
      `/articles?author=${encode(author)}&${limit(5, page)}`
    ),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug => requests.del(`/articles/${slug}`),
  favorite: slug => requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(
      `/articles?favorited=${encode(author)}&${limit(5, page)}`
    ),
  feed: () => requests.get('/articles/feed?limit=10&offset=0'),
  get: slug => requests.get(`/articles/${slug}`),
  unfavorite: slug => requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, {
      article: omitSlug(article)
    }),
  create: article => requests.post('/articles', { article })
}

export default {
  Auth,
  Articles,
  setToken: _token => {
    token = _token
  }
}
