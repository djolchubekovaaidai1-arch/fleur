import React from 'react'

const Delivery = () => {
  return (
    <section className="relative min-h-screen py-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-[30px] font-thin uppercase tracking-[0.3em] text-[#3f1d27] leading-[50px]">
            доставка <span className="font-semibold">и оплата</span>
          </h1>
          <div className="mt-6 flex items-center gap-4 text-[#4a7c59]">
            <span className="h-1.5 w-20 rounded-full bg-[#4a7c59]" />
            <span className="h-1.5 w-10 rounded-full bg-[#4a7c59]" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] border border-[#f4d4da] bg-white/80 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.18)] backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-[#3f1d27] mb-4">Доставка</h2>
                <ul className="space-y-3 text-sm text-[#5f3d48] leading-7">
                  <li>Кыргыз почтасы</li>
                  <li>Международные курьерские службы</li>
                  <li>Курьерская доставка по Бишкеку*</li>
                </ul>
                <p className="mt-4 text-xs text-[#8d6f7a]">*только для города Бишкек</p>
              </div>

              <div className="rounded-[32px] border border-[#f4d4da] bg-white/80 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.18)] backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-[#3f1d27] mb-4">Оплата</h2>
                <ul className="space-y-3 text-sm text-[#5f3d48] leading-7">
                  <li>Банковская карта</li>
                  <li>Онлайн оплата VISA / Mastercard</li>
                  <li>Наличные</li>
                </ul>
                <p className="mt-4 text-xs text-[#8d6f7a]">Только при самовывозе</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#f4d4da] bg-white/80 p-8 shadow-[0_20px_80px_rgba(74,124,89,0.18)] backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-[#3f1d27] mb-4">Стоимость и сроки</h2>
              <p className="text-sm text-[#5f3d48] leading-7">
                Стоимость и сроки доставки рассчитываются в зависимости от выбранного способа и адреса. Для расчета добавьте товар в корзину и укажите адрес доставки.
              </p>
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <div className="relative overflow-hidden rounded-[40px] border border-[#f4d4da] shadow-[0_30px_90px_rgba(74,124,89,0.18)]">
              <img
                src="https://i.pinimg.com/736x/fc/35/22/fc3522c9b098cb11e3cd775db0d89f49.jpg"
                alt="Букеты и подарки"
                className="h-full w-full object-cover min-h-[420px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fdf2f6]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery