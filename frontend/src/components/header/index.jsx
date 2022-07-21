import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInView = ({ currentUser }) => {
  return (
    <>
      <Link
        to="/editor"
        className="whitespace-nowrap mr-8 text-base font-medium text-gray-500 hover:text-gray-900"
      >
        New Post
      </Link>

      <Link
        to={'/profile/settings'}
        className="whitespace-nowrap mr-8 text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Settings
      </Link>
      <Link
        to={'/profile'}
        className="whitespace-nowrap mr-8 text-base font-medium text-gray-500 hover:text-gray-900"
      >
        <img
          src={currentUser.image}
          className="user-pic"
          alt={currentUser.username}
          />
          {currentUser.username}
      </Link>
    </>
  )
}

const LoggedOutView = () => {
  return (
    <>
      <Link
        to={'/login'}
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Sign in
      </Link>
      <Link
        to={'/register'}
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Sign up
      </Link>
    </>
  )
}

export default function Header({ appname, currentUser }) {
  return (
    <div className="relative bg-white">
      <div className="min-w-7xl max-w-full mx-auto px-9 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <h2 className="text-3xl font-bold text-gray-800">
                {appname}
              </h2>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/"
              className="whitespace-nowrap mr-8 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            {currentUser ? (
              <LoggedInView currentUser={currentUser} />
            ) : (
              <LoggedOutView />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
