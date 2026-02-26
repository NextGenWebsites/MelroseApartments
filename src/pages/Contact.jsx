import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CTAButton from '../components/CTAButton';

// Import image from indoor-images folder
import room23 from '../assets/images/indoor-images/Room 23 copy.webp';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_slqc5wh';
const EMAILJS_PUBLIC_KEY = 'wVUMD52dYJzA86_gy';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_4e3pu5c';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');
  const [openTerm, setOpenTerm] = useState(null); // Track which term section is open

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // EmailJS configuration
    const serviceId = EMAILJS_SERVICE_ID;
    const templateId = EMAILJS_TEMPLATE_ID_CONTACT;
    const publicKey = EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || serviceId === 'your_service_id' || !templateId || templateId === 'your_contact_template_id' || !publicKey || publicKey === 'your_public_key') {
      setSubmitStatus('error');
      setErrorMessage(
        'Email service is not configured. Please contact us directly at info@melroseapartments.com.au or call 1800 779 971'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        to_email: 'info@melroseapartments.com.au',
        reply_to: formData.email,
        form_type: 'Contact Form',
        date: new Date().toLocaleString('en-AU', { 
          timeZone: 'Australia/Melbourne',
          dateStyle: 'full',
          timeStyle: 'short'
        }),
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.text || 'Failed to send message. Please try again or contact us directly at info@melroseapartments.com.au'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      <title>Contact Melrose Apartments - Phone, Email, Address | North Melbourne</title>
      <meta name="description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne VIC 3051. Phone: 1800 779 971, Email: info@melroseapartments.com.au. Office hours and contact form available." />
      <meta name="keywords" content="Melrose Apartments contact, North Melbourne accommodation contact, Melbourne serviced apartments contact, Melbourne apartment contact, Melbourne hotel contact, Melbourne accommodation phone, Melbourne accommodation email, Melbourne accommodation address, Melbourne accommodation office hours, Melbourne accommodation reservations, Melbourne accommodation booking phone, Melbourne accommodation booking email, Melbourne accommodation enquiry, Melbourne accommodation questions, Melbourne accommodation support, Melbourne accommodation customer service, Melbourne accommodation help, Melbourne accommodation assistance, Melbourne accommodation information, Melbourne accommodation details, Melbourne accommodation contact form, Melbourne accommodation contact us, Melbourne accommodation get in touch, Melbourne accommodation reach us, Melbourne accommodation call us, Melbourne accommodation email us, Melbourne accommodation visit us, Melbourne accommodation find us, Melbourne accommodation location, Melbourne accommodation directions, Melbourne accommodation map, Melbourne accommodation GPS, Melbourne accommodation coordinates, Melbourne accommodation 1800 779 971, Melbourne accommodation +61 3 8379 1100, Melbourne accommodation info@melroseapartments.com.au, Melbourne accommodation fax, Melbourne accommodation +61 3 8379 1110, Melbourne accommodation office, Melbourne accommodation reception, Melbourne accommodation front desk, Melbourne accommodation concierge, Melbourne accommodation staff, Melbourne accommodation team, Melbourne accommodation management, Melbourne accommodation owners, Melbourne accommodation operators, Melbourne accommodation hosts, Melbourne accommodation hosts contact, Melbourne accommodation hosts phone, Melbourne accommodation hosts email, Melbourne accommodation hosts address, Melbourne accommodation hosts office hours, Melbourne accommodation hosts reservations, Melbourne accommodation hosts booking, Melbourne accommodation hosts enquiry, Melbourne accommodation hosts questions, Melbourne accommodation hosts support, Melbourne accommodation hosts customer service, Melbourne accommodation hosts help, Melbourne accommodation hosts assistance, Melbourne accommodation hosts information, Melbourne accommodation hosts details, Melbourne accommodation hosts contact form, Melbourne accommodation hosts contact us, Melbourne accommodation hosts get in touch, Melbourne accommodation hosts reach us, Melbourne accommodation hosts call us, Melbourne accommodation hosts email us, Melbourne accommodation hosts visit us, Melbourne accommodation hosts find us, Melbourne accommodation hosts location, Melbourne accommodation hosts directions, Melbourne accommodation hosts map, Melbourne accommodation hosts GPS, Melbourne accommodation hosts coordinates" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/contact" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/contact" />
      <meta property="og:title" content="Contact Melrose Apartments - Phone, Email, Address" />
      <meta property="og:description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne. Phone: 1800 779 971, Email: info@melroseapartments.com.au" />
      <meta property="og:image" content="https://www.melroseapartments.com.au/contact" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Melrose Apartments - Phone, Email, Address" />
      <meta name="twitter:description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne. Phone: 1800 779 971" />
      
      {/* Structured Data - ContactPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Melrose Apartments",
          "description": "Contact information for Melrose Apartments in North Melbourne",
          "mainEntity": {
            "@type": "Hotel",
            "name": "Melrose Apartments",
            "telephone": "+61-3-8379-1100",
            "email": "info@melroseapartments.com.au",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "171 Melrose Street",
              "addressLocality": "North Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3051",
              "addressCountry": "AU"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "18:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ]
          }
        })}
      </script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${room23})`
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team - we're here to help make your stay perfect
          </p>
        </motion.div>
      </section>

      {/* Contact Information and Map Section */}
      <section className="py-20 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid - Contact Info Left, Contact Form Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* VISIT US AT */}
                <h2 className="text-3xl  mb-6 uppercase" style={{ color: '#36b3a8' }}>
                  Visit Us At
                </h2>
                <div className="mb-8">
                  <p className="text-xl  mb-2">Melrose Apartments</p>
                  <address className="not-italic text-gray-700 space-y-1 mb-6">
                    <p>171 Melrose Street</p>
                    <p>North Melbourne VIC 3051</p>
                    <p>Australia</p>
                  </address>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Phone</strong>{' '}
                      <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                        1800 779 971
                      </a>
                    </p>
                    <p>
                      <strong>International</strong>{' '}
                      <a href="tel:+61383791100" className="text-[#36b3a8] hover:underline">
                        +61 3 8379 1100
                      </a>
                    </p>
                    <p>
                      <strong>Fax</strong> +61 3 8379 1110
                    </p>
                  </div>
                </div>

                {/* EMAIL OUR TEAM */}
                <h2 className="text-3xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Email Our Team
                </h2>
                <div className="mb-8">
                  <p className="text-gray-700 mb-2  ">General Inquiries</p>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@melroseapartments.com.au"
                      className="text-[#36b3a8] hover:underline"
                    >
                      info@melroseapartments.com.au
                    </a>
                  </p>
                </div>

                {/* OFFICE HOURS */}
                <h2 className="text-3xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Office Hours
                </h2>
                <div className="mb-8">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>MON-FRI</strong> 8.30AM TO 6.30PM</li>
                    <li><strong>SAT</strong> 9AM TO 4PM</li>
                    <li><strong>SUN</strong> 9AM TO 2PM</li>
                    <li><strong>PUBLIC HOLIDAYS</strong> 10AM TO 2PM</li>
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl   mb-2 uppercase" style={{ color: '#36b3a8' }}>
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm   text-gray-700 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36b3a8] focus:border-transparent outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm   text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36b3a8] focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Subject Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm   text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36b3a8] focus:border-transparent outline-none transition-all"
                          placeholder="+61 4XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm   text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36b3a8] focus:border-transparent outline-none transition-all"
                          placeholder="Booking inquiry, General question, etc."
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm   text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36b3a8] focus:border-transparent outline-none transition-all resize-vertical"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start gap-3"
                      >
                        <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className=" ">Message sent successfully!</p>
                          <p className="text-sm mt-1">
                            We've received your message and will get back to you as soon as possible.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-start gap-3"
                      >
                        <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className=" ">Failed to send message</p>
                          <p className="text-sm mt-1">
                            {errorMessage || 'Please try again or contact us directly at info@melroseapartments.com.au'}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-8 py-4 bg-[#36b3a8] text-white   uppercase tracking-wide rounded-lg hover:bg-[#2a9d94] transition-all duration-300 flex items-center justify-center gap-2 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-0.5'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin" size={20} />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="bg-gray-100 rounded-lg shadow-xl overflow-hidden h-96 lg:h-[600px]">
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
            </motion.div>

            {/* Bottom Row - Reservations Hours and Check-In Times */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {/* RESERVATIONS HOURS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-2xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Reservations Hours
                </h3>
                <p className="text-gray-700 mb-3">
                  Book online 24/7 instantly at{' '}
                  <a
                    href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#36b3a8] hover:underline  "
                  >
                    www.apartmentsonmelrose.com.au
                  </a>
                </p>
                <p className="text-gray-700">
                  Speak with our team by calling or emailing during our office hours
                </p>
              </motion.div>

              {/* CHECK-IN TIMES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-2xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Check-In Times
                </h3>
                <p className="text-gray-700 mb-2">
                  Check-In from 3pm each day. Earlier may be possible subject to availability of rooms.
                </p>
                <p className="text-gray-700">
                  Check-In outside of Office Hours by appointment, you can check in 24 hours a day 
                  by contacting us prior to arrival.
                </p>
              </motion.div>
            </div>

            {/* Terms and Conditions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-3xl  mb-6 uppercase" style={{ color: '#36b3a8' }}>
                Terms and Conditions
              </h2>
              <div className="space-y-4">
                {/* Check-In Times */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenTerm(openTerm === 'checkin' ? null : 'checkin')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl  text-gray-800">Check-In Times</h3>
                    <motion.div
                      animate={{ rotate: openTerm === 'checkin' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ChevronDown className={openTerm === 'checkin' ? "text-[#36b3a8] shrink-0" : "text-gray-400 shrink-0"} size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openTerm === 'checkin' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-gray-200">
                          <p className="text-gray-700 text-sm leading-relaxed">Please note that check-in times for Saturday and Sunday are between 12:00 and 15:00. If you expect to arrive outside reception opening hours, please inform the property in advance, using the contact details found on the booking confirmation.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* No Party Policy & Arrival */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenTerm(openTerm === 'parties' ? null : 'parties')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl  text-gray-800">No Party Policy &amp; Arrival</h3>
                    <motion.div
                      animate={{ rotate: openTerm === 'parties' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ChevronDown className={openTerm === 'parties' ? "text-[#36b3a8] shrink-0" : "text-gray-400 shrink-0"} size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openTerm === 'parties' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-gray-200 space-y-4">
                          <p className="text-gray-700 text-sm leading-relaxed">Please note that this property has a strict &apos;No Party Policy&apos;.</p>
                          <p className="text-gray-700 text-sm leading-relaxed">Please inform Melrose Apartments in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.</p>
                          <p className="text-gray-700 text-sm leading-relaxed">This property will not accommodate hen, stag or similar parties.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Damage Deposit */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenTerm(openTerm === 'deposit' ? null : 'deposit')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl  text-gray-800">Damage Deposit</h3>
                    <motion.div
                      animate={{ rotate: openTerm === 'deposit' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ChevronDown className={openTerm === 'deposit' ? "text-[#36b3a8] shrink-0" : "text-gray-400 shrink-0"} size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openTerm === 'deposit' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-gray-200">
                          <p className="text-gray-700 text-sm leading-relaxed">A damage deposit of AUD 300 is required on arrival. This will be collected as a cash payment. You should be reimbursed on check-out. Your deposit will be refunded in full in cash, subject to an inspection of the property.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Late Check-Out */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenTerm(openTerm === 'checkout' ? null : 'checkout')}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl  text-gray-800">Late Check-Out</h3>
                    <motion.div
                      animate={{ rotate: openTerm === 'checkout' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ChevronDown className={openTerm === 'checkout' ? "text-[#36b3a8] shrink-0" : "text-gray-400 shrink-0"} size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openTerm === 'checkout' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-gray-200">
                          <p className="text-gray-700 text-sm leading-relaxed">Late check-outs for guests need to be arranged with the team at no additional cost, but letting us know with sufficient time beforehand.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book online 24/7 or contact us during office hours for personalized assistance
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;