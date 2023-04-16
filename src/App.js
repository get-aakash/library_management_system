
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./pages/books/BookList";
import NewBooks from "./pages/books/NewBooks";
import BorrowHistory from "./pages/borrow-history/BorrowHistory";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import BookLanding from "./pages/landing/BookLanding";
import SignIn from "./pages/signup-signin/SignIn";
import SignUp from "./pages/signup-signin/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./pages/signup-signin/userSlice";
import { auth } from "./firebase-config/firebase-config";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { autoLogin } from "./pages/signup-signin/userAction";

function App() {

  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user)=>{
    // const obj = {
    //   uid: user?.uid,
    //   email:user?.email,
    //   displayName: user?.displayName
    // }
    // dispatch(setUser(obj))
    
    dispatch(autoLogin(user?.uid))
  })


  return (
    <div className="">
      <Routes>
        {/* public routers  */}
        <Route path="/" element={<Home />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="/book/:bookId" element={<BookLanding />}/>

        {/* private routers  */}
        <Route path="dashboard" element={
          <PrivateRoute>
        <Dashboard />
        </PrivateRoute>
        }/>
        <Route path="admin/books" element={<PrivateRoute><BookList /></PrivateRoute>}/>
        <Route path="admin/new" element={<PrivateRoute><NewBooks /></PrivateRoute>}/>
        <Route path="borrow-history" element={<BorrowHistory />}/>
        <Route path="admin/edit/:bookid" element={<Dashboard />}/>

      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;