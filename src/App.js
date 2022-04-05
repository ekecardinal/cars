import { Navbar } from './components/Navbar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/Theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
