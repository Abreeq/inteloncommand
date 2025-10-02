import { motion } from "framer-motion";

const products = [
  { id: 1, image: "/assets/products/1.png" },
  { id: 2, image: "/assets/products/2.png" },
  { id: 3, image: "/assets/products/3.png" },
  { id: 4, image: "/assets/products/4.png" },
  { id: 5, image: "/assets/products/5.png" },
  { id: 6, image: "/assets/products/6.png" },
  // add more images with portrait/landscape variations
];

export default function ProductGallery() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Product Gallery
        </h2>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 1.5 : -1.5, // random tilt left/right
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
              whileTap={{ scale: 0.98 }} // nice click effect
              className="relative break-inside-avoid overflow-hidden rounded-xl shadow-md bg-white cursor-pointer"
            >
              <motion.img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-auto object-cover"
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
