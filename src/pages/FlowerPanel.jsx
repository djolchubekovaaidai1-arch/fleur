import { useState, useEffect } from 'react'
import {
  FaLeaf,
  FaList,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt
} from 'react-icons/fa'
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct as deleteProductSupabase
} from '../services/productsService'

export default function FlowerPanel() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('isAdmin') === 'true'
  })
  const [password, setPassword] = useState('')
  const [productsList, setProductsList] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const itemsPerPage = 7

  const [product, setProduct] = useState({
    title: '',
    category: '',
    price: '',
    image: ''
  })

  // Сохраняем isAdmin в sessionStorage при изменении
  useEffect(() => {
    sessionStorage.setItem('isAdmin', isAdmin)
  }, [isAdmin])

  useEffect(() => {
    if (!isAdmin) return

    setLoading(true)
    setError(null)

    fetchProducts()
      .then((data) => {
        setProductsList(Array.isArray(data) ? data : [])
        setPage(1)
      })
      .catch((err) => {
        setError(err.message || 'Не удалось загрузить цветы из Supabase')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [isAdmin])

  const login = () => {
    if (password === 'admin123') {
      setIsAdmin(true)
      setPassword('')
    } else {
      alert('Неверный пароль')
      setPassword('')
    }
  }

  const saveProduct = async () => {
    const trimmedTitle = product.title.trim()

    if (!trimmedTitle || product.price === '' || product.price === null) {
      alert('Заполните обязательные поля (Название и Цена)')
      return
    }

    const numericPrice = Number(product.price)
    if (Number.isNaN(numericPrice) || numericPrice < 0) {
      alert('Цена должна быть положительным числом')
      return
    }

    try {
      setLoading(true)
      setError(null)

      if (editingId) {
        const updated = await updateProduct(editingId, {
          title: trimmedTitle,
          category: product.category,
          price: numericPrice,
          image: product.image
        })
        setProductsList((prev) => prev.map((item) => (item.id === editingId ? updated : item)))
        setEditingId(null)
        setProduct({ title: '', price: '', image: '' })
        alert('✓ Цветок успешно обновлён')
      } else {
        const created = await createProduct({
          title: trimmedTitle,
          category: product.category,
          price: numericPrice,
          image: product.image
        })
        setProductsList((prev) => [...prev, created])
        setProduct({ title: '', price: '', image: '' })
        alert('✓ Цветок успешно добавлен')
      }
    } catch (err) {
      setError(err.message || 'Ошибка при сохранении цветка')
      alert('✗ ' + (err.message || 'Ошибка при сохранении цветка'))
    } finally {
      setLoading(false)
    }
  }

  const editProduct = (item) => {
    setProduct({
      title: item.title,
      category: item.category,
      price: item.price,
      image: item.image
    })
    setEditingId(item.id)
  }

  const deleteProduct = async (id) => {
    const productName = productsList.find(p => p.id === id)?.title || 'цветок'
    const confirmed = window.confirm(`Вы уверены, что хотите удалить "${productName}"?`)

    if (!confirmed) return

    try {
      setLoading(true)
      setError(null)

      await deleteProductSupabase(id)
      setProductsList((prev) => prev.filter((p) => p.id !== id))

      if (editingId === id) {
        setEditingId(null)
        setProduct({ title: '', price: '', image: '' })
      }

      alert('✓ Цветок успешно удалён')
    } catch (err) {
      setError(err.message || 'Ошибка при удалении цветка')
      alert('✗ ' + (err.message || 'Ошибка при удалении цветка'))
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.max(1, Math.ceil(productsList.length / itemsPerPage))
  const paginatedProducts = productsList.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  // СТРАНИЦА АВТОРИЗАЦИИ (Остается по центру)
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-6">
        <div className="bg-white border border-accent-200 w-full max-w-md rounded-[32px] shadow-green p-8">
          <h1 className="text-4xl font-bold text-center mb-2 text-dark">Flower Panel</h1>
          <p className="text-center text-gray-500 mb-8">Вход в панель управления</p>
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && login()}
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

  // ПАНЕЛЬ С САЙДБАРОМ
  return (
    <div className="min-h-screen flex bg-cream text-dark">
      {/* МОБИЛЬНОЕ МЕНЮ */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ЛЕВЫЙ САЙДБАР */}
      <aside
  className={`fixed top-24 left-0 h-[calc(100vh-96px)] w-64 bg-white border-r border-accent-200 flex flex-col z-50 transform transition-transform duration-300 lg:static lg:h-auto lg:translate-x-0 ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        <div className="p-4 sm:p-6 border-b border-accent-200 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold text-dark flex items-center gap-2">
            <FaLeaf />
            <span className="hidden sm:inline">Flower Panel</span>
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>
        <p className="text-xs text-gray-500 px-4 sm:px-6 py-2">Панель администратора</p>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setSidebarOpen(false)
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-dark bg-accent-50 hover:bg-accent-100 transition"
          >
            <FaList />
            <span>Каталог</span>
          </button>
        </nav>

        <div className="p-4 border-t border-accent-200">
          <button
            onClick={() => {
              setIsAdmin(false)
              sessionStorage.removeItem('isAdmin')
              setSidebarOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-xs text-accent hover:bg-accent-50 rounded-lg transition flex items-center gap-2"
          >
            <FaSignOutAlt />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      {/* ОСНОВНОЙ КОНТЕНТ СПРАВА */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Кнопка открытия меню на мобильных */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-accent-200 shadow-sm"
        >
          ☰ Меню
        </button>

        {/* Заголовок страницы */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-dark">Управление каталогом</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Добавление новых позиций и редактирование текущих</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-green border border-accent-200">
            <h3 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {editingId ? 'Редактировать цветок' : 'Добавить новый цветок'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Название цветка *</label>
                <input
                  type="text"
                  placeholder="Розовый букет"
                  value={product.title}
                  onChange={(e) => setProduct({ ...product, title: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && saveProduct()}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Цена (сом) *</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="1500"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && saveProduct()}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Категория *
                </label>
                <input
                  type="text"
                  placeholder="Розы"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  onKeyPress={(e) => e.key === 'Enter' && saveProduct()}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">URL изображения</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={product.image}
                  onChange={(e) => setProduct({ ...product, image: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && saveProduct()}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:bg-white transition"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-end">
              {editingId && (
                <button
                  onClick={() => {
                    setEditingId(null)
                    setProduct({
                      title: '',
                      category: '',
                      price: '',
                      image: ''
                    })
                  }}
                  disabled={loading}
                  className="px-4 sm:px-6 py-2.5 rounded-xl border border-accent-200 text-accent text-xs sm:text-sm transition hover:bg-accent-50 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  Отменить
                </button>
              )}

              <button
                onClick={saveProduct}
                disabled={loading}
                className="bg-accent text-white px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm shadow-sm transition hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {loading
                  ? '⏳ Сохранение...'
                  : editingId
                    ? 'Сохранить'
                    : 'Добавить'}
              </button>
            </div>
          </section>

          <section className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-accent-200 overflow-hidden">
            {/* ТАБЛИЦА НА ДЕСКТОПЕ */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-accent-50 border-b border-accent-200 text-xs font-semibold text-accent uppercase tracking-wider">
                    <th className="py-3 px-3 sm:py-4 sm:px-6">ID</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-6">Фото</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-6">Название</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-6">Цена</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-6 text-right">Действия</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent-200 text-sm">
                  {productsList.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-8 px-4 text-center text-gray-500 text-sm">
                        Список пуст. Добавьте первый цветок выше.
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map((item) => (
                      <tr key={item.id} className="hover:bg-accent-50 transition">
                        <td className="py-3 px-3 sm:py-4 sm:px-6 text-xs text-gray-500 font-mono">{String(item.id).slice(-6)}</td>
                        <td className="py-3 px-3 sm:py-4 sm:px-6">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-10 h-10 object-cover rounded-lg border border-accent-200"
                            onError={(e) => { e.target.src = 'https://placehold.co/40' }}
                          />
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-6 font-medium text-dark text-sm">{item.title}</td>
                        <td className="py-3 px-3 sm:py-4 sm:px-6 font-semibold text-accent text-sm">{item.price} сом</td>
                        <td className="py-3 px-3 sm:py-4 sm:px-6 text-right flex flex-wrap justify-end gap-1 sm:gap-2">
                          <button
                            onClick={() => editProduct(item)}
                            aria-label="Редактировать"
                            className="inline-flex items-center justify-center rounded-full border border-accent-200 p-2 sm:p-3 text-accent bg-accent-50 hover:bg-accent/20 transition text-sm sm:text-base"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteProduct(item.id)}
                            aria-label="Удалить"
                            className="inline-flex items-center justify-center rounded-full border border-red-200 p-2 sm:p-3 text-red-600 bg-red-50 hover:bg-red-100 transition text-sm sm:text-base"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* КАРТОЧКИ НА МОБИЛЬНЫХ */}
            <div className="md:hidden p-4 space-y-4">
              {paginatedProducts.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  Список пуст. Добавьте первый цветок выше.
                </div>
              ) : (
                paginatedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="border border-accent-200 rounded-2xl p-4 bg-white"
                  >
                    <div className="flex gap-3 mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-xl object-cover border"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/64'
                        }}
                      />

                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-xs text-gray-500">
                          ID: {String(item.id).slice(-6)}
                        </p>
                        <p className="text-xs text-gray-500">
                          Категория: {item.category}
                        </p>
                        <p className="font-semibold text-accent">
                          {item.price} сом
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => editProduct(item)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-accent-200 py-2 text-accent hover:bg-accent-50 transition"
                      >
                        <FaEdit />
                        Редактировать
                      </button>

                      <button
                        onClick={() => deleteProduct(item.id)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-red-200 py-2 text-red-600 hover:bg-red-50 transition"
                      >
                        <FaTrash />
                        Удалить
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {productsList.length > itemsPerPage && (
              <div className="px-6 py-4 bg-white flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-accent-200">
                <p className="text-xs text-gray-500">
                  Страница {page} из {totalPages}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    disabled={page === 1}
                    className="rounded-full border border-accent-200 bg-white p-2 text-accent disabled:opacity-50"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={page === totalPages}
                    className="rounded-full border border-accent-200 bg-white p-2 text-accent disabled:opacity-50"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}