import React, { Fragment, Component } from 'react'

class PersonTest extends Component{

  optionSelected = (optionSelected) => {
    this.props.nextStep(optionSelected)
  }

  renderImg = (array) => {
    return(
      <Fragment>
        <img className='profile_img' src={array[0]} alt='this should be a valid image :c' 
          onClick={() => this.optionSelected(array[0])}/>
        <img className='profile_img' src={array[1]} alt='this should be a valid image :c' 
          onClick={() => this.optionSelected(array[1])}/>
        <img className='profile_img' src={array[2]} alt='this should be a valid image :c' 
          onClick={() => this.optionSelected(array[2])}/>
      </Fragment>
    )
  }
  renderName = (array) => {
    return(
      <Fragment>
        <p className='name' onClick={() => this.optionSelected(array[0])}> {array[0]} </p>
        <p className='name' onClick={() => this.optionSelected(array[1])}> {array[1]} </p>
        <p className='name' onClick={() => this.optionSelected(array[2])}> {array[2]} </p>
      </Fragment>
    )
  }
  renderHeadline = (array) => {
    return(
      <Fragment>
        <p className='headline' onClick={() => this.optionSelected(array[0])}> {array[0]} </p>
        <p className='headline' onClick={() => this.optionSelected(array[1])}> {array[1]} </p>
        <p className='headline' onClick={() => this.optionSelected(array[2])}> {array[2]} </p>
      </Fragment>
    )
  }

  render(){
    let array = []
    let {step} = this.props
    let actualRender
    let actualItem
    if(step === 2){
      actualItem = 'picture'
      actualRender = this.renderImg
    }
    else if(step === 3){
      actualItem = 'name'
      actualRender = this.renderName
    }
    else{
      actualItem = 'professionalHeadline'
      actualRender = this.renderHeadline
    }
    array.push(this.props.person[actualItem])
    array.push(this.props.param1)
    array.push(this.props.param2)
    array = this.props.shuffle(array)
    return actualRender(array)
  }

}


export default PersonTest