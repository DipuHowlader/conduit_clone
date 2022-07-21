import React from 'react'
import MainRoutes from './routes'


export default function () {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <MainRoutes /> : null
}
