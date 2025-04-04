
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  profileImageUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: "user-1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123",
    profileImageUrl: "https://i.pravatar.cc/150?u=demo@example.com"
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing user session in localStorage
    const storedUser = localStorage.getItem("scholarseeker_user");
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("scholarseeker_user");
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find the user in our mock database
      const foundUser = MOCK_USERS.find(
        u => u.email === email && u.password === password
      );
      
      if (!foundUser) {
        throw new Error("Invalid email or password");
      }
      
      // Create a user object without the password
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Save to state and localStorage
      setUser(userWithoutPassword);
      localStorage.setItem("scholarseeker_user", JSON.stringify(userWithoutPassword));
      
      toast.success("Successfully logged in!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to login";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email already exists
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error("Email already in use");
      }
      
      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        profileImageUrl: `https://i.pravatar.cc/150?u=${email}`
      };
      
      // In a real app, we'd save to a database here
      // For now, just set in state and localStorage
      setUser(newUser);
      localStorage.setItem("scholarseeker_user", JSON.stringify(newUser));
      
      toast.success("Account created successfully!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create account";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("scholarseeker_user");
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
