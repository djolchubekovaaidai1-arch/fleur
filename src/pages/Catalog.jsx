import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import FilterBar from '../components/FilterBar'
import { FaSearch } from 'react-icons/fa'

export default function Catalog() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { products, loading, error } = useProducts()

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      filter === 'all'
        ? true
        : product.category === filter

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())

    return categoryMatch && searchMatch
  })

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-2">
            Каталог
          </p>
          <h1 className="text-4xl font-bold">
            Найди свой букет
          </h1>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[32px] bg-white p-6 shadow-green">
          <h2 className="text-xl font-semibold text-dark mb-6">
            Что нужно сделать
          </h2>
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Поиск букета..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-accent-200 py-3 pl-11 pr-4 outline-none focus:border-accent"
            />
          </div>
          <button
            onClick={() => setFilter('all')}
            className="mb-4 w-full rounded-3xl bg-accent px-5 py-4 text-left text-white transition hover:bg-accent/90"
          >
            Купить букеты
          </button>
          <button
            onClick={() => navigate('/sell')}
            className="mb-4 w-full rounded-3xl border border-accent text-left px-5 py-4 text-accent transition hover:bg-accent-50"
          >
            Продать букет
          </button>
          <button
            onClick={() => navigate('/build')}
            className="w-full rounded-3xl border border-accent text-left px-5 py-4 text-accent transition hover:bg-accent-50"
          >
            Собрать букет
          </button>
        </aside>

        <div>
          <FilterBar
            current={filter}
            setCurrent={setFilter}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && (
              <div className="col-span-full text-center text-gray-500">
                Загрузка каталога...
              </div>
            )}

            {error && (
              <div className="col-span-full text-center text-red-500">
                {error}
              </div>
            )}

            {!loading && !error && filteredProducts.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                Товары не найдены.
              </div>
            )}

            {!loading && !error && filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
