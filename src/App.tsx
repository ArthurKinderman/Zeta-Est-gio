import { useState } from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import Contato from './pages/Contato/contato';
import Sobrenos from './pages/Sobrenos/sobrenos';
import GlobalStyles from './GlobalStyles/styles'
import Footer from './components/Header/Footer';

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
        <Router>
          <Header />
            <Routes>
                <Route path='Sobrenos' element={<Sobrenos/>}></Route>
                <Route path='/' element={<Home/>}/>
                <Route path='/Contato' element={<Contato/>}/>               
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App;
