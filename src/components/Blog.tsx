import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay up to date with our latest news, updates, and articles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
