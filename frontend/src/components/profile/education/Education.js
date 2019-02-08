import React, { Fragment, Component } from 'react'
import EducationElement from './EducationElement'

class Education extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const education = this.props.education
    return(
      <Fragment>
        {
          education.length < 1 ?
          <Fragment/>
          :
         education.map((element, i) => {
          return <EducationElement key={i} element={element}/>
         })
        }
      </Fragment>
    )
  }
}


export default Education