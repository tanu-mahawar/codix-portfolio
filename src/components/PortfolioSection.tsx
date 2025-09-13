import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online store with advanced filtering and payment integration",
    longDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring advanced product filtering, secure payment processing with Stripe, real-time inventory management, and a responsive design that works seamlessly across all devices.",
    image: "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc1NzY2MDU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe"],
    category: "E-commerce",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/codixy/ecommerce-platform",
    features: [
      "Advanced product search and filtering",
      "Secure payment processing with Stripe", 
      "Real-time inventory management",
      "Responsive design for all devices",
      "Admin dashboard for order management"
    ]
  },
  {
    title: "Creative Agency Website",
    description: "Portfolio website with stunning animations and interactive elements",
    longDescription: "A visually striking portfolio website for a creative agency, featuring smooth animations powered by GSAP, interactive 3D elements with WebGL, and a Vue.js framework for optimal performance and user experience.",
    image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTc2MjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "GSAP", "WebGL"],
    category: "Portfolio",
    liveUrl: "https://example-agency.com",
    githubUrl: "https://github.com/codixy/creative-agency",
    features: [
      "Smooth scroll animations with GSAP",
      "Interactive 3D elements using WebGL",
      "Dynamic portfolio filtering",
      "Contact form with email integration",
      "SEO optimized for better visibility"
    ]
  },
  {
    title: "SaaS Dashboard",
    description: "Complex data visualization platform with real-time analytics",
    longDescription: "A sophisticated SaaS dashboard built with React and D3.js, featuring real-time data visualization, interactive charts and graphs, Firebase integration for real-time updates, and a clean, intuitive interface for data analysis.",
    image: "https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NTkzNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "D3.js", "Firebase"],
    category: "SaaS",
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/codixy/saas-dashboard",
    features: [
      "Real-time data visualization with D3.js",
      "Interactive charts and graphs",
      "Firebase real-time database integration",
      "User authentication and role management",
      "Export data in multiple formats"
    ]
  },
  {
    title: "Mobile App Landing",
    description: "High-converting landing page for mobile app with App Store integration",
    longDescription: "A high-converting landing page built with Next.js and Tailwind CSS, optimized for mobile app promotion with integrated analytics, App Store badges, and conversion tracking to maximize app downloads.",
    image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTc2MjgxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Tailwind", "Analytics"],
    category: "Landing Page",
    liveUrl: "https://example-app-landing.com",
    githubUrl: "https://github.com/codixy/mobile-app-landing",
    features: [
      "App Store and Google Play integration",
      "Conversion tracking with Google Analytics",
      "Responsive design optimized for all devices",
      "Fast loading with Next.js optimization",
      "A/B testing capabilities"
    ]
  }
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollToBlog = () => {
    const element = document.querySelector('#blog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -90 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </motion.div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.title}</h3>
                    <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 border-0">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToBlog}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}