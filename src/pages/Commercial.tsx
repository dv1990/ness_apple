import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Play, TrendingUp, Clock, CheckCircle, Target, Sparkles, Building2, Factory } from "lucide-react";
import nessUnitsHero from "@/assets/ness-units-hero.png";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessCubeProduct from "@/assets/ness-cube-product.png";
import industryOffice from "@/assets/industry-office.png";
import industryManufacturing from "@/assets/industry-manufacturing.png";
import industryDGReplacement from "@/assets/industry-dg-replacement.png";
import industryEVFleet from "@/assets/industry-ev-fleet.png";
import officeInterior from "@/assets/office-interior.jpg";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import dgReplacement from "@/assets/dg-replacement.jpg";
import evCharging from "@/assets/ev-charging.jpg";

const Commercial = () => {
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
      {/* Minimalist Hero Section */}
      <section className="min-h-screen bg-background flex items-center">
        <div className="max-w-[1600px] mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  Commercial & Industrial
                </span>
              </div>

              <div className="space-y-8">
                <h1 className="font-sf text-6xl md:text-8xl font-extralight text-foreground leading-[0.8] tracking-tight">
                  Two solutions.
                  <br />
                  <span className="text-muted-foreground/60">Every need.</span>
                </h1>
                
                <p className="text-xl font-light text-muted-foreground max-w-lg leading-relaxed">
                  NESS POD for premium indoor spaces. NESS CUBE for industrial outdoor deployments. 
                  Built for India's energy transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium text-lg">
                  Explore Products
                </Button>
                <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Play className="w-5 h-5" />
                  <span className="font-light">Watch Overview</span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img 
                  src={nessUnitsHero} 
                  alt="NESS Battery Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30"></div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-xl border border-muted-foreground/10 rounded-2xl p-6 space-y-3">
                <div className="text-2xl font-extralight text-foreground">1,247</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Active Installations</div>
              </div>

              <div className="absolute -top-8 -right-8 bg-background/95 backdrop-blur-xl border border-muted-foreground/10 rounded-2xl p-6 space-y-3">
                <div className="text-2xl font-extralight text-foreground">42.8 MWh</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Energy Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="py-40 bg-muted/10">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Product Lines
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-extralight tracking-[-0.01em] text-foreground leading-[0.75]">
              Engineered for
              <br />
              <span className="text-muted-foreground/60">every environment</span>
            </h2>
          </div>

          {/* Products Grid */}
          <div className="space-y-40">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`grid lg:grid-cols-12 gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Visual */}
                <div className={`lg:col-span-6 ${
                  index % 2 === 1 ? 'lg:col-start-7' : ''
                }`}>
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-background to-muted/20 rounded-3xl p-12 flex items-center justify-center">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-background/95 backdrop-blur-2xl border border-muted-foreground/10 rounded-xl px-4 py-2">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{product.tagline}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className={`lg:col-span-6 space-y-12 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  
                  {/* Product Name */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl ${
                        product.useCase === 'indoor' ? 'bg-blue-500/10' : 'bg-green-500/10'
                      } flex items-center justify-center`}>
                        {product.useCase === 'indoor' ? 
                          <Building2 className="w-6 h-6 text-blue-600" /> : 
                          <Factory className="w-6 h-6 text-green-600" />
                        }
                      </div>
                      <h3 className="text-5xl font-extralight tracking-tight text-foreground">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="w-12 h-px bg-primary"></div>
                    
                    <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-xl">
                      {product.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                        System Capacity
                      </div>
                      <div className="text-3xl font-extralight text-foreground">
                        {product.capacity}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                        Key Features
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                            <span className="text-foreground font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                        Applications
                      </div>
                      <div className="space-y-2">
                        {product.applications.map((app, i) => (
                          <div key={i} className="text-foreground/80 font-light">
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span className="font-light">Explore {product.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated Metrics */}
      <section className="py-40 bg-background">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Asymmetrical Layout */}
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Performance Metrics
                  </span>
                </div>

                <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  Measurable
                  <br />
                  <span className="text-muted-foreground/60">impact</span>
                </h2>

                <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-lg">
                  Every system is engineered for maximum efficiency with real-time optimization and predictive analytics
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full font-medium">
                  Technical specifications
                </Button>
              </div>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid md:grid-cols-2 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="group space-y-6 p-8 rounded-2xl hover:bg-muted/20 transition-colors duration-500 cursor-pointer">
                    <div className="space-y-2">
                      <div className="text-5xl font-extralight text-foreground tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                      {metric.description}
                    </div>
                    
                    <div className="w-8 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Industry Case Studies */}
      <section className="py-40 bg-muted/5">
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
      </section>

      {/* Refined CTA */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8 text-center space-y-16">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-tight tracking-tight">
              Transform your energy infrastructure
            </h2>
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join industry leaders who have revolutionized their operations with NESS systems
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

export default Commercial;