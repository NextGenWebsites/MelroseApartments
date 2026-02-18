import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home as HomeIcon, Car, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import GoogleReviews from '../components/GoogleReviews';

// Import all images from homepage-iamges folder
import img1 from '../assets/images/homepage-iamges/img1.jpg';
import img2 from '../assets/images/homepage-iamges/img2.jpg';
import img3 from '../assets/images/homepage-iamges/img3.jpg';

const Home = () => {
  // All images array
  const allImages = [
    img1, img2, img3
  ];

  // Randomize images function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages] = useState(() => shuffleArray(allImages));

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description:
        'Located in North Melbourne with easy access to CBD, public transport, and major attractions like Royal Children\'s Hospital',
    },
    {
      icon: HomeIcon,
      title: 'Modern Accommodation',
      description:
        'Spacious and well-equipped apartments with all the comforts of home, perfect for short or extended stays',
    },
    {
      icon: Car,
      title: 'Easy Access',
      description:
        'Convenient parking, close to CityLink network, and minutes away from Melbourne Airport via M2',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main>
      <title>Melrose Apartments - 4 Star Accommodation North Melbourne | Book Now</title>
      <meta name="description" content="Melrose Apartments offers premium 4 star serviced accommodation in North Melbourne. Perfect location near CBD, Royal Children's Hospital, and major attractions. Book your stay today!" />
      <meta name="keywords" content="Melrose Apartments, North Melbourne accommodation, serviced apartments Melbourne, 4 star accommodation Melbourne, studio apartments Melbourne, CBD Melbourne accommodation, Royal Children's Hospital accommodation, Melbourne serviced apartments, North Melbourne hotels, Melbourne apartment rentals, short stay Melbourne, extended stay Melbourne, Melbourne accommodation near hospital, Melbourne CBD apartments, Melbourne business accommodation, Melbourne family accommodation, Melbourne airport accommodation, CityLink Melbourne, tram route 55, tram route 59, Melbourne Zoo accommodation, Queen Victoria Market accommodation, Melbourne accommodation booking, Melbourne apartment hotel, North Melbourne VIC 3051, Melrose Street accommodation, Melbourne serviced apartments 4 star, Melbourne apartment rentals near CBD, Melbourne accommodation for families, Melbourne hospital accommodation, Melbourne medical accommodation, Melbourne relocation accommodation, Melbourne temporary accommodation, Melbourne furnished apartments, Melbourne self contained apartments, Melbourne apartment with kitchen, Melbourne accommodation with parking, Melbourne pet friendly accommodation, Melbourne wheelchair accessible accommodation, Melbourne accommodation deals, Melbourne accommodation specials, Melbourne accommodation discounts, Melbourne accommodation rates, Melbourne accommodation prices, best accommodation Melbourne, top rated accommodation Melbourne, Melbourne accommodation reviews, Melbourne accommodation ratings, Melbourne accommodation awards, Melbourne accommodation awards 2024, Melbourne accommodation awards 2025" />
      <meta name="author" content="Melrose Apartments" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/" />
      <meta property="og:title" content="Melrose Apartments - 4 Star Accommodation North Melbourne" />
      <meta property="og:description" content="Premium 4 star serviced accommodation in North Melbourne. Perfect location near CBD, Royal Children's Hospital, and major attractions. Book your stay today!" />
      <meta property="og:image" content="https://www.visitvictoria.com/-/media/atdw/melbourne/places-to-stay/apartments/4374e13b7f1327d5e49e390c2959297d_1600x1200.jpeg?ts=20231016310638" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Melrose Apartments" />
      <meta property="og:locale" content="en_AU" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.melroseapartments.com.au/" />
      <meta name="twitter:title" content="Melrose Apartments - 4 Star Accommodation North Melbourne" />
      <meta name="twitter:description" content="Premium 4 star serviced accommodation in North Melbourne. Perfect location near CBD, Royal Children's Hospital, and major attractions." />
      <meta name="twitter:image" content="https://www.visitvictoria.com/-/media/atdw/melbourne/places-to-stay/apartments/4374e13b7f1327d5e49e390c2959297d_1600x1200.jpeg?ts=20231016310638" />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="North Melbourne" />
      <meta name="geo.position" content="-37.8065;144.9478" />
      <meta name="ICBM" content="-37.8065, 144.9478" />
      
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Melrose Apartments",
          "image": "https://www.visitvictoria.com/-/media/atdw/melbourne/places-to-stay/apartments/4374e13b7f1327d5e49e390c2959297d_1600x1200.jpeg?ts=20231016310638",
          "@id": "https://www.melroseapartments.com.au/",
          "url": "https://www.melroseapartments.com.au/",
          "telephone": "+61-3-8379-1100",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "171 Melrose Street",
            "addressLocality": "North Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3051",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -37.8065,
            "longitude": 144.9478
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:30",
            "closes": "18:30"
          },
          "starRating": {
            "@type": "Rating",
            "ratingValue": "4"
          },
          "description": "Melrose Apartments offers good quality 4 star accommodation in leafy North Melbourne, handy to Melbourne's CBD. Close to Melbourne's hospital precincts including the Royal Children's Hospital and Royal Women's Hospital.",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "WiFi",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Air Conditioning",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Kitchen",
              "value": true
            }
          ]
        })}
      </script>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://www.visitvictoria.com/-/media/atdw/melbourne/places-to-stay/apartments/4374e13b7f1327d5e49e390c2959297d_1600x1200.jpeg?ts=20231016310638)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80"></div>
        </div>
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-5  md:mx-0 px-4 sm:px-6 lg:px-8 text-center mt-40 md:mt-0"
        >
          <h1 className="text-5xl md:text-7xl mb-6 uppercase tracking-wide">
            Come home and relax at Melrose Apartments
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
            Good quality 4 star accommodation in leafy North Melbourne
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Handy to Melbourne's CBD, close to hospital precincts, and perfect for business or pleasure
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <CTAButton className="text-lg px-8 py-4">
              Book Your Stay Now
            </CTAButton>
            <Link
              to="/accommodation"
              className="cta-button-secondary text-lg px-8 py-4"
            >
              View Rooms
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <div className=" bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-white/30 transition-all duration-300">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white mx-5 md:mx-0 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  mb-4" style={{ color: '#36b3a8' }}>
              About Melrose Apartments
            </h2>
          </motion.div>

          {/* Two-column layout: About text on left, Slideshow on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-600 space-y-6"
            >
              <p>
                Melrose Apartments offers good quality 4 star accommodation in leafy North Melbourne, 
                handy to Melbourne's CBD. Close to Melbourne's hospital precincts including the Royal 
                Children's Hospital and Royal Women's Hospital, accessible by a short tram ride or 
                minutes walk.
              </p>
              <p>
                Opened in May 2015, our brand new, purpose built studio and interconnecting studio 
                apartments offer great value 4 star accommodation.
              </p>
              <p>
                Our North Melbourne Serviced Apartments cater for business or pleasure, relocating to 
                Melbourne, or supporting a family member or friend staying at one of our local hospitals.
              </p>
            </motion.div>

            {/* Right: Image Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[200px] md:h-[350px] rounded-lg overflow-hidden shadow-xl"
            >
              {/* Image */}
              <motion.img
                key={currentImageIndex}
                src={shuffledImages[currentImageIndex]}
                alt={`Melrose Apartments ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#36b3a8] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#36b3a8] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {shuffledImages.slice(0, Math.min(10, shuffledImages.length)).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 flex ">
                    <IconComponent className="w-16 h-16" style={{ color: '#36b3a8' }} />
                  </div>
                  <h3 className="box-heading text-2xl mb-4" style={{ color: '#36b3a8' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Quick Info Section */}
      <section className="py-20 bg-gray-50 mx-5 md:mx-0" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl  mb-6" style={{ color: '#36b3a8' }}>
                Visit Us
              </h2>
              <div className="space-y-4 text-lg">
                <p className="font-semibold">171 Melrose Street</p>
                <p>North Melbourne VIC 3051</p>
                <p>Australia</p>
                <div className="mt-6 space-y-2">
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                      1800 779 971
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:info@melroseapartments.com.au"
                      className="text-[#36b3a8] hover:underline"
                    >
                      info@melroseapartments.com.au
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="box-heading text-2xl mb-6" style={{ color: '#36b3a8' }}>
                Office Hours
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Mon-Fri:</strong> 8:30 AM - 6:30 PM
                </li>
                <li>
                  <strong>Sat:</strong> 9 AM - 4 PM
                </li>
                <li>
                  <strong>Sun:</strong> 9 AM - 2 PM
                </li>
                <li>
                  <strong>Public Holidays:</strong> 10 AM - 2 PM
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Book online 24/7 instantly at{' '}
                <a
                  href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#36b3a8] hover:underline"
                >
                  apartmentsonmelrose.com.au
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36b3a8] to-[#2a9d94] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl  mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the comfort and convenience of Melrose Apartments. 
            Book your accommodation today and start your Melbourne adventure.
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white">
            Book Now - Available 24/7
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;