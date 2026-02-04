import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  emoji?: string;
}

const FeatureCard = ({ title, description, icon: Icon, emoji }: FeatureCardProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group">
      <CardContent className="p-6">
        {emoji ? (
          <div className="text-4xl mb-4">{emoji}</div>
        ) : Icon ? (
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
            <Icon className="w-8 h-8 text-accent" />
          </div>
        ) : null}
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
