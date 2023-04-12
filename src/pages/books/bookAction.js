import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "../../firebase-config/firebase-config"
import { toast } from "react-toastify"
import { getBooksSuccess } from "./bookSlice"


export const getBookAction = () => async (dispatch) => {
    try {
        const q = query(collection(db, "books"))
        const querySnapshot = await getDocs(q)
        let bks = []
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            bks.push(data)
        })

        dispatch(getBooksSuccess(bks))




    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }
}
export const addBookAction = (formData) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "books"), formData)
        if (docRef?.id) {
            dispatch(getBookAction()) &&
                toast.success("New Book has been added in the database")

            return
        }
        toast.error("Unable to add book")

    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }
}
