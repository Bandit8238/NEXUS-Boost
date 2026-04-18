const { exec } = require("child_process");

function performanceMode() {
    exec("echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor");
}

module.exports = { performanceMode };
