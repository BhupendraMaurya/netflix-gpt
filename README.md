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
