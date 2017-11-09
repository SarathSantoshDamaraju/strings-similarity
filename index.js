'use strict'

const getStringsSimilarity = require('./levenshteinDistance');

function main(string1 = null,string2 = null){
    if(string1 && string2){
    return {"similarity": ((typeof(string1) === "string") && (typeof(string2) === "string") ? getStringsSimilarity(string1, string2) : 0 )}
    }
    else {
        return({"error":"Invalid Params"})
    }
}
module.exports = main;