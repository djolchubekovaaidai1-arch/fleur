import React from 'react'

const StarRow = ({ rating = 5 }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={i < rating ? '#D3BFAF' : 'none'}
      stroke="#D3BFAF"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.6L19.334 24 12 19.897 4.666 24l1.584-8.65L.5 9.75l7.832-1.732L12 .587z"></path>
    </svg>
  ))

  return <div className="flex gap-1.5">{stars}</div>
}

const ReviewCard = ({ rating = 5, text = '', author = '', className = '' }) => {
  return (
    <div className={`w-full bg-white/90 rounded-xl shadow-xl p-7 backdrop-blur-sm ${className}`.trim()}>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <StarRow rating={rating} />
        </div>
        <div className="mt-4 text-gray-700 leading-relaxed text-base">{text}</div>
        {author && <div className="mt-3 text-gray-400 font-semibold">— {author}</div>}
      </div>
    </div>
  )
}

export default ReviewCard