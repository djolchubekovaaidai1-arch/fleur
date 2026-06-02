import { Link } from 'react-router-dom'
import { FaTruck, FaStar, FaArrowRight } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import HeroSlider from '../components/HeroSlider'
import useProducts from '../hooks/useProducts'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
   

export default function Home() {
    const { products, loading, error } = useProducts()

    return (
        <main className="bg-cream">
            <HeroSlider />
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
                <div className="grid gap-12 items-center lg:grid-cols-2">
                    <div>
                        <p className="uppercase tracking-[0.35em] text-gray-500 mb-4 text-sm sm:text-base">
                            Flower Boutique
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                            FLEUR
                        </h1>

                        <p className="mt-8 text-base sm:text-lg text-gray-600 max-w-xl leading-8">
                            Свежие букеты, воздушные шары и подарки для самых важных моментов вашей жизни.
                        </p>

                        <Link
                            to="/catalog"
                            className="inline-flex items-center gap-3 mt-10 border border-black px-6 py-3 sm:px-8 sm:py-4 hover:bg-black hover:text-white transition text-sm sm:text-base"
                        >
                            Смотреть каталог
                            <FaArrowRight />
                        </Link>
                    </div>

                    <div>
                        <img
                            src="https://i.pinimg.com/736x/fc/35/22/fc3522c9b098cb11e3cd775db0d89f49.jpg"
                            alt="Flowers"
                            className="w-full h-72 sm:h-96 md:h-[520px] lg:h-[600px] object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10">
                    ABOUT US
                </h2>

                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                        <p className="text-gray-600 leading-8 text-base sm:text-lg">
                            Fleur — это цветочный бутик, вдохновлённый красотой природы. Мы создаём букеты, которые помогают выразить чувства и сделать любой день особенным.
                        </p>

                        <p className="text-gray-600 leading-8 text-base sm:text-lg mt-6">
                            Каждая композиция собирается вручную из свежих цветов с вниманием к каждой детали.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <img
                            src="https://i.pinimg.com/736x/90/49/00/904900eeac06d213d5a34db384304e37.jpg"
                            alt=""
                            className="h-64 w-full object-cover rounded-3xl"
                        />

                        <img
                            src="https://i.pinimg.com/736x/4c/fd/54/4cfd547a05362fadbdd0438ca0648d6f.jpg"
                            alt=""
                            className="h-64 w-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* BESTSELLERS */}
            <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10">
                    BESTSELLERS
                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="group overflow-hidden rounded-3xl bg-white shadow-green">
                        <img
                            src="https://i.pinimg.com/736x/fc/35/22/fc3522c9b098cb11e3cd775db0d89f49.jpg"
                            alt=""
                            className="h-72 sm:h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl sm:text-3xl">Розовый букет</h3>
                            <p className="text-gray-500 mt-3">4200 сом</p>
                        </div>
                    </div>

                    <div className="group overflow-hidden rounded-3xl bg-white shadow-green">
                        <img
                            src="https://i.pinimg.com/736x/9d/2a/f5/9d2af5342b4dec2c0bbf52fd85525bf9.jpg"
                            alt=""
                            className="h-72 sm:h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl sm:text-3xl">Букет пионов</h3>
                            <p className="text-gray-500 mt-3">3500 сом</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATALOG PREVIEW */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-16">
                    CATALOG
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading && (
                        <div className="col-span-full text-center text-gray-500">
                            Загрузка товаров...
                        </div>
                    )}

                    {error && (
                        <div className="col-span-full text-center text-red-500">
                            {error}
                        </div>
                    )}

                    {!loading && !error && products.slice(0, 3).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </section>

            {/* DELIVERY */}
            <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10">
                    DELIVERY
                </h2>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-green">
                        <FaTruck className="text-4xl mb-6 text-accent" />
                        <h3 className="text-3xl mb-4">Быстрая доставка</h3>
                        <p className="text-gray-600 leading-8">
                            Доставляем цветы по Бишкеку в день заказа. Свежесть и аккуратность гарантированы.
                        </p>
                    </div>

                    <div>
                        <MapContainer
                            center={[42.87422117916225, 74.59778561522801]}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="w-full h-72 sm:h-[350px] rounded-3xl border border-accent-200"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[42.87422117916225, 74.59778561522801]}>
                                <Popup>Fleur, Бишкек</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>

            {/* REVIEWS */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-16">
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