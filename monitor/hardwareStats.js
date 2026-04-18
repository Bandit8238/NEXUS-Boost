const os = require("os");

function getStats() {
    return {
        cpu: Math.floor(Math.random() * 100),
        ram: Math.floor((os.totalmem() - os.freemem()) / os.totalmem() * 100),
        gpu: Math.floor(Math.random() * 100),
    };
}

module.exports = { getStats };
