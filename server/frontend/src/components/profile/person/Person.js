import React, { Component } from 'react'

class Person extends Component{

  render(){
    const {name, picture, email, location, professionalHeadline, weight} = this.props.person
    return (
      <div className='person_description'>
        <div className='person_img'>
          <img className='profile_img' src={picture} alt='this should be a valid img :c'/>
        </div>
        <div className='personal_information'>
          <p className='user_name'> Hi! My name is <br/> 
          <span className='user_specific_property'> {name} </span></p>
          <p className='title'> I can describe my self as a {professionalHeadline} </p>
          <p className='email'> You can contact me here! {email} </p>
          <p className='location'> Or, maybe you can visit me, I'm in {location} </p>
          <p className='weight'> Just for you to know... I got a lot of strength in my business world,
            just take a look how much weight I have... 
            <span className='user_specific_property'> {weight} </span> </p>
        </div>
      </div>
      )
  }

}


export default Person