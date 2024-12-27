import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Virtual Assistants",
    category: "AI Innovation",
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    excerpt: "Explore how AI virtual assistants are revolutionizing customer service and business operations.",
    readTime: "5 min read",
    author: "Sarah Johnson",
    authorRole: "AI Research Lead",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Artificial Intelligence virtual assistants are transforming how businesses interact with their customers. These AI-powered solutions offer 24/7 support, handle multiple queries simultaneously, and learn from each interaction to provide better service. Companies implementing AI assistants report significant improvements in customer satisfaction and reduced operational costs. The technology continues to evolve, with natural language processing becoming more sophisticated and emotional intelligence being integrated into responses. Recent studies show that businesses using AI assistants see a 35% reduction in response time and a 40% increase in customer satisfaction rates. The future holds even more promise with developments in contextual understanding and personalization capabilities."
  },
  {
    id: 2,
    title: "Rapid Prototyping: A Game Changer in Product Development",
    category: "Prototyping",
    date: "March 18, 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    excerpt: "Learn how rapid prototyping is transforming the way companies develop and test new products.",
    readTime: "4 min read",
    author: "Michael Chen",
    authorRole: "Product Innovation Director",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "Rapid prototyping has revolutionized the product development lifecycle. By allowing teams to quickly iterate and test designs, companies can validate ideas faster and reduce the risk of costly mistakes. Modern prototyping tools combine AI and automation to streamline the process, making it more accessible and cost-effective for businesses of all sizes. The integration of 3D printing technology has particularly accelerated the prototyping process, enabling companies to create physical prototypes within hours instead of weeks. This rapid iteration capability has led to a 60% reduction in product development time and a 45% decrease in development costs for early adopters."
  },
  {
    id: 3,
    title: "The Impact of AI on Digital Employee Experience",
    category: "Digital Experience",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    excerpt: "Discover how AI is enhancing workplace productivity and employee satisfaction.",
    readTime: "6 min read",
    author: "Emily Rodriguez",
    authorRole: "Digital Workplace Strategist",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "The digital employee experience is being transformed by AI technologies. From personalized learning paths to automated workflow assistance, AI is helping employees work smarter and more efficiently. Companies implementing AI-driven workplace solutions report higher employee satisfaction and increased productivity. Advanced analytics and machine learning algorithms are now being used to predict employee needs and provide proactive support. Studies indicate that organizations using AI-powered workplace tools see a 25% increase in employee engagement and a 30% reduction in time spent on routine tasks. The future workplace will likely see even more integration of AI, with virtual assistants becoming standard tools for every employee."
  },
  {
    id: 4,
    title: "Machine Learning in Healthcare: A New Era",
    category: "AI Innovation",
    date: "March 14, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    excerpt: "Exploring the revolutionary impact of machine learning on healthcare delivery and patient outcomes.",
    readTime: "7 min read",
    author: "Dr. James Wilson",
    authorRole: "Healthcare AI Researcher",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content: "Machine learning is revolutionizing healthcare by enabling more accurate diagnoses, personalized treatment plans, and predictive healthcare analytics. From analyzing medical images to predicting patient outcomes, AI is becoming an invaluable tool for healthcare professionals. Recent breakthroughs in deep learning have led to AI systems that can detect diseases from medical imaging with accuracy rates exceeding human experts. The implementation of ML in healthcare has resulted in a 40% improvement in early disease detection and a 30% reduction in diagnostic errors. The future promises even more advanced applications, including real-time health monitoring and AI-driven drug discovery."
  },
  {
    id: 5,
    title: "Sustainable AI: Green Computing Solutions",
    category: "Digital Experience",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    excerpt: "How AI is contributing to environmental sustainability through efficient computing.",
    readTime: "5 min read",
    author: "Lisa Green",
    authorRole: "Sustainability Tech Lead",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    content: "As AI systems become more prevalent, the focus on sustainable computing solutions grows. Companies are developing energy-efficient algorithms and green computing infrastructure to reduce the environmental impact of AI operations while maintaining high performance. The latest innovations in quantum computing and neuromorphic hardware are showing promising results in reducing energy consumption by up to 90% compared to traditional computing methods. Organizations implementing green AI initiatives have reported significant reductions in their carbon footprint while maintaining or even improving computational capabilities."
  },
  {
    id: 6,
    title: "The Rise of No-Code AI Platforms",
    category: "Prototyping",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    excerpt: "Democratizing AI development through no-code platforms and visual programming.",
    readTime: "4 min read",
    author: "Alex Thompson",
    authorRole: "Tech Democratization Advocate",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "No-code AI platforms are democratizing access to artificial intelligence technology. These platforms enable businesses and individuals without extensive programming knowledge to build and deploy AI solutions, accelerating digital transformation across industries. The emergence of visual programming interfaces and pre-built AI components has reduced the development time of AI applications by 75%. Small businesses using no-code AI platforms report a 50% reduction in development costs and a 40% increase in their ability to implement AI solutions. This democratization of AI technology is creating new opportunities for innovation across all sectors."
  }
];

const categories = ["All", "AI Innovation", "Prototyping", "Digital Experience"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
              Our Blog
            </h1>
            <p className="text-lg text-[#aaadb0] max-w-2xl mx-auto">
              Discover the latest insights, trends, and innovations in AI, technology, and digital transformation.
            </p>
          </motion.div>
          
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 overflow-x-auto pb-2 sm:pb-0"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-[#9b87f5] hover:bg-[#8B5CF6]' 
                      : 'border-[#403E43] text-[#aaadb0] hover:bg-[#403E43]/20'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Input
                type="search"
                placeholder="Search articles..."
                className="max-w-xs bg-[#221F26] border-[#403E43] text-[#aaadb0] placeholder:text-[#8E9196]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                className="bg-[#221F26] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#403E43]/20 h-full flex flex-col group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221F26] to-transparent opacity-50" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-[#8E9196] mb-4">
                    <span className="bg-[#403E43]/30 px-2 py-1 rounded">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-[#aaadb0] group-hover:text-[#9b87f5] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#8E9196] mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#403E43]/20">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-[#403E43]/20"
                      />
                      <div>
                        <p className="font-medium text-sm text-[#aaadb0]">{post.author}</p>
                        <p className="text-sm text-[#8E9196]">{post.authorRole}</p>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button 
                        variant="outline"
                        className="border-[#403E43] text-[#aaadb0] hover:bg-[#403E43]/20 hover:text-[#9b87f5]"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;