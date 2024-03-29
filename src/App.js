import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Notestate>

      <BrowserRouter>
        <Navbar/>
        <div className="container">
        {/* <Home/> */}
        <Routes>
           <Route exact path='/' element={<Home/>}></Route>
           <Route exact path='/about' element={<About/>}></Route>
           <Route exact path='/login' element={<Login/>}></Route>
           <Route exact path='/signup' element={<Signup/>}></Route>
          
        </Routes>
        </div>
        </BrowserRouter>
    
    </Notestate>
    </>
  );
}

export default App;
