import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface GalleryCardProps {
  item: {
    id: string;
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    fullDescription?: string;
    date?: string;
    location?: string;
  };
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer group h-full"
        >
          <div className="h-full rounded-lg overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 hover:border-accent/50 transition-all duration-300">
            <div className="relative aspect-[4/3]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-300 mb-2">{item.description}</p>
              <div className="flex justify-between items-center text-xs text-neutral-400">
                <span>{item.date}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-neutral-900 text-neutral-100 border-neutral-700">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <p className="text-neutral-300">{item.fullDescription}</p>
          <div className="mt-4 flex justify-between items-center text-sm text-neutral-400">
            <span>{item.date}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryCard;