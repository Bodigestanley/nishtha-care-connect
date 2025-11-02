import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Calendar, Users, FileText, Pill, TestTube, DollarSign, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records, registration, and medical history tracking"
    },
    {
      icon: Calendar,
      title: "Appointments",
      description: "Real-time scheduling with automated reminders and availability tracking"
    },
    {
      icon: FileText,
      title: "Electronic Medical Records",
      description: "Secure, centralized patient data storage with instant access"
    },
    {
      icon: Pill,
      title: "Pharmacy Management",
      description: "Medicine inventory control, prescription tracking, and automated billing"
    },
    {
      icon: TestTube,
      title: "Lab Management",
      description: "Diagnostic test ordering, results management, and report generation"
    },
    {
      icon: DollarSign,
      title: "Billing & Invoicing",
      description: "Automated invoice generation, payment tracking, and financial reports"
    },
    {
      icon: Activity,
      title: "Real-time Dashboard",
      description: "Live stats for appointments, revenue, patients, and staff performance"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure RBAC for Admins, Doctors, Nurses, Receptionists, and Patients"
    }
  ];

  const roles = [
    { name: "Admin", description: "Full system control and management" },
    { name: "Doctor", description: "Patient care and medical records" },
    { name: "Nurse", description: "Patient monitoring and care assistance" },
    { name: "Receptionist", description: "Appointment scheduling and front desk" },
    { name: "Patient", description: "Access medical records and appointments" },
    { name: "Pharmacist", description: "Medicine dispensing and inventory" },
    { name: "Lab Technician", description: "Test management and results" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Nishtha Hospital</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#roles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Roles
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button onClick={() => navigate("/auth")} size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-secondary/85" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl mb-6">
              Empowering Healthcare Digitally
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Nishtha Hospital Management System - A comprehensive, role-based platform for modern healthcare management. Streamline operations, enhance patient care, and boost efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/auth")}
                className="font-semibold"
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage a modern healthcare facility efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Role-Based Access Control
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure, customized access for every member of your healthcare team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  {role.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {role.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Nishtha Hospital
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nishtha Hospital is committed to providing world-class healthcare services with cutting-edge technology. Our Hospital Management System digitizes every aspect of hospital operations, from patient registration to billing, ensuring seamless care delivery.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With advanced security features, real-time analytics, and intuitive interfaces, we empower healthcare professionals to focus on what matters most - patient care.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/auth")}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">Nishtha Hospital Management System</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Nishtha Hospital. All rights reserved. | Empowering Healthcare Digitally
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
