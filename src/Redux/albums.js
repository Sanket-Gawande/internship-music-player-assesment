import { createSlice } from "@reduxjs/toolkit";

const albums = createSlice({
  name: "albums",
  initialState:
  {
    albums : [
        {
          name: "Default",
          thumbnail: "https://source.unsplash.com/random/?default",
        },
        {
          name: "Travelling",
          thumbnail: "https://source.unsplash.com/random/?travelling",
        },
      ]
  } ,
  reducers: {
    addAlbum: (state, { type, payload }) => {
      state.albums.push({
        name: payload.name,
        thumbnail: `https://source.unsplash.com/random/?${payload.name}
                    `,
      });
    },
  },
});

export default albums.reducer;
export const { addAlbum } = albums.actions;
