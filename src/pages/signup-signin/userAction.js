import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebase-config";
import { setUser, userSlice } from "./userSlice";

export const autoLogin = (uid) => async (dispatch) => {
  try {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const dbUser = docSnap.data();
      

      const userObj = {
        uid,
        ...dbUser,
      };
      if (userObj.uid) {
        dispatch(setUser(userObj));
        toast.success("Sign up successfully, redirecting to dashboard");
        return;
      }
    }
    toast.error("Error, invalid login details!");
  } catch (error) {
    toast.error(error.message);
  }
};