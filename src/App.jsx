import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Sell from './pages/Sell'
import Build from './pages/Build'
import Delivery from './pages/Delivery'
import Reviews from './pages/Reviews'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-cream text-dark">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/build" element={<Build />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App