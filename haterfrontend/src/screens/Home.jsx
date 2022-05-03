import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hates from '../components/hates/Hates';


export default function Home() {

  return (
    <div className='homeDiv'>
      <div className="left">1</div>
      <div className="mid">
        <Hates />
      </div>
      <div className="right">3</div>
    </div>
  )
}