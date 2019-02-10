import React, { Component, Fragment } from 'react'

class AspirationElement extends Component{

  render(){
    const information = this.props.element
    return(
      <Fragment>
        <p>
          <span className='values'> {information.name ? information.name : `This' nothing.. is this a real aspiration?`} </span>
        </p>
      </Fragment>
    )
  }

}


export default AspirationElement