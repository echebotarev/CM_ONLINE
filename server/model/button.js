import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Button = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	type: String,
	text: {
		default: 'Новая кнопка',
		type: String
	},
	link: String,
	style: {
		background: {
			default: 'rgb(56, 153, 236)',
			type: String
		},
		color: {
			default: '#fff',
			type: String
		},
		padding: Number,
		fontSize: Number,
		textAlign: {
			default: 'center',
			type: String
		},
		boxShadow: String,
		border: String,
		borderRadius: String
	},
	template: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Template'
	},
	templatesButton: String
});

module.exports = mongoose.model('Button', Button);