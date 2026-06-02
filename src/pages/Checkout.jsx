import { useState } from 'react'
import {
  FaUser,
  FaPhone,
  FaShoppingCart,
  FaBox,
  FaMoneyBillWave
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const navigate = useNavigate()

  const { cart, clearCart } = useCart()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-[32px] shadow-green p-8 text-center">
          <FaShoppingCart className="mx-auto text-5xl text-accent mb-4" />

          <h1 className="text-3xl font-bold mb-3">
            Корзина пуста
          </h1>

          <p className="text-gray-500 mb-6">
            Добавьте товары в корзину перед оформлением заказа
          </p>

          <button
            onClick={() => navigate('/catalog')}
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition"
          >
            Перейти в каталог
          </button>
        </div>
      </div>
    )
  }

  const handleSubmit = e => {
    e.preventDefault()

    const products = cart
      .map(
        item =>
          `${item.title} (${item.quantity} шт.) - ${
            item.price * item.quantity
          } сом`
      )
      .join('\n')

    const text = `
Новый заказ

Имя: ${form.name}
Телефон: ${form.phone}
Адрес: ${form.address}

Товары:
${products}

Итого: ${total} сом
`

    const phoneNumber = '996702868272'

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    )

    clearCart()
    navigate('/success')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white rounded-[32px] shadow-green p-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaShoppingCart className="text-accent" />
          Оформить
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />

            <input
              type="text"
              placeholder="Имя"
              required
              value={form.name}
              onChange={e =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
              className="w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent"
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />

            <input
              type="tel"
              placeholder="Телефон"
              required
              value={form.phone}
              onChange={e =>
                setForm({
                  ...form,
                  phone: e.target.value
                })
              }
              className="w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent"
            />
          </div>

          <div className="relative">
            <FaBox className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />

            <input
              type="text"
              placeholder="Адрес"
              required
              value={form.address}
              onChange={e =>
                setForm({
                  ...form,
                  address: e.target.value
                })
              }
              className="w-full border rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent"
            />
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaBox className="text-accent" />
              Ваш заказ
            </h2>

            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b border-gray-100"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>

                <span className="font-medium">
                  {item.price * item.quantity} сом
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between mt-5 pt-4 border-t text-xl font-bold">
              <span className="flex items-center gap-2">
                <FaMoneyBillWave className="text-accent" />
                Итого
              </span>

              <span>{total} сом</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition"
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  )
}