import { Award, BarChart3, Calendar, FileText, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Overview", icon: BarChart3, path: "/" },
  { title: "Candidates", icon: Users, path: "/candidates" },
  { title: "Elections", icon: Calendar, path: "/elections" },
  { title: "Results", icon: Award, path: "/results" },
  { title: "Reports", icon: FileText, path: "/reports" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-6">
          <h1 className="text-xl font-bold text-white">Student Council</h1>
          <p className="text-sm text-gray-400">Voting System</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}