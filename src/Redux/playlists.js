import { createSlice } from "@reduxjs/toolkit";

const playlists = createSlice({
  name: "playlist",
  initialState: {
    playlists: {
      Default: [],
      Travelling: [],
    },
  },
  reducers: {
    addSongs: (state, { type, payload }) => {
      let isDuplicate = false;
      if (state.playlists[payload.name]) {
        state.playlists[payload.name].map((obj) => {
          if (obj.title === payload.new.title) {
            isDuplicate = true;
          }
        });
      }
      if (!isDuplicate) {
        state.playlists[payload.name].push(payload.new);
      }
    },
    addPlaylist(state, { type, payload }) {
      if (!state.playlists[payload.name]) {
        state.playlists[payload.name] = [];
      }
    },
    removeSong(state, { type, payload }) {
      const { index, name } = payload;
      if (state.playlists[name]) {
        state.playlists[name] = state.playlists[name].filter(
          (a, b) => b !== index
        );
      }
    },
  },
});

export default playlists.reducer;
export const { addSongs, addPlaylist, removeSong } = playlists.actions;
