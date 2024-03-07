// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isChange: true}

  changeMode = () => {
    this.setState(prevState => ({isChange: !prevState.isChange}))
  }

  render() {
    const {isChange} = this.state
    const classname = isChange ? 'dark-mode' : 'light-mode'
    const text = isChange ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`container ${classname}`}>
          <h1 className={`title ${classname}`}>Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
