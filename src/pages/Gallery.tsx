import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GalleryCard from "@/components/gallery/GalleryCard";
import CategoryFilter from "@/components/gallery/CategoryFilter";

type Category = "all" | "products" | "success-stories" | "culture" | "recognition";

interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription?: string;
  date?: string;
  location?: string;
  videoUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "products",
    title: "AI Virtual Assistant",
    description: "Our flagship AI assistant revolutionizing workflow automation",
    fullDescription: "Experience the power of our AI Virtual Assistant, designed to streamline workflows and enhance productivity across various business processes. This cutting-edge solution represents the future of workplace automation.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024",
  },
  {
    id: "2",
    category: "success-stories",
    title: "Enterprise Innovation",
    description: "Transforming business operations through AI",
    fullDescription: "See how our AI solutions have transformed enterprise operations, leading to significant improvements in efficiency and innovation across multiple sectors.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "March 2024",
    location: "Global"
  },
  {
    id: "3",
    category: "recognition",
    title: "Innovation Award 2024",
    description: "Recognition for AI excellence and innovation",
    fullDescription: "Proud recipients of the 2024 Innovation Award for our groundbreaking contributions to advancing AI technology and its practical applications in the enterprise space.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "March 2024",
    location: "Tech Awards"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">
              Our Innovations and Achievements
            </h1>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              A visual journey through AI-Solutions' products, milestones, and behind-the-scenes moments.
            </p>
          </motion.div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={(value) => setSelectedCategory(value as Category)}
          />

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">
              Inspired by our journey?
            </h2>
            <p className="text-neutral-300 mb-6">
              Learn how we can transform your business with our AI solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-neutral-800 text-neutral-100 border-accent hover:bg-accent/20"
              >
                Explore Products
              </Button>
              <Button
                className="bg-accent hover:bg-accent/80 text-neutral-100"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;