import {
  FaMinus,
  FaPlus,
  FaTrash
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const navigate = useNavigate()
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Корзина</h1>

      <div className="grid gap-8 xl:grid-cols-[1.7fr_0.9fr]">
        <div className="space-y-5">
          {cart.length === 0 ? (
            <div className="rounded-[32px] bg-white p-8 shadow-green text-center">
              <p className="text-xl text-gray">В корзине пока нет товаров.</p>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="rounded-[32px] bg-white p-5 shadow-green flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-28 rounded-3xl object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-dark">
                      {item.title}
                    </h2>
                    <p className="text-accent font-semibold mt-1">
                      {item.price} сом
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-between sm:justify-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-accent text-accent transition hover:bg-accent/10"
                    aria-label="Уменьшить количество"
                  >
                    <FaMinus />
                  </button>
                  <span className="min-w-[42px] text-center text-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-accent text-accent transition hover:bg-accent/10"
                    aria-label="Увеличить количество"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="flex items-center gap-4 justify-between lg:justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray">Сумма</p>
                    <p className="text-xl font-semibold text-dark">
                      {item.price * item.quantity} сом
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-black/5 text-dark transition hover:bg-black/10"
                    aria-label="Удалить товар"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="rounded-[32px] bg-white p-8 shadow-green">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">Итого</p>
            <p className="text-3xl sm:text-4xl font-semibold text-dark mt-3">{total} сом</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            disabled={cart.length === 0}
            className={`w-full rounded-full px-6 py-4 text-base font-semibold transition ${cart.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-accent text-white hover:bg-accent/90'
              }`}
          >
            Оформить заказ
          </button>
          <button
            onClick={() => navigate('/catalog')}
            className="mt-4 w-full rounded-full border border-accent text-accent px-6 py-4 text-base font-semibold transition hover:bg-accent-50"
          >
            ← Назад в каталог
          </button>
        </aside>
      </div>
    </div>
  )
}
