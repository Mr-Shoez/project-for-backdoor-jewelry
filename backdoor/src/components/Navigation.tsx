import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-forest-green/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">BJ</span>
            </div>
            <span className="text-xl font-bold text-foreground">Backdoor Jewelry</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-forest-green ${
                isActive("/") ? "text-forest-green" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/custom-bracelets"
              className={`text-sm font-medium transition-colors hover:text-forest-green ${
                isActive("/custom-bracelets") ? "text-forest-green" : "text-foreground"
              }`}
            >
              Custom Permanent Bracelets
            </Link>
            <Link
              to="/ready-made"
              className={`text-sm font-medium transition-colors hover:text-forest-green ${
                isActive("/ready-made") ? "text-forest-green" : "text-foreground"
              }`}
            >
              Ready-Made Bracelets
            </Link>
            <Link
              to="/store"
              className={`text-sm font-medium transition-colors hover:text-forest-green ${
                isActive("/store") ? "text-forest-green" : "text-foreground"
              }`}
            >
              Store
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;