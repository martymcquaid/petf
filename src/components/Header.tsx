import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Pet Stuff</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for pet products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/category/dogs" className="text-gray-700 hover:text-teal-600 transition">Dogs</Link>
            <Link to="/category/cats" className="text-gray-700 hover:text-teal-600 transition">Cats</Link>
            <Link to="/category/birds" className="text-gray-700 hover:text-teal-600 transition">Birds</Link>
            <Link to="/category/fish" className="text-gray-700 hover:text-teal-600 transition">Fish</Link>
            <Link to="/category/reptiles" className="text-gray-700 hover:text-teal-600 transition">Reptiles</Link>
            <Link to="/category/small-animals" className="text-gray-700 hover:text-teal-600 transition">Small Animals</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-teal-600 transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <nav className="px-4 py-2 space-y-1">
          <Link to="/category/dogs" className="block py-2 text-gray-700 hover:text-teal-600">Dogs</Link>
          <Link to="/category/cats" className="block py-2 text-gray-700 hover:text-teal-600">Cats</Link>
          <Link to="/category/birds" className="block py-2 text-gray-700 hover:text-teal-600">Birds</Link>
          <Link to="/category/fish" className="block py-2 text-gray-700 hover:text-teal-600">Fish</Link>
          <Link to="/category/reptiles" className="block py-2 text-gray-700 hover:text-teal-600">Reptiles</Link>
          <Link to="/category/small-animals" className="block py-2 text-gray-700 hover:text-teal-600">Small Animals</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header