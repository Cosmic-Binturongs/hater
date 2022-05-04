import React, { useEffect } from 'react';
import Hate from './Hate';

export default function HatesFeed({ hates, setToggle }) {
  let a = [
    {
      "name": "george",
      "tag": "@george",
      "text": "Why? ajbdjhsdhajhkdfhjdgfljhagskudfkjhsdgfhasgd kfgasdgfljhsgdfjhk,ahsgdfgdhufj jdfglsjdhgljdbgdfsjgldsf"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "Why? ajbdjhsdhajhkdfhjdgfljhagskudfkjhsdgfhasgd kfgasdgfljhsgdfjhk,ahsgdfgdhufj jdfglsjdhgljdbgdfsjgldsf"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "Why? ajbdjhsdhajhkdfhjdgfljhagskudfkjhsdgfhasgd kfgasdgfljhsgdfjhk,ahsgdfgdhufj jdfglsjdhgljdbgdfsjgldsf"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "Why? ajbdjhsdhajhkdfhjdgfljhagskudfkjhsdgfhasgd kfgasdgfljhsgdfjhk,ahsgdfgdhufj jdfglsjdhgljdbgdfsjgldsf"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "Why? ajbdjhsdhajhkdfhjdgfljhagskudfkjhsdgfhasgd kfgasdgfljhsgdfjhk,ahsgdfgdhufj jdfglsjdhgljdbgdfsjgldsf"
    },
  ]
  
  return (
    <div className="hates-feed">
      <div className="hates-list">
        {
          a.map((hate) => (
            <Hate setToggle={setToggle} key={hate} hateData={hate} />
          ))
        }
      </div>
    </div>
  )
}