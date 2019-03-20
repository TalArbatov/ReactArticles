const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname,'..', 'client', 'public');

const PORT = process.env.PORT || 3005;

app.use('/' , express.static(publicPath));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})



