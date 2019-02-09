import React, { Fragment, Component } from 'react'
import StrengthElement from './StrengthElement'

class Strengths extends Component{

  render(){
    const strengths = this.props.strengths
    return(
      <Fragment>
        {
          strengths.length < 1 ?
          <Fragment/>
          :
          strengths.map((element, i) => {
            return <StrengthElement key={i} element={element}/>
         })
        }
      </Fragment>
    )
  }
}

export default Strengths