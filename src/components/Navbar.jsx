import { NavLink } from 'react-router-dom'
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa'

import { GiRose } from 'react-icons/gi'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoriteContext'

export default function Navbar() {
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

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-accent-200">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
        >
          <GiRose className="text-4xl text-accent" />

          <div>
            <h1 className="text-3xl font-bold text-accent">
              Fleur
            </h1>

            <p className="text-xs text-gray-500 -mt-1">
              Flower Boutique
            </p>
          </div>
        </NavLink>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={navLink}
          >
            Главная
          </NavLink>

          <NavLink
            to="/catalog"
            className={navLink}
          >
            Каталог
          </NavLink>

          <NavLink
            to="/about"
            className={navLink}
          >
            О нас
          </NavLink>

          <NavLink
            to="/delivery"
            className={navLink}
          >
            Доставка
          </NavLink>

          <NavLink
            to="/reviews"
            className={navLink}
          >
            Отзывы
          </NavLink>

          <NavLink
            to="/contacts"
            className={navLink}
          >
            Контакты
          </NavLink>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5 text-xl">

          <div className="relative">
            <NavLink
              to="/favorites"
              className="hover:text-accent transition"
            >
              <FaHeart />
            </NavLink>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-white text-[11px] font-semibold px-[5px]">
                {favorites.length}
              </span>
            )}
          </div>

          <div className="relative">
            <NavLink
              to="/cart"
              className="hover:text-accent transition"
            >
              <FaShoppingCart />
            </NavLink>
            {cartTotal > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-white text-[11px] font-semibold px-[5px]">
                {cartTotal}
              </span>
            )}
          </div>

          <NavLink
            to="/profile"
            className="hover:text-accent transition"
          >
            <FaUser />
          </NavLink>

        </div>

      </div>

    </header>
  )
}