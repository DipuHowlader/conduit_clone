import React from 'react'

export default function Post({ title, desc, author, createdAt }) {
  return (
    <div
      style={{
        marginBottom: '20px',
        borderBottom: '1px solid #80808052'
      }}
      className="w-full cursor-pointer"
    >
      <div className="flex flex-wrap justify-between items-center my-3">
        <div className="inline-flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img className='w-full h-full object-cover' src={author.image} />
          </div>
          <div className="flex-1 pl-2">
            <h2 className=" mb-1">{author.username}</h2>
            <p className=" opacity-50 text-xs">{new Date(createdAt).toDateString()}</p>
          </div>
        </div>
        <span className="opacity-30 ml-auto">
          <svg
            className="fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 459 459"
          >
            <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
          </svg>
        </span>
      </div>
      <h2 className="leading-normal text-3xl font-medium mb-1">
        {title}
      </h2>
      <p className='mb-5 text-gray-500 text-md ml-2'>{desc}</p>
    </div>
  )
}
