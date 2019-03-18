const path = require('path');
const outputPath = path.join(__dirname, 'client', 'public');

module.exports = {
    entry: './client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: outputPath
    }
    mode: 'development' 
}
