import React, { Fragment, Component } from 'react'
import AspirationElement from './AspirationElement'
import '../../css/aspirations.css'

class Aspirations extends Component{

  render(){
    const aspirations = this.props.aspirations
    return(
      <div className='aspirations'>
        {
          aspirations.length < 1 ?
          <Fragment/>
          :
          <Fragment>
            <h1> My aspirations are...</h1>
            <div className='aspiration_elements'>
            {
              aspirations.map((element, i) => {
              return <AspirationElement key={i} element={element}/>
            })}
            </div>
          </Fragment>
        }
      </div>
    )
  }

}


export default Aspirations