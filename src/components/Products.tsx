import { Clock, Shield, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const features = [
    { icon: Clock, text: "24/7 Access" },
    { icon: Shield, text: "Secure Storage" },
    { icon: Globe, text: "Worldwide Retrieval" },
    { icon: Zap, text: "Instant Information" },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true , amount: 0.5}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-textPrimary mb-6">
              Our Products
            </h2>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto">
              Innovative tools designed to save lives by providing critical
              medical and identity information when it matters most.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Product 01 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Image slides in from LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true , amount: 0.5}}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="order-2 md:order-1 relative"
              >
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-primary to-secondary p-12 rounded-3xl shadow-2xl">
                  <img
                    src="/assets/band.png"
                    alt="Product 01"
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </div>
              </motion.div>

              {/* Right: Text slides in from RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true , amount: 0.5}}
                transition={{ duration: 0.7 }}
                className="order-1 md:order-2"
              >
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <span className="text-sm font-semibold text-primary">
                    Product 01
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-textPrimary mb-6">
                  IOC ID Wristband
                </h3>
                <p className="text-lg text-textSecondary mb-6 leading-relaxed">
                  An integrated file storage and retrieval system with a quick
                  and comprehensive method of helping emergency personnel with
                  crucial medical and identity information when time is critical.
                </p>
                <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                  Gets first responders important information instantly. Store
                  private medical records and documents securely with 24/7
                  worldwide access. Simple yet life-saving.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                    >
                      <feature.icon className="w-5 h-5 text-tertiary" />
                      <span className="text-sm font-medium text-primary">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-tertiary transition-all duration-300"
                >
                  Get Your Wristband
                </motion.button>
              </motion.div>
            </div>

            {/* Product 02 */}
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text slides in from LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true , amount: 0.5}}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-4">
                  <span className="text-sm font-semibold text-tertiary">
                    Product 02
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-textPrimary mb-6">
                  IOC ID Dog Tags
                </h3>
                <p className="text-lg text-textSecondary mb-6 leading-relaxed">
                  Professional-grade identification tags providing the same
                  integrated file storage and retrieval system, designed to
                  facilitate the best flow of medical information at all times.
                </p>
                <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                  Durable, reliable, and instantly accessible. Perfect for
                  active lifestyles, military personnel, or anyone who prefers a
                  classic identification method.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Emergency medical information instantly available",
                    "Secure document storage with global access",
                    "Compatible with all emergency response systems",
                    "Saves lives by reducing critical response time",
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                      </div>
                      <p className="text-textSecondary">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-tertiary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300"
                >
                  Order Dog Tags
                </motion.button>
              </motion.div>

              {/* Right: Image slides in from RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true , amount: 0.5}}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-gradient-to-br from-secondary to-primary p-12 rounded-3xl shadow-2xl">
                  <img
                    src="/assets/tag.png"
                    alt="Product 02"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
