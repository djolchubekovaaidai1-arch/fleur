import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard
} from 'react-icons/fa'
 import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-accent-200 mt-20 border-t">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-5 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-accent">
              Fleur
            </h2>

            <p className="text-gray-600 mt-3 text-sm">
              Магазин цветов и подарков.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Навигация
            </h3>

           

            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/delivery">Доставка</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Адрес
            </h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=ул.+Киевская+133,+Бишкек,+Кыргызстан"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-accent transition"
            >
              <FaMapMarkerAlt />
              <span>ул. Киевская, 133, Бишкек, Кыргызстан</span>
            </a>

            <div className="mt-4 text-gray-600 text-sm">
              <p className="font-semibold mb-2">Контакты</p>
              <p>+996 (312) 90-99-09</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Режим работы
            </h3>

            <div className="space-y-1 text-gray-600 text-sm">
              <p>Пн: 10:00 - 20:00</p>
              <p>Вт: 10:00 - 20:00</p>
              <p>Ср: 10:00 - 20:00</p>
              <p>Чт: 10:00 - 20:00</p>
              <p>Пт: 10:00 - 20:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: Выходной</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Соцсети
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://instagram.com/fleur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/fleur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaTelegram />
              </a>

              <a
                href="https://wa.me/996700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>

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