import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#f8f9fa]">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6 px-4 md:px-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}