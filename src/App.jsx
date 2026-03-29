import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Domains from './pages/Domains'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [user, setUser] = useState(null)

  const handleSubscribe = (plan) => {
    setIsSubscribed(true)
    setUser({ name: 'Admin', plan })
  }

  const handleLogout = () => {
    setIsSubscribed(false)
    setUser(null)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar isSubscribed={isSubscribed} user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isSubscribed={isSubscribed} />} />
        <Route path="/pricing" element={<Pricing isSubscribed={isSubscribed} onSubscribe={handleSubscribe} />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
