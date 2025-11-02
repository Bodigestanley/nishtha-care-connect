import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Users, Calendar, DollarSign, TrendingUp, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Patients",
      value: "1,234",
      change: "+12.5%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Today's Appointments",
      value: "48",
      change: "+8.2%",
      icon: Calendar,
      color: "text-secondary"
    },
    {
      title: "Monthly Revenue",
      value: "₹2,45,000",
      change: "+23.1%",
      icon: DollarSign,
      color: "text-accent"
    },
    {
      title: "Active Doctors",
      value: "32",
      change: "+2",
      icon: Activity,
      color: "text-primary"
    }
  ];

  const recentActivity = [
    { action: "New patient registered", time: "5 minutes ago", user: "Receptionist" },
    { action: "Appointment scheduled", time: "12 minutes ago", user: "Dr. Sharma" },
    { action: "Lab report uploaded", time: "28 minutes ago", user: "Lab Tech" },
    { action: "Invoice generated", time: "45 minutes ago", user: "Billing Dept" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-semibold text-card-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Nishtha Hospital</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/")}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Welcome, Administrator</h2>
            <p className="text-muted-foreground">Here's an overview of your hospital today</p>
          </div>
          <Button>Generate Report</Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates across the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start justify-between border-b last:border-0 pb-3 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used operations</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-5 w-5" />
                <span className="text-xs">Manage Users</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-xs">Appointments</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-xs">Billing</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Activity className="h-5 w-5" />
                <span className="text-xs">Analytics</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
