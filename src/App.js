import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Editor from './pages/editor'
function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/editor/:roomId' element={<Editor/>}></Route>

  </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
