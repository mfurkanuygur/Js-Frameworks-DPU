
import './App.css'
import {BrowserRouter} from 'react-router'
import { Router } from './routes/Router'
import { Navbar } from './components/Navbar'
function App() {

  return (
   <>
        <Navbar/>
        <Router/>
   </>
  )
}

export default App
