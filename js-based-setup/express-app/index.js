const express = require( 'express' );
const dotenv = require( 'dotenv' );
const app = express();

const port = process.env.PORT || 3000;

dotenv.config();

const payload = {
	status: 200,
	message: 'Hurray!! Express Server is Live'
};

app.get('/', (req, res) => {
	res.send(payload);
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});

