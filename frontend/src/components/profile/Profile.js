import React, { Fragment, Component } from 'react'
import '../css/profile.css'
import Person from './person/Person'
import PersonTest from './person/PersonTest'
import Aspirations from './aspirations/Aspirations'
import Achievements from './achievements/Achievements'
import Jobs from './jobs/Jobs'
import Education from './education/Education'
import Strengths from './strengths/Strengths'
import Timer from './timer/Timer'

class Profile extends Component {

  constructor(props){
    super(props)
  }

  nextStep = (param) => {
    this.props.nextStep(param)
  }

  render(){
    const {person, aspirations, achievements, experiences, education, jobs, strengths} = this.props.profile
    const {aditionalData, step} = this.props
    return(
      <Fragment>
        {
          step > 1 && step < 5 ?
            <PersonTest person={person} 
              param1={aditionalData.param1} 
              param2={aditionalData.param2}
              nextStep={(param) => this.nextStep(param)}
              step={step}/>
          :
          step === 5 ?
          null
          : 
          step === -1 ?
          null
          :
            <Fragment>
              <Timer firstStep={(params) => this.nextStep(params)}/>
              <Person person={person}/>
              <Aspirations aspirations={aspirations}/>
              <Strengths strengths={strengths}/>
              <Achievements achievements={achievements}/>
              <Jobs jobs={jobs}/>
              <Education education={education}/>
            </Fragment>
        }
      </Fragment>
    )
  }

}

export default Profile