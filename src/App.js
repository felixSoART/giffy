import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import SearchGifs from "./components/SearchGifs";



//const GIFS = ['https://media3.giphy.com/media/133l9lMseIxhfy/200w.webp?cid=ecf05e47fsem136h22l99trizdeqwiajj30mx28riibkobju&rid=200w.webp&ct=g', 'https://media4.giphy.com/media/LwzJu1FeQaERgwo110/200w.webp?cid=ecf05e47fsem136h22l99trizdeqwiajj30mx28riibkobju&rid=200w.webp&ct=g']
//const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=OSabkEQ2VCDW3bRXn9g0vKkku9MkyTHn&q=hola&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
        <SearchGifs></SearchGifs>
        <h1>Giffy App</h1>
     
        <Link to="/gif/ola">Buscar Gif 'ola' </Link>
        <Link to="/gif/bisbal">Buscar Gif 'Bisbal' </Link>
        <Link to="/gif/BruceWillis">Buscar Gif 'Antonio Resines' </Link>
        {/* <button onClick={() => setKeyword('mapache')} >Pulsame para cambiar</button> */}
        <Route path="/gif/:keyword" component={ListOfGifs} />
        
         
      </section>
    </div>
  );
}

export default App;
