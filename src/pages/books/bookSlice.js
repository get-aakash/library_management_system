import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers:{
        getBooksSuccess:(state, {payload}) =>{
            state.books = payload
        }
    }
})

const {reducer, actions} = bookSlice
export const {getBooksSuccess} = actions

export default reducer