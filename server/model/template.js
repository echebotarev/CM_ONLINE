import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Template = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	displayName: {
		default: 'Новый шаблон',
		type: String
	},
	logotypePicture: String,
	backgroundColor: {
		default: '#fff',
		type: String
	},
	font: String,
	link: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Template', Template);
