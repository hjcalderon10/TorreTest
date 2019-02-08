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
			    <h1>¡Woops, camino equivocado!</h1>
			    <p>Parece que has desviado tu busqueda.</p>
			    <p>To begin click <Link to='/'>Back to Back</Link></p>
			</div>
		)
	}
}


export default NotFound