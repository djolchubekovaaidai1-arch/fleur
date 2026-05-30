import { useState, useEffect } from 'react'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://i.pinimg.com/736x/25/ec/48/25ec487e5a740a85522e29e17ebe670a.jpg',
      title: 'Свежие цветы каждый день',
      subtitle: 'Доставка по городу за 2 часа'
    },
    {
      image: 'https://i.pinimg.com/1200x/20/da/c1/20dac15c5ce077baa5c2d6478ceedb15.jpg',
      title: 'Эксклюзивные букеты',
      subtitle: 'Создаем композиции для особых моментов'
    },
    {
      image: 'https://i.pinimg.com/736x/95/56/0e/95560e2d331e482a6855a2c40fb5ca84.jpg',
      title: 'Подарки с душой',
      subtitle: 'Сладости и мягкие игрушки'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Инлайн стили для анимации текста, так как в Tailwind нет встроенного fadeInUp
  const animationStyles = {
    h1: {
      animation: 'fadeInUp 1s ease forwards'
    },
    p: {
      animation: 'fadeInUp 1s ease 0.3s both'
    }
  }

  return (
    <>
      {/* Глобальный инжект анимации текста (чтобы не менять tailwind.config.js) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative h-[50vh] md:h-[70vh] min-h-[500px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          return (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(5,12,1,0.503)] to-[rgba(2,14,7,0.645)]"></div>
              
              {/* Content */}
              <div className="relative z-20 text-center text-white p-8">
                {isActive && (
                  <>
                    <h1 
                      style={animationStyles.h1}
                      className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)]"
                    >
                      {slide.title}
                    </h1>
                    <p 
                      style={animationStyles.p}
                      className="text-ece text-lg md:text-3xl drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)]"
                    >
                      {slide.subtitle}
                    </p>
                  </>
                )}
              </div>
            </div>
          )
        })}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, index) => {
            const isActive = index === currentSlide
            return (
              <span
                key={index}
                className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/80 hover:scale-125 ${
                  isActive ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Slider
