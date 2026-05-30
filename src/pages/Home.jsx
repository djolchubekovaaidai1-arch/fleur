import { Link } from 'react-router-dom'
import { FaTruck, FaStar, FaArrowRight } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import HeroSlider from '../components/HeroSlider'
   

export default function Home() {
    return (
        <main className="bg-cream">
            <HeroSlider />
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <p className="uppercase tracking-[8px] text-gray-500 mb-4">
                            Flower Boutique
                        </p>

                        <h1 className="text-7xl font-light leading-none">
                            FLEUR
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 max-w-lg leading-8">
                            Свежие букеты, воздушные шары и подарки для самых
                            важных моментов вашей жизни.
                        </p>

                        <Link
                            to="/catalog"
                            className="inline-flex items-center gap-3 mt-10 border border-black px-8 py-4 hover:bg-black hover:text-white transition"
                        >
                            Смотреть каталог
                            <FaArrowRight />
                        </Link>
                    </div>

                    <div>
                        <img
                            src="https://i.pinimg.com/736x/fc/35/22/fc3522c9b098cb11e3cd775db0d89f49.jpg"
                            alt="Flowers"
                            className="w-full h-[700px] object-cover rounded-sm"
                        />
                    </div>

                </div>

            </section>

            {/* ABOUT */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-6xl font-light mb-16">
                    ABOUT US
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-gray-600 leading-8 text-lg">
                            Fleur — это цветочный бутик, вдохновлённый красотой
                            природы. Мы создаём букеты, которые помогают
                            выразить чувства и сделать любой день особенным.
                        </p>

                        <p className="text-gray-600 leading-8 text-lg mt-6">
                            Каждая композиция собирается вручную из свежих
                            цветов с вниманием к каждой детали.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <img
                            src="https://i.pinimg.com/736x/90/49/00/904900eeac06d213d5a34db384304e37.jpg"
                            alt=""
                            className="h-72 w-full object-cover"
                        />

                        <img
                            src="https://i.pinimg.com/736x/4c/fd/54/4cfd547a05362fadbdd0438ca0648d6f.jpg"
                            alt=""
                            className="h-72 w-full object-cover mt-10"
                        />

                    </div>

                </div>

            </section>

            {/* BESTSELLERS */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-6xl font-light mb-16">
                    BESTSELLERS
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="group">

                        <img
                            src="https://i.pinimg.com/736x/fc/35/22/fc3522c9b098cb11e3cd775db0d89f49.jpg"
                            alt=""
                            className="h-[550px] w-full object-cover"
                        />

                        <div className="mt-5 flex justify-between items-center">

                            <div>
                                <h3 className="text-2xl">
                                    Розовый букет
                                </h3>

                                <p className="text-gray-500">
                                    4200 сом
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="group">

                        <img
                            src="https://i.pinimg.com/736x/9d/2a/f5/9d2af5342b4dec2c0bbf52fd85525bf9.jpg"
                            alt=""
                            className="h-[550px] w-full object-cover"
                        />

                        <div className="mt-5">

                            <h3 className="text-2xl">
                                Букет пионов
                            </h3>

                            <p className="text-gray-500">
                                3500 сом
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CATALOG PREVIEW */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-6xl font-light mb-16">
                    CATALOG
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.slice(0, 3).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>

            </section>

            {/* DELIVERY */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-6xl font-light mb-16">
                    DELIVERY
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="bg-white p-10">

                        <FaTruck className="text-4xl mb-6" />

                        <h3 className="text-3xl mb-4">
                            Быстрая доставка
                        </h3>

                        <p className="text-gray-600 leading-8">
                            Доставляем цветы по Бишкеку в день заказа.
                            Свежесть и аккуратность гарантированы.
                        </p>

                    </div>

                    <div>

                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=Bishkek&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-[350px]"
                        />

                    </div>

                </div>

            </section>

            {/* REVIEWS */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-6xl font-light mb-16">
                    REVIEWS
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">

                    {[1, 2, 3].map(item => (
                        <div
                            key={item}
                            className="bg-white p-8"
                        >
                            <FaStar className="mb-4 text-yellow-500" />

                            <p className="text-gray-600 leading-7">
                                Очень красивые букеты и быстрая доставка.
                                Всё было оформлено идеально.
                            </p>

                            <h4 className="mt-6 font-medium">
                                Клиент Fleur
                            </h4>

                        </div>
                    ))}

                </div>

            </section>

        </main>
    )
}