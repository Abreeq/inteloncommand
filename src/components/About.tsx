import { Sparkles, Users, Globe, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const { scrollY } = useScroll();

  // Parallax offsets for background elements
  const statsY = useTransform(scrollY, [0, 500], [0, -40]); // Stats section moves up slowly
  const cultureY = useTransform(scrollY, [0, 500], [0, -30]); // Culture section parallax

  return (
    <section id="about" className="py-24 bg-bgLight relative overflow-hidden">
      {/* Rotated Section Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>
            <h2 className="text-5xl font-bold text-textPrimary mb-6">What We Do</h2>
          </motion.div>

          {/* Journey & Stats */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Journey */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-tertiary rounded-full"></div>
                <h3 className="text-3xl font-bold text-textPrimary mb-4">Our Journey</h3>
                <p className="text-lg text-textSecondary leading-relaxed">
                  Established in 2021, I.O.C. Intel On Command LLC emerged as a visionary startup with grand aspirations.
                  Since our inception, we have evolved into a prominent force, pioneering innovative solutions at the
                  intersection of medical science and information technology.
                </p>
              </div>

              <p className="text-lg text-textSecondary leading-relaxed">
                Today, we proudly stand as a leading provider, delivering excellent services that transcend borders,
                serving clients on a global scale. We blend technological expertise with a commitment to excellence,
                shaping the future of tech and medical landscapes, including the era of digital IDs.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              style={{ y: statsY }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-bgMedium p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Globe, label: "Global Reach", value: "Worldwide" },
                    { icon: Award, label: "Since", value: "2021" },
                    { icon: Users, label: "Focus", value: "Innovation" },
                    { icon: Sparkles, label: "Quality", value: "Excellence" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-bgLight rounded-xl hover:shadow-md transition-shadow duration-300"
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-tertiary" />
                      <p className="text-2xl font-bold text-textPrimary mb-1">{stat.value}</p>
                      <p className="text-sm text-textSecondary">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Culture Section */}
          <motion.div
            style={{ y: cultureY }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-5 transform rotate-3"></div>
            <div className="relative p-12 bg-bgLight rounded-3xl border border-primary">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-2">Our Culture</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-textSecondary leading-relaxed mb-6">
                At I.O.C. Intel On Command LLC, we promote an active culture that flourishes on innovation,
                collaboration, and solid excellence. Our commitment extends beyond business – we actively nurture
                a work environment that supports our team members, fostering an atmosphere of authorization where
                they can realize their full potential.
              </p>

              <p className="text-lg text-textSecondary leading-relaxed">
                In our pursuit of greatness, diversity and inclusivity are not just ideals; they are integral aspects
                woven into the fabric of all our endeavors. At the intersection of technology and medical solutions,
                including our digital IDs, we are proud to champion a workplace that values creativity, teamwork,
                and the unique perspectives that diversity brings to our collective success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
