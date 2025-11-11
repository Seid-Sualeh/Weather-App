# Weather App

A clean, responsive React + Vite weather application that displays current weather and a 5-day forecast for searched cities. The app consumes a public weather API (OpenWeatherMap by default) and exposes a simple, accessible UI.

Live demo: (add your deployed app URL here)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

- Search weather by city name
- Current weather (temperature, humidity, wind, condition)
- 5-day forecast (daily overview)
- Responsive layout for mobile, tablet and desktop
- Accessible controls (ARIA attributes and keyboard support)
- Small, reusable component-based architecture

## Tech stack

- React
- Vite
- JavaScript (ESNext)
- CSS (vanilla) with responsive layout
- OpenWeatherMap (API)

## Prerequisites

- Node.js 16+ (recommended)
- npm (or yarn)
- An API key from OpenWeatherMap (or another provider if configured)

## Installation

Clone the repository, install dependencies and start the dev server:

```bash
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
npm install
npm run dev
```

If you use yarn:

```bash
yarn
yarn dev
```

## Environment variables

Create a `.env` or `.env.local` file in the project root with the following variables:

```env
# OpenWeatherMap API key
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here

# Optional: custom base URL (defaults to OpenWeatherMap)
VITE_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

Notes:

- Environment variables used in Vite must be prefixed with `VITE_`.
- Do not commit your API keys to the repo. Add them to the deployment platform when publishing (for example, Vercel).

## Available scripts

These scripts are defined in `package.json` and can be run with `npm run <script>`:

- `dev` — start the Vite development server
- `build` — build the app for production
- `preview` — locally preview the production build
- `lint` — run ESLint

Example:

```bash
npm run build
npm run preview
```

## Project structure (important files)

Simplified view of the repository layout — see the `src/` folder for implementation details:

```
src/
├─ api/weather/           # get-current.js, get-forecast.js
├─ components/            # shared UI components (button, card, ...)
├─ layouts/               # page and layout components
├─ pages/home/            # home page and displays
├─ utils/                 # helpers and configuration
├─ App.jsx                # root component
└─ main.jsx               # app entry
```

## Usage

- Start the dev server (`npm run dev`).
- Type a city name into the search input and press Enter or click the search button.
- The app shows current conditions and a short 5-day forecast.

Error handling:

- If the city is not found, the app will show a user-friendly message.
- If the API key is missing or invalid, check your `.env` and the value of `VITE_WEATHER_API_KEY`.

## Deployment

You can deploy the app to any static hosting that supports single-page apps. Vercel works well with Vite:

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables in the Vercel dashboard (the same `VITE_*` keys).
4. Deploy — Vercel will run `npm run build` by default.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes with clear messages
4. Open a pull request against `main`

Please follow the project's coding and accessibility guidelines. If you add features that change public behavior, include tests or detailed usage notes.

## License

This project is licensed under the MIT License — see the `LICENSE.md` file for details.

## Author

Seid Sualeh — seidsualeh.vercel.app

Contact / LinkedIn: https://www.linkedin.com/in/seid-sualeh

---

If you'd like, I can also:

- add example screenshots to `public/` and reference them in this README
- add a short `CONTRIBUTING.md`
- add a badge for build/deploy status once you have a CI pipeline

Please tell me if you want any of the above or a tailored README (screenshots, demo links, badges).
