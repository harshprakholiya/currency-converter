/*
FIXER API Data Example 
{
    "AED": 4.021338,
    "AFN": 75.761389,
    "ALL": 102.338368,
    "AMD": 439.150086,
}

*/
import axios from 'axios';

// https://fixer.io/
const FIXER_API_KEY = 'a7ea9efd9e4d05b6ce017faa90364655';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.com
const REST_COUNTRIES_API = `https://restcountries.com/v3.1/currency`;


const getExchangedRate = async (fromCurrency, toCurrency) => {
    const { data: { rates } } = await axios.get(FIXER_API);
    const euro = 1/rates[fromCurrency];
    const exchangeRate = euro * rates[toCurrency];
    return exchangeRate;
}
// getExchangedRate('USD', 'INR');

const getCountries = async (countryCode) => {
    const { data } = await axios.get(`${REST_COUNTRIES_API}/${countryCode}`)
    return data.map((country) => country.name);
}
// getCountries('INR');

const convertCurrency = async (fromCurrency, toCurrency, amount) => {

    const fCurrency = fromCurrency.toUpperCase();
    const tCurrency = toCurrency.toUpperCase();

    const [ countries, exchangeRate] = await Promise.all([

        getCountries(fCurrency),
        getExchangedRate(fCurrency, tCurrency)

    ])

    console.log(exchangeRate);
    return `converted amount is ${( amount * exchangeRate).toFixed(2)}`;
   
}

convertCurrency('inr','usd', 100).then((result) => console.log(result));