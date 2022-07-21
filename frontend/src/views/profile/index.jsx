import React, { useState } from 'react'

export default function () {
  const [active, setactive] = useState(false)

  const handelPost = () => {
    setactive(active => !active)
  }

  return (
    <div className="bg-gray-100 relative w-full min-h-screen mb-3">
      <div className="w-11/12 bg-center bg-[url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] mx-auto relative h-60 rounded-none rounded-t-md top-5">
        <div className="absolute -bottom-16 left-10  flex justify-around items-center">
          <div className="rounded-full w-28 h-28 overflow-hidden border-2 z-10">
            <img
              className="overflow-hidden  w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>

          <div className="ml-5 mt-14">
            <h3 className="bold text-gray-800 text-xl font-bold">
              Dipu Howlader
            </h3>
            <span className="text-gray-700 text-md font-thin">
              Developer
            </span>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 border-2 px-3 py-1 rounded cursor-pointer z-10">
          <span className="text-white">Follow</span>
        </div>
        <div className="w-full h-full bg-black opacity-40"></div>
      </div>

      <div className="w-4/6 mx-auto mt-40">
        <div className="flex border-b-2 gap-10 pb-3 cursor-pointer relative">
          <h2
            onClick={() => handelPost({ active, setactive })}
            className={`font-normal text-lg ${!active ? 'text-green-500' : 'text-gray-500'}`}
          >
            My posts
          </h2>
          <h2
            onClick={() => handelPost({ active, setactive })}
            className={`font-normal text-lg ${active ? 'text-green-500' : 'text-gray-500'}`}
          >
            global Feed
          </h2>
          <div
            className={`absolute -inset-px left-0 w-24 border-b-2 border-green-500 transition
              ${active ? 'translate-x-28' : 'translate-x-0'}
            `}
          ></div>
        </div>

        <div className="mt-10 w-11/12 mx-auto">
          {[...Array(3).keys()].map(element => (
            <div
              style={{
                marginBottom: '20px',
                borderBottom: '1px solid #80808052'
              }}
              key={element}
              className="w-full cursor-pointer"
            >
              <div className="flex flex-wrap justify-between items-center my-3">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className=" mb-1">Chris Sonne</h2>
                    <p className=" opacity-50 text-xs">May 18</p>
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
              <h2 className="leading-normal text-lg font-medium mb-5">
                How To Boost Your Traffic Of Your Blog And Destroy
                The Competition
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
