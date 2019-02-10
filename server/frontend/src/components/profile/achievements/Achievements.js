import React, { Fragment, Component } from 'react'
import AchievementElement from './AchievementElement'
import '../../css/achievement.css'

class Achievements extends Component{

  render(){
    const achievements = this.props.achievements
    return(
      <div className='achievements'>
        {
          achievements.length < 1 ?
          <Fragment/>
          :
          <Fragment>
            <h1> You could just say this' nothing, but I'm proud for...</h1>
            <div className='achievement_elements'>
            {
              achievements.map((element, i) => {
                return <AchievementElement key={i} element={element}/>
              })
            }
            </div>
          </Fragment>
        }
      </div>
    )
  }

}


export default Achievements