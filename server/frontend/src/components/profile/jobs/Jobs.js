import React, { Fragment, Component } from 'react'
import JobElement from './JobElement'
import '../../css/job.css'

class Jobs extends Component{

  render(){
    const jobs = this.props.jobs
    return(
      <div className='jobs'>
        {
          jobs.length < 1 ?
          <Fragment/>
          :
          <Fragment>
            <h1> At this age, I have worked in...</h1>
            <div className='job_elements'>
            {
              jobs.map((element, i) => {
                return <JobElement key={i} element={element}/>
              })
            }
            </div>
          </Fragment>
        }
      </div>
    )
  }
}


export default Jobs