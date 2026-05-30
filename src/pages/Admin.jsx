import { useState } from 'react'

export default function Admin() {
  const [password, setPassword] =
    useState('')

  const [access, setAccess] =
    useState(false)

  const handleLogin = () => {
    if (password === 'admin123') {
      setAccess(true)
    }
  }

  if (!access) {
    return (
      <div className="max-w-md mx-auto p-10">

        <h1 className="text-3xl font-bold mb-4">
          Админ панель
        </h1>

        <input
          type="password"
          placeholder="Пароль"
          className="border w-full p-3 rounded-xl"
          onChange={e =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="mt-4 bg-accent text-white px-5 py-3 rounded-xl"
        >
          Войти
        </button>

      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        Панель управления
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white shadow p-6 rounded-2xl">
          Товары
        </div>

        <div className="bg-white shadow p-6 rounded-2xl">
          Заказы
        </div>

        <div className="bg-white shadow p-6 rounded-2xl">
          Отзывы
        </div>

      </div>

    </div>
  )
}