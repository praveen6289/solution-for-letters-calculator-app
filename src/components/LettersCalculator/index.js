// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeInputPhrase = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="letters-calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-search-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                className="search-input"
                placeholder="Enter the Phrase"
                value={inputText}
              />
            </div>
            <p className="letters-count">No.of letters: {inputText.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
