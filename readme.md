Get Similarity Between Strings
============

Compare two strings to get the similarity between them, ranging from 0 - Not matching to 1 - perfectly matching, It is not case sensitive. Will ignore arrays and Objects and return similarity as 0.



## Usage
1. **Install NPM Package:** `npm i strings-similarity -s`
2. Require the `strings-similarity` in your **Node Project**
```
var isSimilar = require('strings-similarity');

console.log(isSimilar('Chenai','chennai')); // { similarity: 'Chennai' }
console.log(isSimilar('wow', 'delhi')); // { similarity: 0 }
console.log(isSimilar(["a"], 'delhi')); // { similarity: 0 }
console.log(isSimilar({"sample":"sample"}, 'delhi')); // { similarity: 0 }
console.log(isSimilar('', 'delhi')); // { error: Invalid Params }
```

---

## Contribution
Clone this repo to your desktop and run `npm install` to install all the dependencies. Install `express` and add the server code to run server to log the results.

Install `nodemon` to auto restart the server for all file changes.

---

## License
This project is licensed under the terms of the **MIT** license.

---
**Feel Free to point an issue or request additional feature**
