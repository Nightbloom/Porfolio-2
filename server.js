const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
let initialPath = path.join(__dirname, "public")

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.post('/mail', (req, res) => {
    
})

app.listen('3000', () => {
    console.log("Listening at https://localhost:3000");
})