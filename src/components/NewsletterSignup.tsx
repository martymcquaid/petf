import { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Pet Stuff Club! 🐾
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Updates, deals, and pet tips delivered to your inbox
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-teal-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 inline-block">
            <p className="text-lg font-semibold">✨ Thank you for subscribing!</p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-semibold mb-1">Exclusive Deals</h3>
            <p className="text-teal-100 text-sm">Member-only discounts</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">Pet Care Tips</h3>
            <p className="text-teal-100 text-sm">Expert advice & guides</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🐕</div>
            <h3 className="font-semibold mb-1">New Products</h3>
            <p className="text-teal-100 text-sm">Be the first to know</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup