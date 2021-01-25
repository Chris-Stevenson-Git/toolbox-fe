import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Internetflix from './components/netflix/Landing.js'

class App extends React.Component{

  render(){
    return(
      <div>
        <h1>Title</h1>
        <Router>
          <h3><Link to='/internetflix'>Link to Internetflix</Link></h3>
          <Route exact path='/internetflix' component={Internetflix}/>
        </Router>
      </div>
    )//return
  }//render

}//class App

export default App
