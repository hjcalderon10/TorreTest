import React, { Component, Fragment } from 'react'

class EducationElement extends Component{

  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p>
          <span className='Subtitles'> I got the  </span>
          <span className='values'> {information.name ? information.name : `This' a real title?`} </span>
        </p>
        <p>
          <span className='Subtitles'> in  </span>
          <span className='values'> {information.organizations.length > 0 ? information.organizations[0].name 
            : `We don't have a clue where this title came from`} </span>
        </p>
      </Fragment>
    )
  }

}


export default EducationElement