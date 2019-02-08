import React, { Component } from 'react'

class Aspirations extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const aspirations = this.props.aspirations
    return(
      <div>
        {
          aspirations.length < 1 ?
          null
          :
         <p> aspirations </p>
        }
      </div>
    )
  }

}


export default Aspirations