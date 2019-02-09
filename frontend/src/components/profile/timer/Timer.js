import React, { Fragment, Component } from 'react'


class Timer extends Component {
  
  constructor() {
    super()
    this.state = {  
      seconds: 3
    }
    this.intervalHanlder = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  startTimer() {
    if (this.intervalHanlder === 0 && this.state.seconds > 0) {
      this.intervalHanlder = setInterval(this.countDown, 1000)
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1
    this.setState({
      seconds: seconds,
    })
    
    if (seconds == 0) { 
      clearInterval(this.intervalHanlder)
      this.props.firstStep()
    }
  }

  render() {
    setTimeout(() => this.startTimer(), 1000)
    return(
      <Fragment>
        s: {this.state.seconds}
      </Fragment>
    )
  }
}

export default Timer