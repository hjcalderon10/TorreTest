import React, { Fragment, Component } from 'react'
import StrengthElement from './StrengthElement'
import '../../css/strengths.css'

class Strengths extends Component{

  render(){
    const strengths = this.props.strengths
    return(
      <div className='strengths'>
        {
          strengths.length < 1 ?
          <Fragment/>
          :
          <Fragment>
            <h1> My strengths are...</h1>
            <div className='strength_elements'>
            {
              strengths.map((element, i) => {
                return <StrengthElement key={i} element={element}/>
              })
            }
            </div>
          </Fragment>
        }
      </div>
    )
  }
}

export default Strengths