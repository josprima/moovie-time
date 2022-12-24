# MoovieTime

## Create API Key
The data for this website is provided by [https://www.themoviedb.org/](https://www.themoviedb.org/),
You need to provide api key as environtment variables, to create new api key you need to register first to [https://www.themoviedb.org/](https://www.themoviedb.org/).

See complete tutorial here: [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

## Preview
See live version here: [https://moovie-time.vercel.app/](https://moovie-time.vercel.app/)

![Homepage preview](/images/home.png)

## System Requirements
This projects is created with [https://nextjs.org/](https://nextjs.org/)
- Node.js 14.6.0 or newer
- MacOS, Windows (including WSL), and Linux are supported

## How to Run Local development
1. Install dependency by running: `npm install` in root directory
2. Create .env file based on .env.example and update the values
2. Run local development server: `npm run dev`

## Avaliable Commands
1. Run local development
    ```
    npm run dev
    ```
2. Build for production
    ```
    npm run build
    ```
3. Run with production version after build
    ```
    npm run start
    ```
4. Check Lint
    ```
    npm run lint
    ```
5. Fix Lint
    ```
    npm run lint -- --fix
    ```