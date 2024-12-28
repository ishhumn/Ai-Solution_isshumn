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
  // Products Category
  {
    id: "p1",
    category: "products",
    title: "AI Virtual Assistant",
    description: "Our flagship AI assistant revolutionizing workflow automation",
    fullDescription: "Experience the power of our AI Virtual Assistant, designed to streamline workflows and enhance productivity across various business processes. This cutting-edge solution represents the future of workplace automation.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024",
  },
  {
    id: "p2",
    category: "products",
    title: "Data Analytics Platform",
    description: "Advanced analytics and visualization platform",
    fullDescription: "Our comprehensive data analytics platform provides real-time insights and powerful visualization tools to help businesses make data-driven decisions.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "2024",
  },
  {
    id: "p3",
    category: "products",
    title: "AI Development Kit",
    description: "Complete toolkit for AI development",
    fullDescription: "A comprehensive suite of AI development tools enabling rapid prototyping and deployment of machine learning models.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    date: "2024",
  },
  {
    id: "p4",
    category: "products",
    title: "Neural Network Suite",
    description: "Advanced neural network training platform",
    fullDescription: "State-of-the-art neural network training and optimization platform for enterprise AI applications.",
    imageUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
    date: "2024",
  },

  // Success Stories Category
  {
    id: "s1",
    category: "success-stories",
    title: "Enterprise Innovation",
    description: "Transforming business operations through AI",
    fullDescription: "See how our AI solutions have transformed enterprise operations, leading to significant improvements in efficiency and innovation across multiple sectors.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "March 2024",
    location: "Global"
  },
  {
    id: "s2",
    category: "success-stories",
    title: "Healthcare Revolution",
    description: "AI-powered diagnostic solutions",
    fullDescription: "Implementation of our AI solutions in healthcare has led to 40% faster diagnostic times and improved patient outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    date: "February 2024",
    location: "Healthcare Sector"
  },
  {
    id: "s3",
    category: "success-stories",
    title: "Financial Innovation",
    description: "AI-driven financial analysis",
    fullDescription: "Major financial institution achieves 200% improvement in risk assessment accuracy using our AI solutions.",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
    date: "January 2024",
    location: "Financial District"
  },

  // Culture Category
  {
    id: "c1",
    category: "culture",
    title: "Innovation Lab",
    description: "Where ideas come to life",
    fullDescription: "Take a peek inside our innovation lab where our talented teams collaborate on groundbreaking AI solutions.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "2024",
    location: "Research Center"
  },
  {
    id: "c2",
    category: "culture",
    title: "Team Building",
    description: "Growing stronger together",
    fullDescription: "Our team participating in various activities that strengthen our collaborative culture and innovation mindset.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    date: "2024",
    location: "Company Campus"
  },
  {
    id: "c3",
    category: "culture",
    title: "Hackathon 2024",
    description: "48 hours of innovation",
    fullDescription: "Annual hackathon where our teams push the boundaries of what's possible with AI technology.",
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
    date: "March 2024",
    location: "Innovation Hub"
  },

  // Recognition Category
  {
    id: "r1",
    category: "recognition",
    title: "Innovation Award 2024",
    description: "Recognition for AI excellence and innovation",
    fullDescription: "Proud recipients of the 2024 Innovation Award for our groundbreaking contributions to advancing AI technology and its practical applications in the enterprise space.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "March 2024",
    location: "Tech Awards"
  },
  {
    id: "r2",
    category: "recognition",
    title: "Best AI Solution",
    description: "Industry leader in AI innovation",
    fullDescription: "Recognized as the leading provider of enterprise AI solutions at the Global Tech Summit 2024.",
    imageUrl: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55",
    date: "February 2024",
    location: "Global Tech Summit"
  },
  {
    id: "r3",
    category: "recognition",
    title: "Excellence in Tech",
    description: "Pioneering AI development",
    fullDescription: "Awarded for outstanding contributions to AI technology advancement and implementation.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "January 2024",
    location: "Tech Excellence Awards"
  },
  {
    id: "r4",
    category: "recognition",
    title: "Sustainability Award",
    description: "AI for sustainable future",
    fullDescription: "Recognized for developing AI solutions that contribute to environmental sustainability and efficient resource management.",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a",
    date: "2024",
    location: "Global Sustainability Summit"
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