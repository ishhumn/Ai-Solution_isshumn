import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-neutral-900">
      <div className="container-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We Are</h2>
          <p className="text-neutral-200 text-lg mb-8">
            AI-Solutions is an innovative start-up based in Sunderland, dedicated to transforming the digital employee experience through cutting-edge AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-3 text-white">Our Mission</h3>
            <p className="text-neutral-200 text-lg">
              Our mission is to innovate, promote, and deliver the future of the digital employee experience by providing AI-powered solutions that empower people at work and drive global impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-3 text-white">Our Vision</h3>
            <p className="text-neutral-200 text-lg">
              We envision a world where AI seamlessly integrates into workplaces, enhancing collaboration, creativity, and efficiency while ensuring a supportive and empowering environment for every employee.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Innovation", "Customer Focus", "Collaboration", "Integrity"].map((value, index) => (
              <div key={index} className="glass-card p-4 rounded-lg text-center">
                <p className="font-bold text-accent">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
