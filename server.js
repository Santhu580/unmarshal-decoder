const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/unmarshal-decoder1'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/unmarshal-decoder1/index.html'));
});

ngApp.listen(process.env.PORT || 8080);