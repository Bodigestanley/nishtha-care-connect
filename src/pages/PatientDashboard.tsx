import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Calendar, FileText, Pill, TestTube, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const upcomingAppointments = [
    { date: "Dec 28, 2025", time: "10:30 AM", doctor: "Dr. Sharma", department: "Cardiology" },
    { date: "Jan 5, 2026", time: "02:00 PM", doctor: "Dr. Verma", department: "General" }
  ];

  const prescriptions = [
    { medicine: "Paracetamol 500mg", dosage: "1-0-1", duration: "5 days", doctor: "Dr. Sharma" },
    { medicine: "Amoxicillin 250mg", dosage: "1-1-1", duration: "7 days", doctor: "Dr. Verma" }
  ];

  const labReports = [
    { test: "Blood Test", date: "Dec 20, 2025", status: "Ready" },
    { test: "X-Ray Chest", date: "Dec 15, 2025", status: "Ready" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-semibold text-card-foreground">Patient Portal</h1>
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
            <h2 className="text-3xl font-bold text-foreground">Welcome, Rajesh Kumar</h2>
            <p className="text-muted-foreground">Manage your health records and appointments</p>
          </div>
          <Button>
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Active Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Lab Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">2</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled visits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-card-foreground">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.department}</p>
                    </div>
                    <Badge>Confirmed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                Active Prescriptions
              </CardTitle>
              <CardDescription>Your current medications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {prescriptions.map((prescription, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p className="font-medium text-card-foreground">{prescription.medicine}</p>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Dosage</p>
                      <p className="font-medium">{prescription.dosage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{prescription.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Prescribed by {prescription.doctor}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Lab Reports */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-primary" />
                Lab Reports
              </CardTitle>
              <CardDescription>Your diagnostic test results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {labReports.map((report, index) => (
                  <div key={index} className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-medium text-card-foreground">{report.test}</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">{report.status}</Badge>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
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

export default PatientDashboard;
