import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // ✅ import this

createRoot(document.getElementById('root')).render(

  // Due to this Strict mode many API's called twice, so we you want it once, so remove Strict Mode.
  // But if  you want to keep it(strict mode), then it will only be called twice in your local only.
  // But in prod it will not happen twice.
  
  // why does it happen? Bcz react does estra rendering to check for some inconsitenccy for api calls, this only happen in developement mode,
  // and it will throw an error, if there is any inconsistency in your rendering cycle, so it is a good thing.
  
  
  <StrictMode> 
    <BrowserRouter> {/* ✅ wrap your App */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
