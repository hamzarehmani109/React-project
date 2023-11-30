import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maincomponent from './Components/Maincomponent';
import GlobalCard from './Components/Globalcard';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';
import { Tabs } from 'react-bootstrap';
import RegistrationForm from './Components/RegisteredForm';
import Aplicant from './Components/Aplicant';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/about/:name/:email" element={<About/>}/>
        <Route path='/' element={<Maincomponent/>}/>
        <Route path='/globalcard' element={<GlobalCard width={300} height={200} imageUrl="src/img2.jpg" />}/>
        <Route path='/tabs' element={<Tabs/>}/>
        <Route path="/registeredform" element={<RegistrationForm/>} />
        <Route path="/applicant" element={<Aplicant/>} />
        </Routes>
    </Router>
  );
}

export default App;
