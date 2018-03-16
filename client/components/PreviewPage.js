import React, { Component } from 'react'

import ImageUpload from './ImageUpload'
import ButtonList from './ButtonList'

class PreviewPage extends Component {

	render() {
		return (
			<div className="main">
				<ImageUpload />
				<ButtonList />
			</div>
		)
	}
}

export default PreviewPage