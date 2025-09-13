import { motion } from "motion/react";
import { Code, Palette, ShoppingCart, Layers } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating visually stunning and user-friendly designs that capture your brand essence and engage your audience.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using the latest technologies and best practices.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Developing powerful online stores that drive sales and provide seamless shopping experiences.",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Layers,
    title: "Branding & UI/UX",
    description: "Crafting memorable brand identities and intuitive user experiences that leave lasting impressions.",
    color: "from-red-600 to-orange-400"
  }
];

export function ServicesSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-8">
                  <motion.div
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </motion.div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <motion.div
                    className="mt-6 flex items-center text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text font-semibold"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Learn More →
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}