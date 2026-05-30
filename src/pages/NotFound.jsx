import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F3E8] flex items-center justify-center px-6 overflow-hidden">

      {/* Декоративные круги */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#4A7C59]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#4A7C59]/10 rounded-full blur-3xl" />

      <div className="relative text-center max-w-3xl">

        <p className="uppercase tracking-[12px] text-[#4A7C59] mb-6">
          Fleur
        </p>

        <h1 className="title-font text-[220px] md:text-[280px] leading-none text-[#4A7C59]">
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