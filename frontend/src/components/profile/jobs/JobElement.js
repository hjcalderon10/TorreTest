import React, { Component, Fragment } from 'react'

class JobElement extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p>
          <span className='Subtitles'> Role: </span>
          <span className='values'> {information.role ? information.role : `Uhmmm, suspicious...`} </span>
        </p>
        <p>
          <span className='Subtitles'> Organization: </span>
          <span className='values'> {information.organizations.length > 0 ? information.organizations[0].name 
            : `We don't have a clue where this job came from`} </span>
        </p>
      </Fragment>
    )
  }
}


export default JobElement