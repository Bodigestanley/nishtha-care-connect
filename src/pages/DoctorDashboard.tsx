import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Calendar, FileText, Users, Clock, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const todayAppointments = [
    { time: "09:00 AM", patient: "Rajesh Kumar", type: "Consultation", status: "confirmed" },
    { time: "10:30 AM", patient: "Priya Sharma", type: "Follow-up", status: "confirmed" },
    { time: "02:00 PM", patient: "Amit Patel", type: "Consultation", status: "pending" },
    { time: "03:30 PM", patient: "Sneha Reddy", type: "Check-up", status: "confirmed" }
  ];

  const recentPatients = [
    { name: "Rajesh Kumar", lastVisit: "Today", condition: "Stable" },
    { name: "Priya Sharma", lastVisit: "Yesterday", condition: "Improving" },
    { name: "Amit Patel", lastVisit: "2 days ago", condition: "Under Observation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-semibold text-card-foreground">Doctor Dashboard</h1>
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
            <h2 className="text-3xl font-bold text-foreground">Welcome, Dr. Verma</h2>
            <p className="text-muted-foreground">You have 4 appointments scheduled today</p>
          </div>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            New Prescription
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Today's Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">4</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">156</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Pending Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Next Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">9:00 AM</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-card-foreground">{appointment.time}</span>
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{appointment.patient}</p>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                    </div>
                    <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                      {appointment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Recent Patients
              </CardTitle>
              <CardDescription>Latest patient visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <p className="font-medium text-card-foreground">{patient.name}</p>
                    <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                    <Badge variant="outline" className="mt-2">
                      {patient.condition}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
