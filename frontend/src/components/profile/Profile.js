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
import Results from './Results'
import BioTest from './BioTest'

class Profile extends Component {

  nextStep = (param, type) => {
    this.props.nextStep(param, type)
  }

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  render(){
    const {person, aspirations, achievements, experiences, education, jobs, strengths} = this.props.profile
    const {aditionalData, step, type} = this.props
    return(
      <Fragment>
        {
          step > 1 && step < 5 ?
            <PersonTest person={person}
              param1={aditionalData.param1} 
              param2={aditionalData.param2}
              nextStep={(param) => this.nextStep(param)}
              step={step} shuffle={(a)=> this.shuffle(a)}/>
          :
          step === 5 ?
            <BioTest data={this.props.profile[type]}
              param1={aditionalData.param1} 
              param2={aditionalData.param2}
              nextStep={(param, type) => this.nextStep(param, type)}
              type={type} shuffle={(a)=> this.shuffle(a)}/>
          :
            <Fragment>
              {
                step === -1 ?
                  <Results person={person} 
                    param1={aditionalData.param1} 
                    param2={aditionalData.param2}
                    nextStep={(param) => this.nextStep(param)}
                    step={step}/>
                :
                  <Timer firstStep={(params) => this.nextStep(params)}/>
              }
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