import {
  FaHeart,
  FaShoppingCart
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoriteContext'

export default function ProductCard({
  product
}) {
  const navigate = useNavigate()
  const { cart, addToCart } = useCart()
  const { favorites, addToFavorites } = useFavorites()

  const inFavorites = favorites.some(
    item => item.id === product.id
  )
  const inCart = cart.some(
    item => item.id === product.id
  )

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">

      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-3xl"
        />

        <button
          onClick={() => addToFavorites(product)}
          aria-label="add to favorites"
          className={`absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full shadow transition ${
            inFavorites
              ? 'bg-accent text-white'
              : 'bg-white text-accent'
          }`}
        >
          <FaHeart />
        </button>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-medium text-lg truncate">
          {product.title}
        </h3>

        <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider max-w-full sm:max-w-[65%]">
            БУКЕТ "{product.title.toUpperCase()}"
          </p>
          <p className="text-accent font-bold">{product.price} сом</p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => navigate('/catalog')}
            className="w-full sm:w-auto px-4 py-3 rounded-full text-sm text-gray-700 border border-accent-200 transition hover:bg-accent-50"
          >
            Подробнее
          </button>

          <button
            onClick={() => addToCart(product)}
            className="w-full sm:w-auto px-4 py-3 rounded-full flex items-center justify-center gap-2 text-sm bg-accent text-white transition hover:bg-accent/90"
          >
            {inCart ? 'Добавить ещё' : 'В корзину'}
            <FaShoppingCart />
          </button>
        </div>
      </div>

    </div>
  )
}