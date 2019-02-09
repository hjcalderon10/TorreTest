import React, { Fragment, Component } from 'react'

class PersonTest extends Component{

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  imgSelected = (imgSelected) => {
    this.props.nextStep(imgSelected)
  }

  render(){
    let array = []
    array.push(this.props.person.picture)
    array.push(this.props.img1)
    array.push(this.props.img2)
    array = this.shuffle(array)
    return (
      <Fragment>
        <img className='profile_img' src={array[0]} alt='this should be a valid image :c' 
          onClick={() => this.imgSelected(array[0])}/>
        <img className='profile_img' src={array[1]} alt='this should be a valid image :c' 
          onClick={() => this.imgSelected(array[1])}/>
        <img className='profile_img' src={array[2]} alt='this should be a valid image :c' 
          onClick={() => this.imgSelected(array[2])}/>
      </Fragment>
      )
  }

}


export default PersonTest