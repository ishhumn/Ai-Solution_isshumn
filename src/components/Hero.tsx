import { ArrowRight, Bot, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-32 pb-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight"
        >
          Empowering the Future of Work with AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
        >
          Innovating Digital Employee Experiences with AI-Powered Solutions that transform the way you work.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            Our Services
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            About Us
          </button>

          <button
            // onClick={() => scrollToSection('events')}
            className="bg-accent/20 text-white px-6 py-3 rounded-lg hover:bg-accent/30 transition-colors flex items-center justify-center gap-2"
          >
          <Link 
              to="/events" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 hover:translate-y-[-2px] transition-all duration-200 shadow-lg shadow-black/5"
            >
              Join Our Events
            </Link>

            <Calendar className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 glass-card rounded-xl p-8 max-w-3xl mx-auto"
      >
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80" 
            alt="AI Technology Visualization"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
