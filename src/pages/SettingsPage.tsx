
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScholarNavbar from "@/components/ScholarNavbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Mail, Shield, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SettingsPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in
  if (!user) {
    navigate("/auth");
    return null;
  }
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    notifications: {
      email: true,
      deadlines: true,
      newScholarships: true,
      applicationUpdates: true,
    },
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleToggleChange = (field: string, value: boolean) => {
    setFormData({
      ...formData,
      notifications: {
        ...formData.notifications,
        [field]: value,
      },
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would update the user profile in the database
    toast.success("Profile updated successfully");
  };
  
  const handleSaveNotifications = () => {
    // In a real app, this would update notification preferences in the database
    toast.success("Notification preferences updated");
  };
  
  const handleDeleteAccount = () => {
    // In a real app, this would delete the user account
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      logout();
      navigate("/");
      toast.success("Account deleted successfully");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScholarNavbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-muted-foreground">
              Manage your profile, preferences, and account settings
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            <Card className="h-fit">
              <CardContent className="p-4">
                <nav className="flex flex-col space-y-1">
                  <a 
                    href="#profile"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-secondary"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </a>
                  <a 
                    href="#notifications"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                  </a>
                  <a 
                    href="#email"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a 
                    href="#security"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    <Shield className="h-4 w-4" />
                    Security
                  </a>
                </nav>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card id="profile">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Manage your public profile information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.profileImageUrl} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile}>
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card id="notifications">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Configure how you receive notifications and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifications.email}
                        onCheckedChange={(checked) => handleToggleChange("email", checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Deadline Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Get reminders before scholarship deadlines
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifications.deadlines}
                        onCheckedChange={(checked) => handleToggleChange("deadlines", checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Scholarship Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Be notified about new scholarships matching your profile
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifications.newScholarships}
                        onCheckedChange={(checked) => handleToggleChange("newScholarships", checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Application Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about your scholarship applications
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifications.applicationUpdates}
                        onCheckedChange={(checked) => handleToggleChange("applicationUpdates", checked)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveNotifications}>
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card id="security" className="border-destructive">
                <CardHeader>
                  <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  <CardDescription>
                    Actions that will permanently affect your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-destructive p-4">
                    <h3 className="text-lg font-medium text-destructive mb-2">Delete Account</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, all of your data will be permanently removed.
                      This action cannot be undone.
                    </p>
                    <Button variant="destructive" onClick={handleDeleteAccount}>
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SettingsPage;
