import React, { useEffect, useState } from 'react'
import ReviewCard from '../components/ReviewCard'

const initialSamples = [
  {
    rating: 5,
    text: 'Замечательный магазин — купила букет, всё было аккуратно упаковано и пришло вовремя. Спасибо за внимание к деталям!',
    author: 'Анна'
  },
  {
    rating: 5,
    text: 'Очень довольна обслуживанием и качеством товара. Буду заказывать ещё, рекомендую друзьям.',
    author: 'Екатерина'
  },
  {
    rating: 5,
    text: 'Быстрая доставка и приятная упаковка. Цветы свежие, запах прекрасный. Отличный сервис.',
    author: 'Мария'
  }
]
const STORAGE_KEY = 'fleur_reviews_v1'

const StarInput = ({ value, onChange }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const v = i + 1
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className="p-1"
            aria-label={`${v} stars`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={v <= value ? '#D3BFAF' : 'none'}
              stroke="#D3BFAF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.6L19.334 24 12 19.897 4.666 24l1.584-8.65L.5 9.75l7.832-1.732L12 .587z"></path>
            </svg>
          </button>
        )
      })}
    </div>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          // Merge stored reviews with initialSamples so owner's reviews remain present
          const merged = [...parsed]
          initialSamples.forEach((s) => {
            const exists = parsed.some((p) => p.text === s.text && p.author === s.author)
            if (!exists) merged.push(s)
          })
          if (merged.length > 0) {
            setReviews(merged)
            return
          }
        }
      }
    } catch (e) {
      // ignore parse errors
    }
    setReviews(initialSamples)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
    } catch (e) {
      // ignore
    }
  }, [reviews])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    const newReview = { rating: Number(rating) || 5, text: text.trim(), author: name.trim() || 'Аноним' }
    setReviews((s) => [newReview, ...s])
    setName('')
    setText('')
    setRating(5)
  }

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#f7f2ee] to-[#f2ebe3] flex items-start justify-center relative overflow-hidden">
      <div className="w-full max-w-4xl relative px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">ВАШИ ОТЗЫВЫ</h2>
          <p className="text-gray-600 mt-2">Оставьте свой отзыв — он появится на странице.</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8 bg-white/80 p-4 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="flex-1 px-3 py-2 rounded-md border border-gray-200" />
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Рейтинг:</span>
              <StarInput value={rating} onChange={setRating} />
            </div>
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="Ваш отзыв" className="mt-3 w-full px-3 py-2 rounded-md border border-gray-200" />
          <div className="mt-3 flex justify-end">
            <button type="submit" className="bg-[#D3BFAF] text-white px-4 py-2 rounded-md">Оставить отзыв</button>
          </div>
        </form>

        <div className="space-y-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="mx-auto w-full max-w-3xl">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews