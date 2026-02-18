import { motion } from 'framer-motion';
import { TramFront, Car, ExternalLink, Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';

// Import hero background image
import img3374 from '../assets/images/indoor-images/IMG_3374.webp';

const ThingsToDo = () => {
  const attractions = [
    {
      name: 'Melbourne Zoo',
      description:
        'Discover over 320 species of animals from around the world at Australia\'s oldest zoo. Perfect for families and animal lovers.',
      distance: '1.5 km',
      category: 'Family',
      link: 'https://www.zoo.org.au/melbourne/',
      image: 'https://www.viridianglass.com/wp-content/uploads/2024/01/image_glassshowcase_safety_2015_liongorgeissue20_1.jpg',
    },
    {
      name: 'Marvel Stadium',
      description:
        'Experience world-class sports events, concerts, and entertainment at Melbourne\'s premier indoor stadium. Home to AFL matches, international cricket, and major concerts.',
      distance: '2 km',
      category: 'Sports',
      link: 'https://www.marvelstadium.com.au/',
      image: 'https://resources.afl.com.au/photo-resources/2025/03/06/b181dcc3-0ff8-4516-9d00-1316c0da403c/EDITED-GRIMSHAW-PHOTO.jpg?width=1064&height=600',
    },
    {
      name: 'Queen Victoria Market',
      description:
        'Experience Melbourne\'s iconic market with fresh produce, international foods, clothing, and souvenirs. A must-visit for foodies and shoppers.',
      distance: '1.8 km',
      category: 'Shopping',
      link: 'https://qvm.com.au/',
      image: 'https://imgix.theurbanlist.com/content/article/Queen_Victoria_Market.png?format=auto,compress&w=728%20728w',
    },
    {
      name: 'Melbourne CBD',
      description:
        'Explore the heart of Melbourne with world-class shopping, dining, arts, and entertainment. Just a short tram ride away.',
      distance: '2.5 km',
      category: 'City',
      link: 'https://www.visitmelbourne.com/Regions/Melbourne',
      image: 'https://whatson.melbourne.vic.gov.au/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6IjVkNDM3ZjZjLWU4YjMtNDBkYy1iYWIyLWYxZDk5ZjE5YzZkMyIsInB1ciI6ImJsb2JfaWQifX0=--2a7be775bbcbbc9ced24383b4907ebcd0d808f4f/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsxMDAwLDYwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--0d1dec94e96bf59e4e90ca4a7c11e516560ab297/d37829c8-af9a-4b54-b9ef-321fb43a208d.jpg',
    },
    {
      name: 'Royal Children\'s Hospital',
      description:
        'Located right next door, perfect for visitors with medical appointments or visiting family members.',
      distance: '0.5 km',
      category: 'Medical',
      link: 'https://www.rch.org.au/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Royal_Children%27s_Hospital%2C_Melbourne.jpg',
    },
    {
      name: 'Flemington Racecourse & Showgrounds',
      description:
        'Home to the famous Melbourne Cup and Flemington Showgrounds. Experience world-class horse racing, attend special events, exhibitions, and shows at these iconic venues - all in one convenient location.',
      distance: '2 km',
      category: 'Entertainment',
      link: 'https://www.flemington.com.au/',
      image: 'https://content.api.news/v3/images/bin/db90e86309c4f084540fbb4800fd1461',
    },
    {
      name: 'Melbourne Museum',
      description:
        'Discover Victoria\'s history, culture, and natural environment through engaging exhibitions and interactive displays.',
      distance: '2.2 km',
      category: 'Culture',
      link: 'https://museumsvictoria.com.au/melbournemuseum/',
      image: 'https://museu.ms/remote.jpg.ashx?width=1000&height=450&format=jpg&mode=crop&scale=both&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL2F1bWVtLzI5NjgxL2F1bWVtXzIwMTEwNTE3MTE1NzAwNDk4My5wbmc&hmac=JswWi5zwgDU',
    },
    {
      name: 'State Library of Victoria',
      description:
        'Visit one of Australia\'s oldest public libraries with stunning architecture and beautiful reading rooms.',
      distance: '2.5 km',
      category: 'Culture',
      link: 'https://www.slv.vic.gov.au/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/23/c6/c4/state-library-victoria.jpg?w=900&h=500&s=1',
    },
    {
      name: 'Peter MacCallum Cancer Centre',
      description:
        'Australia\'s leading cancer research, education and treatment centre. Conveniently located for patients and visitors.',
      distance: '1.2 km',
      category: 'Medical',
      link: 'https://www.petermac.org/',
      image: 'https://media2.architecturemedia.net/site_media/media/cache/1f/8c/1f8c94443b995315c9dbd325f5e05e55.jpg',
    },
    {
      name: 'University of Melbourne',
      description:
        'Explore one of Australia\'s leading universities with beautiful historic buildings, museums, and cultural events.',
      distance: '2 km',
      category: 'Education',
      link: 'https://www.unimelb.edu.au/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d3/49/1c/caption.jpg?w=900&h=500&s=1',
    },
    {
      name: 'Royal Park, Parkville',
      description:
        'Melbourne\'s largest inner-city park featuring walking trails, sports facilities, and beautiful natural landscapes. Perfect for outdoor activities and relaxation.',
      distance: '1.8 km',
      category: 'Nature',
      link: 'https://www.melbourne.vic.gov.au/royal-park',
      image: 'https://files.wheeleasy.org/media/places/63bbc9211edd6000c5d9d28a/wheeleasy-royal-park-nature-play-playground-2.webp',
    },
    {
      name: 'State Sports Centre, Parkville',
      description:
        'Premier sports and recreation facility offering world-class facilities for various sports, fitness activities, and community events.',
      distance: '2 km',
      category: 'Sports',
      link: 'https://statesportcentres.com.au/facility-hire/parkville/',
      image: 'https://statesportcentres.com.au/wp-content/uploads/2020/07/cropped-MSC-Home_The-State-Sport-Centre-Trust-scaled-1.jpg',
    },
  ];

  const transportInfo = [
    {
      icon: TramFront,
      title: 'Tram Route 57',
      description: 'Leaves from William Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
    },
    {
      icon: TramFront,
      title: 'Tram Route 59',
      description: 'Leaves from Elizabeth Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'Easy access via CityLink network and major arterials. Close to M2 for airport access.',
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
      <title>Things to Do Near Melrose Apartments - Melbourne Attractions & Activities</title>
      <meta name="description" content="Discover Melbourne's best attractions near Melrose Apartments: Melbourne Zoo, Marvel Stadium, Queen Victoria Market, CBD, Royal Children's Hospital, Peter MacCallum Cancer Centre, University of Melbourne, and more. All within easy reach!" />
      <meta name="keywords" content="things to do Melbourne, Melbourne attractions, Melbourne activities, Melbourne Zoo, Marvel Stadium Melbourne, Queen Victoria Market, Melbourne CBD attractions, Melbourne sightseeing, Melbourne tourism, Melbourne travel, Melbourne visitor attractions, Melbourne must see, Melbourne top attractions, Melbourne popular attractions, Melbourne famous attractions, Melbourne iconic attractions, Melbourne landmarks, Melbourne points of interest, Melbourne places to visit, Melbourne things to see, Melbourne things to experience, Melbourne entertainment, Melbourne recreation, Melbourne leisure activities, Melbourne family activities, Melbourne kids activities, Melbourne family friendly attractions, Melbourne family attractions, Melbourne children attractions, Melbourne educational attractions, Melbourne cultural attractions, Melbourne historical attractions, Melbourne natural attractions, Melbourne outdoor activities, Melbourne indoor activities, Melbourne free activities, Melbourne free attractions, Melbourne budget activities, Melbourne affordable attractions, Melbourne cheap activities, Melbourne activities near North Melbourne, Melbourne attractions near Melrose Apartments, Melbourne activities near Royal Children's Hospital, Melbourne attractions near CBD, Melbourne activities near Melbourne Zoo, Melbourne attractions near Queen Victoria Market, Melbourne activities near Royal Botanic Gardens, Melbourne attractions near Flemington Racecourse, Melbourne activities near Melbourne Museum, Melbourne attractions near State Library, Melbourne activities walking distance, Melbourne attractions tram ride, Melbourne activities public transport, Melbourne attractions easy access, Melbourne activities convenient location, Melbourne attractions close by, Melbourne activities nearby, Melbourne attractions nearby, Melbourne activities within reach, Melbourne attractions accessible, Melbourne activities accessible, Melbourne attractions wheelchair accessible, Melbourne activities wheelchair accessible, Melbourne attractions family friendly, Melbourne activities family friendly, Melbourne attractions pet friendly, Melbourne activities pet friendly, Melbourne attractions dog friendly, Melbourne activities dog friendly, Melbourne attractions stroller friendly, Melbourne activities stroller friendly, Melbourne attractions pram friendly, Melbourne activities pram friendly, Melbourne attractions baby friendly, Melbourne activities baby friendly, Melbourne attractions toddler friendly, Melbourne activities toddler friendly, Melbourne attractions senior friendly, Melbourne activities senior friendly, Melbourne attractions elderly friendly, Melbourne activities elderly friendly, Melbourne attractions disabled friendly, Melbourne activities disabled friendly, Melbourne attractions accessible parking, Melbourne activities accessible parking, Melbourne attractions parking available, Melbourne activities parking available, Melbourne attractions free parking, Melbourne activities free parking, Melbourne attractions paid parking, Melbourne activities paid parking, Melbourne attractions street parking, Melbourne activities street parking, Melbourne attractions public parking, Melbourne activities public parking, Melbourne attractions tram access, Melbourne activities tram access, Melbourne attractions bus access, Melbourne activities bus access, Melbourne attractions train access, Melbourne activities train access, Melbourne attractions public transport access, Melbourne activities public transport access, Melbourne attractions walking distance, Melbourne activities walking distance, Melbourne attractions short walk, Melbourne activities short walk, Melbourne attractions minutes away, Melbourne activities minutes away, Melbourne attractions close proximity, Melbourne activities close proximity, Melbourne attractions nearby accommodation, Melbourne activities nearby accommodation, Melbourne attractions near hotels, Melbourne activities near hotels, Melbourne attractions near serviced apartments, Melbourne activities near serviced apartments, Melbourne attractions near Melrose Apartments, Melbourne activities near Melrose Apartments, Melbourne attractions near North Melbourne, Melbourne activities near North Melbourne, Melbourne attractions VIC 3051, Melbourne activities VIC 3051, Melbourne attractions postcode 3051, Melbourne activities postcode 3051, Melbourne attractions area code 3051, Melbourne activities area code 3051, Melbourne attractions suburb North Melbourne, Melbourne activities suburb North Melbourne, Melbourne attractions inner city, Melbourne activities inner city, Melbourne attractions inner north, Melbourne activities inner north, Melbourne attractions inner Melbourne, Melbourne activities inner Melbourne, Melbourne attractions metropolitan, Melbourne activities metropolitan, Melbourne attractions Victoria, Melbourne activities Victoria, Melbourne attractions Australia, Melbourne activities Australia" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/things-to-do" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/things-to-do" />
      <meta property="og:title" content="Things to Do Near Melrose Apartments - Melbourne Attractions" />
      <meta property="og:description" content="Discover Melbourne's best attractions near Melrose Apartments: Melbourne Zoo, Marvel Stadium, Queen Victoria Market, CBD, and more." />
      <meta property="og:image" content="https://www.melroseapartments.com.au/things-to-do" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Things to Do Near Melrose Apartments - Melbourne Attractions" />
      <meta name="twitter:description" content="Discover Melbourne's best attractions near Melrose Apartments. All within easy reach!" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": "Melbourne Attractions Near Melrose Apartments",
          "description": "Discover Melbourne's best attractions and activities near Melrose Apartments in North Melbourne",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3051",
            "addressCountry": "AU"
          },
          "touristType": ["Family", "Business", "Couple", "Solo"],
          "includesAttraction": [
            {
              "@type": "TouristAttraction",
              "name": "Melbourne Zoo",
              "distance": "1.5 km"
            },
            {
              "@type": "TouristAttraction",
              "name": "Marvel Stadium",
              "distance": "2 km"
            },
            {
              "@type": "TouristAttraction",
              "name": "Queen Victoria Market",
              "distance": "1.8 km"
            },
            {
              "@type": "TouristAttraction",
              "name": "Peter MacCallum Cancer Centre",
              "distance": "1.2 km"
            },
            {
              "@type": "TouristAttraction",
              "name": "University of Melbourne",
              "distance": "2 km"
            }
          ]
        })}
      </script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden ">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${img3374})`
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
          <h1 className="text-5xl md:text-6xl mb-6 uppercase md:mt-20">
            Things to Do
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover Melbourne\'s best attractions, all within easy reach of Melrose Apartments
          </p>
        </motion.div>
      </section>

      {/* Transport Info */}
      <section className="py-16 bg-gray-50 mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl   mb-8 text-center"
            style={{ color: '#36b3a8' }}
          >
            Getting Around Melbourne
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {transportInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 flex ">
                    <IconComponent className="w-12 h-12" style={{ color: '#36b3a8' }} />
                  </div>
                  <h3 className="box-heading text-xl mb-3" style={{ color: '#36b3a8' }}>
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl   mb-4" style={{ color: '#36b3a8' }}>
              Nearby Attractions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore what Melbourne has to offer, all within easy reach of your accommodation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <motion.img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#36b3a8] text-white px-3 py-1 rounded text-sm font-semibold">
                    {attraction.distance}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-700 px-3 py-1 rounded text-xs font-semibold">
                    {attraction.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl  mb-3" style={{ color: '#36b3a8' }}>
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {attraction.description}
                  </p>
                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#36b3a8] font-semibold hover:underline text-sm"
                  >
                    Visit Website <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-20 bg-gray-50 mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl  mb-12 text-center"
            style={{ color: '#36b3a8' }}
          >
            More Things to Explore
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Art galleries and museums',
              'Live music venues and bars',
              'Restaurants and cafes',
              'Sports events at MCG',
              'Shopping on Bourke Street',
              'Yarra River walks',
              'Botanical gardens',
              'Night markets',
              'Street art tours',
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <p className="text-gray-700 font-medium flex items-center">
                  <Check className="text-[#36b3a8] mr-2 flex-shrink-0" size={18} />
                  {activity}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
            Ready to Explore Melbourne?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book your stay at Melrose Apartments and discover everything Melbourne has to offer
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Your Stay Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default ThingsToDo;