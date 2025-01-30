import Image from "next/image";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <Dashboard />
    </div>
  );
}
