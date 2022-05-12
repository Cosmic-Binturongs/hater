import React from "react";
import Hate from "./Hate";

export default function HatesFeed({ hates, setToggle }) {
  return (
    <div className="hates-list">
      {hates.map((hate, id) => (
        <Hate setToggle={setToggle} key={id} hateData={hate} />
      ))}
    </div>
  );
}
