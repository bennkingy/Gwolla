import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/index'
import SigninPage from './pages/SigninPage'

function App() {
  return (
      <Router>
        <Home />
        <SigninPage />
      </Router>
  );
}

export default App;