import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import agent from '../../agent'
import { REGISTER } from '../../redux/constants/actionTypes'
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password)
    payload.then(result => {
      dispatch({ type: REGISTER, result })
    })
  }
})

function Register(props) {
  const [firstname, setfirstname] = useState(null)
  const [lastname, setlastname] = useState(null)
  const [username, setusername] = useState(null)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)

  const handelSubmit = (username, email, password) => e => {
    e.preventDefault()
    !(((username === email) === password) === null)
      ? props.onSubmit(username, email, password)
      : null
  }

  return (
    <div className="min-h-[calc(100vh-77px)] bg-gray-100 flex justify-center pb-12 pt-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up for conduit
          </h2>
        </div>
        <form
          onSubmit={handelSubmit(username, email, password)}
          className="mt-8 space-y-6 bg-white py-5 px-9 rounded shadow-lg"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div className="mb-5 flex items-end">
              <div className="w-1/2 mr-1">
                <label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-normal text-gray-500"
                >
                  First Name
                </label>
                <input
                  onChange={e => {
                    setfirstname(e.target.value)
                    setusername(firstname + lastname)
                  }}
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                />
              </div>

              <div className="w-1/2 ml-1">
                <label
                  htmlFor="last-name"
                  className="mb-2 block text-md font-normal text-gray-500"
                >
                  Last Name
                </label>
                <input
                  onChange={e => {
                    setlastname(e.target.value)
                    setusername(firstname + lastname)
                  }}
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="email-address"
                className="mb-2 block text-sm font-normal text-gray-500"
              >
                Email address
              </label>
              <input
                onChange={e => setemail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-normal text-gray-500"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                htmlFor="confrimPassword"
                className="mb-2 block text-sm font-normal text-gray-500"
              >
                Confrim Password
              </label>
              <input
                onChange={e => setpassword(e.target.value)}
                id="confrimPassword"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center mb-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign Up
            </button>
          </div>
          <div className="text-sm mb-9">
            <Link
              to="/login"
              className="font-normal text-gray-800 hover:text-indigo-500 hover:underline"
            >
              Already have an account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
