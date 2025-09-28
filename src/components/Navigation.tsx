import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  X, 
  Home, 
  Building2, 
  Factory, 
  Users, 
  Phone, 
  Wrench,
  Cpu,
  LayoutGrid,
  ChevronDown
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  const mainNavItems = [
    { label: "Overview", href: "/", icon: LayoutGrid },
    { label: "Home", href: "/homeowners", icon: Home },
    { label: "Business", href: "/ci", icon: Building2 },
    { label: "Installers", href: "/installers", icon: Wrench },
    { label: "Technology", href: "/technology", icon: Cpu }
  ];

  const companyItems = [
    { label: "About Us", href: "/company/about" },
    { label: "News", href: "/company/news" }
  ];

  const supportItems = [
    { label: "Knowledge Hub", href: "/knowledge" },
    { label: "Downloads", href: "/downloads" },
    { label: "Support", href: "/support/troubleshooting" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center brand-shadow group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-semibold text-foreground">NESS Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Company Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors ${
                isActiveSection(["/company"])
                  ? "text-primary bg-muted"
                  : "text-muted-foreground group-hover:text-foreground group-hover:bg-muted/50"
              }`}>
                <span>Company</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-48 glass-card rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors ${
                isActiveSection(["/knowledge", "/downloads", "/support"])
                  ? "text-primary bg-muted"
                  : "text-muted-foreground group-hover:text-foreground group-hover:bg-muted/50"
              }`}>
                <span>Support</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-48 glass-card rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {supportItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button className="btn-primary">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                      <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">N</span>
                      </div>
                      <span className="text-xl font-semibold">NESS Energy</span>
                    </Link>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-4">
                      {mainNavItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-muted"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 border-t">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="btn-primary w-full">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;