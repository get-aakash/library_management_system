
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


function App() {


  return (
    <div className="">
      <Routes>
        {/* public routers  */}
        <Route path="/" element={<Home />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="/:bookId" element={<BookLanding />}/>

        {/* private routers  */}
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="admin/books" element={<BookList />}/>
        <Route path="admin/new" element={<NewBooks />}/>
        <Route path="borrow-history" element={<BorrowHistory />}/>
        <Route path="admin/edit/:bookid" element={<Dashboard />}/>

      </Routes>
      
      
    </div>
  );
}

export default App;