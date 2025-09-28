import Layout from "@/components/Layout";
import PerformanceGrid from "@/components/ui/performance-grid";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Battery3D } from "@/components/ui/battery-3d";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  MagneticButton, 
  PlayButton, 
  FloatingCard, 
  ProgressiveDisclosure,
  FloatingElement,
  ParallaxContainer
} from "@/components/EnhancedInteractions";
import { useScrollAnimation, useStaggeredAnimation, useParallaxScroll } from "@/hooks/use-scroll-animation";
import { 
  ArrowRight, Home, Building2, Wrench, Calculator, Phone, Mail,
  Calendar, MapPin, Zap, TrendingUp, Clock, CheckCircle, Star,
  User, MessageSquare, Video, Headphones, Target, BarChart3,
  Shield, Award, Users, Sparkles, ChevronRight, AlertCircle,
  Lightbulb, DollarSign, FileText, Send, Factory, TreePine, Heart,
  Lock, Wifi, Database, Microscope, Beaker, TestTube, Cpu,
  Battery, Play, Download, LineChart, PieChart, Activity, 
  Thermometer, Eye, Layers, Code, Gauge
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import images
import batteryTechnology from "@/assets/battery-technology.jpg";
import aiSoftware from "@/assets/ai-software.jpg";
import rdLaboratory from "@/assets/rd-laboratory.jpg";
import systemArchitecture from "@/assets/system-architecture.jpg";
import deyeLogo from "@/assets/deye-logo.png";
import studerLogo from "@/assets/studer-logo.png";
import victronLogo from "@/assets/victron-logo.png";
import solisLogo from "@/assets/solis-logo.png";
import fimerLogo from "@/assets/fimer-logo.png";

const TechnologyEnhanced = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: benefitsRef, visibleItems: visibleBenefits } = useStaggeredAnimation(4, 150);
  const { elementRef: timelineRef, visibleItems: visibleTimeline } = useStaggeredAnimation(5, 200);
  
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedBatteryType, setSelectedBatteryType] = useState("lifepo4");
  const [view3D, setView3D] = useState<'pack' | 'system'>('pack');
  
  // Simulated real-time metrics
  const [metrics, setMetrics] = useState({
    voltage: 51.2,
    current: 45.8,
    soc: 87,
    temperature: 28,
    cycleCount: 1247
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        voltage: 51.2 + (Math.random() - 0.5) * 0.4,
        current: 45.8 + (Math.random() - 0.5) * 5,
        soc: Math.max(85, Math.min(90, prev.soc + (Math.random() - 0.5) * 2)),
        temperature: 28 + (Math.random() - 0.5) * 2,
        cycleCount: prev.cycleCount
      }));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const innovations = [
    {
      title: "Cell Intelligence & Grading",
      description: "Every cell is scientifically analyzed and paired for optimal performance. Our proprietary QMAX grading system ensures maximum pack efficiency and longevity.",
      specs: ["Precision cell matching", "QMAX grading algorithm", "Performance optimization", "Quality certification"],
      image: batteryTechnology,
      icon: <Microscope className="w-6 h-6" />,
      technical: {
        accuracy: "±0.1% cell variance",
        testing: "500+ parameter analysis",
        grading: "QMAX proprietary algorithm",
        matching: "Statistical correlation analysis"
      }
    },
    {
      title: "AI-Powered Battery Management", 
      description: "Advanced machine learning algorithms continuously monitor and optimize every cell, predicting performance and preventing failures before they occur.",
      specs: ["Real-time ML inference", "Predictive analytics", "Cell-level monitoring", "Adaptive algorithms"],
      image: aiSoftware,
      icon: <Cpu className="w-6 h-6" />,
      technical: {
        processing: "<10ms inference time",
        accuracy: "99.7% prediction accuracy", 
        monitoring: "1000+ parameters/second",
        learning: "Continuous model updates"
      }
    },
    {
      title: "Modular System Architecture",
      description: "Scalable, fault-tolerant design with integrated safety systems and seamless grid integration capabilities.",
      specs: ["Modular scalability", "IP65 protection", "Sub-second response", "Grid-tie ready"],
      image: systemArchitecture,
      icon: <Layers className="w-6 h-6" />,
      technical: {
        response: "<100ms grid response",
        scaling: "Linear capacity scaling",
        protection: "IP65 ingress rating",
        integration: "IEEE 2030.5 compliant"
      }
    }
  ];

  const batteryComparison = {
    lifepo4: {
      name: "LiFePO4 (NESS)",
      energy: 165,
      cycles: 6000,
      safety: 98,
      cost: 85,
      temperature: 95,
      color: "#4a9d5c",
      pros: ["Highest safety", "Long lifespan", "Stable chemistry", "Wide temperature range"],
      cons: ["Lower energy density", "Higher initial cost"]
    },
    lithium: {
      name: "Li-ion NMC",
      energy: 250,
      cycles: 3000,
      safety: 70,
      cost: 95,
      temperature: 70,
      color: "#ff6b35",
      pros: ["High energy density", "Lower cost", "Compact size"],
      cons: ["Safety concerns", "Shorter lifespan", "Temperature sensitive"]
    },
    leadacid: {
      name: "Lead Acid",
      energy: 40,
      cycles: 500,
      safety: 85,
      cost: 100,
      temperature: 60,
      color: "#6b7280",
      pros: ["Low initial cost", "Proven technology", "Recyclable"],
      cons: ["Very low energy density", "Short lifespan", "Maintenance required"]
    }
  };

  const timeline = [
    {
      year: "2019",
      title: "Foundation & Research",
      description: "Established R&D lab with focus on Indian climate conditions",
      achievements: ["Initial cell testing", "Climate analysis", "Market research"],
      icon: <TestTube className="w-5 h-5" />
    },
    {
      year: "2020",
      title: "QMAX Algorithm Development",
      description: "Developed proprietary cell grading and matching algorithms",
      achievements: ["QMAX patent filed", "Cell database created", "Testing protocols"],
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "2021", 
      title: "AI Integration",
      description: "Machine learning models for predictive battery management",
      achievements: ["ML models trained", "Edge computing", "Predictive algorithms"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "Commercial Launch",
      description: "First NESS systems deployed in residential and commercial markets",
      achievements: ["Product certification", "Manufacturing scale-up", "Customer deployments"],
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Next-Gen Platform",
      description: "Advanced system architecture with enhanced grid integration",
      achievements: ["Grid services", "V2G capability", "Enhanced safety systems"],
      icon: <Target className="w-5 h-5" />
    }
  ];

  const technicalSpecs = [
    {
      category: "Cell Technology",
      icon: <Battery className="w-5 h-5" />,
      specs: [
        { parameter: "Chemistry", value: "LiFePO4 (Lithium Iron Phosphate)", detail: "Safest lithium chemistry with excellent thermal stability" },
        { parameter: "Cycle Life", value: "6000+ cycles at 80% DOD", detail: "Industry-leading cycle life for maximum ROI" },
        { parameter: "Temperature Range", value: "-20°C to +60°C operational", detail: "Optimized for Indian climate conditions" },
        { parameter: "Energy Density", value: "165 Wh/kg at cell level", detail: "Balanced energy density and safety profile" }
      ]
    },
    {
      category: "Safety Systems", 
      icon: <Shield className="w-5 h-5" />,
      specs: [
        { parameter: "Fire Protection", value: "UL9540A certified with aerosol suppression", detail: "Advanced fire suppression and thermal management" },
        { parameter: "Thermal Management", value: "Active cooling with predictive control", detail: "AI-powered thermal optimization" },
        { parameter: "Fault Detection", value: "Cell-level monitoring with isolation", detail: "Individual cell monitoring and protection" },
        { parameter: "Emergency Response", value: "Multi-layer shutdown protocols", detail: "Cascading safety systems for maximum protection" }
      ]
    },
    {
      category: "Software Intelligence",
      icon: <Cpu className="w-5 h-5" />,
      specs: [
        { parameter: "State Estimation", value: "Proprietary algorithms, ±2% accuracy", detail: "Advanced SOC and SOH estimation" },
        { parameter: "Response Time", value: "<100ms for grid services", detail: "Sub-second response for grid stabilization" },
        { parameter: "Communication", value: "IEEE 2030.5, Modbus, CAN protocols", detail: "Industry-standard communication protocols" },
        { parameter: "Edge Processing", value: "Local ML inference capabilities", detail: "On-device machine learning for real-time optimization" }
      ]
    }
  ];

  const compatibleInverters = [
    { name: "Deye", description: "Hybrid solar inverters", logo: deyeLogo, compatibility: 98 },
    { name: "Studer innotec", description: "Off-grid systems", logo: studerLogo, compatibility: 95 },
    { name: "Victron", description: "Energy management", logo: victronLogo, compatibility: 99 },
    { name: "Solis", description: "Solar inverter solutions", logo: solisLogo, compatibility: 92 },
    { name: "FIMER", description: "Industrial inverters", logo: fimerLogo, compatibility: 94 }
  ];

  return (
    <Layout>
      {/* Hero Section - Enhanced with 3D Visualization */}
      <section className="min-h-screen bg-background relative overflow-hidden">
        <ParallaxContainer speed={0.2} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <PerformanceGrid rows={12} cols={12} />
        </ParallaxContainer>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
            
            {/* Left Content */}
            <div className="space-y-12">
              <FloatingElement delay={0} direction="up" speed={1}>
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Deep Technology Innovation
                  </span>
                </div>
              </FloatingElement>

              <div className="space-y-8">
                <FloatingElement delay={1} direction="up" speed={1.2}>
                   <h1 className="font-display text-6xl md:text-8xl font-extralight text-foreground leading-[0.8] tracking-tight">
                     Safe by
                     <br />
                     <span className="text-primary animate-fade-in">design</span>
                   </h1>
                </FloatingElement>
                
                 <FloatingElement delay={2} direction="up" speed={1.4}>
                     <p className="text-xl font-light text-muted-foreground max-w-lg leading-relaxed">
                       Zero fire risk. Maximum performance. Engineered for generations. 
                       Clean technology that makes you feel proud about your family's footprint.
                     </p>
                 </FloatingElement>
              </div>

              <FloatingElement delay={3} direction="up" speed={1.6}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    onClick={() => document.getElementById('technical-specs')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Technology
                  </MagneticButton>
                  
                  <PlayButton 
                    onClick={() => {/* Video modal logic */}}
                    label="Watch Tech Demo"
                    size="lg"
                  />
                </div>
              </FloatingElement>

              {/* Real-time Metrics */}
              <FloatingElement delay={4} direction="up" speed={1.8}>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 glass-subtle rounded-xl">
                    <div className="text-2xl font-light text-primary">{metrics.soc}%</div>
                    <div className="text-xs text-muted-foreground">State of Charge</div>
                  </div>
                  <div className="text-center p-4 glass-subtle rounded-xl">
                    <div className="text-2xl font-light text-foreground">{metrics.voltage.toFixed(1)}V</div>
                    <div className="text-xs text-muted-foreground">System Voltage</div>
                  </div>
                  <div className="text-center p-4 glass-subtle rounded-xl">
                    <div className="text-2xl font-light text-foreground">{metrics.temperature}°C</div>
                    <div className="text-xs text-muted-foreground">Temperature</div>
                  </div>
                </div>
              </FloatingElement>
            </div>

            {/* Right Visual - Interactive 3D */}
            <div className="relative">
              <FloatingElement delay={5} direction="left" speed={0.8}>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Button
                      variant={view3D === 'pack' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setView3D('pack')}
                    >
                      Battery Pack
                    </Button>
                    <Button
                      variant={view3D === 'system' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setView3D('system')}
                    >
                      System Architecture
                    </Button>
                  </div>
                  
                  <Battery3D view={view3D} />
                  
                  <div className="text-center p-4 glass-premium rounded-xl">
                    <p className="text-sm text-muted-foreground">
                      Interactive 3D visualization • Click and drag to explore
                    </p>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Stack - Progressive Disclosure */}
      <section className="py-32 bg-muted/10">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Engineering tomorrow's clean legacy
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Every layer engineered not just for performance, but for the profound satisfaction 
              of knowing your energy choices are building a better world for your children.
            </p>
          </div>

          <div className="space-y-16">
            {innovations.map((innovation, index) => (
              <AnimatedCard
                key={innovation.title}
                animation="fade-up"
                delay={index * 200}
                className="overflow-hidden"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`innovation-${index}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                        {/* Content */}
                        <div className="text-left space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                              {innovation.icon}
                            </div>
                            <h3 className="text-3xl font-light text-foreground">{innovation.title}</h3>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {innovation.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3">
                            {innovation.specs.map((spec, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-foreground">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden">
                          <img 
                            src={innovation.image}
                            alt={innovation.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-8 pb-8">
                      <div className="pt-6 border-t border-border">
                        <h4 className="text-lg font-medium text-foreground mb-4">Technical Details</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(innovation.technical).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                              <span className="text-sm text-muted-foreground capitalize">{key}:</span>
                              <span className="text-sm font-medium text-primary">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedCard>
            ))}
          </div>
        </div>
       </section>

       {/* R&D Excellence Picture Banner */}
       <section className="relative h-[50vh] overflow-hidden">
         <div className="absolute inset-0">
           <img 
             src="/src/assets/rd-laboratory.jpg" 
             alt="NESS R&D Laboratory" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
         </div>
         
         <div className="relative z-10 h-full flex items-end">
           <div className="max-w-6xl mx-auto px-8 pb-12 w-full">
             <div className="text-center">
               <div className="text-5xl md:text-6xl font-thin text-white mb-4">
                 4 years of R&D
               </div>
               <div className="text-xl text-white/70 font-light">
                 Engineered for Indian conditions
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Battery Technology Comparison */}
      <section className="py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Safe by design
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Battery Selection */}
            <div className="space-y-8">
              <Tabs value={selectedBatteryType} onValueChange={setSelectedBatteryType}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="lifepo4">LiFePO4</TabsTrigger>
                  <TabsTrigger value="lithium">Li-ion</TabsTrigger>
                  <TabsTrigger value="leadacid">Lead Acid</TabsTrigger>
                </TabsList>
                
                {Object.entries(batteryComparison).map(([key, battery]) => (
                  <TabsContent key={key} value={key} className="space-y-6">
                    <AnimatedCard className="p-6">
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-medium text-foreground mb-2">{battery.name}</h3>
                          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: battery.color }}></div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Energy Density</span>
                              <span className="text-sm font-medium">{battery.energy} Wh/kg</span>
                            </div>
                            <Progress value={battery.energy / 2.5} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Cycle Life</span>
                              <span className="text-sm font-medium">{battery.cycles} cycles</span>
                            </div>
                            <Progress value={battery.cycles / 60} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Safety Rating</span>
                              <span className="text-sm font-medium">{battery.safety}%</span>
                            </div>
                            <Progress value={battery.safety} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Temperature Performance</span>
                              <span className="text-sm font-medium">{battery.temperature}%</span>
                            </div>
                            <Progress value={battery.temperature} className="h-2" />
                          </div>
                        </div>

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-green-600">Advantages</h4>
                            {battery.pros.map((pro, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{pro}</span>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-orange-600">Limitations</h4>
                            {battery.cons.map((con, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <div className="w-4 h-4 rounded-full bg-orange-600/20 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Visual Comparison */}
            <AnimatedCard animation="fade-up" delay={300} className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-foreground text-center">Performance Overview</h3>
                
                <div className="space-y-6">
                  {['Energy Density', 'Cycle Life', 'Safety Rating', 'Temperature Performance'].map((metric, index) => {
                    const values = Object.values(batteryComparison).map(b => 
                      metric === 'Energy Density' ? b.energy / 2.5 :
                      metric === 'Cycle Life' ? b.cycles / 60 :
                      metric === 'Safety Rating' ? b.safety :
                      b.temperature
                    );
                    
                    return (
                      <div key={metric} className="space-y-3">
                        <h4 className="text-sm font-medium text-muted-foreground">{metric}</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {Object.entries(batteryComparison).map(([key, battery], i) => (
                            <div key={key} className="text-center">
                              <div className="h-20 bg-muted/20 rounded-lg mb-2 flex items-end p-2">
                                <div 
                                  className="w-full rounded-sm transition-all duration-500"
                                  style={{ 
                                    height: `${values[i]}%`,
                                    backgroundColor: battery.color 
                                  }}
                                ></div>
                              </div>
                              <div className="text-xs text-muted-foreground">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Installer Section - Why LFP & Seamless Installation */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                For Installation Partners
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Install with confidence
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              LFP technology meets effortless installation
            </p>
          </div>

          {/* Why Choose LFP - Education Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <AnimatedCard animation="fade-up" delay={0} hover="lift">
              <div className="p-8 space-y-6 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light text-foreground">Zero safety concerns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LFP chemistry eliminates thermal runaway risks. No special fire suppression required.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Non-toxic, non-flammable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">UL9540A fire test passed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Stable at high temperatures</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="fade-up" delay={200} hover="lift">
              <div className="p-8 space-y-6 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light text-foreground">Happy customers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  6000+ cycle lifespan means customers pay once, use for decades.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">15+ year lifespan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">No capacity degradation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Zero maintenance required</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="fade-up" delay={400} hover="lift">
              <div className="p-8 space-y-6 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light text-foreground">Your reputation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Install premium systems that enhance your professional reputation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Premium positioning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Referral generation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Higher margins</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Seamless Installation Process */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-light text-foreground mb-4">Effortless installation</h3>
                <p className="text-xl text-muted-foreground font-light mb-8">
                  Plug-and-play design. Install in hours, not days.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Pre-configured systems</h4>
                    <p className="text-muted-foreground text-sm">
                      Arrive factory-programmed. No complex commissioning required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Universal compatibility</h4>
                    <p className="text-muted-foreground text-sm">
                      Works with 99% of inverters. CAN, RS485, Modbus protocols supported.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Instant diagnostics</h4>
                    <p className="text-muted-foreground text-sm">
                      Real-time system health via mobile app. Verify installation instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton variant="primary" size="lg">
                  Get Installation Guide
                </MagneticButton>
              </div>
            </div>

            <div className="relative">
              <AnimatedCard animation="scale-in" delay={600}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={systemArchitecture}
                    alt="NESS system installation process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedCard>
            </div>
          </div>

          {/* Zero Post-Installation Issues */}
          <div className="text-center space-y-12">
            <div>
              <h3 className="text-4xl font-light text-foreground mb-4">Zero callbacks</h3>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                AI-powered systems prevent issues before they occur
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">Predictive maintenance</h4>
                <p className="text-sm text-muted-foreground">
                  AI predicts and prevents failures 6 months in advance
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">Remote monitoring</h4>
                <p className="text-sm text-muted-foreground">
                  24/7 system health monitoring with instant alerts
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground">Self-healing systems</h4>
                <p className="text-sm text-muted-foreground">
                  Automatic fault isolation and system recovery
                </p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h4 className="text-2xl font-light text-foreground mb-4">Installation confidence</h4>
                  <p className="text-muted-foreground mb-6">
                    Join 500+ certified installers delivering flawless systems across India
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div>
                      <div className="text-2xl font-light text-primary">99.8%</div>
                      <div className="text-muted-foreground">Success rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-primary">Zero</div>
                      <div className="text-muted-foreground">Fire incidents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-primary">24/7</div>
                      <div className="text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <MagneticButton variant="primary" size="lg">
                    Become Certified Installer
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Expandable */}
      <section id="technical-specs" className="py-32 bg-muted/10">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Deep technical specifications
            </h2>
          </div>

          <div className="space-y-8">
            {technicalSpecs.map((category, index) => (
              <AnimatedCard
                key={category.category}
                animation="fade-up"
                delay={index * 100}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`spec-${index}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline p-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-medium text-foreground">{category.category}</h3>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-8 pb-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.specs.map((spec, i) => (
                          <div key={i} className="space-y-3 p-4 bg-background/50 rounded-xl">
                            <div className="flex justify-between items-start">
                              <span className="text-sm font-medium text-foreground">{spec.parameter}</span>
                              <span className="text-sm text-primary font-medium">{spec.value}</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{spec.detail}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Innovation journey
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Five years of continuous technological advancement
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
            
            <div className="space-y-16">
              {timeline.map((milestone, index) => (
                <AnimatedCard
                  key={milestone.year}
                  animation="fade-up"
                  delay={index * 200}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-8 glass-card rounded-2xl space-y-4">
                      <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          {milestone.icon}
                        </div>
                        <div className="text-2xl font-light text-primary">{milestone.year}</div>
                      </div>
                      
                      <h3 className="text-xl font-medium text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className={`flex items-center space-x-2 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Systems */}
      <section className="py-32 bg-muted/10">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em] mb-6">
              Universal compatibility
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Seamlessly integrates with leading inverter brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {compatibleInverters.map((inverter, index) => (
              <AnimatedCard
                key={inverter.name}
                animation="scale-in"
                delay={index * 100}
                hover="lift"
                className="group p-8 text-center space-y-4"
              >
                <div className="w-24 h-24 mx-auto bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={inverter.logo} 
                    alt={`${inverter.name} logo`}
                    className="max-w-20 max-h-16 object-contain"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">{inverter.name}</h3>
                  <p className="text-sm text-muted-foreground">{inverter.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Compatibility</div>
                  <div className="text-lg font-medium text-primary">{inverter.compatibility}%</div>
                  <Progress value={inverter.compatibility} className="h-1" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em]">
                Experience the technology
              </h2>
              <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
                Schedule a technical demonstration or download detailed specifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <AnimatedCard animation="fade-up" delay={0} hover="lift">
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Technical Demo</h3>
                  <p className="text-muted-foreground text-sm">Live system demonstration</p>
                  <MagneticButton variant="primary" size="default">
                    Schedule Demo
                  </MagneticButton>
                </div>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={200} hover="lift">
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Technical Specs</h3>
                  <p className="text-muted-foreground text-sm">Detailed specification sheets</p>
                  <MagneticButton variant="secondary" size="default">
                    Download PDF
                  </MagneticButton>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyEnhanced;