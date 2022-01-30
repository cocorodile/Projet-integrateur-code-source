import {Routes, Route} from 'react-router-dom'
import Authentification from './pages/Authentification'
import Home from './pages/Home'


function App() {

  return (
    <div>
      <Routes >
        <Route path="/" element={<Authentification />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
