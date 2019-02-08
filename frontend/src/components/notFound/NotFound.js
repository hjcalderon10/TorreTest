import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//import '../styles/NotFound.css'

class NotFound extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
			    <h1>¡Woops, Wrong path!</h1>
			    <p>Seems like you lost your track.</p>
			    <p>Let's take a step <Link to='/'>back!</Link></p>
			</div>
		)
	}
}


export default NotFound