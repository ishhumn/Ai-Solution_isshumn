import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceFormProps {
  initialService: Service | null;
  onSave: (service: Omit<Service, 'id'>) => void;
  onCancel: () => void;
}

const ServiceForm = ({ initialService, onSave, onCancel }: ServiceFormProps) => {
  const [formData, setFormData] = useState(
    initialService || {
      title: '',
      description: '',
      icon: 'briefcase',
      features: ['']
    }
  );

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Title"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
      />
      <Textarea
        placeholder="Description"
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
      />
      <div className="space-y-2">
        <label className="text-sm font-medium">Features</label>
        {formData.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder={`Feature ${index + 1}`}
              value={feature}
              onChange={e => handleFeatureChange(index, e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => removeFeature(index)}
              disabled={formData.features.length <= 1}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addFeature}
          className="w-full"
        >
          Add Feature
        </Button>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(formData)}>Save</Button>
      </div>
    </div>
  );
};

export default ServiceForm;