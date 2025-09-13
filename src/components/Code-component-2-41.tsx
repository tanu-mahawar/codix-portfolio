import { motion } from "motion/react";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";
import { Calendar, Users, Award, Globe } from "lucide-react";

const achievements = [
  {
    icon: Calendar,
    title: "5+ Years in Web Design",
    description: "Half a decade of creating stunning digital experiences",
    percentage: 100
  },
  {
    icon: Users,
    title: "Worked with 50+ Clients Worldwide",
    description: "Building relationships and delivering results globally",
    percentage: 85
  },
  {
    icon: Award,
    title: "25+ Awards & Recognitions",
    description: "Industry recognition for outstanding work",
    percentage: 75
  },
  {
    icon: Globe,
    title: "Projects in 15+ Countries",
    description: "International reach with local understanding",
    percentage: 90
  }
];

const skills = [
  { name: "Frontend Development", percentage: 95 },
  { name: "UI/UX Design", percentage: 90 },
  { name: "Backend Development", percentage: 85 },
  { name: "E-commerce Solutions", percentage: 92 },
  { name: "SEO Optimization", percentage: 88 },
  { name: "Performance Optimization", percentage: 93 }
];

export function ExperienceSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Years of experience and countless successful projects have shaped our expertise in delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                  
                  <div className="relative">
                    <Progress 
                      value={achievement.percentage} 
                      className="h-2 bg-gray-200"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${achievement.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.percentage}%</span>
                </div>
                
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}