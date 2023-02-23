import { useState } from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import Contato from './pages/Contato/contato';
import Sobrenos from './pages/Solucoes/solucoes';
import GlobalStyles from './GlobalStyles/styles'
import Footer from './components/Footer';
import Solucoes from './pages/Solucoes/solucoes';
import Missoes from './pages/missoes/missoes';
import QuemS from './pages/quemsomos';

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
        <Router>
          <Header />
            <Routes>
                <Route path='Sobrenos' element={<Sobrenos/>}></Route>
                <Route path='/' element={<Home/>}/>
                <Route path='/solucoes'element={<Solucoes/>}/>
                <Route path='/Contato' element={<Contato/>}/>
                <Route path='/missoes' element={<Missoes/>}/>  
                <Route path='/quemsomos' element={<QuemS/>}/>            
            </Routes>
            
        </Router>
    </div>
  )
}

export default App;
