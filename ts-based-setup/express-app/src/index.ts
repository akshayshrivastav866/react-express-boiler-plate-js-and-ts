import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const payload = {
	status: 200,
	message: 'Hurray!! Express + TypeScript Server is Live'
};

app.get('/', (req: Request, res: Response) => {
	res.send(payload);
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
