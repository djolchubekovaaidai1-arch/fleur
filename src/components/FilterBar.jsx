export default function FilterBar({
  current,
  setCurrent
}) {
  const filters = [
    { name: 'Все', value: 'all' },
    { name: 'Цветы', value: 'flowers' },
    { name: 'Шары', value: 'balloons' },
    { name: 'Сладости', value: 'sweets' }
  ]

  return (
    <div className="flex gap-3 flex-wrap mb-8">

      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => setCurrent(filter.value)}
          className={`px-5 py-2 rounded-xl ${
            current === filter.value
              ? 'bg-accent text-white'
              : 'bg-accent-50'
          }`}
        >
          {filter.name}
        </button>
      ))}

    </div>
  )
}