import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-400 text-white text-xs md:text-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-1 md:py-2">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>aurotechsolutionspvtltd@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 8015371070</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3" />
            <span className="truncate">aurotechsolutionspvtltd@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>+91 8015371070</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
