const fetch = require('node-fetch');
let date = process.argv[2];
let month = process.argv[3];

fetch(`https://history.muffinlabs.com/date/${month}/${date}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data.Events)
        console.log(data.data.Births)
        console.log(data.data.Deaths)
    })