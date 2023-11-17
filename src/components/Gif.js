import React from "react";
import './Gif.css'
import { Link, Route } from 'wouter';


export default function Gif ({title, id, url}) { 
    return (
      <Link to={`/gif/#${id}`} className="gif">  
        <h4>
          {title}
        </h4>
        <img src={url} alt={title} />
      </Link>

    );
}