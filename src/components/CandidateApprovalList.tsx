import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

const candidates = [
  { id: 1, name: "John Doe", position: "President", department: "Computer Science" },
  { id: 2, name: "Jane Smith", position: "Vice President", department: "Engineering" },
  { id: 3, name: "Mike Johnson", position: "Secretary", department: "Business" },
];

export default function CandidateApprovalList() {
  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold mb-4">Pending Approvals</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-3 md:space-y-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm gap-3 sm:gap-0">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <h4 className="font-medium text-sm md:text-base">{candidate.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {candidate.position} • {candidate.department}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:ml-4">
                <Button size="sm" variant="outline" className="text-success-DEFAULT hover:text-success-DEFAULT">
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}