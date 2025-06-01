import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { stat } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static('public'));

app.get('/', (req, res) => {
      res.render('index.ejs')
});


app.get('/login', (req, res) => {
      res.render('login.ejs')
});

app.get('/signup', (req, res) => {
      res.render('signup.ejs')
});

app.get('/listflights', (req, res) => {
      res.render('listflights.ejs')
});

app.get('/flight_details', (req, res) => {
      res.render('flight_details.ejs')
});

app.get('/personal_details', (req, res) => {
      res.render('personal_details.ejs')
});

app.get('/payment', (req, res) => {
      res.render('payment.ejs')
});

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
});