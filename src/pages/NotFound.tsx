import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="glass p-12 rounded-xl animate-slideUp">
          <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring my data analysis portfolio.
          </p>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="gradient-primary">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                About Me
              </Link>
              <Link 
                to="/projects" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                My Projects
              </Link>
              <Link 
                to="/resume" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Resume
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
