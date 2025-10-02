import {
  ArrowRight,
  Shield,
  Database,
  FileText,
  CreditCard,
} from "lucide-react";
import { delay, motion } from "framer-motion";

export default function Hero() {
  const heroItems = [
    { icon: Shield, label: "Secure Storage" },
    { icon: Database, label: "Medical Records" },
    { icon: FileText, label: "Digital IDs" },
    { icon: CreditCard, label: "Passport Services" },
  ];

  const revealVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  // Grid line animation
  const horizontalLineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const verticalLineVariant = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate to-black opacity-55"></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={horizontalLineVariant}
              className="absolute left-0 w-full h-[1px] opacity-25 bg-tertiary origin-left"
              style={{ top: `${(i + 1) * 16}%` }}
            />
          ))}

          {/* Vertical lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={verticalLineVariant}
              className="absolute top-0 h-full opacity-25 w-[1px] bg-tertiary origin-top"
              style={{ left: `${(i + 1) * 16}%` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* EST. 2021 badge */}
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-2 bg-primary bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg border border-tertiary"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              EST. 2021
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold pb-6 hero-gradient-stroke"
          >
            Pioneering Digital Health & Secure IDs
          </motion.h1>

          {/* Buttons */}
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#products"
              className="group px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-tertiary transition-all duration-300 flex items-center gap-2 hover:gap-3"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold shadow-lg hover:shadow-xl hover:border border-primary transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true}}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                className="group p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-tertiary"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-tertiary group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-tertiary">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
