import React, { Component } from 'react'
import './App.css'
import {Server} from './helpers/server'
import { Link } from 'react-router-dom'
import Profile from './components/profile/Profile'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      profile: null
    }
  }

  startGame = () => {
    {Server.startGame()
      .then(data => {
        this.setState({profile: data})
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
            <Link
              className="App-link"
              to ="/"
              onClick={() => this.startGame()}>
              Start
            </Link>
          </header>
        
      :
        <Profile profile={this.state.profile}/>
      }
      </div>
    )
  }
}

export default App
