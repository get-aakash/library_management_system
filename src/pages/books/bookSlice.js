import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    selectedBook:{}
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
        },
        setSelectedBook:(state,{payload})=>{
             state.selectedBook = state.books.find((item)=>item.id===payload)
        
        }
    }
})

const {reducer, actions} = bookSlice
export const {getBooksSuccess, setSelectedBook} = actions

export default reducer