import { useNavigate } from 'react-router-dom'
import {
  FaSeedling,
  FaCamera,
  FaMoneyBillWave,
  FaArrowRight
} from 'react-icons/fa'

export default function Sell() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F9F3E8]">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-[#4A7C59] mb-4">
              Fleur Marketplace
            </p>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Продайте
              <br />
              свой букет
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Если у вас есть букет или цветочная композиция,
              которую вы хотите продать, оставьте заявку.
              Мы поможем найти покупателя и организовать продажу.
            </p>

            <button
              onClick={() => navigate('/contacts')}
              className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-8 py-4 rounded-full flex items-center gap-3 transition"
            >
              Оставить заявку
              <FaArrowRight />
            </button>

          </div>

          <div>

            <img
              src="https://i.pinimg.com/736x/23/97/63/23976318feb186ce99346f5c798d81dc.jpg"
              alt="Flowers"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-[40px] shadow-xl"
            />

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        <h2 className="text-3xl md:text-5xl text-center mb-14">
          Как это работает?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaCamera
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Фото букета
            </h3>

            <p className="text-gray-600 leading-7">
              Сделайте красивые фотографии вашего букета.
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaSeedling
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Опишите товар
            </h3>

            <p className="text-gray-600 leading-7">
              Укажите состав букета и дополнительные детали.
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaMoneyBillWave
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Получите оплату
            </h3>

            <p className="text-gray-600 leading-7">
              После продажи получите деньги удобным способом.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-lg text-center">

          <h2 className="text-3xl md:text-5xl mb-6">
            Готовы продать букет?
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Свяжитесь с нами и отправьте информацию о вашем букете.
            Мы рассмотрим заявку и поможем с продажей.
          </p>

          <button
            onClick={() => navigate('/contacts')}
            className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-10 py-4 rounded-full transition"
          >
            Связаться с нами
          </button>

        </div>

      </section>

    </div>
  )
}