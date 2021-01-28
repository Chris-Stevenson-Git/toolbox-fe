import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const BASE_URL = 'http://localhost:3000'

class Landing extends React.Component{

  state = {
    search: ''
  }

  handleInput = (ev) => {
    this.setState({search: ev.target.value})
  }

  handleSubmit = (ev) => {
    console.log('Button working');
    console.log(this.state.search);

    fetch(`${BASE_URL}/search`, {
      headers: {"Content-Type": "application/json; charset=utf-8"},
      method: 'POST',
      body: JSON.stringify({
        query: this.state.search
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.warn(err))

    ev.preventDefault();
  }

  render(){
    return(
      <div>
        <h2>Netflix Page</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            name='search'
            type='text'
            placeholder='Search...'/>
          <button>Search</button>
        </form>
      </div>
    )//return
  }//render
}//class Landing

export default Landing
