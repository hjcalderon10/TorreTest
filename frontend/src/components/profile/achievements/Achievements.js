import React, { Component } from 'react'
import AchievementElement from './AchievementElement'

class Achievements extends Component{

  render(){
    const achievements = this.props.achievements
    return(
      <div>
        {
          achievements.length < 1 ?
          null
          :
          achievements.map((element, i) => {
            return <AchievementElement key={i} element={element}/>
         })
        }
      </div>
    )
  }

}


export default Achievements