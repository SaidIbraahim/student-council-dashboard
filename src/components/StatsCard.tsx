import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  className?: string;
}

export default function StatsCard({ title, value, icon, description, className }: StatsCardProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
    </Card>
  );
}