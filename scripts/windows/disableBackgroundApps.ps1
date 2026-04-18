Get-Process | Where-Object {$_.CPU -gt 50} | Stop-Process -Force
