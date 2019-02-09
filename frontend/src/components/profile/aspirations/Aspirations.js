import React, { Fragment, Component } from 'react'
import AspirationElement from './AspirationElement'

class Aspirations extends Component{

  render(){
    const aspirations = this.props.aspirations
    return(
      <Fragment>
        {
          aspirations.length < 1 ?
          <Fragment/>
          :
          aspirations.map((element, i) => {
            return <AspirationElement key={i} element={element}/>
         })
        }
      </Fragment>
    )
  }

}


export default Aspirations