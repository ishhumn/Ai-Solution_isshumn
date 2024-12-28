import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GalleryCard from "@/components/gallery/GalleryCard";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import UpcomingEvents from "@/components/gallery/UpcomingEvents";

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
    description: "Our flagship AI assistant in action",
    fullDescription: "Experience the power of our AI Virtual Assistant, designed to streamline workflows and enhance productivity across various business processes.",
    imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    date: "2024",
  },
  {
    id: "2",
    category: "products",
    title: "Prototyping Solutions",
    description: "Next-gen AI prototyping platform",
    fullDescription: "Our prototyping solutions enable rapid development and testing of AI models, significantly reducing time-to-market for innovative products.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "2024",
  },
  {
    id: "3",
    category: "success-stories",
    title: "Enterprise Success",
    description: "Major corporation implements AI solution",
    fullDescription: "Leading enterprise achieves 300% productivity increase through our AI implementation, transforming their business operations.",
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
    date: "March 2024",
    location: "Global"
  },
  {
    id: "4",
    category: "culture",
    title: "Innovation Hub",
    description: "Our team collaborating on next-gen AI",
    fullDescription: "Behind the scenes look at our innovation hub where our talented team works on pushing the boundaries of AI technology.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "2024",
    location: "HQ"
  },
  {
    id: "5",
    category: "recognition",
    title: "Innovation Award 2024",
    description: "Recognition for AI excellence",
    fullDescription: "Proud recipients of the 2024 Innovation Award for our contributions to advancing AI technology and its practical applications.",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad",
    date: "March 2024",
    location: "Tech Awards"
  },
  {
    id: "6",
    category: "culture",
    title: "Team Celebration",
    description: "Celebrating our achievements",
    fullDescription: "Our team celebrating another successful year of innovation and growth in AI technology.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    date: "2024",
    location: "Office"
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