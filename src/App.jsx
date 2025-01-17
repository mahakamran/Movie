import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';





import './index.css';
import BasicExample from './components/BasicExample';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Footer from './components/Footer';
import  Details  from './pages/Details';
import Login from './pages/Login';



const App = () => {
  return (
    <BrowserRouter>
      <BasicExample />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:imdbID' element={<Details/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App