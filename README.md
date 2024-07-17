# A React application that fetches information on countries specified by the user

You need an openweathermap.com API-key in order to view the Weather Info. The app should work just fine without it, though.

To use it, download the code, and under the vite-app directory call the following commands:
```
npm install
npm run dev
```

If you have an API-key for openweathermap.com, launch the app instead with the command:
```
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev         // Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev)   // Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev          // Windows cmd.exe
```
