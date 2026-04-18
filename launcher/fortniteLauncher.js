const { exec } = require("child_process");

function launchFortnite() {
    exec("start Fortnite");
}

module.exports = { launchFortnite };
