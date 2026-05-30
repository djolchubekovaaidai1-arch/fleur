import { useNavigate } from 'react-router-dom'

export default function Build() {
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="rounded-[32px] bg-white p-10 shadow-green">
        <p className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-3">
          Собрать букет
        </p>
        <h1 className="text-4xl font-bold text-dark mb-6">
          Закажите индивидуальный букет
        </h1>
        <p className="text-gray leading-relaxed mb-8">
          Выберите цветы и стиль, а мы соберем букет специально для вас. Напишите нам детали заказа, и мы свяжемся в течение дня.
        </p>
        <button
          onClick={() => navigate('/contacts')}
          className="rounded-full bg-accent px-6 py-4 text-white text-base font-semibold transition hover:bg-accent/90"
        >
          Связаться с нами
        </button>
      </div>
    </div>
  )
}
