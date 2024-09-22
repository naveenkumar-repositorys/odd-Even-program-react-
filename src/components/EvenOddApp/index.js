// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  typeOfCountIs = () => {
    const {count, isEven} = this.state

    if (count % 2 === 0) {
      return <p className="evenEl">"Count is Even"</p>
    }
    return <p className="oddEl">Count is Odd</p>
  }

  countIncrease = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    if (randomNumber % 2 === 0) {
      this.setState({isEven: true, count: randomNumber})
    }
    this.setState({isEven: false, count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="cardContainer">
          <h1 className="headEl">Count: {count}</h1>
          {this.typeOfCountIs()}
          <button
            className="increment-btn"
            onClick={this.countIncrease}
            type="button"
          >
            Increment
          </button>
          <p className="message-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
