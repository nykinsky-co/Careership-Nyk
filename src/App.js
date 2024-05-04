
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Why from './components/Why/Why';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dsai from './components/Dsai/Dsai';
import Da from './components/Da/Da';
import De from './components/De/De';
import Aiml from './components/Aiml/Aiml';
import Cyber from './components/Cyber/Cyber';
import Software from './components/Software/Software';
import Think from './components/Think/Think';
import Webinar from './components/Webinar/Webinar';
import BlueLead from './components/BlueLead/BlueLead';
import EarlyLead from './components/EarlyLead/EarlyLead';
import LeadAhead from './components/LeadAhead/LeadAhead';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';



function App() {
  return (
    <Router>
    <Navbar />
  
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/why" element={<Why />} />
      <Route path="/Aiml" element={<Aiml />} />
      <Route path="/Dsai" element={<Dsai />} />
      <Route path="/Da" element={<Da />} />
      <Route path="/De" element={<De />} />
      <Route path="/software" element={<Software />} />
      <Route path="/cyber" element={<Cyber />} />
      <Route path="/think" element={<Think />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route path="/bluelead" element={<BlueLead />} />
      <Route path="/earlylead" element={<EarlyLead />} />
      <Route path="/leadahead" element={<LeadAhead />} />
      <Route path="/webinar" element={<Webinar />} />
    </Routes>
    
    <Footer/>
  </Router>
  );
}

export default App;
