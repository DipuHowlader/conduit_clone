import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home, Login, Register, NewPost, ProfileSettings, Profile } from '../views'

export default function () {
  const Element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/editor',
      element: <NewPost />
    },
    // {
    //   path: '/article',
    //   element: <Article />
    // },
    {
      path: '/profile/settings',
      element: <ProfileSettings />
    },
    {
      path: '/profile/',
      element: <Profile />
    }
  ])

  return Element
}
