import { Outlet, Link, useLocation } from "react-router-dom";
import { Heart, User, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen gradient-soft">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gradient">Henrique Sciani</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              
              <Link
                to="/about"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                <User className="h-4 w-4" />
                <span>Sobre</span>
              </Link>
              
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2024 Henrique Sciani. Feito com amor e React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;