import { useState } from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import GlobalStyles from './GlobalStyles/styles'
import Footer from './components/Footer';
import Missoes from './pages/missoes/missoes';
import QuemS from './pages/quemsomos';



function App() {

  return (
    <div className="App">
      <GlobalStyles/>
        <Router>
          <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>               
                <Route path='/missoes' element={<Missoes/>}/>  
                <Route path='/quemsomos' element={<QuemS/>}/>            
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App;
