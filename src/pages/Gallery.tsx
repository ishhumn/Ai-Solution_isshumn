import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our collection of events, product showcases, and team activities that highlight our journey in AI innovation.
            </p>
          </div>

          <div className="mb-8">
            <RadioGroup
              defaultValue="all"
              onValueChange={(value) => setSelectedCategory(value as Category)}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="events" id="events" />
                <Label htmlFor="events">Events</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="products" id="products" />
                <Label htmlFor="products">Products</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="team" id="team" />
                <Label htmlFor="team">Team</Label>
              </div>
            </RadioGroup>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto mb-12">
            <CarouselContent>
              {filteredItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center text-sm text-neutral-500">
                          <span>{item.date}</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <ScrollArea className="h-[600px] w-full rounded-md border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group">
                      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium">View Details</span>
                          </div>
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
                          <div className="flex justify-between items-center text-xs text-neutral-500">
                            <span>{item.date}</span>
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-[300px] object-cover rounded-lg mb-4"
                      />
                      <p className="text-neutral-600">{item.fullDescription}</p>
                        <span>{item.date}</span>
                        <span>{item.location}</span>
                      <div className="mt-4 flex justify-between items-center text-sm text-neutral-500">
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
