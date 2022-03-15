import { Router } from 'express';
import auth from './routes/userRoute';
import user from './routes/userRoute';
import role from './routes/roleRoute';
import post from './routes/postRoute';
import comment from './routes/commentRoute';
import reaction from './routes/reactionRoute';
import relationStrength from './routes/relationStrengthRoute';

export default () => {
	const app = Router();

	auth(app);
	user(app);
	role(app);
	post(app);
	comment(app);
	reaction(app);
	relationStrength(app);
	
	return app
}