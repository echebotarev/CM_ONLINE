import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateItem }            from "../AC"

import { Fill, Border, Text } from './EditorStylePanelItemsContent'

class EditorStyleContent extends Component {
	state = {
		isDraggable: false,
		styleContent: true,

		backgroundColor: 'rgb(7, 97, 219)',
		backgroundOpacity: 1,

		borderColor: 'rgb(0, 0, 0)',
		borderOpacity: 1,
		borderWidth: 0,

		textColor: 'rgb(255, 255, 255)',
		textOpacity: 1
	};

	componentWillMount() {
		let { style } = this.props.button,
			{
				backgroundColor,
				backgroundOpacity,

				borderColor,
				borderWidth,
				borderOpacity,

				textColor,
				textOpacity
			} = style;

		backgroundOpacity = backgroundOpacity * 100;
		borderOpacity = borderOpacity * 100;
		textOpacity = textOpacity * 100;

		this.setState({
			backgroundColor,
			backgroundOpacity,
			borderColor,
			borderOpacity,
			borderWidth,
			textColor,
			textOpacity
		});
	}

	render() {
		return (
			<div
				className={`content category-${this.props.category}`}
			>
				<div className="custom-scroll">
					<div className="outer-container">
						<div className="inner-container">
							<div className="content-wrapper">
								{ this.getContent() }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	getContent = () => {
		switch (this.props.category) {
			case 'fill':
				return <Fill
					onChange = { this.onChange }
					backgroundOpacity = { this.state.backgroundOpacity }
					backgroundColor = { this.state.backgroundColor }
				/>;

			case 'border':
				return <Border
					onChange = { this.onChange }
					borderOpacity = { this.state.borderOpacity }
					borderColor = { this.state.borderColor }
					borderWidth = { this.state.borderWidth }
				/>;

			case 'text':
				return <Text
					onChange = { this.onChange }
					textOpacity = { this.state.textOpacity }
					textColor = { this.state.textColor }
				/>
		}
	};

	onChange = (value, type) => {
		let valueForState;
		if (
			type === 'backgroundOpacity' ||
			type === 'borderOpacity' ||
			type === 'textOpacity'
		) {
			valueForState = value * 100;
		}
		else valueForState = value;

		this.setState({ [type]: valueForState });

		this.props.updateItem({
			id: this.props.id,
			type: 'buttons',
			style: true,
			name: type,
			value
		})
	}
}

export default connect(null, { updateItem })(EditorStyleContent)