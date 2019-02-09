import React, { Component } from 'react'
import './App.css'
import {Server} from './helpers/server'
import { Link } from 'react-router-dom'
import Profile from './components/profile/Profile'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      profile: null,
      step:0,
      aditionalData: {}
    }
  }

  startGame = () => {
    {
      Server.startGame()
        .then(data => {
          this.setState({profile: data})
        })
    }
  }

  nextStep = () => {
    {
      Server.nextStep()
        .then(data => {
          console.log(data)
          this.setState({
            step: data.step,
            aditionalData: data.data
          })
        })
    }
  }

  render() {
    return (
    <div className="App">
    {
      this.state.profile === null ? 
          <header className="App-header">
            <p>
              Welcome! this' a little game to test your memory, click on to Start and pay attention!
            </p>
            <p>
              You will have 30 seconds to see as much as possible for the profile in the screen.
              Then, you will see how much you learn for this specific person.
            </p>
            <p>
              Wish u luck!
            </p>
            <Link
              className="App-link"
              to ="/"
              onClick={() => this.startGame()}>
              Start
            </Link>
          </header>
        
      :
        <Profile profile={this.state.profile} nextStep={() => this.nextStep()} 
          step={this.state.step} aditionalData={this.state.aditionalData}/>
      }
      </div>
    )
  }
}

export default App
