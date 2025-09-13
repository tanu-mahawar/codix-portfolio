import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";


interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="h-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                    <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} className="text-gray-600" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6">
                    {/* Project Image */}
                    <div className="relative mb-6 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {project.longDescription || project.description}
                        </p>

                        {project.features && (
                          <>
                            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-2 mb-6">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                        <div className="space-y-3">
                          {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                onClick={() => window.open(project.liveUrl, '_blank')}
                                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                View Live Project
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                variant="outline"
                                onClick={() => window.open(project.githubUrl, '_blank')}
                                className="w-full border-gray-300 hover:bg-gray-50"
                              >
                                <Github size={16} className="mr-2" />
                                View Source Code
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}