// import logo from './logo.svg';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchWords } from "./redux/slice/words";
import History from './Components/History';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {

  let[words, setWords] = useState();

  function getWord(data){
    setWords(data)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='' element={<Home fnc={getWord}/>} />
          <Route path='History' element={<History word={words} />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
