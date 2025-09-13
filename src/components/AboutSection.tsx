import { motion } from "motion/react";
import { useEffect, useState } from "react";

function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
}

function AnimatedCounter({ end, label, delay = 0 }: { end: number; label: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const count = useCounter(isVisible ? end : 0);
  
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        animate={{ scale: isVisible ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {count}+
      </motion.div>
      <div className="text-sm sm:text-base text-gray-600">{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
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
            About <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text">Codixy Media</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of web designers and developers dedicated to creating 
            exceptional digital experiences. With a focus on modern design, cutting-edge 
            technology, and results-driven solutions, we help businesses establish a strong 
            online presence and achieve their goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <AnimatedCounter end={1} label="Years of Experience" delay={0.1} />
          <AnimatedCounter end={50} label="Projects Completed" delay={0.4} />
          <AnimatedCounter end={35} label="Happy Clients" delay={0.6} />
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to transform ideas into powerful digital solutions that not only 
            look stunning but also deliver measurable results for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}