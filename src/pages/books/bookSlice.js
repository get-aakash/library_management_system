import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers:{
        getBooksSuccess:(state, {payload}) =>{
            if(!state.books.length && !payload.length){
                return
            }
            state.books = payload
        }
    }
})

const {reducer, actions} = bookSlice
export const {getBooksSuccess} = actions

export default reducer