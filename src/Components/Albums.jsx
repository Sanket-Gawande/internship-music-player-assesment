import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Albums = () => {
  const albums = useSelector((state) => state.albums.albums);
  return (
    <>
      <div className="w-[95%] mx-auto bg-white pb-6 p-4 mt-8 rounded-lg shadow-sm max-w-[800px]">
        <h4 className="font-bold text-slate-600 text-xl p-4">My albums</h4>

        <div className="flex flex-col items-center relative">
          {albums?.map(({ name, thumbnail }, index) => {
            return (
              <Link
                to={`/album/${name}`}
                key={index}
                className="my-1 flex items-center justify-start shadow-sm rounded-md w-[95%] mx-auto py-2 px-4 border-b-2"
              >
                <img
                  src={thumbnail}
                  alt="img"
                  className="w-14 border h-14 object-contain rounded-full mx-2"
                />
                <div className="mx-6">
                  <h4 className="text-sm text-slate-700 font-semibold">
                    {name}
                  </h4>
                  {/* <p className="text-[12px] text-slate-500">
                    artist : {artist || "unknown"}
                  </p> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Albums;
