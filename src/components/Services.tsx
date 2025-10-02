import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Medical Records Management",
      description:
        "Secure, comprehensive management of medical records with 24/7 worldwide access.",
      bgImage: "/assets/records.png",
      height: "h-[400px]", // Full height
    },
    {
      title: "Important Documents Storage",
      description:
        "Safe and secure storage for difficult-to-replace documents with instant retrieval.",
      bgImage: "/assets/storage.png",
      height: "h-[250px]", // 50%
    },
    {
      title: "Digital IDs",
      description:
        "Advanced digital identification solutions for the modern era of secure authentication.",
      bgImage: "/assets/id.png",
      height: "h-[320px]", // 75%
    },
    {
      title: "Passport Services",
      description:
        "Streamlined passport services with secure document handling and verification.",
      bgImage: "/assets/passport.png",
      height: "h-[380px]", // Almost full
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-bgLight relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-textPrimary mb-6">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Staggered Layout */}
          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative overflow-hidden border border-tertiary rounded-3xl shadow-lg cursor-pointer break-inside-avoid ${service.height}`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter group-hover:brightness-50 transition-all duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-3xl"></div>

                {/* Card content */}
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:">
                    {service.title}
                  </h3>
                  <p className="hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 mt-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}