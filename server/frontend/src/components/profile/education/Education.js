import React, { Fragment, Component } from 'react'
import EducationElement from './EducationElement'
import '../../css/education.css'

class Education extends Component{

  render(){
    const education = this.props.education
    return(
      <div className='education'>
        {
          education.length < 1 ?
          <Fragment/>
          :
          <Fragment>
            <h2> Last but not least... my Education was </h2>
            <div className='education_elements'>
               {
                  education.map((element, i) => {
                  return <EducationElement key={i} element={element}/>
                 })
                }
            </div>
          </Fragment>
        }
      </div>
    )
  }
}


export default Education