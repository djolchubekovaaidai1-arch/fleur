import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccess() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-[32px] shadow-green text-center max-w-md w-full">

        <FaCheckCircle className="mx-auto text-6xl text-accent mb-6" />

        <h1 className="text-3xl font-bold text-dark mb-3">
          Заказ успешно отправлен
        </h1>

        <p className="text-gray-500 mb-8">
          Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.
        </p>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-accent text-white py-4 rounded-full font-semibold hover:bg-accent/90 transition"
        >
          На главную
        </button>
      </div>
    </div>
  )
}