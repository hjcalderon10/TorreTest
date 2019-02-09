import React, { Fragment, Component } from 'react'
import JobElement from './JobElement'

class Jobs extends Component{

  render(){
    const jobs = this.props.jobs
    return(
      <Fragment>
        {
          jobs.length < 1 ?
          <Fragment/>
          :
          jobs.map((element, i) => {
            return <JobElement key={i} element={element}/>
         })
        }
      </Fragment>
    )
  }
}


export default Jobs