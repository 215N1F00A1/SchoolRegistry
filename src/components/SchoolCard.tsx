import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail } from "lucide-react";

export interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image?: string;
}

interface SchoolCardProps {
  school: School;
}

const SchoolCard = ({ school }: SchoolCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border hover:border-primary/20">
      <div className="aspect-video overflow-hidden">
        <img
          src={school.image || "/placeholder.svg"}
          alt={school.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">
              {school.name}
            </h3>
            <Badge variant="secondary" className="mt-1">
              {school.state}
            </Badge>
          </div>
          
          <div className="flex items-start space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-2">
              {school.address}, {school.city}
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{school.contact}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="line-clamp-1">{school.email_id}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolCard;