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

        <div className="d-flex justify-content-center">
          <div className="imgFluid">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/W7zuGbD.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="textStyle">Redwood National Park</h3>
                  <p style={pStyle}>Don't skip those parks! You'll see lots of old growth.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/1cyvTeP.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className="textStyle">Camping at Lake Tahoe</h3>
                  <p style={pStyle}>A nice place to meet with friends ! </p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
    );
  }
}
export default CarouselPage;
