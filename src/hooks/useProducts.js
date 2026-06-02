import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/productsService'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    fetchProducts()
      .then(data => {
        if (!mounted) return
        setProducts(Array.isArray(data) ? data : [])
      })
      .catch(err => {
        if (!mounted) return
        setError(err.message || 'Ошибка загрузки продуктов')
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  return { products, loading, error }
}
