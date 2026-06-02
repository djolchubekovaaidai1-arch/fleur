import { useParams } from 'react-router-dom'
import {
    FaStar,
    FaStarHalfAlt,
    FaTruck,
    FaGift,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa'
import { useRef } from 'react'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import useProducts from '../hooks/useProducts'

export default function ProductDetails() {
    const { id } = useParams()
    const { products, loading, error } = useProducts()
    const { cart, addToCart } = useCart()
    const scrollRef = useRef(null)

    if (loading) {
        return (
            <h1 className="text-center text-3xl mt-20">
                Загрузка данных...
            </h1>
        )
    }

    if (error) {
        return (
            <h1 className="text-center text-3xl mt-20 text-red-500">
                {error}
            </h1>
        )
    }

    const product = products.find(
        item => item.id === Number(id)
    )

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -350,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 350,
            behavior: 'smooth'
        })
    }

    if (!product) {
        return (
            <h1 className="text-center text-3xl mt-20">
                Букет не найден
            </h1>
        )
    }

    const inCart = cart.some(
        item => item.id === product.id
    )

    const similarProducts = products
        .filter(item => item.id !== product.id)
        .slice(0, 6)

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">

            <div className="grid lg:grid-cols-2 gap-12">

                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[550px] object-cover rounded-[32px]"
                    />

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <img
                            src={product.image}
                            alt=""
                            className="h-32 w-full object-cover rounded-2xl"
                        />
                        <img
                            src={product.image}
                            alt=""
                            className="h-32 w-full object-cover rounded-2xl"
                        />
                        <img
                            src={product.image}
                            alt=""
                            className="h-32 w-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div>

                    <h1 className="text-5xl font-bold">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-3 mt-5">
                        <div className="flex text-yellow-400 text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>

                        <span className="font-medium">
                            4.9
                        </span>

                        <span className="text-gray-500">
                            (124 отзыва)
                        </span>
                    </div>

                    <p className="text-4xl font-bold text-accent mt-6">
                        {product.price} сом
                    </p>

                    <p className="text-gray-600 mt-6 leading-8">
                        Изысканный букет из свежих цветов,
                        собранный профессиональными флористами.
                        Подойдет для дня рождения, юбилея,
                        свадьбы или просто чтобы порадовать
                        близкого человека.
                    </p>

                    <div className="grid gap-4 mt-8">

                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                            <FaTruck className="text-accent text-xl" />

                            <div>
                                <p className="font-semibold">
                                    Быстрая доставка
                                </p>

                                <p className="text-sm text-gray-500">
                                    Доставка по Бишкеку за 2 часа
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                            <FaGift className="text-accent text-xl" />

                            <div>
                                <p className="font-semibold">
                                    Подарочная упаковка
                                </p>

                                <p className="text-sm text-gray-500">
                                    Бесплатное оформление букета
                                </p>
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className={`mt-8 w-full py-4 rounded-2xl text-lg font-medium transition ${inCart
                            ? 'bg-green-600 text-white'
                            : 'bg-accent text-white hover:bg-accent/90'
                            }`}
                    >
                        {inCart
                            ? '✓ Добавлено в корзину'
                            : 'Добавить в корзину'}
                    </button>

                </div>

            </div>

            <section className="mt-24">
                <div className="flex items-center justify-between mb-8">

                    <h2 className="text-4xl font-bold">
                        Похожие букеты
                    </h2>

                    <div className="flex gap-3">
                        <button
                            onClick={scrollLeft}
                            className="w-12 h-12 rounded-full bg-white shadow hover:shadow-md transition"
                        >
                            <FaChevronLeft className="mx-auto" />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="w-12 h-12 rounded-full bg-accent text-white shadow hover:scale-105 transition"
                        >
                            <FaChevronRight className="mx-auto" />
                        </button>
                    </div>

                </div>

                <div
                    ref={scrollRef}
                    className="similar-scroll flex gap-6 overflow-x-auto pb-4"
                >
                    {similarProducts.map(item => (
                        <div
                            key={item.id}
                            className="min-w-[320px] flex-shrink-0"
                        >
                            <ProductCard product={item} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}