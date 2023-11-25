const axios = require('axios');

// https://fixer.io/
const FIXER_API_KEY = 'a7ea9efd9e4d05b6ce017faa90364655';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.com
const REST_COUNTRIES_API = `https://restcountries.com/v3.1/currency`;


const getExchangedRate = async (fromCurrency, toCurrency) => {
    const {data:{rates}} = await axios.get(FIXER_API);

}