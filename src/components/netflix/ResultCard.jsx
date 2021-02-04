import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Card} from 'react-bootstrap'

class ResultCard extends React.Component{

  //function to capitalise any words that need it.
  capitaliseFirstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }


  render(){

    //Video types arne't capital by default so this fixes that.
    let videoType = this.capitaliseFirstLetter(this.props.data.type);

    return(
      <Card style={{width: '15rem', mb: '15px'}}>
        <Card.Img src={this.props.data.image}/>
        <Card.Body>
          <Card.Title>
            {this.props.data.title} {this.props.data.released}
          </Card.Title>
          <Card.Subtitle>
            {videoType} {this.props.data.rating}/10
          </Card.Subtitle>
        </Card.Body>
      </Card>

    )//return
  }//render
}//class Card

export default ResultCard
