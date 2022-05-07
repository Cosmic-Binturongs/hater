import React from 'react';
import HatesFeed from './HatesFeed';
import HatesForm from './HatesForm';
import { useState, useEffect } from 'react';
import { getHates } from '../../services/hates';
import './Hates.css';
import Hate from './Hate';

export default function Hates() {

  const [hates, setHates] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchHates = async () => {
      const response = await getHates()
      setHates(response)
    }

    fetchHates()
  }, [toggle])


  return (
    <div className="hates-box">
      <div className="hates-form-container">
        <HatesForm toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='hates-feed'>
        <HatesFeed
          hates={hates}
          setToggle={setToggle}
        />
      </div>
    </div>
  )
}