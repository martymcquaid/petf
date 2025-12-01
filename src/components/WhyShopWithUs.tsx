const WhyShopWithUs = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Shipping",
      description: "Free delivery on orders over $35"
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "SSL encrypted checkout"
    },
    {
      icon: "⭐",
      title: "Quality Products",
      description: "Premium brands you can trust"
    },
    {
      icon: "💝",
      title: "Satisfaction Guaranteed",
      description: "30-day return policy"
    },
    {
      icon: "🏆",
      title: "Trusted by Pet Owners",
      description: "Over 50,000 happy customers"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Shop With Pet Stuff?
          </h2>
          <p className="text-xl text-gray-600">
            We're dedicated to keeping pets happy and healthy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 transition-colors duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyShopWithUs