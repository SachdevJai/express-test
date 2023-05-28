const path = require('path');

function filepath (pagePath) {
    return path.join(__dirname, `/pages/${pagePath}`);
}

module.exports = filepath;