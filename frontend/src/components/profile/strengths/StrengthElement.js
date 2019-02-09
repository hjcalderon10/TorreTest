import React, { Component, Fragment } from 'react'

class StrengthElement extends Component{

  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p>
          <span className='Subtitles'> Strength: </span>
          <span className='values'> {information.name ? information.name : `How nothing could be a strength?`} </span>
        </p>
      </Fragment>
    )
  }

}


export default StrengthElement