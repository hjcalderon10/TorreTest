import React, { Component, Fragment } from 'react'

class EducationElement extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p>
          <span className='Subtitles'> Name: </span>
          <span className='values'> {information.name ? information.name : `This' a real title?`} </span>
        </p>
        <p>
          <span className='Subtitles'> Institution: </span>
          <span className='values'> {information.organizations ? information.organizations[0].name 
            : `We don't have a clue where this title came from`} </span>
        </p>
      </Fragment>
    )
  }

}


export default EducationElement