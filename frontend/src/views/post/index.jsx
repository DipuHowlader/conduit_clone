import React from 'react'
import { RichEditor } from '../../components'

export default function () {
  return (
    <div className="w-4/5 mx-auto my-5">
      <form action="" className="mt-9" method="post">
        <div className="mb-4 border-2 rounded-sm">
          <input
            type="text"
            placeholder="Add a title"
            className="w-full outline-none px-5 py-3"
          />
        </div>
        <div className="mb-4 border-2 rounded-sm">
          <input
            type="text"
            placeholder="What's this title is about"
            className="w-full outline-none px-5 py-3"
          />
        </div>

        <div className="mb-4 border-2 rounded-sm">
          <RichEditor />
        </div>

        <div className="mb-4 border-2 rounded-sm">
          <input
            type="text"
            placeholder="Enter tags"
            className="w-full outline-none px-5 py-3"
          />
        </div>

        <div className="mb-2 text-right">
          <input
            type="button"
            value="publish Article"
            className="w-40 mr-auto bg-blue-700 py-3 px-5 capitalize cursor-pointer text-white font-medium text-lg rounded"
          />
        </div>
      </form>
    </div>
  )
}
