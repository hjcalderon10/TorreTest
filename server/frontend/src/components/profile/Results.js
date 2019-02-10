import React, { Fragment, Component } from 'react'
import '../css/results.css'

class Results extends Component{

  answers = (text, array) => {
    if(!array.length){
      return(
        <p> You don't get any answer I can't show something! </p>
      )
    }
    else{
      return(
        array.map((element, i) => {
          let [name, value] = element.split('$')
          if(value.includes('https')){
            value = <img className='profile_img' src={value} alt='this should be a valid img :c'/>
          }
          return (<p key={i}> for {name} {text} {value} </p>)
        })
      )
    }
  }

  render(){
    console.log(this.props)
    let {correctAnswers, wrongAnswers} = this.props.data
    return(
      <Fragment>
        <h1> Here are your answers! </h1>
        <br/>
        <h2> Right answers! </h2>
        <div className='right_answers'>
          {this.answers('you got correctly', correctAnswers)}
        </div>
        <br/>
        <h2> Wrong answers! </h2>
        <div className='wrong_answers'>
          {this.answers('you got badly', wrongAnswers)}
        </div>
        <br/><br/><br/>
        <h2> Look again, down here is the profile! </h2>
      </Fragment>
    )
  }
}

export default Results