import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const textStyle = 
{
  fontSize:'250%',
  fontWeight:'bold',
  textShadow:'2px 2px black',
  color:'white',
  marginTop:'150px'
};
const textStyle2=
{
  color:'white',
  textShadow:'2px 2px black',
  fontStyle:'italic',
  marginTop:'20px'
};

class JumbotronPage extends Component {

  render(){
    return(
        <div className="divfluid">
            <Jumbotron className="jumbotronfluid">
              <p style={textStyle}>We love Camping</p>
              <p style={textStyle2}>
              “If you have never spent a night under the stars, then you have never truly lived.” Joey Holmes
              </p>
              <p style={{marginTop:'40px'}}>
                <Button variant="danger">New Adventure</Button>
              </p>
            </Jumbotron>
        </div>
    );
  }
}
export default JumbotronPage;