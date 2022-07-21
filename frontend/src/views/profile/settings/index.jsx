import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import agent from '../../../agent'
import { UPDATE_USER } from '../../../redux/constants/actionTypes'

const mapStateToProps = state => ({
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, email, password, bio, image) => {
    console.log(bio, image)
    dispatch({
      type: UPDATE_USER,
      payload: agent.Auth.save(username, email, password, bio, image)
    })
  }
})

function Register(props) {
  const [mounted, setmounted] = useState(false)
  const [username, setusername] = useState('')
  const [bio, setbio] = useState('')
  const [image, setimage] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  useEffect(() => {
    console.log(image)
    setmounted(true)
    if (props.currentUser) {
      setusername(props.currentUser.username)
      setbio(props.currentUser.bio)
      setimage(props.currentUser.image)
      setemail(props.currentUser.email)
      setpassword(props.currentUser.password)
    }
  },[])

  // if (!mounted) {
  //   console.log('unmounting')
  //   console.log(props.currentUser)
  //   if (props.currentUser) {
  //     setusername(props.currentUser.username)
  //     setbio(props.currentUser.bio)
  //     setimage(props.currentUser.image)
  //     setemail(props.currentUser.email)
  //     setpassword(props.currentUser.password)
  //   }
  // }

  const handelSubmit =
    (username, email, password, bio, image) => e => {
      console.log(image)
      e.preventDefault()
      props.onSubmit(username, email, password, bio, image)
    }
  return (
    <form method="post" className="text-center w-3/5 mx-auto h-auto">
      <h2 className="text-5xl font-bold my-10">Your settings</h2>
      <div className="border-2 rounded mb-5">
        <input
          onChange={e => setimage(e.target.value)}
          className="p-4 w-full outline-none"
          type="text"
          placeholder="Enter The Url Of Profile Picture"
        />
      </div>

      <div className="border-2 rounded mb-5">
        <input
          onChange={(e) => setusername(e.target.value)}
          value={username}
          className="p-4 w-full outline-none"
          type="text"
          placeholder="Username"
        />
      </div>

      <div className="border-2 rounded mb-5 h-36">
        <textarea
          onChange={(e) => setbio(e.target.value)}
          // value={bio}
          className="p-4 w-full outline-none h-full"
          type="text"
          placeholder="Something about you"
        />
      </div>

      <div className="border-2 rounded mb-5">
        <input
          onChange={e => setemail(e.target.value)}
          value={email}
          className="p-4 w-full outline-none"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="border-2 rounded mb-5">
        <input
          onChange={ e => setpassword(e.target.value)}
          className="p-4 w-full outline-none"
          type="password"
          placeholder="New Password"
        />
      </div>

      <input
        type="button"
        onClick={handelSubmit(username, email, password, bio, image)}
        value="Update Settings"
        className="w-40 mr-auto bg-blue-700 py-3 px-5 capitalize cursor-pointer text-white font-medium text-lg rounded"
      />
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
