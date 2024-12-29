import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The AI Virtual Assistant has revolutionized our HR processes. Employee queries are resolved instantly, and the automation features have saved us countless hours.",
    author: "Sarah Chen",
    role: "HR Director at TechFlow",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "Their AI Idea Generator provided invaluable insights for our startup. The customized recommendations helped us refine our business strategy.",
    author: "Mark Thompson",
    role: "Founder of DataSync",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "The live demonstrations and workshops were incredibly informative. We implemented the AI solutions immediately and saw a 40% increase in productivity.",
    author: "Elena Rodriguez",
    role: "COO at GlobalTech",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote: "Outstanding AI solutions that truly understand business needs. The virtual assistant's 24/7 availability has transformed our customer support.",
    author: "David Kim",
    role: "CTO at InnovateAI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "The problem-solving capabilities of their AI consultant are remarkable. It's like having a team of experts available at your fingertips.",
    author: "Lisa Zhang",
    role: "Innovation Lead at FutureTech",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Implementing their AI solutions has been transformative for our business operations. The ROI has exceeded our expectations significantly.",
    author: "James Wilson",
    role: "Operations Manager at TechGrowth",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-neutral-200 text-lg max-w-2xl mx-auto">
            Discover how our AI solutions are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-neutral-200 text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-neutral-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
