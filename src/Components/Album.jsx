import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaEllipsisV, FaTrash } from 'react-icons/fa'
import { removeSong } from '../Redux/playlists'
const Album = () => {
  const { name } = useParams()
  const dispatch = useDispatch()

  const playlistSongs = useSelector((state) => state.playlists.playlists[name])
  const songArray = playlistSongs
  return (
    <>
      <div className="w-[95%] mx-auto bg-white pb-6 p-4 mt-8 rounded-lg shadow-sm max-w-[800px]">
        <h4 className="font-bold text-slate-600">Album : {name}</h4>
        <h6 className="text-slate-500 text-sm my-2">
          Added {playlistSongs?.length || 0} songs
        </h6>
        <div className="flex flex-col items-center relative">
          {songArray?.map(({ title, file, poster, artist }, index) => {
            return (
              <div className="my-1 flex items-center justify-start shadow-sm rounded-md w-[95%] mx-auto py-2 px-4 border-b-2">
                <img
                  src={poster}
                  alt="img"
                  className="w-14 border h-14 object-contain rounded-full mx-2"
                />
                <div className="mx-6">
                  <h4 className="text-sm text-slate-700 font-semibold">
                    {title}
                  </h4>
                  <p className="text-[12px] text-slate-500">
                    artist : {artist || 'unknown'}
                  </p>
                </div>
                <span
                  className="float-right  absolute right-8 text-slate-500 group"
                  //   onClick={}
                >
                  <FaEllipsisV />
                  <div className="absolute right-3 hidden group-hover:inline-block bg-white top-0 w-40 rounded-md shadow-md border p-2">
                    <ul className="">
                      <li
                        className=" flex items-center text-sm cursor-pointer"
                        onClick={() => {
                          dispatch(removeSong({ index, name }))
                        }}
                      >
                        <FaTrash className="text-[tomato] mr-2" /> Remove
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Album
