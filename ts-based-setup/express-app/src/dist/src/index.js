"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hurray!! TypeScript based Express Server is Live');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
