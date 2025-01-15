import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "President", votes: 400 },
  { name: "Vice President", votes: 300 },
  { name: "Secretary", votes: 200 },
  { name: "Treasurer", votes: 278 },
  { name: "Auditor", votes: 189 },
];

export default function ElectionChart() {
  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold mb-4">Current Election Statistics</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="votes" fill="#9b87f5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}