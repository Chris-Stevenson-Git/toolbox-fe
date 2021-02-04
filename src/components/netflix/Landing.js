import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {Card, CardDeck, Container, Row, Col} from 'react-bootstrap'


import AdvancedForm from './AdvancedForm'
import ResultCard from './ResultCard'

const BASE_URL = 'http://localhost:3000'

class Landing extends React.Component{

  state = {
    query: '',
    high_nfr: 5, //highest score allowed in search
    low_nfr: 0, //lowest netflix rating allowed in search
    high_imdb: 10, //same but with IMDB scores
    low_imdb: 0,
    subtitles: 'Any', //required subtitles in results
    audio: 'Any', //required spoken audio language
    from_year: 1900, //start of search from_year
    to_year: 2021,
    sort_by: 'Relevance',
    type: 'Any', //Movie, series, documentary, etc
    genre_id: 0, //genres 0 is all
    page: 1, //page of results
    country_list: 'all', //list of countries included in search
    advanced_open: false,
    advanced_search_text: 'Advanced Search',
    show_results: false, //show the cards of the search results
    loading_results: true, //show a loading icon while results load
    search_results: {
      COUNT: 0,
      ITEMS: [
        {
          title: 'Test Movie',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie2',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie3',
          rating: '6.5',
          released: '2021',
          type: 'series',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie4',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie2',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie3',
          rating: '6.5',
          released: '2021',
          type: 'series',
          image: 'https://www.fillmurray.com/200/300'
        },
        {
          title: 'Test Movie4',
          rating: '6.5',
          released: '2021',
          type: 'movie',
          image: 'https://www.fillmurray.com/200/300'
        }
      ]
    }
  }

  //handle opening the form to perform an advanced search with more fields to type in
  handleAdvancedSearch = (ev) => {
    //toggle the showing of the advanced search form
    this.setState({advanced_open: (this.state.advanced_open ? false : true)})
    this.setState({advanced_search_text: (this.state.advanced_open ? 'Advanced Search' : 'Basic Search')})
    ev.preventDefault();
  }

  //passed down to the advanced form child component to update the parent state.
  updateState = (name, val) => {
    this.setState({[name]: val})
  }

  //handle typing in the form
  handleInput = (ev) => {
    this.setState({query: ev.target.value})
  }

  //Send the API request to the backend
  handleSubmit = (ev) => {
    console.log('Button working');
    console.log(this.state.query);

    fetch(`${BASE_URL}/search`, {
      headers: {"Content-Type": "application/json; charset=utf-8"},
      method: 'POST',
      body: JSON.stringify({
        query: this.state.query,
        high_nfr: this.state.high_nfr,
        low_nfr: this.state.low_nfr,
        high_imdb: this.state.high_imdb,
        low_imdb: this.state.low_imdb,
        subtitles: this.state.subtitles,
        audio: this.state.audio,
        from_year: this.state.from_year,
        to_year: this.state.to_year,
        sort_by: this.state.sort_by,
        type: this.state.type,
        genre_id: this.state.genre_id,
        page: this.state.page,
        country_list: this.state.country_list
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(JSON.parse(data.result));
      this.setState({search_results: JSON.parse(data.result)})
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
          <button onClick={this.handleAdvancedSearch}>{this.state.advanced_search_text}</button>
          {
            this.state.advanced_open && <AdvancedForm updateParentState={this.updateState}/>
          }
        </form>
        <hr/>
        <h2>Results: {this.state.search_results.COUNT}</h2>
        <Container>
          <Row>
            {
              this.state.search_results.ITEMS.map(result => (
                <Col xs='3'>
                  <ResultCard data={result}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    )//return
  }//render
}//class Landing

export default Landing
