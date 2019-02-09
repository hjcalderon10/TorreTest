import React, { Component, Fragment } from 'react'

class AchievementElement extends Component{
  
  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p><span className='subtitles'> Name: </span> 
        <span className='values'> {information.name ? information.name : `There's no name to display =(` } </span>
        </p>
        <p>
          <span className='subtitles'> Organization: </span> 
          <span className='values'> {information.organization ? information.organization.name 
            : `We don't really know where this achievement was acquired` } </span>
        </p>
      </Fragment>
    )
  }

}


export default AchievementElement