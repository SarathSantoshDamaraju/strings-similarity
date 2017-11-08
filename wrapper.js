'use strict'
const getStringsSimilarity = require('./levenshteinDistance');
const _ = require("lodash");

function wrapper(p, q, count) {
    return ((Array.isArray(p) === false && Array.isArray(q) === false) ? getStringsSimilarity(p, q) : getArraySimilarity(p, q, count));
}

function getArraySimilarity(p, q, count) {
    count = count || 1;
    if ((count <= q.length) && (count != 0) && (count != undefined) && (count)) {
        var similarities = [];

        q.forEach(function (element) {
            similarities.push({
                "name": element,
                "percentage": getStringsSimilarity(p, element)
            });
        }, this);

        similarities = _.sortBy(similarities, ['percentage']);
        var required = [];
        for (var i = similarities.length - 1; i > similarities.length - (count + 1); i--) {
            required.push(similarities[i]);
        }
        return (required.name);
    }
}

module.exports = wrapper;