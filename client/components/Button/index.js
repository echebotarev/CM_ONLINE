import React, { Component } from 'react'

class Button extends Component {
	render() {
		return(
			<input value={this.props.button.text} type="button"/>
		)
	}
}

export default Button