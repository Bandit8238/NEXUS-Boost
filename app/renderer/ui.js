const boostBtn = document.getElementById("boostBtn");

boostBtn.onclick = async () => {
    await window.api.boost();
    alert("BOOST MODE ACTIVATED 🚀");
};

// fake live stats (replace later with real monitoring)
setInterval(() => {
    document.getElementById("cpu").innerText = Math.floor(Math.random() * 80);
    document.getElementById("ram").innerText = Math.floor(Math.random() * 80);
    document.getElementById("gpu").innerText = Math.floor(Math.random() * 90);
    document.getElementById("fps").innerText = 120 + Math.floor(Math.random() * 80);
}, 1000);
