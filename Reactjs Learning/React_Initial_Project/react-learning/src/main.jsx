import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import  {stores}  from './Day 6/useSelector_useDispatch/store.jsx'
//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>

    
  </StrictMode>,

 // serviceWorkerRegistration.register()


)
