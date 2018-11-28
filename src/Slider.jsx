import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import Jumbotron from './images/Jumbotron.jpg';

class Carousel extends Component {
  render() {
    return (
      <div>
        <Slider
          fullscreen={true}
          indicators={false}>
          <Slide
            src={Jumbotron}
            title="This is our big Tagline!"
            placement="right">
            Here's our small slogan.
          </Slide>
          <Slide
            src={Jumbotron}
            title="Left aligned Caption"
            placement="left">
            Here's our tiny slogan.
          </Slide>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
