import { ReactNode } from "react";
import NavigationEnhanced from "./NavigationEnhanced";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationEnhanced />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;