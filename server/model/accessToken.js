import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AccessToken = new Schema({
	userId: {
		type: String,
		required: true
	},

	clientId: {
		type: String,
		required: true
	},

	token: {
		type: String,
		unique: true,
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model('AccessToken', AccessToken);