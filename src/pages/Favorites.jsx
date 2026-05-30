import { FaTrash, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../context/FavoriteContext'

export default function Favorites() {
  const navigate = useNavigate()
  const {
    favorites,
    removeFromFavorites
  } = useFavorites()

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-gray-500 mb-2">
            Избранное
          </p>
          <h1 className="text-4xl font-semibold text-dark">
            Любимые товары
          </h1>
          <p className="mt-3 text-gray">
            В вашем списке {favorites.length}{' '}
            {favorites.length === 1 ? 'товар' : 'товаров'}.
          </p>
        </div>

        <button
          onClick={() => navigate('/catalog')}
          className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-3 text-accent transition hover:bg-accent-50"
        >
          <FaArrowLeft /> Назад в каталог
        </button>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-[32px] bg-white p-12 shadow-green text-center">
          <p className="text-2xl font-semibold text-dark mb-4">
            Тут пока пусто
          </p>
          <p className="text-gray leading-relaxed">
            Добавь любимые букеты и подарки, чтобы быстро найти их снова.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {favorites.map(item => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[32px] bg-white shadow-green transition hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-dark">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-accent font-semibold">
                      {item.price} сом
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="grid h-12 w-12 place-items-center rounded-3xl bg-black/5 text-dark transition hover:bg-black/10"
                    aria-label="Удалить из избранного"
                  >
                    <FaTrash />
                  </button>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray">
                  Этот товар сохранён в избранном — вернёшься к нему позже за покупкой.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
