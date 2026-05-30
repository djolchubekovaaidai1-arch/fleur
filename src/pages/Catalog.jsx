import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import products from '../data/products'

import ProductCard from '../components/ProductCard'
import FilterBar from '../components/FilterBar'

export default function Catalog() {
  const [filter, setFilter] =
    useState('all')
  const navigate = useNavigate()

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter(
          product =>
            product.category === filter
        )

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
            {filteredProducts.map(product => (
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
