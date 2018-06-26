import User from './../model/user';
import express from 'express';
const router = express.Router();

router.get('/:verifyEmailToken', async (req, res) => {

	let user = await User.findOne({
		verifyEmailToken: req.params.verifyEmailToken
	});

	if (!user) {
		return res
			.status(404)
			.json({
				auth: false,
				username: null,
				message: 'Ссылка подтверждения недействительна или устарела.'
			});
	}

	let redirect = user.verifyEmailRedirect || '/';
	delete user.verifyEmailRedirect;

	user.verifiedEmailsHistory.push({ date: new Date(), email: user.email });

	if (!user.verifiedEmail) {

		user.verifiedEmail = true;
		delete user.verifyEmailToken;
		await user.save();

	}
	else if (user.pendingVerifyEmail) {
		user.email = user.pendingVerifyEmail;

		try {
			await user.save();
		} catch (e) {
			if (e.name !== 'ValidationError') {
				throw e;
			} else {
				return res
					.status(400)
					.json({
						auth: false,
						username: null,
						message: 'Изменение email невозможно, адрес уже занят.'
					});
			}
		}

	}
	else {
		return res
			.status(404)
			.json({
				auth: false,
				username: null,
				message: 'Изменений не произведено: ваш email и так верифицирован, его смена не запрашивалась.'
			});
	}

	req.login(user, (err) => {
		if (err) return console.error(err);

		res.redirect(redirect);
	});

});

export default router;