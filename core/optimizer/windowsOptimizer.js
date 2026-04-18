const { exec } = require("child_process");

function enableHighPerformanceMode() {
    exec("powercfg -setactive SCHEME_MIN");
}

function disableBackgroundApps() {
    exec("powershell -Command \"Get-Process | Where-Object {$_.CPU -gt 50} | Stop-Process -Force\"");
}

module.exports = {
    enableHighPerformanceMode,
    disableBackgroundApps
};
