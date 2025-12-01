import { useState } from 'react'

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: 'Premium Chicken Dog Treats',
      price: 12.99,
      originalPrice: 18.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1583337134247-85d279fd9220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Interactive Cat Feather Toy',
      price: 8.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Comfort Pet Bed - Large',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1583337134247-85d279fd9220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'Sale'
    },
    {
      id: 4,
      name: 'AquaFish Premium Fish Food',
      price: 15.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: null
    },
    {
      id: 5,
      name: 'Bird Paradise Cage Set',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'Limited'
    },
    {
      id: 6,
      name: 'Reptile Heat Lamp Pro',
      price: 34.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'Hot'
    },
    {
      id: 7,
      name: 'Rabbit Hutch Deluxe',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.3,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: 'Premium'
    },
    {
      id: 8,
      name: 'Pet Grooming Kit',
      price: 24.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 523,
      image: 'https://images.unsplash.com/photo-1583337134247-85d279fd9220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      badge: null
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const handleAddToCart = (productId: number) => {
    setSelectedProduct(productId)
    setTimeout(() => setSelectedProduct(null), 2000)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular items loved by pets and their owners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                  <svg className="h-4 w-4 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedProduct === product.id
                      ? 'bg-green-500 text-white'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
                  }`}
                >
                  {selectedProduct === product.id ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts