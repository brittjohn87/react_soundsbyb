import React, { Component } from 'react';
import Carousel from './Slider';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
