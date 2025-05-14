import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './pages/App.jsx'
import Newpage from './pages/NewPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<App />}/>
            <Route path='/new-page' element={<Newpage />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)


