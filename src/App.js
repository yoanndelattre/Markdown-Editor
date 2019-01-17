import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              value={sampleText}
              className='form-control'
              rows="35">
            </textarea>
          </div>
          <div className="col-sm-6">
            <div>
              {sampleText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
