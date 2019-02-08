import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import NotFound from './components/notFound/NotFound.js'

class Main extends Component{

	render(){
		return(
			<div className='Main'>
				<Switch>
					<Route exact path='/' component={App}/>
      		<Route path='*' component={NotFound}/>
    		</Switch>
			</div>
			)
	}
}

export default Main