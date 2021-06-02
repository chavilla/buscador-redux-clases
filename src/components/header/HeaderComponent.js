import { Component } from 'react';
import HeaderTemplate from './HeaderTemplate';

class HeaderComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: 'Jesús'
		}
	}

	render(){
		return(
			<HeaderTemplate 
				state= { this.state }
			/>
		)
	}

}

export default HeaderComponent;