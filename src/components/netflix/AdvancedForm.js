import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class AdvancedForm extends React.Component{

  state = {
    high_nfr: 5,
    low_nfr: 0,
    high_imdb: 10,
    low_imdb: 0,
    subtitles: 'Any',
    audio: 'Any',
    from_year: 1900,
    to_year: 2021,
    sort_by: 'Relevance',
    type: 'Any'
  }



  handleInput = (ev) => {
    let value = ev.target.value;
    switch(ev.target.name){
      case 'high_nfr':
        value = parseInt(value);
        this.setState({high_nfr: value})
        break;
      case 'low_nfr':
        value = parseInt(value);
        this.setState({low_nfr: value})
        break;
      case 'high_imdb':
        value = parseInt(value);
        this.setState({high_imdb: value})
        break;
      case 'low_imdb':
        value = parseInt(value);
        this.setState({low_imdb: value})
        break;
      case 'subtitles':
        this.setState({subtitles: value})
        break;
      case 'audio':
        this.setState({audio: value})
        break;
      case 'from_year':
        value = parseInt(value);
        this.setState({from_year: value})
        break;
      case 'to_year':
        value = parseInt(value);
        this.setState({to_year: value})
        break;
      case 'sort_by':
        this.setState({sort_by: value})
        break;
      case 'type':
        this.setState({type: value})
        break;
    }
    this.props.updateParentState(ev.target.name, value);
  }

  render(){
    return(
      <div>
        <label for='high_nfr'>Maximum Netflix Score: {this.state.high_nfr}</label>
        <input
          onChange={this.handleInput}
          name='high_nfr'
          type='range'
          min='0'
          max='5'
          value={this.state.high_nfr}/>
        <br/>
        <label for='low_nfr'>Lowest Netflix Score: {this.state.low_nfr}</label>
        <input
          onChange={this.handleInput}
          name='low_nfr'
          type='range'
          min='0'
          max='5'
          value={this.state.low_nfr}/>
        <br/>

        <label for='high_imdb'>Highest IMDB Score: {this.state.high_imdb}</label>
        <input
          onChange={this.handleInput}
          name='high_imdb'
          type='range'
          min='0'
          max='10'
          value={this.state.high_imdb}/>
        <br/>

        <label for='low_imdb'>Lowest IMDB Score: {this.state.low_imdb}</label>
        <input
          onChange={this.handleInput}
          name='low_imdb'
          type='range'
          min='0'
          max='10'
          value={this.state.low_imdb}/>
        <br/>

        <label for='subtitles'>Subtitles</label>
        <input
          onChange={this.handleInput}
          name='subtitles'
          type='text'
          value={this.state.subtitles}/>
        <br/>

        <label for='audio'>Spoken Language</label>
        <input
          onChange={this.handleInput}
          name='audio'
          type='text'
          value={this.state.audio}
          />

        <br/>

        <label for='from_year'>Earliest Searched Year: {this.state.from_year}</label>
        <input
          onChange={this.handleInput}
          name='from_year'
          type='range'
          min='1900'
          max='2021'
          value={this.state.from_year}/>
        <br/>
        <label for='to_year'>Latest Searched Year: {this.state.to_year}</label>
        <input
          onChange={this.handleInput}
          name='to_year'
          type='range'
          min='1900'
          max='2021'
          value={this.state.to_year}/>
        <br/>

        <label for='sort_by'>Sort By: </label>
        <select
          onChange={this.handleInput}
          name='sort_by'>
          <option value='Relevance'>Relevance</option>
          <option value='Date'>Date</option>
          <option value='Rating'>Rating</option>
          <option value='Title'>Title</option>
          <option value='VideoType'>Video Type</option>
          <option value='FilmYear'>Film Year</option>
          <option value='Runtime'>Runtime</option>
        </select>
        <br/>
        <label for='type'>Movie/Series</label>
        <select
          onChange={this.handleInput}
          name='type'>
          <option value='Any'>Any</option>
          <option value='Movie'>Movie</option>
          <option value='Series'>Series</option>
        </select>


      </div>
    )//return
  }//render
}//class AdvancedForm

export default AdvancedForm
