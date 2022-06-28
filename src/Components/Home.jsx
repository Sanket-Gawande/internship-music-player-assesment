import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaEllipsisV, FaPlayCircle, FaPlusCircle } from 'react-icons/fa'
import { addSongs } from '../Redux/playlists'
const Home = () => {
  const dispatch = useDispatch()
  const [toast, setToast] = useState(null)
  const songs = useSelector((state) => state.songs.songs)
  const state = useSelector((state) => state)
  const albums = useSelector((state) => state.albums.albums)

  //   useEffect(() => {
  // setTimeout()
  //   } , toast)
  return (
    <section className="bg-white rounded-md  overflow-y-auto shadow-md py-4 w-[95%] mx-auto my-6">
      {toast && ( 
        <div className="fixed z-10 shadow-md h-10 max-w-[400px] bottom-2 right-4 rounded-md bg-[green]/10 text-slate-700 py-2 px-4" style={{top: "65px" , right : "10px" , background : " linear-gradient(45deg , teal , rgba(10 , 255 , 80 , 1))" , color : "white"}}>
          {toast}
        </div>
      )}
      <h4 className="text-clip bg-clip-text text-transparent bg-gradient-to-bl from-orange-500 to-rose-500 font-[700] text-xl md:2xl mx-6">
        My songs
        <div className="flex flex-wrap items-center justify-center md:p-4 py-4">
          {songs?.map(({ title, poster, file }) => (
            <div className="border border-slate-400 shadow-sm m-2 rounded-md relative md:w-44 w-36  min-h-44 lg:h-64 lg:w-56 p-2">
              <img
                src={poster}
                alt="poster"
                className="w-full h-44 lg:h-52 border mx-auto  block  rounded-md object-cover"
              />
              <h5 className="text-[12px] mt-2 flex items-center justify-between font-semibold px-2 text-slate-600">
                <span>{title.substring(0, 20)}</span>
                <button className="inline-block text-lg ">
                  <FaPlayCircle />
                </button>
              </h5>
              <span className="text-slate-500  w-6 grid place-items-center cursor-pointer h-6 bg-white rounded-full group text-sm absolute top-3 right-3 border">
                <FaEllipsisV />
                <div className="absolute -right-2 hidden group-hover:inline-block  text-center w-36 bg-white top-5 border rounded-md shadow-md  p-1">
                  <ul className="text-[12px]">
                    <li>
                      <details>
                        <summary className=" flex items-center cursor-pointer font-[300] ">
                          <FaPlusCircle className="text-slate-500 mr-2 font-[300]" />{' '}
                          Add to playlist
                        </summary>
                        <div
                          className="text-left font-thin"
                          style={{
                            textAlign: 'left',
                            fontWeight: 400,
                            display: 'block',
                          }}
                        >
                          {albums.map((obj) => (
                            <p
                              onClick={() => {
                                dispatch(
                                  addSongs({
                                    name: obj.name,
                                    new: { title, poster, file },
                                  }),
                                )

                                setToast(`"${title}" is added to "${obj.name}`)

                                setTimeout(() => {
                                  setToast(null)
                                }, 1000)
                              }}
                              className="text-[12px] font-[400]  px-2 py-1 text-[left]"
                            >
                              {obj.name}
                            </p>
                          ))}
                        </div>
                      </details>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          ))}
        </div>
      </h4>
    </section>
  )
}

export default Home
