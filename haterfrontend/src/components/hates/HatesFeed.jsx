import React, { useEffect } from 'react';
import Hate from './Hate';
import Error from "../../screens/Error"


export default function HatesFeed({ hates, setToggle }) {
  let a = [
    {
      "name": "jeff",
      "tag": "@jeff",
      "text": "My name Jeff."
    },
    {
      "name": "evan",
      "tag": "@evan",
      "text": "No soup for you. ajhlsdfhjadsgfkhjagfkjahdgkfjah dgfjhakgsfjdhgfkajdgfj"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "Huh?"
    },
    {
      "name": "david",
      "tag": "@david",
      "text": "Ok."
    },
    {
      "name": "laura",
      "tag": "@laura",
      "text": "I kick kittens."
    },
    {
      "name": "lawrence",
      "tag": "@lawrence",
      "text": "I kick puppies."
    },
    {
      "name": "mustafa",
      "tag": "@mustafa",
      "text": "Sheeeeeeeeee."
    },
  ]
  
  return (
    <div className="hates-list">
      {
          hates.map((hate,id) => (
            <Hate setToggle={setToggle} key={id} hateData={hate} />
          ))
          
         
      }
    </div>
  )
}