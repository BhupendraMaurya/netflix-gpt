# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Netflix- GPT
- Created project using the vite.
- Configured tailwindCSS
-Header
-Routing of App
-Login Form
- Sign up Form
- Form Validation
  -> useRef Hook


- Firebase Setup for authentication and deployment.
- Deploying our app to Production

- Create Signup User Account
-Implement Sign in user API.
- Installed React Redux and created redux store with userSlice.
- Update store when any user sign in/sign up.

- Now, going to make the Browse Page.
- Implemented signout feature 
- Updated profile via adding profile name and photo.
- Fixing Some Bugs
 Bug Fix:  Sign up user displayName and profile picture update
 - Big Fix: If the user is not logged in, then redirect / browse to login page or vice-versa.

- Unsubscribed to the onAuthStateChanged callback.
- Added constants.jsx file to store any string or any media.

- Using TMDB website for movies API:
  - Steps to take the API:
  1. Go to TMDBhttps://www.themoviedb.org/?language=en-US and login 
  2. Go to edit profile => Go to API => you have to create a new app here, then you would get your API key and API access token.
  3. Then cllick on the Documentation tab: developer.themoviedb.org.
  4. Click on "API Reference" : Now there would be multiple API's and you can explore it now.
  5. Since we want movie list so we'll click on Movie list API : and there would be API and some options.
  6. We will always have to pass this API options to call this API

- Register TMDB API and create an app and get the access key
- Get data from TMDB from now playing movies list API.

- Adding Movie data to the redux store(moviesSlice);

- Creating our own custom hook.
 
- Building Browse Page

- Building Video Title

- Building Video Background => Go to TMDB => Movies => There would be an API which would give us the video associated with any movie id.

- Creating Custom hook for Trailer Video

- Building Video Background








# Features
- Login / Signup page
    - Sign / Signup form
    - Redirects to browse page.
- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in Background
        - Movie title & description
        - Movie suggestions
            - Movie list * N
- NetflixGPT
    - Search bar
    - Movie Suggestions
