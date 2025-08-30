import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, School } from "lucide-react";
import { useState } from "react";

const schoolSchema = z.object({
  name: z.string().min(2, "School name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  contact: z.string()
    .min(10, "Contact number must be at least 10 digits")
    .regex(/^\d+$/, "Contact must contain only numbers"),
  email_id: z.string().email("Please enter a valid email address"),
});

type SchoolFormData = z.infer<typeof schoolSchema>;

interface AddSchoolFormProps {
  onSubmit: (data: SchoolFormData & { image?: File }) => void;
}

const AddSchoolForm = ({ onSubmit }: AddSchoolFormProps) => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SchoolFormData>({
    resolver: zodResolver(schoolSchema),
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (data: SchoolFormData) => {
    try {
      await onSubmit({ ...data, image: selectedImage || undefined });
      
      toast({
        title: "Success!",
        description: "School has been added successfully.",
      });
      
      reset();
      setSelectedImage(null);
      setImagePreview(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add school. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <School className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Add New School</CardTitle>
        <CardDescription>
          Fill in the details below to register a new school
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">School Name *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter school name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email_id">Email Address *</Label>
              <Input
                id="email_id"
                type="email"
                {...register("email_id")}
                placeholder="school@example.com"
                className={errors.email_id ? "border-destructive" : ""}
              />
              {errors.email_id && (
                <p className="text-sm text-destructive">{errors.email_id.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Enter school address"
              className={errors.address ? "border-destructive" : ""}
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                {...register("city")}
                placeholder="Enter city"
                className={errors.city ? "border-destructive" : ""}
              />
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                {...register("state")}
                placeholder="Enter state"
                className={errors.state ? "border-destructive" : ""}
              />
              {errors.state && (
                <p className="text-sm text-destructive">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number *</Label>
            <Input
              id="contact"
              {...register("contact")}
              placeholder="Enter contact number"
              className={errors.contact ? "border-destructive" : ""}
            />
            {errors.contact && (
              <p className="text-sm text-destructive">{errors.contact.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">School Image</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> school image
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG or JPEG</p>
                </div>
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="School preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding School..." : "Add School"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddSchoolForm;