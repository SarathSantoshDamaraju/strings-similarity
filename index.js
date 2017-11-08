'use strict'
const wrapper = require('./wrapper');
const city_names = require('./city_names');

function main(city, count=1){
    return((typeof(city) === "string")&&(typeof(count) === "number")&&(count>=0) ? wrapper(city,city_names, count) : -1 )
}
module.exports = main;
