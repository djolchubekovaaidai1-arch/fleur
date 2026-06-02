import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '996555123456'

    const text = `
Новое сообщение с сайта:
Имя: ${form.name}
Телефон: ${form.phone}
Email: ${form.email}
Сообщение: ${form.message}
    `

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank')

    setForm({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }
return (
  <section className="relative overflow-hidden bg-cream py-20">
    <div className="absolute right-0 top-8 h-[340px] w-[340px] rounded-full bg-white/60 blur-3xl" />
    <div className="absolute left-10 top-36 h-[220px] w-[220px] rounded-full bg-[#d7c6b9]/50 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="mb-16 max-w-3xl">
        <span className="inline-flex rounded-full border border-[#c4b1a5] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#7f6156]">
          Контакты
        </span>
        <h1 className="mt-8 text-5xl font-light text-[#2b2b22] md:text-6xl">
          Свяжитесь с нами
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d4b49]">
          Мы всегда на связи — напишите нам, задайте вопрос или оформите заказ через удобный контактный формат. Офис и курьерская служба работают по всему Кыргызстану.
        </p>
      </div>

      <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[32px] border border-[#e9d1d5] bg-white/95 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.08)]">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#e9f1e4] text-[#4a7c59]">
                <FaPhone className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-[#3d2a2d]">Телефон</h2>
              <p className="mt-3 text-sm leading-7 text-[#6d5a58]">+996 555 123 456</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5a58]">+996 777 654 321</p>
            </div>

            <div className="rounded-[32px] border border-[#e9d1d5] bg-white/95 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.08)]">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#e9f1e4] text-[#4a7c59]">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-[#3d2a2d]">Адрес</h2>
              <p className="mt-3 text-sm leading-7 text-[#6d5a58]">ул. Токтогула 102, Бишкек</p>
              <p className="mt-2 text-sm text-[#6d5a58]">Работаем ежедневно 10:00–20:00</p>
            </div>

            <div className="rounded-[32px] border border-[#e9d1d5] bg-white/95 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.08)]">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#e9f1e4] text-[#4a7c59]">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-[#3d2a2d]">Email</h2>
              <p className="mt-3 text-sm leading-7 text-[#6d5a58]">hello@fleur.kg</p>
              <p className="mt-2 text-sm leading-7 text-[#6d5a58]">Ответим в течение дня</p>
            </div>
          </div>

          <div className="rounded-[40px] border border-[#e9d1d5] bg-white/90 p-10 shadow-[0_30px_90px_rgba(74,124,89,0.08)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#f1e3df] pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#8e6f6a]">Удобно</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#2b2b22]">Отвечаем на любые вопросы</h2>
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#e9f1e4] text-[#4a7c59]">
                <FaClock className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#fff5f7] p-6 text-sm text-[#6d5a58]">
                <p className="font-semibold text-[#3d2a2d]">Телефон</p>
                <p className="mt-3">Приоритетные заказы через звонок</p>
              </div>
              <div className="rounded-3xl bg-[#fff5f7] p-6 text-sm text-[#6d5a58]">
                <p className="font-semibold text-[#3d2a2d]">Сообщения</p>
                <p className="mt-3">WhatsApp, Telegram или email</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[40px] ...">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8e6f6a]">Написать нам</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#2b2b22]">Форма обратной связи</h2>
          <p className="mt-4 text-sm leading-7 text-[#6d5a58]">
            Оставьте свои данные, и мы свяжемся с вами в ближайшее время.
          </p>
          <p className="mt-2 text-sm leading-7 text-[#6d5a58]">
            Укажите номер, чтобы мы могли быстро перезвонить.
          </p>

          <div className="mt-8 grid gap-5">
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full rounded-3xl border border-[#e6d9d5] bg-[#f3f7f0] px-5 py-4 text-sm text-[#5d4b49] outline-none focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-3xl border border-[#e6d9d5] bg-[#f3f7f0] px-5 py-4 text-sm text-[#5d4b49] outline-none focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20"
            />
            <textarea
              rows={5}
              placeholder="Сообщение"
              className="w-full rounded-3xl border border-[#e6d9d5] bg-[#f3f7f0] px-5 py-4 text-sm text-[#5d4b49] outline-none focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20"
            />
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#4a7c59] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#3d684c]"
          >
            Отправить сообщение
          </button>
        </form>
      </div>

      <div className="mt-10 rounded-[40px] border border-[#e9d1d5] bg-white/95 p-8 shadow-[0_30px_90px_rgba(74,124,89,0.08)]">
        <h2 className="text-2xl font-semibold text-[#3d2a2d]">На карте</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d5a58]">
          Наш магазин находится в самом сердце Бишкека — приезжайте за свежими цветами, подарками и хорошим настроением.
        </p>
        <div className="mt-6 overflow-hidden rounded-[32px] border border-[#f1e3df]">
          <MapContainer
            center={[42.87422117916225, 74.59778561522801]}
            zoom={15}
            scrollWheelZoom={false}
            className="relative z-0 h-[420px] w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[42.87422117916225, 74.59778561522801]}>
              <Popup>
                Fleur — ул. Токтогула 102, Бишкек
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  </section>
)
}

export default Contacts
