import React, { Component } from 'react'
import '../css/profile.css'
import Person from './person/Person'
import Aspirations from './aspirations/Aspirations'
import Achievements from './achievements/Achievements'
import Experiences from './experiences/Experiences'
import Jobs from './jobs/Jobs'
import Education from './education/Education'

class Profile extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const {person, aspirations, achievements, experiences, education, jobs} = this.props.profile
    return(
      <div>
        <Person person={person}/>
        <Aspirations aspirations={aspirations}/>
        <Achievements achievements={achievements}/>
        <Experiences experiences={experiences}/>
        <Jobs jobs={jobs}/>
        <Education education={education}/>
      </div>
    )
  }

}

export default Profile