const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    boost: () => ipcRenderer.invoke("boost"),
    getStats: () => ipcRenderer.invoke("stats"),
});
