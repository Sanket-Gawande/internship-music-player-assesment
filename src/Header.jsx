import React, { useState } from "react";
import { addAlbum } from "./Redux/albums";
import { Link, useNavigate } from "react-router-dom";
import { addPlaylist } from "./Redux/playlists";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.albums.albums);
  const [modal, setModal] = useState(false);
  const [plname, setplName] = useState(null);
  document.onclick = (e) => {
    if (e.target.className.includes("_create_modal_")) {
      setModal(false);
    }
  };

  return (
    <header className="py-4 bg-white px-6 w-full shadow-sm flex items-center justify-between md:px-8">
      <Link to="/" className="text-xl font-bold bg-clip-text bg-gradient-to-bl from-orange-500 to-rose-500 text-transparent">
        {/* <img src="/logo.png" alt="logo" className="w-[60px] object-cover " /> */}
        MusicBox
      </Link>

      <ul className="flex items-center space-x-2 text-sm text-slate-500 ">
        <li className="bg-gradient-to-br from-orange-500 to-rose-500 text-white py-2 px-4 rounded-full">
          <Link to="/albums">My albums</Link>
        </li>
        <li className="cursor-pointer" onClick={() => setModal(true)}>
          <span className="text-lg font-bold mr-1">+</span>
          Creatre playlist
        </li>
      </ul>
      {modal && (
        <div
          className="fixed inset-0 bg-black/50 
          
          _create_modal_
        w-screen
        backdrop-filter backdrop-blur-md grid items-center z-10 "
        >
          <div className="rounded-md w-[95%] min-h-52 max-w-[650px] bg-slate-200 md:p-4 py-4 pt-4  mx-auto  relative">
           
            <form
              className="md:mx-auto overflow-y-auto mt-4 w-max flex items-center flex-wrap"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addAlbum({
                    name: plname,
                  })
                );
                dispatch(addPlaylist({ name: plname }));
                e.target.reset();
                setplName(null);
              }}
            >
              <input
                type="text"
                className="border rounded-md outline-none w-56 mx-2 px-4 py-2 focus:border-slate-600 font-bold text-slate-500"
                placeholder="eg . Travelling"
                value={plname}
                required
                onInput={(e) => setplName(e.target.value)}
              />
              <button className="rounded-md text-white bg-gradient-to-bl from-orange-500 to-rose-500 py-2 px-4">
                Create playlist
              </button>
            </form>
            <h2 className=" font-semibold text-md  p-4 text-slate-500">
              My playlists ({playlists?.length})
            </h2>
            <div className="flex overflow-y-auto items-start justify-center md:justify-start   mx-auto flex-wrap w-full p-4">
              {playlists?.map((obj, i) => (
                <div
                  onClick={() => {
                    setModal(false);
                    navigate(`/album/${obj.name}`);
                  }}
                  key={i}
                  className="md:w-44 md:h-44 w-36 h-36  cursor-pointer border-white border-[5px] rounded-lg m-2 shadow-lg relative  overflow-hidden"
                >
                  <img
                    src={obj.thumbnail}
                    alt="thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <h4 className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-[2px] grid place-items-center text-white font-bold text-2xl stroke-slate-500">
                    {obj.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
