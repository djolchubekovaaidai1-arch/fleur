import { useState } from 'react'

export default function FlowerPanel() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [password, setPassword] = useState('')

  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: ''
  })

  const login = () => {
    if (password === 'admin123') {
      setIsAdmin(true)
    } else {
      alert('Неверный пароль')
    }
  }

  const addProduct = () => {
    const products =
      JSON.parse(localStorage.getItem('products')) || []

    const newProduct = {
      id: Date.now(),
      title: product.title,
      price: Number(product.price),
      image: product.image
    }

    localStorage.setItem(
      'products',
      JSON.stringify([...products, newProduct])
    )

    alert('Цветок добавлен')

    setProduct({
      title: '',
      price: '',
      image: ''
    })
  }

  if (!isAdmin) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-accent-50 px-6">

      <div className="bg-white w-full max-w-md rounded-[32px] shadow-green p-8">

        <h1 className="text-4xl font-bold text-center mb-2">
          Flower Panel
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Вход в панель управления
        </p>

        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border border-gray-200 rounded-2xl p-4 mb-5 outline-none focus:border-accent"
        />

        <button
          onClick={login}
          className="w-full bg-accent text-white py-4 rounded-2xl font-semibold transition hover:bg-accent/90"
        >
          Войти
        </button>

      </div>

    </div>
  )
}

  return (
  <div className="min-h-screen bg-gradient-to-b from-white to-accent-50 py-10 px-6">
    <div className="max-w-2xl mx-auto bg-white rounded-[32px] shadow-green p-8">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-dark">
          Flower Panel
        </h1>

        <p className="text-gray-500 mt-2">
          Добавление новых цветов в каталог
        </p>
      </div>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Название цветка
          </label>

          <input
            type="text"
            placeholder="Например: Розовый букет"
            value={product.title}
            onChange={(e) =>
              setProduct({
                ...product,
                title: e.target.value
              })
            }
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Цена
          </label>

          <input
            type="number"
            placeholder="1500"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value
              })
            }
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Ссылка на изображение
          </label>

          <input
            type="text"
            placeholder="https://..."
            value={product.image}
            onChange={(e) =>
              setProduct({
                ...product,
                image: e.target.value
              })
            }
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-accent"
          />
        </div>

        {product.image && (
          <div className="mt-4">
            <p className="font-medium mb-3">
              Предпросмотр
            </p>

            <img
              src={product.image}
              alt="preview"
              className="w-full h-72 object-cover rounded-3xl border"
            />
          </div>
        )}

        <button
          onClick={addProduct}
          className="w-full bg-accent text-white py-4 rounded-2xl font-semibold text-lg transition hover:bg-accent/90"
        >
          Добавить цветок
        </button>

      </div>
    </div>
  </div>
)
}