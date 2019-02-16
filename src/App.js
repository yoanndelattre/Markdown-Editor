import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import marked from 'marked';

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    }
    else  {
      this.setState ({ text: sampleText })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  rendertext = text => {
    const __html = marked(text, { sanitize: true })
    return{ __html }
  }

  handleClear = () => {
    console.log('clear')
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange} 
              value={this.state.text}
              className='form-control'
              rows="35">
            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.rendertext(this.state.text) }>
            </div>
          </div>
        </div>
        <a className='report-problem' href="mailto:contact@yoanndelattre.com">Report a Problem</a>
        <button className="clear-text-cache" onClick={this.handleClear}>Clear Text Cache</button>
      </div>
    );
  }
}

export default App;
