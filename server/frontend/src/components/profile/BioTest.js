import React, { Fragment, Component } from 'react'
import '../css/BioTest.css'

class BioTest extends Component{

  render(){
    let array = []
    let {data, type} = this.props
    array.push(data.length)
    array.push(this.props.param1)
    array.push(this.props.param2)
    array = this.props.shuffle(array)
    return(
      <Fragment>
        <h2> Time to see if you pay attention! how many {type} did you see? </h2>
        <p className='element' onClick={() => this.props.nextStep(array[0], type)}> {array[0]} </p>
        <p className='element' onClick={() => this.props.nextStep(array[1], type)}> {array[1]} </p>
        <p className='element' onClick={() => this.props.nextStep(array[2], type)}> {array[2]} </p>
      </Fragment>
    )
  }
}


export default BioTest