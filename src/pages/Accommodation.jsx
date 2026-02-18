import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Check, X as CloseIcon, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import CTAButton from '../components/CTAButton';

// Import all indoor images
import img3368 from '../assets/images/indoor-images/IMG_3368.webp';
import img3369 from '../assets/images/indoor-images/IMG_3369.webp';
import img3370 from '../assets/images/indoor-images/IMG_3370.webp';
import img3372 from '../assets/images/indoor-images/IMG_3372.webp';
import img3374 from '../assets/images/indoor-images/IMG_3374.webp';
import img3375 from '../assets/images/indoor-images/IMG_3375.webp';
import img3376 from '../assets/images/indoor-images/IMG_3376.webp';
import img3377 from '../assets/images/indoor-images/IMG_3377.webp';
import img3378 from '../assets/images/indoor-images/IMG_3378.webp';
import img3379 from '../assets/images/indoor-images/IMG_3379.webp';
import img3380 from '../assets/images/indoor-images/IMG_3380.webp';
import img3381 from '../assets/images/indoor-images/IMG_3381.webp';
import img5098 from '../assets/images/indoor-images/IMG_5098.webp';
import img5102 from '../assets/images/indoor-images/IMG_5102.webp';
import img5107 from '../assets/images/indoor-images/IMG_5107.webp';
import room23Bed from '../assets/images/indoor-images/Room 23 Bed copy.webp';
import room23 from '../assets/images/indoor-images/Room 23 copy.webp';
// import room23Ensuite from '../assets/images/indoor-images/Room 23 Ensuite copy_converted.webp';
import room28 from '../assets/images/indoor-images/Room 28 copy_converted.webp';
import room33_1 from '../assets/images/indoor-images/room33-1_converted.webp';
import room33_2 from '../assets/images/indoor-images/room33-2_converted.webp';
import room33_3 from '../assets/images/indoor-images/room33-3_converted.webp';
import room33_4 from '../assets/images/indoor-images/room33-4_converted.webp';
import room33_5 from '../assets/images/indoor-images/room33-5_converted.webp';
import room33_6 from '../assets/images/indoor-images/room33-6_converted.webp';
import room34_1 from '../assets/images/indoor-images/Room34-1_converted.webp';
import room34_2 from '../assets/images/indoor-images/Room34-2_converted.webp';
import room34_3 from '../assets/images/indoor-images/Room34-3_converted.webp';
import room34_4 from '../assets/images/indoor-images/Room34-4_converted.webp';
import room34_5 from '../assets/images/indoor-images/Room34-5_converted.webp';

