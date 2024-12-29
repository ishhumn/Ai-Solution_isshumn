import { motion } from "framer-motion";
import { Bot, Lightbulb, Calendar } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-neutral-800">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-neutral-200 text-lg">
            Discover how our AI-powered solutions can transform your workplace
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Virtual Assistant (Core Service)</h3>
            </div>
            <p className="text-neutral-200 text-lg mb-4">
              An intelligent assistant designed to improve workplace productivity by automating tasks and providing employee support.
            </p>
            <ul className="space-y-2 text-neutral-200 text-lg">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Employee Query Resolution: Quickly answers HR, IT, and operational questions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Task Automation: Automates repetitive tasks like scheduling and data entry
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                24/7 Availability: Ensures continuous support for employees
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">AI Idea Generator & Consultant</h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Comprehensive AI-powered solution for business ideation and problem-solving.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Business Idea Generation</h4>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Innovative ideas tailored to industry
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Product and service suggestions
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Problem-Solving</h4>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Operational solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Strategic recommendations
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Event and Demonstration Services</h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Organizing events and workshops to showcase AI-Solutions' products and capabilities.
            </p>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Live Demonstrations: Interactive showcases of AI tools
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Workshops: Hands-on sessions for learning AI applications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Networking Opportunities: Connect with industry leaders
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
