import React from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header'
import Homepage from './pages/homepage'
import Footer from './components/footer'

const App = () => (
  <>
  <Header/>
  <Homepage/>
  <Footer/>
  </>
)

export default App;