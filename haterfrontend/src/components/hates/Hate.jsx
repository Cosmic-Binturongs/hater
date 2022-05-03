import React, { useState, useEffect } from 'react';

export default function Hate({ hateData, setToggle }) {
  const [hate, setHate] = useState({
    name: hateData.name,
    tag: hateData.tag,
    text: hateData.text,
  })

  return (
    <div className="hate">
      <div className="hate-form">
          <h3
            className="hate-name"
            type="text"
            name="name">
          {hate.name} {hate.tag}
          </h3>
        <div className="hate-info">
        <h2
          className="hate-text"
          type="text"
          name="text">
          {hate.text}
        </h2>
          </div>
        </div>
      </div>
  )
}