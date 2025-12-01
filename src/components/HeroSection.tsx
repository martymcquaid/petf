import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Everything Your Pet Needs—All in One Place!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Shop quality food, toys, accessories, and more for every kind of pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/category/dogs"
                className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Shop Now
              </Link>
              <Link
                to="/#categories"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition"
              >
                Browse Categories
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Happy pets"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              🐾 New Arrivals!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection