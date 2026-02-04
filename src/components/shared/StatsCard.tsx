import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  colorClass?: string;
}

const StatsCard = ({ label, value, icon: Icon, colorClass = "accent" }: StatsCardProps) => {
  const colorMap: Record<string, string> = {
    accent: "from-accent/10 to-accent/5 border-accent/20 text-accent",
    secondary: "from-secondary/10 to-secondary/5 border-secondary/20 text-secondary",
    primary: "from-primary/10 to-primary/5 border-primary/20 text-primary",
    cta: "from-cta/10 to-cta/5 border-cta/20 text-cta",
  };

  const colors = colorMap[colorClass] || colorMap.accent;
  const [gradientClasses, textClass] = [
    colors.split(" ").slice(0, 3).join(" "),
    colors.split(" ")[3]
  ];

  return (
    <Card className={`bg-gradient-to-br ${gradientClasses} border`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className={`text-3xl font-bold ${textClass}`}>{value}</p>
          </div>
          <Icon className={`h-8 w-8 ${textClass}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
