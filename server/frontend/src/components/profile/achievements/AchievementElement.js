import React, { Component, Fragment } from 'react'

class AchievementElement extends Component{
  
  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p className='values'> {information.name ? information.name : 
          `There's no name to my achievement to display =(` } </p><br/>
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