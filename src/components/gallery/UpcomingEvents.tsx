import { motion } from "framer-motion";

const upcomingEvents = [
  {
    id: "upcoming-1",
    title: "AI Innovation Summit 2024",
    date: "June 15-16, 2024",
    location: "Silicon Valley Convention Center",
    description: "Join us for two days of groundbreaking AI discussions and demonstrations featuring industry leaders.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const UpcomingEvents = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">
        Upcoming Events
      </h2>
      {upcomingEvents.map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-neutral-100 mb-2">{event.title}</h3>
              <p className="text-neutral-300 mb-4">{event.description}</p>
              <div className="space-y-2 text-neutral-400">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default UpcomingEvents;