import React, { useEffect } from "react";
import Hate from "./Hate";
import Error from "../../screens/Error";

export default function HatesFeed({ hates, setToggle }) {
  return (
    <div className="hates-list">
      {
          hates.map((hate,id) => (
            <Hate setToggle={setToggle} key={id} hateData={hate} />
          ))
      }
    </div>
  );
}
