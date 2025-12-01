import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import CategoryHighlights from '../components/CategoryHighlights'
import FeaturedProducts from '../components/FeaturedProducts'
import CurrentOffers from '../components/CurrentOffers'
import WhyShopWithUs from '../components/WhyShopWithUs'
import Testimonials from '../components/Testimonials'
import NewsletterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoryHighlights />
        <FeaturedProducts />
        <CurrentOffers />
        <WhyShopWithUs />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
