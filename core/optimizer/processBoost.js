const { exec } = require("child_process");

function boostFortnite() {
    exec(`wmic process where name="FortniteClient-Win64-Shipping.exe" CALL setpriority 128`);
}

module.exports = { boostFortnite };
