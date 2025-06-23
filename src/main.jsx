import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Portrait, Vengeance} from './Greeting.jsx'
import Test from './Test.jsx'
import Bio from './Assignment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portrait />
    <Vengeance />
    <Test />
    <Bio />
  </StrictMode>,
)
