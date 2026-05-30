import { useNavigate } from 'react-router-dom'
import {
  FaLeaf,
  FaGift,
  FaHeart,
  FaArrowRight
} from 'react-icons/fa'

export default function Build() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F9F3E8]">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-[#4A7C59] mb-4">
              Fleur Boutique
            </p>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Соберите
              <br />
              свой идеальный букет
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Создайте уникальную композицию из любимых цветов,
              добавьте открытку, сладости или воздушные шары.
              Наши флористы соберут букет специально для вас.
            </p>

            <button
              onClick={() => navigate('/contacts')}
              className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-8 py-4 rounded-full flex items-center gap-3 transition"
            >
              Оформить заказ
              <FaArrowRight />
            </button>

          </div>

          <div>

            <img
              src="https://i.pinimg.com/736x/c0/14/57/c01457804f288462c6e0b75e5c375135.jpg"
              alt="Bouquet"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-[40px] shadow-xl"
            />

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        <h2 className="text-3xl md:text-5xl text-center mb-14">
          Что можно добавить?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaLeaf
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Цветы
            </h3>

            <p className="text-gray-600 leading-7">
              Розы, пионы, тюльпаны, гортензии и другие свежие цветы.
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaGift
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Подарки
            </h3>

            <p className="text-gray-600 leading-7">
              Конфеты, мягкие игрушки и приятные сюрпризы.
            </p>

          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-md">

            <FaHeart
              size={40}
              className="text-[#4A7C59] mb-6"
            />

            <h3 className="text-2xl mb-4">
              Открытки
            </h3>

            <p className="text-gray-600 leading-7">
              Добавьте личное пожелание к вашему заказу.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-lg text-center">

          <h2 className="text-3xl md:text-5xl mb-6">
            Индивидуальный заказ
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Расскажите нам о своих пожеланиях, и мы создадим
            уникальный букет специально для вас.
          </p>

          <button
            onClick={() => navigate('/contacts')}
            className="bg-[#4A7C59] hover:bg-[#3B6448] text-white px-10 py-4 rounded-full transition"
          >
            Связаться с флористом
          </button>

        </div>

      </section>

    </div>
  )
}