import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import agent from '../../agent'
import { connect } from 'react-redux'
import { LOGIN } from '../../redux/constants/actionTypes'

const mapStateToPorps = state => ({})

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => {
    const payload = agent.Auth.login(email, password)

    payload.then(res => {
      window.localStorage.setItem('jwt', res.user.token)
      dispatch({ type: LOGIN, payload: res })
    })
  }
})

function Login(props) {
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)

  const handelSubmit = (email, password) => e => {
    e.preventDefault()
    !((email === password) === null)
      ? props.onSubmit(email, password)
      : null
  }

  return (
    <div className="min-h-[calc(100vh-77px)] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          onSubmit={handelSubmit(email, password)}
          method="Post"
          className="mt-8 space-y-6 bg-white py-5 px-9 rounded shadow-lg"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm ">
            <div className="mb-5">
              <label
                htmlFor="email-address"
                className="mb-2 block text-md font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                onChange={e => setemail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-md font-semibold text-gray-500"
              >
                Password
              </label>
              <input
                onChange={e => setpassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center mb-9 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToPorps, mapDispatchToProps)(Login)
