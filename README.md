# A React application that fetches information on countries specified by the user

You need an openweathermap.com API-key in order to view the Weather Info. The app should work just fine without it, though.

To use it, download the code, and under the vite-app directory call the following commands:
```
npm install
npm run dev
```

If you have an API-key for openweathermap.com, launch the app instead with the command:
```
export VITE_WEATHER_API_KEY=your_api_key_here && npm run dev         // Linux/macOS Bash
($env:VITE_WEATHER_API_KEY=your_api_key_here) -and (npm run dev)   // Windows PowerShell
set "VITE_WEATHER_API_KEY=your_api_key_here" && npm run dev          // Windows cmd.exe
```

After running the app, open your browser and go to localhost with the specified port from the output after the 'npm run dev' command.
By default, it should be http://localhost:5173/
