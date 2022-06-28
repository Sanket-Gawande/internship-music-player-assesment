import React from 'react'
import { FaPlay, FaForward, FaBackward } from 'react-icons/fa'
const Player = () => {
  return (
    <section className="fixed bottom-0 shadow-lg  w-full bg-white py-4 px-4 border-t-2 ">
      <div className="mx-auto w-max flex items-center space-x-4">
        <FaBackward />
        <FaPlay className=" bg-gradient-to-br from-orange-500 to-rose-500 text-white w-12 p-2 grid place-items-center h-12  rounded-full fill-white" />
        <FaForward />
      </div>
    </section>
  )
}

export default Player
