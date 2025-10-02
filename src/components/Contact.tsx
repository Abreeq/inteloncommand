import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 }
    })
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-textPrimary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Ready to secure your medical information? Contact us today to learn
              more about our life-saving solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="text-3xl font-bold text-textPrimary mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-textSecondary mb-8">
                  Have questions about our products or services? Our team is here
                  to help you find the perfect solution for your needs.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'info@iocinteloncommand.com',
                    bg: 'white',
                    text: 'black'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    value: '+1 (555) 123-4567',
                    bg: 'white',
                    text: 'black'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    value: 'Global Operations',
                    bg: 'white',
                    text: 'black'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index + 1}
                    className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`p-3 bg-${contact.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon
                        className={`w-6 h-6 text-${contact.text}`}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-textSecondary mb-1">
                        {contact.title}
                      </p>
                      <p className="text-lg font-semibold text-textPrimary">
                        {contact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-1"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-textPrimary mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-textPrimary mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-textPrimary mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-textPrimary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary/10 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-8 py-4 text-xl text-bold bg-gradient-to-r from-primary to-tertiary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 group"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
