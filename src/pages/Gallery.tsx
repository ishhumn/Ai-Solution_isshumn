import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import GalleryCard from "@/components/gallery/GalleryCard";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import UpcomingEvents from "@/components/gallery/UpcomingEvents";

type Category = "all" | "events" | "products" | "team";

interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription?: string;
  date?: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "events",
    title: "AI Summit 2024",
    description: "Annual gathering of AI industry leaders",
    fullDescription: "Our flagship AI Summit brought together industry leaders, researchers, and practitioners to discuss the latest advancements in artificial intelligence. The event featured keynote speeches, interactive workshops, and networking sessions.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "March 15, 2024",
    location: "San Francisco, CA"
  },
  {
    id: "2",
    category: "products",
    title: "AI Assistant Launch",
    description: "Unveiling our next-gen AI assistant",
    fullDescription: "The launch of our revolutionary AI assistant marked a milestone in human-computer interaction. This product showcases advanced natural language processing capabilities and seamless integration with existing workflows.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "February 28, 2024",
    location: "Virtual Event"
  },
  {
    id: "3",
    category: "products",
    title: "Innovation Lab Demo",
    description: "Showcasing our latest prototypes",
    fullDescription: "Our Innovation Lab opened its doors to demonstrate cutting-edge prototypes in AI and machine learning. Visitors experienced hands-on demonstrations of our latest technological breakthroughs.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "January 20, 2024",
    location: "Boston Innovation Center"
  },
  {
    id: "4",
    category: "team",
    title: "Hackathon 2024",
    description: "48-hour innovation challenge",
    fullDescription: "Our annual hackathon brought together talented developers, designers, and innovators for 48 hours of intense collaboration and creativity. Teams worked on solving real-world problems using AI technology.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "March 1-3, 2024",
    location: "Silicon Valley Campus"
  },
  {
    id: "5",
    category: "team",
    title: "AI Research Workshop",
    description: "Collaborative research session",
    fullDescription: "Our research team conducted an intensive workshop focusing on advancing AI capabilities in natural language processing and computer vision. The session included presentations of ongoing research projects and collaborative problem-solving.",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    date: "February 15, 2024",
    location: "Research Center"
  },
  {
    id: "6",
    category: "events",
    title: "AI Ethics Symposium",
    description: "Discussing responsible AI development",
    fullDescription: "The AI Ethics Symposium brought together experts in technology ethics, policy makers, and industry leaders to discuss the responsible development and deployment of AI technologies. Key topics included bias in AI, privacy concerns, and ethical guidelines for AI development.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "March 10, 2024",
    location: "Online Conference"
  },
  {
    id: "7",
    category: "products",
    title: "AI Analytics Platform",
    description: "Data visualization tools showcase",
    fullDescription: "The launch of our AI Analytics Platform demonstrated powerful data visualization capabilities and predictive analytics tools. The platform helps businesses make data-driven decisions through intuitive interfaces and real-time insights.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "February 5, 2024",
    location: "Tech Hub"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Explore our collection of events, product showcases, and team activities that highlight our journey in AI innovation.
            </p>
          </motion.div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={(value) => setSelectedCategory(value as Category)}
          />

          <UpcomingEvents />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GalleryCard item={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
