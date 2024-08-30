import {Component} from 'react'
import './index.css'
import Emojis from './Emojis'

class Feedback extends Component {
  state = {sad: false}

  isHappy = id => {
    const {sad} = this.state
    if (id === 2) {
      this.setState({sad: true})
    }
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {sad} = this.state
    return (
      <div className="bg-container">
        {sad ? (
          <div className="card-container">
            <img className="emojies" src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p>
              We Will use your feedback to imporve our customer support
              performance.
            </p>
          </div>
        ) : (
          <div className="card-container">
            <h1 className="statement">
              How satisfied are you with our customer support performance ?
            </h1>
            <ul className="emojies-container">
              {emojis.map(each => (
                <Emojis obj={each} key={each.id} isHappy={this.isHappy} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
