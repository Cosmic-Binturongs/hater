import React, { useEffect } from 'react';
import Hate from './Hate';
import Nothing from './Nothing';


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
      "text": "What's wrong with you. jhasdgadhggakjsdfgdgfg duhfgajhdgfjkhagd skfgakshdjgfkdszhgf slkjdfhgkjsdljfhglfdhg"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "You suck. iudfhihiahjphgfjhlgafpduygaoudfo usdfliasdhfuhlhjfgashdfb lsdfgjhdsfljajhaflkaf"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "i hate you. akjdsgfjkhgsdfhgaudfjsdgfks kdfgousdgFUOYSGDFUOGsdgfiu gsiDUFGOdsgfysDFDSYI kasdfjsgjfajhkfgj"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "i hate you. akjdsgfjkhgsdfhgaudfjsdgfks kdfgousdgFUOYSGDFUOGsdgfiu gsiDUFGOdsgfysDFDSYI kasdfjsgjfajhkfgj"
    },
    {
      "name": "george",
      "tag": "@george",
      "text": "i hate you. akjdsgfjkhgsdfhgaudfjsdgfks kdfgousdgFUOYSGDFUOGsdgfiu gsiDUFGOdsgfysDFDSYI kasdfjsgjfajhkfgj"
    },
  ]
  
  return (
    <div className="hates-feed">
      <div className="hates-list">
        {
          a.map((hate) => (
            <Hate setToggle={setToggle} key={hate._id} hateData={hate} />
          ))  
        }
      </div>
    </div>
  )
}