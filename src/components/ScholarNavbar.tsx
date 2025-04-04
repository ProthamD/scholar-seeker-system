
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const ScholarNavbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-md p-1.5">
            <Search className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">ScholarSeeker</span>
        </Link>

        {isMobile ? (
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary font-medium">
                Home
              </Link>
              <Link to="/search" className="text-foreground hover:text-primary font-medium">
                Find Scholarships
              </Link>
              <Link to="/resources" className="text-foreground hover:text-primary font-medium">
                Resources
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary font-medium">
                About
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.profileImageUrl} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/auth">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/auth?tab=signup">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-muted"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="px-4 py-2 hover:bg-muted"
              onClick={closeMenu}
            >
              Find Scholarships
            </Link>
            <Link 
              to="/resources" 
              className="px-4 py-2 hover:bg-muted"
              onClick={closeMenu}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 hover:bg-muted"
              onClick={closeMenu}
            >
              About
            </Link>
            <div className="border-t mt-2 pt-2 px-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profileImageUrl} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="block px-4 py-2 hover:bg-muted rounded-md"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 hover:bg-muted rounded-md"
                    onClick={closeMenu}
                  >
                    Settings
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/auth" onClick={closeMenu}>Log In</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/auth?tab=signup" onClick={closeMenu}>Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ScholarNavbar;
