import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CustomCard = ({ title, description }: CustomCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div >{description}</div>
      </CardContent>
    </Card>
  );
};

