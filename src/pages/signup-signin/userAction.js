import { doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { setUser } from "./userSlice"
import { db } from "../../firebase-config/firebase-config"


export const login = (uid)=>async dispatch =>{
    try {
        const userRef = doc(db, "users", uid)

        const docSnap = await getDoc(userRef)
  
        if (docSnap.exists()){
          const dbUser = docSnap.data()
        
  
        const userObj = {
          uid, ...dbUser
        }
        if(userObj.uid){
          dispatch(setUser(userObj))
          toast.success("SignIn successfully")
          return
        }
      }
    } catch (error) {
        toast.error(error.message)
        
    }
}