import { motion } from "motion/react";
import { Code, Palette, ShoppingCart, Layers } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Creating visually stunning and user-friendly designs that capture your brand essence and engage your audience.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using the latest technologies and best practices.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Developing powerful online stores that drive sales and provide seamless shopping experiences.",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: Layers,
    title: "Branding & UI/UX",
    description:
      "Crafting memorable brand identities and intuitive user experiences that leave lasting impressions.",
    color: "from-red-600 to-orange-400",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the online world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-white">
                <CardContent className="p-6 lg:p-8">
                  <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`p-3 lg:p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 sm:mb-0 sm:mr-4`}
                    >
                      <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </motion.div>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>

                  <motion.button
                    onClick={scrollToContact}
                    className="inline-flex items-center text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Get Started →
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
