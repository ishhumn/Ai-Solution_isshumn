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
    videoUrl?: string;
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
          <div className="h-full rounded-lg overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="relative aspect-[4/3]">
              {item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-200">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-300 mb-2">{item.description}</p>
              <div className="flex justify-between items-center text-xs text-neutral-400">
                <span>{item.date}</span>
                {item.location && <span>{item.location}</span>}
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-neutral-900/95 backdrop-blur-xl text-neutral-100 border-neutral-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{item.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {item.videoUrl ? (
            <video
              src={item.videoUrl}
              controls
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
          ) : (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
          )}
          <p className="text-neutral-300 leading-relaxed">{item.fullDescription}</p>
          <div className="mt-6 flex justify-between items-center text-sm text-neutral-400">
            <span>{item.date}</span>
            {item.location && <span>{item.location}</span>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryCard;