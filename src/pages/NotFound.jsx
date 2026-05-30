import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F3E8] flex items-center justify-center px-6 overflow-hidden">

      {/* Декоративные круги */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-52 h-52 bg-[#4A7C59]/10 rounded-full blur-3xl sm:top-20 sm:left-20 sm:-translate-x-0 sm:w-72 sm:h-72" />
      <div className="absolute bottom-10 right-1/2 translate-x-1/2 w-52 h-52 bg-[#4A7C59]/10 rounded-full blur-3xl sm:bottom-20 sm:right-20 sm:translate-x-0 sm:w-80 sm:h-80" />

      <div className="relative text-center max-w-3xl px-4 sm:px-0">

        <p className="uppercase tracking-[12px] text-[#4A7C59] mb-6">
          Fleur
        </p>

        <h1 className="title-font text-[120px] sm:text-[180px] md:text-[220px] leading-none text-[#4A7C59]">
          404
        </h1>

      

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl mx-auto">
          Похоже, эта страница улетела вместе с букетом.
          Давайте вернёмся в цветочный мир Fleur.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-[#4A7C59] hover:bg-[#3B6448] text-white px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <FaArrowLeft />
          Вернуться на главную
        </Link>

        <div className="mt-16 flex justify-center gap-8 opacity-40">

          <span className="text-5xl">✿</span>
          <span className="text-6xl">❀</span>
          <span className="text-5xl">✿</span>

        </div>

      </div>

    </div>
  )
}