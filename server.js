import express from "express";
import path from 'path';
// import { convert, exchangeRates } from "exchange-rates-api";
// import convertCurrency from "nodejs-currency-converter"


const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/comments', (req, res) => {
    res.render('comments');
})

app.use('/', (req, res) => {

    // convertCurrency(2, 'EUR', 'USD').then(response => {
    //     console.log(response);
    // });

    // const lat = await exchangeRates().latest().fetch()
    // console.log(lat);
    // (async () => {
    //     let amount = await convert(2, 'USD', 'EUR', '2021-10-21');
    //     console.log(amount);    //1.72
    // })();
    res.send('hello from server');
})

app.listen(4242, () => {
    console.log('server listen on port 4242');
})