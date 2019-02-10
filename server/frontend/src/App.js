import React, { Component } from 'react'
import './App.css'
import {Server} from './helpers/server'
import { Link } from 'react-router-dom'
import Profile from './components/profile/Profile'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      profile: null,
      step: 0,
      aditionalData: {},
      type: ''
    }
  }

  startGame = () => {
    Server.startGame()
      .then(data => {
        this.setState({profile: data})
      })
  }

  nextStep = (params, type) => {
    if(type === undefined) { type='nothing to show'}
    Server.nextStep(params, type)
      .then(data => {
        console.log(data)
        this.setState({
          step: data.step,
          aditionalData: data.data,
          type: data.type
        })
      })
  }

  render() {
    return (
    <div className='App'>
    <CssBaseline/>
      <Grid >
      {
        this.state.profile === null ? 
            <header className='App-header'>
              <p>
                Welcome! this' a little game to test your memory, click on to Start and pay attention!
              </p>
              <p className='App-subtitle'>
                You will have 30 seconds to see as much as possible for the profile in the screen.
                Then, you will see how much you learn for this specific person.
              </p>
              <Link
                className='App-link'
                to ='/'
                onClick={() => this.startGame()}>
                Start
              </Link>
              
              <p className='App-subsubtitle'>
                Wish u luck!
              </p>
            </header>
          
        :
          <Profile profile={this.state.profile} nextStep={(params, type) => this.nextStep(params, type)} 
            step={this.state.step} aditionalData={this.state.aditionalData} type={this.state.type}/>
        }
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(App)
