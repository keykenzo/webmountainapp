import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const pStyle=
{
  fontWeight:'bold',
  color:'white',
  textShadow:'1px 1px black'
};


class CarouselPage extends Component {
  render(){
    return(
        <div className="d-flex justify-content-center" style={{margin:'10px',marginTop:'30px'}}>
          <Carousel>

            <Carousel.Item>
                <img
                src="https://i.imgur.com/W7zuGbD.png"
                alt="First slide"
                className="img-fluid imgFluid"
                />
                <Carousel.Caption>
                <h2 className="textStyle">Redwood National Park</h2>
                <p style={pStyle}>Don't skip those parks! You'll see lots of old growth.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            {/*<Carousel.Item>
                <img
                src="https://i.imgur.com/1cyvTeP.png"
                alt="Second slide"
                className="img-fluid imgFluid"
                />
                <Carousel.Caption>
                <h2 className="textStyle">Camping at Lake Tahoe</h2>
                <p style={pStyle}>A nice place to meet with friends ! </p>
                </Carousel.Caption>
            </Carousel.Item>*/}

          </Carousel>
        </div>
    );
  }
}
export default CarouselPage;