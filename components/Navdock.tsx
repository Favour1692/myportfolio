import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/constants";

const Navdock = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
};

export default Navdock;
