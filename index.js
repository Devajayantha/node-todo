const express = require('express');

const app = express();

app.listen(8080, () => {
    console.log('Hello World');
});

app.get('/', (request, response) => {
    response.send('Get Hello World');
});