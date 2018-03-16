import React, { Component } from 'react'
import { connect } from 'react-redux'

import FA from 'react-fontawesome'
import styles from './styles.scss'

class ImageUpload extends Component {
	state = {
		file: '',
		imagePreviewUrl: ''
	};

	render() {
		let {imagePreviewUrl} = this.state;
		let imagePreview = null;
		if (imagePreviewUrl) {
			imagePreview = (<img src={imagePreviewUrl} alt={this.state.file.name}/>);
		} else {
			imagePreview = (<FA name="camera-retro" />)
		}

		return (
			<div className="previewComponent">
				<form className="displaynone" onSubmit={(e)=>this.handleSubmit(e)}>
					<input id="fileInput" className="fileInput"
					       type="file"
					       onChange={(e)=>this.handleImageChange(e)} />
					<button className="submitButton"
					        type="submit"
					        onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
				</form>
				<div onClick={this.handleClick}
				     className={
					     imagePreviewUrl ?
						     styles.logoPreviewWithImg :
						     styles.logoPreview
				     }
				     data-tip={
					     imagePreviewUrl ?
						     "Выберите другой" :
						     "Добавьте логотип"
				     }
					>
					{imagePreview}
				</div>
			</div>
		)
	}

	handleClick = () => {
		console.log('YAPPP!');
		// TODO проверить, чтобы click работал везде
		document.getElementById('fileInput').click();
	};

	handleSubmit = e => {
		e.preventDefault();
		// TODO: do something with -> this.state.file
		console.log('handle uploading-', this.state.file);
	};

	handleImageChange = e => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			console.log('reader', reader);
			console.log('target', file);

			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		};

		reader.readAsDataURL(file)
	}
}

// 1. на вход получает весь Store
// 2. значения возвращенные из этой функции добавляются в this.props компонента
// 3. благодаря connect'у в this.props добавляется this.props.dispatch
//    в dispatch надо передавать action
/*const mapStateToProps = (state) => ({
	buttons: state.buttons
});*/

export default connect(null)(ImageUpload)