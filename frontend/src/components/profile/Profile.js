import React, { Component } from 'react'
import '../css/profile.css'
import Person from './person/Person'
import Aspirations from './aspirations/Aspirations'
import Achievements from './achievements/Achievements'
import Jobs from './jobs/Jobs'
import Education from './education/Education'
import Strengths from './strengths/Strengths'

class Profile extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const {person, aspirations, achievements, experiences, education, jobs, strengths} = this.props.profile
    return(
      <div>
        <Person person={person}/>
        <Aspirations aspirations={aspirations}/>
        <Strengths strengths={strengths}/>
        <Achievements achievements={achievements}/>
        <Jobs jobs={jobs}/>
        <Education education={education}/>
      </div>
    )
  }

}

export default Profile