const Accommodation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({ 1: 0, 2: 0 });
  const [videoErrors, setVideoErrors] = useState({ 1: false, 2: false });
  const [isPlaying, setIsPlaying] = useState({ 1: false, 2: false });
  const [isVideoLoaded, setIsVideoLoaded] = useState({ 1: false, 2: false });
  const videoRefs = useRef({ 1: null, 2: null });

  // Video paths from public folder - MP4 format for better browser support
  const videoPaths = {
    studio: '/videos/IMG_3392.mp4',
    interconnecting: '/videos/IMG_5110.mp4'
  };

  // All gallery images with SEO-optimized alt text
  const galleryImages = useMemo(() => [
    { 
      src: room23, 
      alt: 'Studio Apartment Room 23 - Modern furnished accommodation in North Melbourne with kitchen and living area',
      title: 'Studio Apartment Room 23 - North Melbourne Accommodation'
    },
    { 
      src: room23Bed, 
      alt: 'Room 23 Bedroom - Queen size bed in modern studio apartment at Melrose Apartments North Melbourne',
      title: 'Room 23 Bedroom - Melrose Apartments'
    },
    // { 
    //   src: room23Ensuite, 
    //   alt: 'Room 23 Ensuite Bathroom - Modern bathroom facilities in studio apartment North Melbourne',
    //   title: 'Room 23 Ensuite Bathroom'
    // },
    { 
      src: room28, 
      alt: 'Studio Apartment Room 28 - Fully equipped self-contained accommodation in North Melbourne',
      title: 'Studio Apartment Room 28 - North Melbourne'
    },
    { 
      src: room33_1, 
      alt: 'Interconnecting Apartment Room 33 - Spacious studio accommodation for 3-4 guests in North Melbourne',
      title: 'Interconnecting Apartment Room 33'
    },
    { 
      src: room33_2, 
      alt: 'Room 33 Interior View - Modern furnished apartment with kitchen facilities North Melbourne',
      title: 'Room 33 Interior View'
    },
    { 
      src: room33_3, 
      alt: 'Room 33 Living Space - Comfortable studio apartment accommodation near Melbourne CBD',
      title: 'Room 33 Living Space'
    },
    { 
      src: room33_4, 
      alt: 'Room 33 Apartment View - Well-appointed studio apartment with modern amenities',
      title: 'Room 33 Apartment View'
    },
    { 
      src: room33_5, 
      alt: 'Room 33 Accommodation - Self-contained studio apartment in North Melbourne',
      title: 'Room 33 Accommodation'
    },
    { 
      src: room33_6, 
      alt: 'Room 33 Interior - Modern studio apartment with fully equipped kitchen North Melbourne',
      title: 'Room 33 Interior'
    },
    { 
      src: room34_1, 
      alt: 'Studio Apartment Room 34 - Modern accommodation with queen bed and kitchen facilities',
      title: 'Studio Apartment Room 34'
    },
    { 
      src: room34_2, 
      alt: 'Room 34 Interior View - Spacious studio apartment accommodation in North Melbourne',
      title: 'Room 34 Interior View'
    },
    { 
      src: room34_3, 
      alt: 'Room 34 Living Area - Comfortable studio apartment near Royal Children\'s Hospital Melbourne',
      title: 'Room 34 Living Area'
    },
    { 
      src: room34_4, 
      alt: 'Room 34 Apartment - Modern furnished studio accommodation with air conditioning',
      title: 'Room 34 Apartment'
    },
    { 
      src: room34_5, 
      alt: 'Room 34 Studio View - Self-contained apartment with modern amenities North Melbourne',
      title: 'Room 34 Studio View'
    },
    { 
      src: img3368, 
      alt: 'Melrose Apartments North Melbourne - Modern studio apartment interior with kitchen and living space',
      title: 'Melrose Apartments Interior View'
    },
    { 
      src: img3369, 
      alt: 'North Melbourne Studio Apartment - Fully equipped accommodation with modern furnishings',
      title: 'North Melbourne Studio Apartment'
    },
    { 
      src: img3370, 
      alt: 'Melrose Apartments Accommodation - Comfortable studio apartment with queen bed and amenities',
      title: 'Melrose Apartments Accommodation'
    },
    { 
      src: img3372, 
      alt: 'Studio Apartment North Melbourne - Modern self-contained accommodation with kitchen facilities',
      title: 'Studio Apartment North Melbourne'
    },
    { 
      src: img3374, 
      alt: 'Melrose Apartments Interior - Well-appointed studio apartment near Melbourne CBD',
      title: 'Melrose Apartments Interior'
    },
    { 
      src: img3375, 
      alt: 'North Melbourne Accommodation - Modern studio apartment with air conditioning and heating',
      title: 'North Melbourne Accommodation'
    },
    { 
      src: img3376, 
      alt: 'Studio Apartment Melbourne - Furnished accommodation with LED TV and modern amenities',
      title: 'Studio Apartment Melbourne'
    },
    { 
      src: img3377, 
      alt: 'Melrose Apartments Room View - Comfortable studio accommodation for short or extended stays',
      title: 'Melrose Apartments Room View'
    },
    { 
      src: img3378, 
      alt: 'North Melbourne Studio - Self-contained apartment with fully equipped kitchen and living area',
      title: 'North Melbourne Studio'
    },
    { 
      src: img3379, 
      alt: 'Melrose Apartments Accommodation View - Modern studio apartment with queen size bed',
      title: 'Melrose Apartments Accommodation View'
    },
    { 
      src: img3380, 
      alt: 'Studio Apartment Interior - Well-furnished accommodation in North Melbourne near CBD',
      title: 'Studio Apartment Interior'
    },
    { 
      src: img3381, 
      alt: 'Melrose Apartments North Melbourne - Modern studio apartment with all amenities included',
      title: 'Melrose Apartments North Melbourne'
    },
    { 
      src: img5098, 
      alt: 'Melrose Apartments Interior View - Modern studio apartment accommodation in North Melbourne',
      title: 'Melrose Apartments Interior View'
    },
    { 
      src: img5102, 
      alt: 'North Melbourne Studio Apartment - Well-appointed accommodation with modern furnishings and amenities',
      title: 'North Melbourne Studio Apartment'
    },
    { 
      src: img5107, 
      alt: 'Melrose Apartments Accommodation - Comfortable studio apartment with fully equipped kitchen and living space',
      title: 'Melrose Apartments Accommodation'
    },
  ], []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Define room types with their images
  const roomTypes = useMemo(() => [
    {
      id: 1,
      name: 'Studio Apartment',
      description:
        'Our Studio Apartments are well setup for one or two guests staying a few days or a week. They are a similar size to a hotel room with many additional features including:',
      features: [
        'Queen size bed',
        'Fully equipped kitchen with microwave',
        'Colour LED TV',
        'Direct dial phone',
        'Wifi Internet (fee applies)',
        'Voice mail',
        'Radio / alarm clock',
        'Individual air-conditioning and heating',
        'Iron and ironing board',
      ],
      size: 'Similar to hotel room',
      capacity: '1-2 guests',
      images: [room23, room23Bed, img3381, room28],
    },
    {
      id: 2,
      name: 'Interconnecting Apartment',
      description:
        'Our Interconnecting Studio Apartments are well setup for three or four guests staying a few days or a week. Two studio apartments connect to form one larger apartment. They are a similar size to a hotel room with many additional features including:',
      features: [
        'Queen size bed',
        'Fully equipped kitchen with microwave',
        'Colour LED TV',
        'Direct dial phone',
        'Wifi Internet (fee applies)',
        'Voice mail',
        'Radio / alarm clock',
        'Individual air-conditioning and heating',
        'Iron and ironing board',
      ],
      size: 'Two connecting studios',
      capacity: '3-4 guests',
      images: [room33_1, room33_2, room33_3, room33_4, room33_5, room33_6, room34_1, room34_2, room34_3, room34_4, room34_5, img5098, img5102, img5107],
    },
  ], []);

  const _openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setSelectedImage(galleryImages[index]);
  }, [galleryImages]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
      return nextIndex;
    });
  }, [galleryImages]);

  const prevImage = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
      return prevIndex;
    });
  }, [galleryImages]);

  // Slideshow navigation for room images
  const nextRoomImage = useCallback((roomId) => {
    setCurrentImageIndex((prev) => {
      const room = roomTypes.find(r => r.id === roomId);
      if (!room || !room.images) return prev;
      return {
        ...prev,
        [roomId]: (prev[roomId] + 1) % room.images.length
      };
    });
  }, [roomTypes]);

  const prevRoomImage = useCallback((roomId) => {
    setCurrentImageIndex((prev) => {
      const room = roomTypes.find(r => r.id === roomId);
      if (!room || !room.images) return prev;
      return {
        ...prev,
        [roomId]: (prev[roomId] - 1 + room.images.length) % room.images.length
      };
    });
  }, [roomTypes]);

  // Auto-slide functionality
  useEffect(() => {
    const intervals = {};
    roomTypes.forEach((room) => {
      if (room.images && room.images.length > 1) {
        intervals[room.id] = setInterval(() => {
          setCurrentImageIndex((prev) => ({
            ...prev,
            [room.id]: (prev[room.id] + 1) % room.images.length
          }));
        }, 5000); // Change image every 5 seconds
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [roomTypes]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  // Intersection Observer for auto-play videos when in view (TikTok-style)
  useEffect(() => {
    const observers = {};
    
    [1, 2].forEach((videoId) => {
      const videoElement = videoRefs.current[videoId];
      if (!videoElement) return;
      
      observers[videoId] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = videoRefs.current[videoId];
            if (!video || videoErrors[videoId]) return;
            
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              // Video is in view - play it
              if (!isPlaying[videoId] && isVideoLoaded[videoId]) {
                video.play().catch((err) => {
                  console.log('Auto-play prevented:', err);
                });
              }
            } else {
              // Video is out of view - pause it
              if (isPlaying[videoId]) {
                video.pause();
              }
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of video is visible
          rootMargin: '0px',
        }
      );
      
      observers[videoId]?.observe(videoElement);
    });

    return () => {
      Object.values(observers).forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [isPlaying, isVideoLoaded, videoErrors]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <main className="pt-20">
      <title>Studio Apartments North Melbourne - Melrose Apartments | 4 Star Accommodation</title>
      <meta name="description" content="Discover our modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped kitchens, WiFi, parking, and all amenities. Perfect for 1-4 guests. Book now!" />
      <meta name="keywords" content="studio apartments Melbourne, studio apartments North Melbourne, interconnecting apartments Melbourne, Melbourne studio accommodation, 1 bedroom apartments Melbourne, 2 bedroom apartments Melbourne, furnished studio apartments Melbourne, self contained apartments Melbourne, apartments with kitchen Melbourne, Melbourne apartment rentals, Melbourne serviced apartments, Melbourne extended stay apartments, Melbourne short stay apartments, Melbourne business apartments, Melbourne family apartments, Melbourne relocation apartments, Melbourne temporary accommodation, Melbourne furnished apartments, Melbourne apartment hotel, Melbourne apartment accommodation, Melbourne apartment booking, Melbourne apartment deals, Melbourne apartment rates, Melbourne apartment prices, best studio apartments Melbourne, top rated apartments Melbourne, Melbourne apartment reviews, Melbourne apartment ratings, Melbourne apartment amenities, Melbourne apartment features, Melbourne apartment facilities, Melbourne apartment services, Melbourne apartment WiFi, Melbourne apartment parking, Melbourne apartment air conditioning, Melbourne apartment heating, Melbourne apartment TV, Melbourne apartment phone, Melbourne apartment kitchen, Melbourne apartment microwave, Melbourne apartment queen bed, Melbourne apartment capacity, Melbourne apartment size, Melbourne apartment layout, Melbourne apartment floor plan, Melbourne apartment virtual tour, Melbourne apartment photos, Melbourne apartment images, Melbourne apartment gallery, Melbourne apartment availability, Melbourne apartment booking online, Melbourne apartment instant booking, Melbourne apartment 24/7 booking, Melbourne apartment check in, Melbourne apartment check out, Melbourne apartment early check in, Melbourne apartment late check out, Melbourne apartment flexible check in, Melbourne apartment contactless check in, Melbourne apartment self check in, Melbourne apartment keyless entry, Melbourne apartment access, Melbourne apartment directions, Melbourne apartment location, Melbourne apartment map, Melbourne apartment nearby, Melbourne apartment close to, Melbourne apartment walking distance, Melbourne apartment tram stop, Melbourne apartment public transport, Melbourne apartment CBD access, Melbourne apartment hospital access, Melbourne apartment airport access, Melbourne apartment CityLink access, Melbourne apartment M2 access, Melbourne apartment route 79 access, Melbourne apartment Boundary Road access, Melbourne apartment Melrose Street access, Melbourne apartment North Melbourne access, Melbourne apartment VIC 3051 access, Melbourne apartment postcode 3051 access, Melbourne apartment area code 3051 access, Melbourne apartment suburb North Melbourne access, Melbourne apartment inner city access, Melbourne apartment inner north access, Melbourne apartment inner Melbourne access, Melbourne apartment metropolitan access, Melbourne apartment Victoria access, Melbourne apartment Australia access" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/accommodation" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/accommodation" />
      <meta property="og:title" content="Studio Apartments North Melbourne - Melrose Apartments" />
      <meta property="og:description" content="Modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped with all amenities. Perfect for 1-4 guests." />
      <meta property="og:image" content="https://www.melroseapartments.com.au/accommodation" />
      <meta property="og:image:alt" content="Melrose Apartments - Modern Studio Accommodation in North Melbourne" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Studio Apartments North Melbourne - Melrose Apartments" />
      <meta name="twitter:description" content="Modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped with all amenities." />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Melrose Apartments - Studio Accommodation",
          "url": "https://www.melroseapartments.com.au/accommodation",
          "description": "Modern Studio and Interconnecting Studio Apartments in North Melbourne with fully equipped kitchens, WiFi, and all amenities",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "171 Melrose Street",
            "addressLocality": "North Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3051",
            "addressCountry": "AU"
          },
          "containsPlace": [
            {
              "@type": "HotelRoom",
              "name": "Studio Apartment",
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": 2
              },
              "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "bedType": "Queen"
              }
            },
            {
              "@type": "HotelRoom",
              "name": "Interconnecting Apartment",
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": 4
              }
            }
          ]
        })}
      </script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${room33_1})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/80 to-gray-900/85"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.8
          }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl md:mt-20 mb-6 uppercase md:leading-[1.2]">
            Studio Apartments - North Melbourne Accommodation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Great quality 4 star accommodation handy to Melbourne's CBD
          </p>
        </motion.div>
      </section>

     

      {/* Room Types Comparison */}
      <section className="py-20 bg-gray-50 mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                style={{ willChange: 'transform' }}
              >
                <div className="p-8 pb-4">
                  <h2 className="text-3xl  mb-2" style={{ color: '#36b3a8' }}>
                    {room.name}
                  </h2>
                </div>
                {/* Room Image Slideshow */}
                <div className="relative h-96 md:h-[450px] bg-gray-200 overflow-hidden group">
                  {room.images && room.images.length > 0 && (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex[room.id]}
                          src={room.images[currentImageIndex[room.id]]}
                          alt={`${room.name} - Modern studio accommodation in North Melbourne with fully equipped kitchen, queen bed, and all amenities`}
                          title={`${room.name} - Melrose Apartments North Melbourne`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ 
                            opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                            scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                          }}
                          style={{ willChange: 'opacity, transform' }}
                          loading="lazy"
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows */}
                      {room.images.length > 1 && (
                        <>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevRoomImage(room.id);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextRoomImage(room.id);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </motion.button>
                          
                          {/* Slide Indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {room.images.map((_, idx) => (
                              <motion.button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [room.id]: idx
                                  }));
                                }}
                                className={`h-2 rounded-full ${
                                  currentImageIndex[room.id] === idx
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                                animate={{
                                  width: currentImageIndex[room.id] === idx ? 32 : 8,
                                }}
                                whileHover={{ scale: 1.2 }}
                                transition={{ 
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Room Content */}
                <div className="px-8 pb-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{room.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-[#36b3a8] mr-3 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <CTAButton className="w-full text-center justify-center">
                    Book Online
                  </CTAButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Link to Other Apartment Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
            className="text-center mt-12"
          >
            {roomTypes.find(r => r.id === 1) && (
              <p className="text-lg text-gray-600">
                Wanting more space?{' '}
                <Link to="/enquiry" className="text-[#36b3a8] font-semibold hover:underline">
                  Check out our Interconnecting Apartments
                </Link>
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video Tour Section - TikTok Reel Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[#36b3a8] mb-4">
              Take a Tour of Our Rooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our accommodation through immersive video tours
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {/* Studio Apartment Video */}
            <motion.div
              variants={itemVariants}
              className="relative w-full mx-auto"
              style={{ maxWidth: '400px' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 video-container" style={{ aspectRatio: '9/16', minHeight: '500px' }}>
                <video
                  ref={(el) => {
                    videoRefs.current[1] = el;
                  }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ 
                    display: videoErrors[1] ? 'none' : 'block',
                    willChange: 'auto',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  onLoadedMetadata={() => {
                    setIsVideoLoaded(prev => ({ ...prev, 1: true }));
                    setVideoErrors(prev => ({ ...prev, 1: false }));
                  }}
                  onCanPlay={() => {
                    setIsVideoLoaded(prev => ({ ...prev, 1: true }));
                  }}
                  onError={(e) => {
                    const video = e.target;
                    const error = video.error;
                    console.error('Video 1 error:', {
                      code: error?.code,
                      message: error?.message,
                      videoSrc: video.src
                    });
                    setVideoErrors(prev => ({ ...prev, 1: true }));
                  }}
                  onPlay={() => setIsPlaying(prev => ({ ...prev, 1: true }))}
                  onPause={() => setIsPlaying(prev => ({ ...prev, 1: false }))}
                  aria-label="Studio apartment video tour - Melrose Apartments North Melbourne"
                >
                  <source src={videoPaths.studio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Loading State */}
                {!isVideoLoaded[1] && !videoErrors[1] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-sm">Loading video...</p>
                    </div>
                  </div>
                )}

                {/* Error Fallback */}
                {videoErrors[1] && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center p-8 z-20">
                    <div>
                      <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold mb-2">Studio Apartment</p>
                      <p className="text-sm text-gray-400">Unable to load video. Please try refreshing the page.</p>
                    </div>
                  </div>
                )}
                
                {/* Play/Pause Overlay Button */}
                {isVideoLoaded[1] && !videoErrors[1] && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isPlaying[1] ? 0 : 1, scale: isPlaying[1] ? 0.8 : 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoRefs.current[1]) {
                        if (isPlaying[1]) {
                          videoRefs.current[1].pause();
                        } else {
                          videoRefs.current[1].play().catch(err => console.log('Play error:', err));
                        }
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 z-10 cursor-pointer"
                    aria-label={isPlaying[1] ? "Pause video" : "Play video"}
                  >
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      {isPlaying[1] ? (
                        <Pause className="w-8 h-8 text-gray-900" fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                      )}
                    </div>
                  </motion.button>
                )}

                {/* Video Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-10 pointer-events-none">
                  <h3 className="text-white text-xl font-semibold mb-1">Studio Apartment</h3>
                  <p className="text-white/90 text-sm">Perfect for 1-2 guests</p>
                </div>
              </div>
            </motion.div>

            {/* Interconnecting Apartment Video */}
            <motion.div
              variants={itemVariants}
              className="relative w-full mx-auto"
              style={{ maxWidth: '400px' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 video-container" style={{ aspectRatio: '9/16', minHeight: '500px' }}>
                <video
                  ref={(el) => {
                    videoRefs.current[2] = el;
                  }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ 
                    display: videoErrors[2] ? 'none' : 'block',
                    willChange: 'auto',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                  onLoadedMetadata={() => {
                    setIsVideoLoaded(prev => ({ ...prev, 2: true }));
                    setVideoErrors(prev => ({ ...prev, 2: false }));
                  }}
                  onCanPlay={() => {
                    setIsVideoLoaded(prev => ({ ...prev, 2: true }));
                  }}
                  onError={(e) => {
                    const video = e.target;
                    const error = video.error;
                    console.error('Video 2 error:', {
                      code: error?.code,
                      message: error?.message,
                      videoSrc: video.src
                    });
                    setVideoErrors(prev => ({ ...prev, 2: true }));
                  }}
                  onPlay={() => setIsPlaying(prev => ({ ...prev, 2: true }))}
                  onPause={() => setIsPlaying(prev => ({ ...prev, 2: false }))}
                  aria-label="Interconnecting apartment video tour - Melrose Apartments North Melbourne"
                >
                  <source src={videoPaths.interconnecting} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Loading State */}
                {!isVideoLoaded[2] && !videoErrors[2] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-sm">Loading video...</p>
                    </div>
                  </div>
                )}

                {/* Error Fallback */}
                {videoErrors[2] && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center p-8 z-20">
                    <div>
                      <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold mb-2">Interconnecting Apartment</p>
                      <p className="text-sm text-gray-400">Unable to load video. Please try refreshing the page.</p>
                    </div>
                  </div>
                )}
                
                {/* Play/Pause Overlay Button */}
                {isVideoLoaded[2] && !videoErrors[2] && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isPlaying[2] ? 0 : 1, scale: isPlaying[2] ? 0.8 : 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoRefs.current[2]) {
                        if (isPlaying[2]) {
                          videoRefs.current[2].pause();
                        } else {
                          videoRefs.current[2].play().catch(err => console.log('Play error:', err));
                        }
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 z-10 cursor-pointer"
                    aria-label={isPlaying[2] ? "Pause video" : "Play video"}
                  >
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      {isPlaying[2] ? (
                        <Pause className="w-8 h-8 text-gray-900" fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                      )}
                    </div>
                  </motion.button>
                )}

                {/* Video Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-10 pointer-events-none">
                  <h3 className="text-white text-xl font-semibold mb-1">Interconnecting Apartment</h3>
                  <p className="text-white/90 text-sm">Perfect for 3-4 guests</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


       {/* Introductory Content */}
      <section className="py-16 bg-white mx-5 md:mx-0 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Apartments on Melrose we take pride in offering you great quality 4 star accommodation 
                handy to Melbourne's CBD.
              </p>
              <p>
                When choosing our accommodation you can be assured that you are selecting from a range of 
                brand new purpose built apartments.
              </p>
              <p>
                Whether you choose to stay for business or pleasure, whether you are relocating to Melbourne 
                or whether you are staying while supporting a family member or friend staying at one of our 
                local hospitals, Melrose Apartments has accommodation to suit your requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      {/* <section className="py-20 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl   mb-4" style={{ color: '#36b3a8' }}>
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our beautifully appointed apartments
            </p>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 10,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => _openLightbox(index)}
                style={{ willChange: 'transform' }}
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    title={image.title || image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.6
                    }}
                    style={{ willChange: 'transform' }}
                    loading="lazy"
                    fetchPriority={index < 8 ? "high" : "auto"}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-3 text-sm font-medium">{image.alt}</p>
                </div>
                <div className="absolute inset-0 bg-[#36b3a8]/0 group-hover:bg-[#36b3a8]/10 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
            style={{ willChange: 'opacity' }}
          >
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <CloseIcon size={24} />
            </motion.button>

            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </motion.button>

            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.8
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                title={selectedImage.title || selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium text-center">{selectedImage.alt}</p>
                <p className="text-white/80 text-sm text-center mt-1">
                  {lightboxIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36b3a8] to-[#2a9d94] text-white mx-5 md:mx-0  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.8
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl   mb-6">
            Ready to Book?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Check availability and secure your preferred room type today
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Check Availability & Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Accommodation;