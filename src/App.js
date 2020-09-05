import React, {Component, Fragment} from 'react';
import './App.css';
import {sampleText} from './sampleText';
import marked from 'marked';
import CookieAlert from './Cookie-Alert';
import insane from 'insane';

class App extends Component {
  state = {
    text: sampleText,
  }

  componentDidMount() {
    const text = localStorage.getItem('text');
    if (text) {
      this.setState({text});
    } else {
      this.setState({text: sampleText});
    }
  }

  componentDidUpdate() {
    const {text} = this.state;
    localStorage.setItem('text', text);
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({text});
  }

  rendertext = (text) => {
    const __html = insane(marked(text));
    return {__html};
  }

  handleClear = () => {
    this.setState({text: sampleText});
    localStorage.removeItem('text');
  }

  render() {
    return (
      <Fragment>
        <CookieAlert/>
        <div className="container">
          <h1>Markdown Editor</h1>
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
              <div dangerouslySetInnerHTML={this.rendertext(this.state.text)}>
              </div>
            </div>
          </div>
          <a className='report-problem' target="blank" href="https://github.com/yoanndelattre/Markdown-Editor/issues">Report a Problem</a>
          <button className="clear-text-cache" onClick={this.handleClear}>
            Clear Text Cache
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
