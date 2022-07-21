import React, { useEffect } from 'react'
import Banner from '../../components/banner'
import Post from '../../components/post'
import agent from '../../agent'
import { connect } from 'react-redux'
import { HOME_PAGE_LOADED } from '../../redux/constants/actionTypes'

const Promise = global.Promise

const mapStateToProps = state => {
  return state.article.article !== undefined
    ? {
        article: state.article.article[0].articles
      }
    : {}
}

const mapDispatchToProps = dispatch => ({
  onLoad: payload => {
    return dispatch({ type: HOME_PAGE_LOADED, payload })
  }
})

function Home(props) {
  useEffect(() => {
    const res = Promise.all([agent.Articles.all()])
    res.then(function (result) {
      props.onLoad(result)
    })
  }, [])

  return (
    <div className="mt-9">
      <Banner />
      <div className="flex w-11/12 mx-auto">
        <div className="w-2/5">
          <div className="mb-3 w-full">
            <div className="input-group relative flex items-stretch max-w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-none rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-none rounded-r-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-7 w-full">
          {props.article
            ? props.article.map(element => (
                <Post
                  key={element.slug}
                  title={element.title}
                  desc={element.description}
                  author={element.author}
                  createdAt={element.createdAt}
                />
              ))
            : null}
        </div>
        <div className="w-1/5">tag lists</div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
