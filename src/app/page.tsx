import { Sidebar } from "@/components/mhmw/Sidebar";
import { Hero } from "@/components/mhmw/Hero";

export default function MyHouseMyWayPage() {
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-mhmw-grey-10 lg:h-screen lg:flex-row lg:overflow-hidden"
      data-node-id="2901:41846"
    >
      <Sidebar />
      <Hero />
    </div>
  );
}
