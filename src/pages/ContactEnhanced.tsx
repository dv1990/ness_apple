import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, Home, Building2, Wrench, Calculator, Phone, Mail, 
  Calendar, MapPin, Zap, TrendingUp, Clock, CheckCircle, Star,
  User, MessageSquare, Video, Headphones, Target, BarChart3,
  Shield, Award, Users, Sparkles, ChevronRight, AlertCircle,
  Lightbulb, DollarSign, FileText, Send
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { MagneticButton, FloatingCard, ProgressiveDisclosure } from "@/components/EnhancedInteractions";

const ContactEnhanced = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<string>("");
  const [needsAssessment, setNeedsAssessment] = useState({
    propertyType: "",
    monthlyBill: 5000,
    currentBackup: "",
    primaryGoal: "",
    timeline: "",
    budget: ""
  });
  const [contactPreference, setContactPreference] = useState("");
  const [roiPreview, setRoiPreview] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    systemSize: 0
  });
  const [inquiryStatus, setInquiryStatus] = useState("pending");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });
  const { toast } = useToast();

  // Smart routing logic
  const getSpecialistType = () => {
    if (needsAssessment.monthlyBill > 25000) return "commercial";
    if (needsAssessment.propertyType === "apartment") return "residential";
    if (needsAssessment.propertyType === "villa") return "residential";
    if (needsAssessment.propertyType === "office") return "commercial";
    if (needsAssessment.propertyType === "factory") return "commercial";
    return "residential";
  };

  const getRecommendedProduct = () => {
    const specialist = getSpecialistType();
    const bill = needsAssessment.monthlyBill;
    
    if (specialist === "commercial") {
      if (bill > 100000) return "NESS Cube";
      return "NESS Pod";
    }
    return "NESS Home";
  };

  // ROI calculation with real-time updates
  useEffect(() => {
    const calculateROI = () => {
      const bill = needsAssessment.monthlyBill;
      const solarPercentage = 75; // Assume 75% solar coverage
      const monthlySavings = (bill * solarPercentage) / 100;
      const annualSavings = monthlySavings * 12;
      const systemCost = bill * 25; // Rough estimate multiplier
      const paybackPeriod = systemCost / annualSavings;
      const systemSize = Math.round(bill / 400); // Rough kW calculation
      
      setRoiPreview({
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        systemSize
      });
    };

    if (needsAssessment.monthlyBill > 0) {
      calculateROI();
    }
  }, [needsAssessment.monthlyBill]);

  const contactOptions = [
    { 
      id: "video", 
      label: "Video Consultation", 
      icon: Video, 
      description: "Face-to-face virtual meeting",
      availability: "Available now"
    },
    { 
      id: "phone", 
      label: "Phone Call", 
      icon: Phone, 
      description: "Direct conversation with specialist",
      availability: "Available now"
    },
    { 
      id: "email", 
      label: "Email Response", 
      icon: Mail, 
      description: "Detailed written consultation",
      availability: "Within 2 hours"
    },
    { 
      id: "visit", 
      label: "Site Visit", 
      icon: MapPin, 
      description: "On-location assessment",
      availability: "Next 2-3 days"
    }
  ];

  const progressSteps = [
    { step: 1, title: "Needs Assessment", description: "Understanding your requirements", icon: Target },
    { step: 2, title: "ROI Preview", description: "Instant savings calculation", icon: Calculator },
    { step: 3, title: "Contact Details", description: "How to reach you", icon: User },
    { step: 4, title: "Specialist Match", description: "Routing to expert", icon: Users },
    { step: 5, title: "Confirmation", description: "Next steps overview", icon: CheckCircle }
  ];

  const statusSteps = [
    { status: "pending", title: "Inquiry Received", description: "Your request is being processed", icon: Mail },
    { status: "assigned", title: "Specialist Assigned", description: "Expert matched to your needs", icon: Users },
    { status: "scheduled", title: "Consultation Scheduled", description: "Meeting time confirmed", icon: Calendar },
    { status: "assessed", title: "Site Assessment", description: "Technical evaluation complete", icon: Target },
    { status: "quoted", title: "Proposal Sent", description: "Custom solution designed", icon: FileText },
    { status: "approved", title: "Installation Planned", description: "Project timeline finalized", icon: CheckCircle }
  ];

  const handleNext = () => {
    if (currentStep < progressSteps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const specialist = getSpecialistType();
    const product = getRecommendedProduct();
    
    toast({
      title: "Inquiry submitted successfully!",
      description: `Routing to our ${specialist} specialist for ${product} consultation.`
    });
    
    setInquiryStatus("assigned");
    setCurrentStep(5);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progressPercentage = (currentStep / progressSteps.length) * 100;

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-glow rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <Badge variant="outline" className="mb-8 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Smart Contact System
          </Badge>
          
          <h1 className="font-display text-6xl md:text-7xl font-thin text-foreground leading-none tracking-tight mb-8">
            Let's build your
            <br />
            <span className="bg-gradient-to-r from-primary via-brand-glow to-primary bg-clip-text text-transparent">energy future</span>
          </h1>
          
           <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
             Get your custom clean energy solution that feels as good as it performs. 
             Create a legacy your children will thank you for.
           </p>

          {/* Live Metrics */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>&lt; 2 min assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              <span>Instant ROI preview</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Expert matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contact Assessment */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {progressSteps.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}% Complete
              </div>
            </div>
            <Progress value={progressPercentage} className="h-2 mb-8" />
            
            {/* Step Indicators */}
            <div className="flex justify-between">
              {progressSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    currentStep >= step.step 
                      ? "bg-primary text-white" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className={cn(
                    "text-xs text-center max-w-20",
                    currentStep >= step.step ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FloatingCard className="bg-gradient-to-br from-background to-muted/20 border-0 shadow-2xl">
            <CardContent className="p-12">

              {/* Step 1: Needs Assessment */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-light text-foreground">Tell us about your needs</h2>
                    <p className="text-muted-foreground">This helps us recommend the perfect solution</p>
                  </div>

                  <div className="space-y-6">
                    {/* Property Type */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">What type of property do you have?</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { id: "apartment", label: "Apartment", icon: Building2 },
                          { id: "villa", label: "Villa/House", icon: Home },
                          { id: "office", label: "Office", icon: Building2 },
                          { id: "factory", label: "Factory/Industrial", icon: Wrench }
                        ].map(option => (
                          <button
                            key={option.id}
                            onClick={() => setNeedsAssessment(prev => ({ ...prev, propertyType: option.id }))}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                              needsAssessment.propertyType === option.id
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <option.icon className="w-5 h-5" />
                            <span className="font-medium">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Monthly Bill Slider */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">
                        What's your monthly electricity bill?
                      </Label>
                      <div className="space-y-4">
                        <Slider
                          value={[needsAssessment.monthlyBill]}
                          onValueChange={(value) => setNeedsAssessment(prev => ({ ...prev, monthlyBill: value[0] }))}
                          min={1000}
                          max={200000}
                          step={1000}
                          className="w-full"
                        />
                        <div className="text-center">
                          <span className="text-3xl font-thin text-foreground">₹{needsAssessment.monthlyBill.toLocaleString()}</span>
                          <div className="text-sm text-muted-foreground mt-1">per month</div>
                        </div>
                      </div>
                    </div>

                    {/* Current Backup */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Do you have existing backup power?</Label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { id: "none", label: "No backup" },
                          { id: "inverter", label: "Battery inverter" },
                          { id: "generator", label: "Diesel generator" }
                        ].map(option => (
                          <button
                            key={option.id}
                            onClick={() => setNeedsAssessment(prev => ({ ...prev, currentBackup: option.id }))}
                            className={cn(
                              "p-4 rounded-xl border transition-all duration-200 hover:shadow-md text-center",
                              needsAssessment.currentBackup === option.id
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <span className="font-medium">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary Goal */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">What's your primary goal?</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { id: "savings", label: "Reduce electricity costs", icon: DollarSign },
                          { id: "backup", label: "Reliable backup power", icon: Shield },
                          { id: "green", label: "Go green/sustainable", icon: Lightbulb },
                          { id: "independence", label: "Energy independence", icon: Zap }
                        ].map(option => (
                          <button
                            key={option.id}
                            onClick={() => setNeedsAssessment(prev => ({ ...prev, primaryGoal: option.id }))}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                              needsAssessment.primaryGoal === option.id
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <option.icon className="w-5 h-5" />
                            <span className="font-medium">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: ROI Preview */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-light text-foreground">Your savings potential</h2>
                    <p className="text-muted-foreground">Based on your ₹{needsAssessment.monthlyBill.toLocaleString()} monthly bill</p>
                  </div>

                  {/* ROI Display */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary/10 to-brand-glow/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Monthly Savings</span>
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-3xl font-thin text-foreground">₹{roiPreview.monthlySavings.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground mt-1">per month</div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-glow/10 to-primary/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Annual Savings</span>
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-3xl font-thin text-foreground">₹{roiPreview.annualSavings.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground mt-1">per year</div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-brand-glow/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-3xl font-thin text-foreground">{roiPreview.paybackPeriod} years</div>
                      <div className="text-sm text-muted-foreground mt-1">investment recovery</div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-glow/10 to-primary/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Recommended System</span>
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-3xl font-thin text-foreground">{roiPreview.systemSize} kW</div>
                      <div className="text-sm text-muted-foreground mt-1">{getRecommendedProduct()}</div>
                    </div>
                  </div>

                  {/* Product Recommendation */}
                  <div className="bg-muted/20 rounded-2xl p-6 text-center">
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                      Recommended for you
                    </Badge>
                    <h3 className="text-2xl font-light text-foreground mb-2">{getRecommendedProduct()}</h3>
                    <p className="text-muted-foreground mb-4">
                      Perfect for your {needsAssessment.propertyType} with ₹{needsAssessment.monthlyBill.toLocaleString()} monthly bill
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>15-year warranty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>₹10L insurance</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-light text-foreground">How can we reach you?</h2>
                    <p className="text-muted-foreground">We'll connect you with the right specialist</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any specific requirements or questions..."
                      rows={3}
                    />
                  </div>

                  {/* Contact Preference */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">How would you prefer to be contacted?</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {contactOptions.map(option => (
                        <button
                          key={option.id}
                          onClick={() => setContactPreference(option.id)}
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md text-left",
                            contactPreference === option.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center mt-1",
                            contactPreference === option.id ? "bg-primary/20" : "bg-muted/50"
                          )}>
                            <option.icon className={cn(
                              "w-5 h-5",
                              contactPreference === option.id ? "text-primary" : "text-muted-foreground"
                            )} />
                          </div>
                          <div className="flex-1">
                            <h4 className={cn(
                              "font-medium mb-1",
                              contactPreference === option.id ? "text-primary" : "text-foreground"
                            )}>
                              {option.label}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <Badge variant="outline" className="text-xs">
                              {option.availability}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Specialist Match */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-light text-foreground">Perfect match found!</h2>
                    <p className="text-muted-foreground">We're connecting you with the right specialist</p>
                  </div>

                  {/* Smart Routing Results */}
                  <div className="bg-gradient-to-br from-primary/5 to-brand-glow/5 rounded-2xl p-8">
                    <div className="text-center space-y-6">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Smart Routing Complete
                      </Badge>
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl font-light text-foreground">
                          {getSpecialistType() === "commercial" ? "Commercial" : "Residential"} Specialist
                        </h3>
                        <p className="text-muted-foreground">
                          Based on your {needsAssessment.propertyType} and ₹{needsAssessment.monthlyBill.toLocaleString()} monthly bill
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center p-4 bg-background/50 rounded-xl">
                          <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="font-medium">Recommended Product</div>
                          <div className="text-muted-foreground">{getRecommendedProduct()}</div>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-xl">
                          <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="font-medium">Potential Savings</div>
                          <div className="text-muted-foreground">₹{roiPreview.annualSavings.toLocaleString()}/year</div>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-xl">
                          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="font-medium">Contact Method</div>
                          <div className="text-muted-foreground capitalize">{contactPreference || "Phone call"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialist Info Preview */}
                  <div className="border border-border/50 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">
                          {getSpecialistType() === "commercial" ? "Arjun Mehta" : "Priya Singh"}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Senior {getSpecialistType() === "commercial" ? "Commercial" : "Residential"} Solutions Consultant
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current text-primary" />
                            <span>4.9 rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3 text-primary" />
                            <span>500+ installations</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" />
                            <span>Your area</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-light text-foreground">All set!</h2>
                    <p className="text-muted-foreground">Your inquiry has been submitted successfully</p>
                  </div>

                  {/* Progress Tracking Preview */}
                  <div className="bg-muted/20 rounded-2xl p-8">
                    <h3 className="text-xl font-light text-foreground mb-6 text-center">Track Your Progress</h3>
                    
                    <div className="space-y-4">
                      {statusSteps.slice(0, 3).map((step, index) => (
                        <div key={step.status} className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            index === 0 ? "bg-primary text-white" : 
                            index === 1 ? "bg-primary/20 text-primary" :
                            "bg-muted text-muted-foreground"
                          )}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className={cn(
                              "font-medium",
                              index === 0 ? "text-foreground" : "text-muted-foreground"
                            )}>
                              {step.title}
                            </div>
                            <div className="text-sm text-muted-foreground">{step.description}</div>
                          </div>
                          {index === 0 && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              Complete
                            </Badge>
                          )}
                          {index === 1 && (
                            <Badge variant="outline" className="bg-brand-glow/10 text-brand-glow border-brand-glow/20">
                              In Progress
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-primary/5 rounded-2xl p-6">
                    <h4 className="font-medium text-foreground mb-3">What happens next:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Your specialist will contact you within 2 hours</li>
                      <li>• Schedule a detailed consultation at your convenience</li>
                      <li>• Receive a custom proposal with exact pricing</li>
                      <li>• Site assessment and final system design</li>
                      <li>• Professional installation within 2-3 days</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Reference ID: <span className="font-mono font-medium">NESS-{Date.now().toString().slice(-6)}</span>
                    </p>
                    <MagneticButton variant="primary" size="lg">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Track Progress
                    </MagneticButton>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-8 border-t border-border/50">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back
                </Button>

                {currentStep < 4 ? (
                  <MagneticButton variant="primary" onClick={handleNext}>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </MagneticButton>
                ) : currentStep === 4 ? (
                  <MagneticButton variant="primary" onClick={handleSubmit}>
                    Submit Inquiry
                    <Send className="w-4 h-4 ml-2" />
                  </MagneticButton>
                ) : (
                  <MagneticButton variant="primary">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Chat
                  </MagneticButton>
                )}
              </div>
            </CardContent>
          </FloatingCard>
        </div>
      </section>

      {/* Trust & Support Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-light text-foreground mb-8">Why choose our smart contact system?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FloatingCard className="text-center bg-background/50" delay={0.1}>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-medium text-foreground mb-2">Perfect Match</h4>
                <p className="text-sm text-muted-foreground">AI-powered routing to the right specialist</p>
              </CardContent>
            </FloatingCard>
            
            <FloatingCard className="text-center bg-background/50" delay={0.2}>
              <CardContent className="p-6">
                <Calculator className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-medium text-foreground mb-2">Instant ROI</h4>
                <p className="text-sm text-muted-foreground">Real-time savings calculation</p>
              </CardContent>
            </FloatingCard>
            
            <FloatingCard className="text-center bg-background/50" delay={0.3}>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-medium text-foreground mb-2">Full Support</h4>
                <p className="text-sm text-muted-foreground">End-to-end progress tracking</p>
              </CardContent>
            </FloatingCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactEnhanced;