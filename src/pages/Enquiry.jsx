import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
const EMAILJS_TEMPLATE_ID_ENQUIRY = 'your_enquiry_template_id';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = EMAILJS_SERVICE_ID;
      const templateID = EMAILJS_TEMPLATE_ID_ENQUIRY;
      const publicKey = EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceID || serviceID === 'your_service_id' || !templateID || templateID === 'your_enquiry_template_id' || !publicKey || publicKey === 'your_public_key') {
        alert('Email service is not configured. Please contact us directly at info@melroseapartments.com.au or call 1800 779 971');
        setIsSubmitting(false);
        return;
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: 'New Enquiry from Website',
        message: formData.message,
        to_email: 'info@melroseapartments.com.au',
        reply_to: formData.email,
        form_type: 'Enquiry Form',
        date: new Date().toLocaleString('en-AU', { 
          timeZone: 'Australia/Melbourne',
          dateStyle: 'full',
          timeStyle: 'short'
        }),
      };

      // Send email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams);

      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(
        `Sorry, there was an error sending your message. Please try again or contact us directly at info@melroseapartments.com.au or call 1800 779 971. Error: ${error.text || error.message || 'Unknown error'}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-white">
      <title>Enquiry Form - Melrose Apartments | Send Us Your Questions</title>
      <meta name="description" content="Send an enquiry to Melrose Apartments. Ask questions about our accommodation, availability, rates, amenities, or special requirements. We aim to respond as soon as possible!" />
      <meta name="keywords" content="Melrose Apartments enquiry, North Melbourne accommodation enquiry, Melbourne serviced apartments enquiry, Melbourne apartment enquiry, Melbourne hotel enquiry, Melbourne accommodation questions, Melbourne accommodation enquiry form, Melbourne accommodation ask question, Melbourne accommodation request information, Melbourne accommodation get quote, Melbourne accommodation check availability, Melbourne accommodation availability enquiry, Melbourne accommodation rates enquiry, Melbourne accommodation prices enquiry, Melbourne accommodation deals enquiry, Melbourne accommodation specials enquiry, Melbourne accommodation discounts enquiry, Melbourne accommodation offers enquiry, Melbourne accommodation promotions enquiry, Melbourne accommodation packages enquiry, Melbourne accommodation group bookings enquiry, Melbourne accommodation corporate bookings enquiry, Melbourne accommodation long stay enquiry, Melbourne accommodation extended stay enquiry, Melbourne accommodation short stay enquiry, Melbourne accommodation weekly rates enquiry, Melbourne accommodation monthly rates enquiry, Melbourne accommodation pet friendly enquiry, Melbourne accommodation wheelchair accessible enquiry, Melbourne accommodation disabled access enquiry, Melbourne accommodation family friendly enquiry, Melbourne accommodation children enquiry, Melbourne accommodation baby friendly enquiry, Melbourne accommodation toddler friendly enquiry, Melbourne accommodation senior friendly enquiry, Melbourne accommodation elderly friendly enquiry, Melbourne accommodation amenities enquiry, Melbourne accommodation facilities enquiry, Melbourne accommodation services enquiry, Melbourne accommodation features enquiry, Melbourne accommodation WiFi enquiry, Melbourne accommodation parking enquiry, Melbourne accommodation kitchen enquiry, Melbourne accommodation laundry enquiry, Melbourne accommodation air conditioning enquiry, Melbourne accommodation heating enquiry, Melbourne accommodation TV enquiry, Melbourne accommodation phone enquiry, Melbourne accommodation check in enquiry, Melbourne accommodation check out enquiry, Melbourne accommodation early check in enquiry, Melbourne accommodation late check out enquiry, Melbourne accommodation flexible check in enquiry, Melbourne accommodation contactless check in enquiry, Melbourne accommodation self check in enquiry, Melbourne accommodation keyless entry enquiry, Melbourne accommodation access enquiry, Melbourne accommodation directions enquiry, Melbourne accommodation map enquiry, Melbourne accommodation GPS enquiry, Melbourne accommodation coordinates enquiry, Melbourne accommodation location enquiry, Melbourne accommodation nearby enquiry, Melbourne accommodation close to enquiry, Melbourne accommodation walking distance enquiry, Melbourne accommodation tram stop enquiry, Melbourne accommodation public transport enquiry, Melbourne accommodation CBD access enquiry, Melbourne accommodation hospital access enquiry, Melbourne accommodation airport access enquiry, Melbourne accommodation CityLink access enquiry, Melbourne accommodation M2 access enquiry, Melbourne accommodation route 79 access enquiry, Melbourne accommodation Boundary Road access enquiry, Melbourne accommodation Melrose Street access enquiry, Melbourne accommodation North Melbourne access enquiry, Melbourne accommodation VIC 3051 access enquiry, Melbourne accommodation postcode 3051 access enquiry, Melbourne accommodation area code 3051 access enquiry, Melbourne accommodation suburb North Melbourne access enquiry, Melbourne accommodation inner city access enquiry, Melbourne accommodation inner north access enquiry, Melbourne accommodation inner Melbourne access enquiry, Melbourne accommodation metropolitan access enquiry, Melbourne accommodation Victoria access enquiry, Melbourne accommodation Australia access enquiry" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/enquiry" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/enquiry" />
      <meta property="og:title" content="Enquiry Form - Melrose Apartments" />
      <meta property="og:description" content="Send an enquiry to Melrose Apartments. Ask questions about our accommodation, availability, rates, or special requirements." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Enquiry Form - Melrose Apartments" />
      <meta name="twitter:description" content="Send an enquiry to Melrose Apartments. We aim to respond as soon as possible!" />
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header with Text and Book Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          >
            <div className="mb-4 md:mb-0">
              <p className="text-lg text-gray-700 font-medium mb-2">
                Make your enquiry today, we aim to respond as soon as possible!
              </p>
              <p className="text-sm text-gray-600">
                Use the form below to send us an enquiry, or click "BOOK NOW" to instantly book a room.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <a
                href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block text-center py-3 px-8 whitespace-nowrap"
              >
                BOOK NOW
              </a>
              <p className="text-xs text-gray-600 mt-2 text-center md:text-right">
                Book instantly online 24/7
              </p>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl  text-gray-800 mb-2" style={{ color: '#36b3a8' }}>
                Send Us an Enquiry
              </h2>
              <p className="text-gray-600 text-sm">
                Fill out the form below to ask questions or request information. For instant booking, use the "BOOK NOW" button above.
              </p>
            </div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-500 text-green-700 p-6 rounded-lg text-center"
              >
                <p className=" text-lg mb-2">Thank you for your enquiry!</p>
                <p>We've received your message and will respond as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields - First Name and Last Name side by side */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Name
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First Name (required)"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last Name (required)"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message (required)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Please provide details about your enquiry..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors resize-y text-gray-700 placeholder-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#36b3a8] text-white font-semibold uppercase py-4 px-6 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2a9d94] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 text-white" strokeWidth={2} />
                      SUBMIT
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Enquiry;
