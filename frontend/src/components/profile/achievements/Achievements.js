import React, { Component } from 'react'

class Achievements extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const achievements = this.props.achievements
    return(
      <div>
        {
          achievements.length < 1 ?
          null
          :
          <p> Achievements </p>
        }
      </div>
    )
  }

}


export default Achievements