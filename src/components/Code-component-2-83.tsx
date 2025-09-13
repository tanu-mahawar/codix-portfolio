import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Web Development Trends to Watch in 2025",
    excerpt: "Discover the latest trends shaping the future of web development, from AI integration to advanced animations that will dominate the industry.",
    image: "https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGJsb2d8ZW58MXx8fHwxNzU3NjcxNTUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "Web Development",
    author: "Alex Chen",
    date: "Sep 8, 2025",
    readTime: "5 min read"
  },
  {
    title: "The Complete Guide to Modern Web Design",
    excerpt: "Learn how to create stunning, user-friendly websites that convert visitors into customers with the latest design principles and techniques.",
    image: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB0cmVuZHN8ZW58MXx8fHwxNzU3NjcxNTUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "Design",
    author: "Sarah Martinez",
    date: "Sep 5, 2025",
    readTime: "8 min read"
  },
  {
    title: "SEO Strategies That Actually Work in 2025",
    excerpt: "Boost your website's visibility with proven SEO techniques that deliver real results and drive organic traffic to your business.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU3NjAyMzA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "SEO",
    author: "Mike Johnson",
    date: "Sep 2, 2025",
    readTime: "6 min read"
  },
  {
    title: "Building High-Performance E-commerce Sites",
    excerpt: "Essential tips and best practices for creating fast, secure, and conversion-optimized online stores that scale with your business.",
    image: "https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGJsb2d8ZW58MXx8fHwxNzU3NjcxNTUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "E-commerce",
    author: "Emma Wilson",
    date: "Aug 30, 2025",
    readTime: "7 min read"
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understand the importance of mobile-first design and learn how to create responsive websites that perform perfectly on all devices.",
    image: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB0cmVuZHN8ZW58MXx8fHwxNzU3NjcxNTUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "Mobile Design",
    author: "David Park",
    date: "Aug 28, 2025",
    readTime: "4 min read"
  },
  {
    title: "The Future of AI in Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing web development and what it means for developers and businesses alike.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU3NjAyMzA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "AI & Technology",
    author: "Lisa Rodriguez",
    date: "Aug 25, 2025",
    readTime: "9 min read"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest from Our <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and expert tips in web development, design, and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center text-red-600 dark:text-orange-400 font-semibold group-hover:text-orange-600 dark:group-hover:text-red-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.article>
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
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}