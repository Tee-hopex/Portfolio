import React from 'react';
import '../styles/App.css'

import { Link } from 'react-router-dom';

// components
import Nav from '../components/Nav.jsx';
import Sec1 from '../components/Sec1.jsx';
import Sec2 from '../components/Sec2.jsx';


function App() {


  return (
    <>
      <Nav />
      <Sec1 />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Sec2 />


      <Link to = "/new-page">New Page</Link>
    </>
  )
}

export default App
