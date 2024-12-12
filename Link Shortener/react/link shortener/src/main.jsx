import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navbar/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)
