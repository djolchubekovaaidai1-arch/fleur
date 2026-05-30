import React from "react";
import { useNavigate } from 'react-router-dom'
import {
  FaLeaf,
  FaHandsHelping,
  FaTruck,
  FaGift
} from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-cream text-dark font-sans antialiased">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-20">

        {/* HERO БЛОК */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center mb-20">
          <div className="overflow-hidden rounded-[40px] bg-white shadow-green">
            <img
              src="https://i.pinimg.com/1200x/c4/b9/30/c4b9304338d2501b4f72a58baa1bd690.jpg"
              alt="Магазин Flore"
              className="w-full h-full min-h-[420px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <span className="inline-flex items-center justify-center rounded-full bg-accent-50 px-5 py-2 text-sm uppercase tracking-[0.24em] text-accent font-semibold w-max">
              О компании
            </span>

            <div className="space-y-5">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[5.5rem] font-light leading-tight">
                Как всё начиналось
              </h1>
              <p className="text-base md:text-lg text-gray max-w-xl leading-relaxed">
                Flore открылась в 2018 году — с маленькой витриной, большим сердцем и страстью к живым цветам. Мы верили, что правильный букет способен выразить то, что сложно сказать словами.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <p className="font-serif text-[38px] text-accent font-semibold leading-none">6+</p>
                <p className="text-[13px] text-gray mt-2 uppercase tracking-wider">лет на рынке</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <p className="font-serif text-[38px] text-accent font-semibold leading-none">12K+</p>
                <p className="text-[13px] text-gray mt-2 uppercase tracking-wider">счастливых клиентов</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
                <p className="font-serif text-[38px] text-accent font-semibold leading-none">50+</p>
                <p className="text-[13px] text-gray mt-2 uppercase tracking-wider">сортов цветов</p>
              </div>
            </div>
          </div>
        </div>

        {/* ПОЧЕМУ ВЫБИРАЮТ FLORE */}
        <div className="mb-16">
          <h2 className="font-serif text-[28px] md:text-[40px] font-normal text-accent mb-5 leading-tight text-center">
            Почему выбирают Flore
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 text-center shadow-green transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent text-2xl">
                <FaLeaf />
              </div>
              <h3 className="font-serif text-lg text-dark mb-2.5">Только свежие цветы</h3>
              <p className="text-sm text-gray leading-relaxed">
                Поставки ежедневно от проверенных ферм и местных производителей.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-green transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent text-2xl">
                <FaHandsHelping />
              </div>
              <h3 className="font-serif text-lg text-dark mb-2.5">Ручная работа</h3>
              <p className="text-sm text-gray leading-relaxed">
                Каждый букет собирается вручную флористами под ваш запрос.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-green transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent text-2xl">
                <FaTruck />
              </div>
              <h3 className="font-serif text-lg text-dark mb-2.5">Быстрая доставка</h3>
              <p className="text-sm text-gray leading-relaxed">
                Доставляем букеты по городу в течение 2 часов — аккуратно и точно.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-green transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent text-2xl">
                <FaGift />
              </div>
              <h3 className="font-serif text-lg text-dark mb-2.5">Открытка в подарок</h3>
              <p className="text-sm text-gray leading-relaxed">
                К каждому заказу мы добавляем фирменную открытку с вашим текстом.
              </p>
            </div>
          </div>
        </div>

        {/* ЧТО МЫ СОЗДАЁМ */}
        <div className="mb-16">
          <h2 className="font-serif text-[28px] md:text-[40px] font-normal text-accent mb-5 leading-tight text-center">
            Что мы создаём
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[30px] overflow-hidden bg-white shadow-green transition-transform duration-300 hover:-translate-y-1.5">
              <img src="https://i.pinimg.com/1200x/ef/1f/86/ef1f86d79f2ad638f6b1249edcda8eb5.jpg" className="w-full h-[200px] object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-lg text-accent mb-1.5">Букеты</h3>
                <p className="text-sm text-gray m-0">Классика, моно, полевые, авторские.</p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden bg-white shadow-green transition-transform duration-300 hover:-translate-y-1.5">
              <img src="https://i.pinimg.com/1200x/de/07/b5/de07b5246ce5f9a9bb56cc0983779fb3.jpg" alt="Цветы в коробках" className="w-full h-[200px] object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-lg text-accent mb-1.5">Цветы в коробках</h3>
                <p className="text-sm text-gray m-0">Шляпные, квадратные и подарочные коробки.</p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden bg-white shadow-green transition-transform duration-300 hover:-translate-y-1.5">
              <img src="https://i.pinimg.com/1200x/43/d0/3a/43d03a590c46598bde22287a5b36d0b4.jpg" alt="Свадебная флористика" className="w-full h-[200px] object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-lg text-accent mb-1.5">Свадебная флористика</h3>
                <p className="text-sm text-gray m-0">Букет невесты, декор зала, бутоньерки.</p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden bg-white shadow-green transition-transform duration-300 hover:-translate-y-1.5">
              <img src="https://i.pinimg.com/1200x/85/31/9c/85319c84adaacbc9c85109210b2ce17a.jpg" alt="Оформление мероприятий" className="w-full h-[200px] object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-lg text-accent mb-1.5">Оформление мероприятий</h3>
                <p className="text-sm text-gray m-0">Корпоративы, дни рождения, фотозоны.</p>
              </div>
            </div>
          </div>
        </div>

        {/* НАША КОМАНДА */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-[28px] md:text-[40px] font-normal text-accent mb-5 leading-tight">
            Наши флористы
          </h2>
          <p className="text-gray mb-11 text-base max-w-3xl mx-auto">
            За каждым букетом стоит талантливый флорист, который вкладывает душу в свою работу. Познакомьтесь с нашей командой мастеров.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full max-w-[220px] text-center">
              <div className="mx-auto h-[220px] w-[220px] rounded-full border border-accent-200 bg-white shadow-green"></div>
              <h3 className="font-serif text-lg text-accent mt-4 mb-1">Алина</h3>
              <p className="text-[13px] text-gray m-0">Главный флорист, 8 лет опыта</p>
            </div>
            <div className="w-full max-w-[220px] text-center">
              <div className="mx-auto h-[220px] w-[220px] rounded-full border border-accent-200 bg-white shadow-green"></div>
              <h3 className="font-serif text-lg text-accent mt-4 mb-1">Максим</h3>
              <p className="text-[13px] text-gray m-0">Флорист-дизайнер, 5 лет опыта</p>
            </div>
            <div className="w-full max-w-[220px] text-center">
              <div className="mx-auto h-[220px] w-[220px] rounded-full border border-accent-200 bg-white shadow-green"></div>
              <h3 className="font-serif text-lg text-accent mt-4 mb-1">Екатерина</h3>
              <p className="text-[13px] text-gray m-0">Флорист, 3 года опыта</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[40px] bg-gradient-to-r from-accent/15 via-white to-white p-10 shadow-green">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-dark mb-3">
                Готовы выбрать букет?
              </h2>
              <p className="text-gray leading-relaxed">
                Загляните в наш каталог или свяжитесь с нами — мы поможем найти идеальный вариант.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/catalog')}
                className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium transition hover:bg-accent/90"
              >
                Перейти в каталог
              </button>
              <button
                onClick={() => navigate('/contacts')}
                className="px-6 py-3 border border-accent text-accent rounded-full text-sm font-medium transition hover:bg-accent-50"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
