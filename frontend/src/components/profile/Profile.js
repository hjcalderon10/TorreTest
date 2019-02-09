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
    return(
      <Fragment>
        {
          this.props.step === 2 ?
            <PersonTest person={person} 
              img1={this.props.aditionalData.secondImg} 
              img2={this.props.aditionalData.thirdImg}
              nextStep={(param) => this.nextStep(param)}/>
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