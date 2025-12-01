const CurrentOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Buy 2 Get 1 Free",
      subtitle: "on all dog treats",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: "🦴"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Check out our latest cat products",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      icon: "🐱"
    },
    {
      id: 3,
      title: "Winter Essentials",
      subtitle: "Keep your pets warm and cozy",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      icon: "🧣"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Offers & Promotions
          </h2>
          <p className="text-xl text-gray-600">
            Great deals on your favorite pet products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.color} rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="text-6xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-lg opacity-90 mb-6">{offer.subtitle}</p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Special Weekend Deal!</h3>
          <p className="text-lg mb-6">Get 20% off all orders over $50 with code: WEEKEND20</p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  )
}

export default CurrentOffers