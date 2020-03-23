import React from 'react'
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import App from '../App'
import Nav from '../Nav'
import About from '../About'
import Contact from '../Contact'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
