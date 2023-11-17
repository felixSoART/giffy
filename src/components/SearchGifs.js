import React, { useState } from "react";
import Gif from "./Gif";
import { useEffect } from "react";
import getGifs from "../services/getGifs";
import ListOfGifs from "./ListOfGifs";
import { Link, useLocation, Route } from "wouter";

export default function SearchGifs() {
  // const [query, setQuery] = useState("");
  
  let [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  let [formSubmitted, setFormSubmitted] = useState(false);

      // useEffect(() => {
      //   if (path !== `/gif/${keyword}` && formSubmitted) {
      //     pushLocation(`/gif/${keyword}`);
        
      //   }
      // }, [keyword, path, pushLocation, formSubmitted]);

      

 console.log(path)

  const handleInputChange = (event) => {
    setFormSubmitted(false)
    setKeyword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    pushLocation(`/gif/${keyword}`);
  };

  console.log(formSubmitted)

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Buscar Gif:</label>
        <input required
          type="text"
          id="keyword"
          name="keyword"
          value={keyword}
          onChange={handleInputChange}
        />
        <input type="submit" />
      </form>
      {/* {formSubmitted && <ListOfGifs keyword={keyword} />} */}
    </div>
  );
}
