import React, { Component } from 'react'

class Person extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const {name, picture, email, location, professionalHeadline, weight} = this.props.person
    return (
      <div>
        <img className='profile_img' src={picture}/>
        <div className='userName'> {name} </div>
        <div className='email'> {email} </div>
        <div className='location'> {location} </div>
        <div className='title'> {professionalHeadline} </div>
        <div className='weight'> {weight} </div>
      </div>
      )
  }

}


export default Person