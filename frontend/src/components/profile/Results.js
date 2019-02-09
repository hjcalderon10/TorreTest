import React, { Fragment, Component } from 'react'

class Results extends Component{

  answers = (text, array) => {
    if(!array.length){
      return(
        <p> You don't get any answer as this! </p>
      )
    }
    else{
      return(
        array.map((element, i) => {
          let [name, value] = element.split('$')
          if(value.includes('https')){
            value = <img className='profile_img' src={value} alt='this should be a valid image :c'/>
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
        <p> Here are your answers! </p>
        <p> Right answers! </p>
        {this.answers('you got correctly', correctAnswers)}
        <p> Wrong answers! </p>
        {this.answers('you got badly', wrongAnswers)}
      </Fragment>
    )
  }
}

export default Results