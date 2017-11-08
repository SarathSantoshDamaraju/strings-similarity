'use strict'
// --------------- BODY
var _ = require('lodash');

const wrapper = require('./wrapper');
const city_names = require('./city_names');

function main(p, city_names, count=1){
    p = p.toLowerCase();
    return((typeof(p) === "string") && (Array.isArray(q) === true || typeof(q) === "string") ? wrapper(p,q, count) : "False" )
}
module.exports = {main};

