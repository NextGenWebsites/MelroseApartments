import { motion } from 'framer-motion';
import { MapPin, TramFront, Car, Navigation, Train, Bus } from 'lucide-react';
import CTAButton from '../components/CTAButton';

// Import image from indoor-images folder
import img3375 from '../assets/images/indoor-images/IMG_3375.webp';

const Location = () => {
  const address = {
    street: '171 Melrose Street',
    suburb: 'North Melbourne VIC 3051',
    country: 'Australia',
  };

  const directions = {
    publicTransport: [
      {
        title: 'Tram Route 57',
        description: 'Leaves from William Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
        icon: TramFront,
      },
      {
        title: 'Tram Route 59',
        description: 'Leaves from Elizabeth Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
        icon: TramFront,
      },
      {
        title: 'Train - Flemington Bridge Station',
        description: 'Take train Route 59 or Route 57 to Flemington Bridge Station, then a short walk to Melrose Street',
        icon: Train,
      },
      {
        title: 'Bus',
        description: 'Bus service details to be added',
        icon: Bus,
      },
    ],
    fromAirport: [
      {
        method: 'By Car',
        steps: [
          'Take the M2 from Melbourne Airport',
          'Take route 79 exit from M2',
          'Follow Boundary Rd to Melrose Street',
        ],
      },
      {
        method: 'By Shuttle',
        description: 'For door to door service call Star Bus on 03 8378 8700 or book online',
        link: 'https://www.skybus.com.au/',
      },
    ],
  };

  const highlights = [
    {
      icon: TramFront,
      title: 'Public Transport',
      description: 'Tram stops right outside',
    },
    {
      icon: Car,
      title: 'Easy Parking',
      description: 'Secure parking available',
    },
    {
      icon: MapPin,
      title: 'CBD Access',
      description: 'Just minutes from city center',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="pt-20">
      <title>Location & Directions - Melrose Apartments North Melbourne | How to Find Us</title>
      <meta name="description" content="Find Melrose Apartments at 171 Melrose Street, North Melbourne VIC 3051. Easy access via tram routes 57 & 59, CityLink, M2, and Melbourne Airport. Get directions and map." />
      <meta name="keywords" content="Melrose Apartments location, North Melbourne location, 171 Melrose Street, North Melbourne VIC 3051, Melbourne accommodation address, Melbourne serviced apartments location, Melbourne apartment location, Melbourne hotel location, Melbourne accommodation directions, Melbourne accommodation map, Melbourne accommodation GPS, Melbourne accommodation coordinates, Melbourne accommodation find us, Melbourne accommodation how to get there, Melbourne accommodation transport, Melbourne accommodation public transport, Melbourne accommodation tram, Melbourne accommodation bus, Melbourne accommodation train, Melbourne accommodation tram route 57, Melbourne accommodation tram route 59, Melbourne accommodation CityLink, Melbourne accommodation M2, Melbourne accommodation route 79, Melbourne accommodation Boundary Road, Melbourne accommodation Melrose Street, Melbourne accommodation North Melbourne directions, Melbourne accommodation CBD directions, Melbourne accommodation airport directions, Melbourne accommodation Tullamarine directions, Melbourne accommodation Melbourne Airport directions, Melbourne accommodation from airport, Melbourne accommodation to airport, Melbourne accommodation airport shuttle, Melbourne accommodation Star Bus, Melbourne accommodation door to door, Melbourne accommodation pickup, Melbourne accommodation drop off, Melbourne accommodation transfer, Melbourne accommodation taxi, Melbourne accommodation Uber, Melbourne accommodation rideshare, Melbourne accommodation driving directions, Melbourne accommodation car directions, Melbourne accommodation parking directions, Melbourne accommodation parking available, Melbourne accommodation parking spaces, Melbourne accommodation parking cost, Melbourne accommodation parking fee, Melbourne accommodation free parking, Melbourne accommodation paid parking, Melbourne accommodation street parking, Melbourne accommodation secure parking, Melbourne accommodation covered parking, Melbourne accommodation underground parking, Melbourne accommodation valet parking, Melbourne accommodation disabled parking, Melbourne accommodation wheelchair parking, Melbourne accommodation accessible parking" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/location" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/location" />
      <meta property="og:title" content="Location & Directions - Melrose Apartments North Melbourne" />
      <meta property="og:description" content="Find us at 171 Melrose Street, North Melbourne VIC 3051. Easy access via tram routes 57 & 59, CityLink, M2, and Melbourne Airport." />
      <meta property="og:image" content="https://www.melroseapartments.com.au/location" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Location & Directions - Melrose Apartments North Melbourne" />
      <meta name="twitter:description" content="Find us at 171 Melrose Street, North Melbourne VIC 3051. Easy access via tram, CityLink, and Melbourne Airport." />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="North Melbourne" />
      <meta name="geo.position" content="-37.8065;144.9478" />
      <meta name="ICBM" content="-37.8065, 144.9478" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Melrose Apartments",
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
          "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093144!2d144.9478!3d-37.8065"
        })}
      </script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden ">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${img3375})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/80 to-gray-900/85"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl  mb-6 uppercase md:mt-20">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Conveniently located in North Melbourne with easy access to the CBD, public transport, and major attractions
          </p>
        </motion.div>
      </section>

      {/* Address and Map Section - Side by Side */}
      <section className="py-16 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Visit Us At */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <h2 className="text-3xl mb-6" style={{ color: '#36b3a8' }}>
                  Visit Us At
                </h2>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <p className="text-2xl mb-2 font-semibold">Melrose Apartments</p>
                  <p className="text-xl text-gray-700">{address.street}</p>
                  <p className="text-xl text-gray-700">{address.suburb}</p>
                  <p className="text-xl text-gray-700 mb-6">{address.country}</p>
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <p>
                      <strong className="text-gray-800">Phone:</strong>{' '}
                      <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                        1800 779 971
                      </a>
                    </p>
                    <p>
                      <strong className="text-gray-800">International:</strong>{' '}
                      <a href="tel:+61383791100" className="text-[#36b3a8] hover:underline">
                        +61 3 8379 1100
                      </a>
                    </p>
                    <p>
                      <strong className="text-gray-800">Email:</strong>{' '}
                      <a
                        href="mailto:info@melroseapartments.com.au"
                        className="text-[#36b3a8] hover:underline break-all"
                      >
                        info@melroseapartments.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Find Us on the Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl mb-6" style={{ color: '#36b3a8' }}>
                  Find Us on the Map
                </h2>
                <div className="bg-gray-100 rounded-lg shadow-xl overflow-hidden">
                  <div className="h-96 lg:h-[500px] w-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.06054399264772!2d144.94212291720498!3d-37.79077319954816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d2170d49357%3A0xf47b31520e10a345!2sMelrose%20Apartments!5e0!3m2!1sen!2slk!4v1768970159962!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(50%)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Melrose Apartments Location - 171 Melrose Street, North Melbourne VIC 3051"
                      aria-label="Google Maps showing Melrose Apartments location"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Public Transport */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl  nmb-8" style={{ color: '#36b3a8' }}>
                  Getting to Us by Public Transport
                </h2>
                <div className="space-y-6">
                  {directions.publicTransport.map((route, index) => {
                    const IconComponent = route.icon || TramFront;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 p-6 rounded-lg"
                      >
                        <div className="flex items-center mb-3">
                          <IconComponent className="w-6 h-6 mr-3" style={{ color: '#36b3a8' }} />
                          <h3 className="box-heading text-xl" style={{ color: '#36b3a8' }}>
                            {route.title}
                          </h3>
                        </div>
                        <p className="text-gray-700">{route.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* From Airport */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl   mb-8" style={{ color: '#36b3a8' }}>
                  Getting to Us from Melbourne Airport (Tullamarine)
                </h2>
                <div className="space-y-6">
                  {directions.fromAirport.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-center mb-3">
                        <Car className="w-6 h-6 mr-3" style={{ color: '#36b3a8' }} />
                        <h3 className="box-heading text-xl" style={{ color: '#36b3a8' }}>
                          {method.method}
                        </h3>
                      </div>
                      {method.steps ? (
                        <ul className="space-y-2 text-gray-700">
                          {method.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="text-[#36b3a8] mr-2  ">
                                {stepIndex + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">
                          {method.description}
                          {method.link && (
                            <>
                              {' '}
                              <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#36b3a8] hover:underline font-semibold"
                              >
                                Book online
                              </a>
                            </>
                          )}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50 mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl   mb-8"
              style={{ color: '#36b3a8' }}
            >
              Why Our Location is Perfect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              When it comes to a great location in North Melbourne, Melrose Apartments is an ideal 
              location with easy access to public transport, major arterials and the CityLink network.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" style={{ color: '#36b3a8' }} />
                    </div>
                    <h3 className="box-heading text-xl mb-2" style={{ color: '#36b3a8' }}>
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36b3a8] to-[#2a9d94] text-white mx-5 md:mx-0  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl  mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the convenience of our prime North Melbourne location. Book your stay today.
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Location;