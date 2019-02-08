import React, { Component, Fragment } from 'react'

class AspirationElement extends Component{

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
      </Fragment>
    )
  }

}


export default AspirationElement