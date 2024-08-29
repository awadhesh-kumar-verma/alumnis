import React from 'react';

import Home from './Components/Home/Home';
import News from './Components/News/News';
import Register from './Components/Register/Register';
import Member from './Components/Members/Member';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <News />
      <Register />
      <Member />
      <Footer />
    </>
  )
}

export default App;
