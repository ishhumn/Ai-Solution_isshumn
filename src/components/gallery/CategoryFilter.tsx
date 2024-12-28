import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <RadioGroup
        defaultValue={selectedCategory}
        onValueChange={onCategoryChange}
        className="flex flex-wrap gap-4 justify-center"
      >
        {["all", "products", "success-stories", "culture", "recognition"].map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <RadioGroupItem value={category} id={category} className="border-accent text-accent" />
            <Label
              htmlFor={category}
              className="capitalize text-neutral-300 hover:text-accent transition-colors cursor-pointer"
            >
              {category.split('-').join(' ')}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </motion.div>
  );
};

export default CategoryFilter;