
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SignIn from './pages/signup-signin/SignIn';
import SignUp from './pages/signup-signin/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
