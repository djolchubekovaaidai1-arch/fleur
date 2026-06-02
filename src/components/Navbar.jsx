import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoriteContext'
import fleur from '../../public/fleur.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLink = ({ isActive }) =>
    `transition duration-300 hover:text-accent ${
      isActive
        ? 'text-accent font-semibold'
        : 'text-gray-700'
    }`

  const { cart } = useCart()
  const { favorites } = useFavorites()

  const cartTotal = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  )

  const menuItems = [
    { to: '/', label: 'Главная' },
    { to: '/catalog', label: 'Каталог' },
    { to: '/about', label: 'О нас' },
    { to: '/delivery', label: 'Доставка' },
    { to: '/reviews', label: 'Отзывы' },
    { to: '/contacts', label: 'Контакты' },
  ]

  return (
    <header className="sticky top-0 z-[9999] bg-white/95 backdrop-blur-md shadow-sm border-b border-accent-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 md:py-0">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img src={fleur} alt="Fleur" className="h-16 w-auto object-contain" />
        </NavLink>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-accent-200 text-accent transition hover:bg-accent-50"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <NavLink key={item.to} to={item.to} className={navLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 text-xl">
          <div className="relative">
            <NavLink to="/favorites" className="hover:text-accent transition">
              <FaHeart />
            </NavLink>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-white text-[11px] font-semibold px-[5px]">
                {favorites.length}
              </span>
            )}
          </div>

          <div className="relative">
            <NavLink to="/cart" className="hover:text-accent transition">
              <FaShoppingCart />
            </NavLink>
            {cartTotal > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-white text-[11px] font-semibold px-[5px]">
                {cartTotal}
              </span>
            )}
          </div>

          <NavLink to="/profile" className="hover:text-accent transition">
            <FaUser />
          </NavLink>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-accent-200 bg-white`}>
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
          {menuItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 transition ${
                  isActive ? 'bg-accent-50 text-accent font-semibold' : 'text-gray-700 hover:bg-accent-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-4 pt-2 border-t border-accent-200">
            <NavLink
              to="/favorites"
              className="grid h-11 w-11 place-items-center rounded-full border border-accent-200 text-accent transition hover:bg-accent-50"
              onClick={() => setIsOpen(false)}
            >
              <FaHeart />
            </NavLink>
            <NavLink
              to="/cart"
              className="grid h-11 w-11 place-items-center rounded-full border border-accent-200 text-accent transition hover:bg-accent-50"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart />
            </NavLink>
            <NavLink
              to="/profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-accent-200 text-accent transition hover:bg-accent-50"
              onClick={() => setIsOpen(false)}
            >
              <FaUser />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}