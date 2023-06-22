import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './reset.css'
import './style.css'


import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'

const App = () => {
  return (
    <Router>
      <header><Navbar /></header>
      <main className='container'>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

      </main>
    </Router>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
