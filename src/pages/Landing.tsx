import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Calendar, Users, FileText, Pill, TestTube, DollarSign, Shield, Smartphone, Cloud, BarChart3, FileCheck, Star, Lock, CheckCircle2, TrendingUp, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import heroImage from "@/assets/hero-medical.jpg";
import featuresVisual from "@/assets/features-visual.png";
import trustBadges from "@/assets/trust-badges.png";

const Landing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Demo request submitted! We'll contact you soon.");
    setFormData({ name: "", specialty: "", phone: "", email: "", message: "" });
  };

  const keyFeatures = [
    { icon: Smartphone, title: "Mobility", description: "Access anywhere, anytime on any device" },
    { icon: Cloud, title: "Cloud Based", description: "Secure cloud infrastructure with 99.9% uptime" },
    { icon: BarChart3, title: "MIS Report", description: "Real-time analytics and comprehensive reports" },
    { icon: FileCheck, title: "100% Paperless", description: "Complete digital transformation" },
    { icon: Star, title: "Patient Feedback", description: "Integrated patient satisfaction tracking" },
    { icon: Lock, title: "Security", description: "Enterprise-grade data encryption" },
    { icon: CheckCircle2, title: "Compliance", description: "HIPAA & healthcare standards compliant" },
    { icon: TrendingUp, title: "Increase OPD", description: "Boost patient flow by 40%" }
  ];

  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records, registration, and medical history tracking with AI-powered insights"
    },
    {
      icon: Calendar,
      title: "Smart Appointments",
      description: "Real-time scheduling with automated reminders, queue management, and availability tracking"
    },
    {
      icon: FileText,
      title: "Electronic Medical Records",
      description: "Secure, centralized EMR with instant access, digital signatures, and audit trails"
    },
    {
      icon: Pill,
      title: "Pharmacy Management",
      description: "Medicine inventory control, prescription tracking, automated billing, and drug interaction alerts"
    },
    {
      icon: TestTube,
      title: "Lab Management",
      description: "Diagnostic test ordering, results management, report generation, and integration with lab equipment"
    },
    {
      icon: DollarSign,
      title: "Billing & Invoicing",
      description: "Automated invoice generation, insurance claims, payment tracking, and financial reports"
    }
  ];

  const stats = [
    { value: "1000+", label: "Hospitals Globally" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500K+", label: "Patients Served Daily" },
    { value: "40%", label: "Efficiency Increase" }
  ];

  const certifications = [
    "NHA Approved",
    "HIPAA Compliant",
    "ISO 27001 Certified",
    "HL7 Integrated",
    "FHIR Compatible",
    "NABH Ready"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Activity className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">Nishtha Hospital</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button onClick={() => navigate("/auth")} size="sm">
              Sign In
            </Button>
            <Button onClick={() => navigate("/auth")} variant="secondary" size="sm">
              Book Demo
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                AI-Driven <span className="text-primary">Cloud Based</span> Hospital Management System
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our Hospital Software integrated with automation tools and patient care systems, enhances your medical experience with real-time collaboration. Stop Waiting, Improve your healthcare future with our AI-powered hospital management system.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Activity className="mr-2 h-5 w-5" />
                  Start Free Demo
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Right Form */}
            <Card className="p-6 shadow-2xl animate-scale-in border-2">
              <form onSubmit={handleDemoRequest} className="space-y-4">
                <div>
                  <Label htmlFor="name">Doctor/Hospital Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="specialty">Speciality</Label>
                  <Select value={formData.specialty} onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select Speciality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multi-specialty">Multi-Specialty</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="gynecology">Gynecology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="oncology">Oncology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email ID *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@hospital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Activity className="mr-2 h-5 w-5" />
                  Start Free Demo
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Visual Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-2 p-2 bg-primary/10 rounded-lg w-fit mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xs font-semibold text-card-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Trusted Health Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-medium text-card-foreground">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted By <span className="text-secondary">1000+</span> Hospitals Globally
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage a modern healthcare facility efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Role-Based Access Control
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure, customized access for every member of your healthcare team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Admin", description: "Full system control and analytics" },
              { name: "Doctor", description: "Patient care and prescriptions" },
              { name: "Nurse", description: "Patient monitoring and care" },
              { name: "Receptionist", description: "Front desk and scheduling" },
              { name: "Patient", description: "Access records and appointments" },
              { name: "Pharmacist", description: "Medicine and inventory" },
              { name: "Lab Technician", description: "Test management" },
              { name: "Billing Staff", description: "Invoicing and payments" }
            ].map((role, index) => (
              <Card key={index} className="p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Nishtha Hospital Management System
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nishtha Hospital is committed to providing world-class healthcare services with cutting-edge technology. Our Hospital Management System digitizes every aspect of hospital operations, ensuring seamless care delivery.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With advanced security features, real-time analytics, and intuitive interfaces, we empower healthcare professionals to focus on what matters most - patient care.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate("/auth")}
                  className="shadow-lg"
                >
                  Start Your Journey
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Healthcare professionals" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join 1000+ hospitals worldwide using Nishtha HMS to deliver better patient care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/auth")}
              className="shadow-xl"
            >
              Book Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate("/auth")}
              className="shadow-xl"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">Nishtha Hospital</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering Healthcare Digitally with AI-powered solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">HMS</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">EMR</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pharmacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lab Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Nishtha Hospital Management System. All rights reserved. | Empowering Healthcare Digitally
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
