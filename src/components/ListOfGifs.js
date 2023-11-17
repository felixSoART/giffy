import React, {useState} from "react";
import Gif from "./Gif";
import {useEffect} from 'react' 
import getGifs from '../services/getGifs';
import { useLocation, useRoute } from "wouter";

export default function ListOfGifs  ({keyword: propsKeyword}){

  //const [match, params] = useRoute("/gif/:keyword?");
  //const { keyword: urlKeyword } = params;

  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState([]);
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/gif/:keyword");
  
  const { search } = useLocation();
  
  const currentKeyword = propsKeyword || params.keyword;
  console.log(currentKeyword)



// Arreglar esto de poder recibir datos tmb con url
  
  // const currentKeyword = keyword  || urlKeyword;
  // console.log(currentKeyword)
  // const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([]);
  

    
    
    useEffect(function () { 
        setLoading(true)
        getGifs({ keyword: currentKeyword }).then(
           
          gifs => { 
            
            setGifs(gifs)
            setLoading(false)
          }
          
          )
 
    }, [currentKeyword])

    if (loading) {
      return <i>Loading...</i>
    }

    return <div>
    {
      gifs.map(({ id, title, url }) => 
        <Gif 
          key={id} 
          title={title} 
          url={url} 
          id={id} 
        />
      )
    }
    </div>
}