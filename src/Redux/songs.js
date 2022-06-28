import { createSlice } from "@reduxjs/toolkit"
import data from "./data.json"
const songs = createSlice({
    name : "songs",
    initialState : {songs : data},
    reducers : {
      
    }
})


export default songs.reducer
export const {getSongs} = songs.actions
