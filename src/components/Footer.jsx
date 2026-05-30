import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-accent-200 mt-20 border-t">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-accent">
              Fleur
            </h2>

            <p className="text-gray-600 mt-3">
              Магазин цветов и подарков.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Навигация
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Главная</li>
              <li>Каталог</li>
              <li>Доставка</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Соцсети
            </h3>

            <div className="flex gap-4 text-xl">

              <FaInstagram />

              <FaTelegram />

              <FaWhatsapp />

            </div>
          </div>

        </div>

        <div className="border-t mt-8 pt-5 text-center text-gray-500">
          © 2026 Fleur
        </div>

      </div>

    </footer>
  )
}