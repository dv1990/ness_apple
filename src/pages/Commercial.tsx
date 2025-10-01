import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LazySection } from "@/components/ui/lazy-section";
import { usePerformanceTracking } from "@/lib/performance-monitor";
import { 
  ArrowRight, 
  Calculator, 
  Play, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Target, 
  Sparkles, 
  Building2, 
  Factory 
} from "lucide-react";
// Image paths - will be lazy-loaded via WebPImage where possible
const nessUnitsHero = "@/assets/ness-units-hero.png";
const nessPodProduct = "@/assets/ness-pod-product.png";
const nessCubeProduct = "@/assets/ness-cube-product.png";
const industryOffice = "@/assets/industry-office.png";
const industryManufacturing = "@/assets/industry-manufacturing.png";
const industryDGReplacement = "@/assets/industry-dg-replacement.png";
const industryEVFleet = "@/assets/industry-ev-fleet.png";
const officeInterior = "@/assets/office-interior.jpg";
const manufacturingFacility = "@/assets/manufacturing-facility.jpg";
const dgReplacement = "@/assets/dg-replacement.jpg";
const evCharging = "@/assets/ev-charging.jpg";

const Commercial = () => {
  const { endTracking } = usePerformanceTracking('Commercial');
  React.useEffect(() => endTracking, [endTracking]);

  const products = [
    {
      id: "pod",
      name: "NESS POD",
      tagline: "Premium Indoor Series",
      description: "Sophisticated energy storage designed for premium commercial spaces. Clean aesthetics meet cutting-edge technology.",
      image: nessPodProduct,
      applications: ["Office Buildings", "Retail Spaces", "Healthcare Facilities", "Hotels & Hospitality"],
      capacity: "100-500 kWh",
      features: ["Silent Operation", "Premium Design", "Smart Integration", "Compact Footprint"],
      useCase: "indoor"
    },
    {
      id: "cube",
      name: "NESS CUBE",
      tagline: "Industrial Outdoor Series",
      description: "Ruggedized containers engineered for demanding outdoor environments and large-scale deployments.",
      image: nessCubeProduct,
      applications: ["Manufacturing Plants", "Grid Replacement", "DG Replacement", "Utility-Scale"],
      capacity: "1-10 MWh",
      features: ["Weather Resistant", "Modular Design", "High Capacity", "Easy Installation"],
      useCase: "outdoor"
    }
  ];

  const metrics = [
    {
      value: "60%",
      label: "Peak reduction",
      description: "Intelligent load management"
    },
    {
      value: "22mo",
      label: "Payback period",
      description: "Guaranteed ROI"
    },
    {
      value: "99.97%",
      label: "System uptime",
      description: "Enterprise reliability"
    },
    {
      value: "25yr",
      label: "Battery lifecycle",
      description: "Long-term value"
    }
  ];

  const industries = [
    {
      id: "office",
      icon: industryOffice,
      backgroundImage: officeInterior,
      title: "Office Buildings",
      capacity: "100-500 kWh",
      applications: ["Peak shaving", "Backup power", "Rate arbitrage"],
      description: "Intelligent energy management for modern commercial spaces"
    },
    {
      id: "manufacturing",
      icon: industryManufacturing,
      backgroundImage: manufacturingFacility,
      title: "Manufacturing",
      capacity: "500kWh-2MWh", 
      applications: ["UPS replacement", "Load balancing", "Grid services"],
      description: "Reliable power solutions for industrial operations"
    },
    {
      id: "dg-replacement",
      icon: industryDGReplacement,
      backgroundImage: dgReplacement,
      title: "DG Replacement",
      capacity: "1-10 MWh",
      applications: ["Generator backup", "Clean transition", "Cost reduction"],
      description: "Next-generation alternative to diesel generators"
    },
    {
      id: "ev-fleets",
      icon: industryEVFleet,
      backgroundImage: evCharging,
      title: "EV Fleets",
      capacity: "200kWh-1MWh",
      applications: ["Fast charging", "Grid buffering", "Solar integration"],
      description: "Sustainable charging infrastructure solutions"
    }
  ];

  return (
    <Layout>
      {/* Simplified Hero - Business Problem First */}
      <section className="min-h-screen bg-background flex items-center">
        <div className="max-w-5xl mx-auto px-8 w-full text-center">
          <div className="space-y-16">
            
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  Commercial & Industrial
                </span>
              </div>

              <h1 className="font-sf text-6xl md:text-8xl font-extralight text-foreground leading-[0.85] tracking-tight">
                Never lose business
                <br />
                <span className="text-primary font-medium">to power failures.</span>
              </h1>
              
              <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                While your competitors scramble during outages, your operations continue seamlessly.
                <br />
                <span className="text-foreground font-medium">This is the NESS advantage.</span>
              </p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              Secure Your Operations
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Progressive Disclosure - The Business Problem */}
      <LazySection sectionName="problem" className="py-40 bg-muted/10">
        <div className="max-w-5xl mx-auto px-8 text-center">
          
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-destructive"></div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  The Hidden Cost
                </span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.85] tracking-tight">
                Every minute offline
                <br />
                <span className="text-destructive font-medium">costs ₹2.4 lakhs</span>
              </h2>
              
              <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Manufacturing downtime. Spoiled inventory. Lost customers. Missed deadlines.
                <br />
                <span className="text-foreground font-medium">The real cost of power cuts goes far beyond electricity bills.</span>
              </p>
            </div>

            {/* The Solution - One System */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-primary uppercase tracking-[0.2em]">
                    The Solution
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extralight text-foreground leading-[0.9] tracking-tight">
                  One intelligent system.
                  <br />
                  <span className="text-primary font-medium">Infinite scalability.</span>
                </h3>
                
                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  NESS adapts from protecting a single office (100 kWh) to powering entire industrial complexes (10+ MWh). 
                  The same intelligence, the same reliability, scaled to your exact needs.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-extralight text-foreground">100 kWh</div>
                    <div className="text-sm text-muted-foreground">Small Office</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-extralight text-foreground">1 MWh</div>
                    <div className="text-sm text-muted-foreground">Manufacturing</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-extralight text-foreground">10+ MWh</div>
                    <div className="text-sm text-muted-foreground">Industrial Complex</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Form Factors - Two Deployment Options */}
      <LazySection sectionName="deployment" className="py-40 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Deployment Options
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
              Two form factors.
              <br />
              <span className="text-muted-foreground/60">Every environment.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* POD - Indoor */}
            <div className="group cursor-pointer">
              <div className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:bg-card/40 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-blue-500/5 to-blue-500/20 rounded-2xl p-8 flex items-center justify-center mb-8">
                  <OptimizedImage 
                    src={nessPodProduct}
                    alt="NESS POD"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-3xl font-extralight text-foreground">NESS POD</h3>
                  </div>
                  
                  <p className="text-lg font-light text-muted-foreground leading-relaxed">
                    Premium indoor installation. Silent operation, elegant design, perfect for offices, hospitals, and retail spaces.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-extralight text-foreground">100-500 kWh</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* CUBE - Outdoor */}
            <div className="group cursor-pointer">
              <div className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:bg-card/40 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-green-500/5 to-green-500/20 rounded-2xl p-8 flex items-center justify-center mb-8">
                  <OptimizedImage 
                    src={nessCubeProduct}
                    alt="NESS CUBE"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Factory className="w-6 h-6 text-green-600" />
                    <h3 className="text-3xl font-extralight text-foreground">NESS CUBE</h3>
                  </div>
                  
                  <p className="text-lg font-light text-muted-foreground leading-relaxed">
                    Ruggedized outdoor containers. Built for harsh environments, unlimited scalability, perfect for manufacturing and utilities.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-extralight text-foreground">1-10+ MWh</span>
                    <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Stories - Facts Tell, Stories Sell */}
      <LazySection sectionName="stories" className="py-40 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Real Stories
              </span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.85] tracking-tight">
              When crisis strikes,
              <br />
              <span className="text-primary font-medium">NESS delivers.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Chennai Floods Story */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-primary font-medium uppercase tracking-wide">Chennai Manufacturing</span>
                  </div>
                  
                  <blockquote className="text-2xl font-light text-foreground leading-relaxed">
                    "While competitors lost ₹2.4 crores during the Chennai floods, Apex Manufacturing maintained full production."
                  </blockquote>
                </div>
                
                <div className="pt-6 border-t border-border/20 space-y-3">
                  <div className="text-primary font-medium text-lg">Zero production loss</div>
                  <div className="text-muted-foreground text-sm">72-hour continuous operation during flooding</div>
                  <div className="text-muted-foreground text-sm">Competitors resumed operations 4 days later</div>
                </div>
              </div>
            </div>

            {/* Mumbai Hospital Story */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-primary font-medium uppercase tracking-wide">Mumbai Healthcare</span>
                  </div>
                  
                  <blockquote className="text-2xl font-light text-foreground leading-relaxed">
                    "During the 18-hour blackout, our ICU never missed a heartbeat. Literally."
                  </blockquote>
                </div>
                
                <div className="pt-6 border-t border-border/20 space-y-3">
                  <div className="text-primary font-medium text-lg">96 lives protected</div>
                  <div className="text-muted-foreground text-sm">18-hour seamless backup power</div>
                  <div className="text-muted-foreground text-sm">— Dr. Priya Menon, Chief Medical Officer</div>
                </div>
              </div>
            </div>

            {/* Bangalore IT Story */}
            <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-primary font-medium uppercase tracking-wide">Bangalore Technology</span>
                  </div>
                  
                  <blockquote className="text-2xl font-light text-foreground leading-relaxed">
                    "Our team delivered the project on time while our competitor missed their deadline due to power cuts."
                  </blockquote>
                </div>
                
                <div className="pt-6 border-t border-border/20 space-y-3">
                  <div className="text-primary font-medium text-lg">₹1.8 crore contract won</div>
                  <div className="text-muted-foreground text-sm">100% uptime during critical project phase</div>
                  <div className="text-muted-foreground text-sm">— Ravi Kumar, CTO, TechnoCore Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Every Dream Needs Energy */}
      <LazySection sectionName="dreams" className="py-40 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto px-8 text-center">
          
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  The Foundation
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-extralight text-foreground leading-[0.85] tracking-tight">
                Every dream
                <br />
                <span className="text-primary font-medium">needs energy.</span>
              </h2>
              
              <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Behind every breakthrough. Every innovation. Every success story.
                <br />
                <span className="text-foreground font-medium">There's reliable power making it possible.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 pt-16">
              
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-extralight text-foreground">Innovation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  R&D labs need uninterrupted power. Breakthrough discoveries can't wait for the grid to stabilize.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-extralight text-foreground">Precision</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Manufacturing tolerances measured in microns. One power fluctuation ruins months of work.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-extralight text-foreground">Time</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Market windows close fast. Delayed launches cost millions. Reliable power keeps you first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Refined Industry Case Studies */}
      <LazySection sectionName="case-studies" className="py-40 bg-muted/5">
        <div className="max-w-[1400px] mx-auto px-8">
          
          {/* Premium Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.25em]">
                Industry Solutions : Case Studies
              </span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-extralight tracking-[-0.01em] text-foreground leading-[0.85]">
              Proven performance
              <br />
              <span className="text-muted-foreground/60">across industries</span>
            </h2>
            
            <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Real-world deployments showcasing measurable impact and transformative results
            </p>
          </div>

          {/* Premium Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={industry.id} className="group cursor-pointer">
                
                {/* Refined Image Container */}
                <div className="relative mb-8 overflow-hidden rounded-2xl">
                  <div className="aspect-[5/3] relative bg-gradient-to-br from-muted/20 to-muted/5">
                    <img 
                      src={industry.backgroundImage}
                      alt={`${industry.title} case study`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Subtle Floating Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-background/95 backdrop-blur-2xl border border-muted-foreground/10 flex items-center justify-center">
                        <img 
                          src={industry.icon} 
                          alt=""
                          className="w-5 h-5 opacity-60"
                        />
                      </div>
                    </div>

                    {/* Refined Capacity Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-background/95 backdrop-blur-2xl border border-muted-foreground/10 text-foreground px-3 py-2 rounded-lg">
                        <div className="text-xs text-muted-foreground mb-0.5">Capacity</div>
                        <div className="font-mono text-sm font-medium">{industry.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Refined Content */}
                <div className="space-y-6">
                  
                  {/* Title with Subtle Animation */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <div className="w-8 h-px bg-muted-foreground/30 group-hover:bg-primary group-hover:w-12 transition-all duration-300"></div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground font-light leading-relaxed line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Compact Applications Grid */}
                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
                      Key Applications
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.slice(0, 3).map((app, i) => (
                        <div key={i} className="bg-muted/30 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-light">
                          {app}
                        </div>
                      ))}
                      {industry.applications.length > 3 && (
                        <div className="bg-muted/30 text-muted-foreground px-3 py-1.5 rounded-full text-sm font-light">
                          +{industry.applications.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subtle CTA */}
                  <div className="pt-2">
                    <div className="group/cta inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <span className="font-light text-sm">View case study</span>
                      <ArrowRight className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant Bottom CTA */}
          <div className="text-center mt-20 pt-12 border-t border-muted-foreground/10">
            <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
              <span className="font-light">Explore all case studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
       </LazySection>

      {/* Refined CTA */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8 text-center space-y-16">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-tight tracking-tight">
              Power that never fails you.
            </h2>
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your operations run continuously. Your costs drop immediately. Your business stays ahead.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-12 py-4 rounded-full font-medium text-lg">
              <Calculator className="mr-2 w-5 h-5" />
              Get specifications
            </Button>
            
            <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
              <span className="font-light">Schedule consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
       </section>
    </Layout>
  );
};

export default React.memo(Commercial);