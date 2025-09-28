import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Building2, 
  Factory, 
  Zap, 
  Target,
  Sparkles 
} from "@/components/ui/icons";
import nessUnitsHero from "@/assets/ness-units-hero.png";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessCubeProduct from "@/assets/ness-cube-product.png";
import industryOffice from "@/assets/industry-office.png";
import industryManufacturing from "@/assets/industry-manufacturing.png";
import industryDGReplacement from "@/assets/industry-dg-replacement.png";
import industryEVFleet from "@/assets/industry-ev-fleet.png";

const CommercialPremium = () => {
  const products = [
    {
      id: "pod",
      name: "NESS POD",
      subtitle: "Architectural Energy",
      philosophy: "Where sophistication meets sustainability. Premium indoor systems that enhance your space while protecting your operations.",
      image: nessPodProduct,
      capacity: "100-500 kWh",
      environment: "Premium Indoor",
      applications: ["Executive offices", "Luxury retail", "Healthcare facilities", "Hospitality suites"],
      keyMetrics: [
        { label: "Noise Level", value: "< 35dB", desc: "Library quiet" },
        { label: "Footprint", value: "2m²", desc: "Minimal space" },
        { label: "Efficiency", value: "96.5%", desc: "Peak performance" },
        { label: "Response", value: "5ms", desc: "Instant backup" }
      ]
    },
    {
      id: "cube",
      name: "NESS CUBE",
      subtitle: "Industrial Strength",
      philosophy: "Engineered for extremes. Outdoor systems that deliver unwavering power in the harshest conditions.",
      image: nessCubeProduct,
      capacity: "1-10 MWh",
      environment: "Ruggedized Outdoor",
      applications: ["Manufacturing plants", "Data centers", "Grid replacement", "Utility-scale storage"],
      keyMetrics: [
        { label: "Weather Rating", value: "IP65", desc: "All-weather" },
        { label: "Scalability", value: "10 MWh", desc: "Enterprise scale" },
        { label: "Lifecycle", value: "25 years", desc: "Long-term value" },
        { label: "Availability", value: "99.97%", desc: "Mission critical" }
      ]
    }
  ];

  const caseStudies = [
    {
      id: "office",
      icon: industryOffice,
      title: "Executive Office Complex",
      location: "Mumbai Financial District",
      challenge: "Uninterrupted power for 24/7 trading operations",
      solution: "NESS POD 300kWh system with intelligent load balancing",
      results: ["Zero downtime in 18 months", "42% reduction in energy costs", "Complete UPS replacement"],
      capacity: "300 kWh"
    },
    {
      id: "manufacturing", 
      icon: industryManufacturing,
      title: "Precision Manufacturing",
      location: "Chennai Industrial Zone",
      challenge: "Eliminating production losses from grid instability",
      solution: "NESS CUBE 2MWh with predictive grid analytics",
      results: ["$2.4M saved in lost production", "98% grid independence", "Zero equipment damage"],
      capacity: "2 MWh"
    },
    {
      id: "dg-replacement",
      icon: industryDGReplacement, 
      title: "Clean DG Replacement",
      location: "Bangalore Tech Park",
      challenge: "Replacing 15 diesel generators with clean energy",
      solution: "NESS CUBE 5MWh modular deployment",
      results: ["Eliminated 2,400L diesel/day", "67% operational cost reduction", "Carbon neutral operations"],
      capacity: "5 MWh"
    },
    {
      id: "ev-fleets",
      icon: industryEVFleet,
      title: "EV Fleet Charging Hub", 
      location: "Delhi Logistics Center",
      challenge: "High-speed charging without grid strain",
      solution: "NESS CUBE 1MWh with solar integration",
      results: ["500 vehicles charged daily", "Peak demand reduced 80%", "Grid impact eliminated"],
      capacity: "1 MWh"
    }
  ];

  return (
    <Layout>
      {/* Cinematic Hero Section */}
      <section className="h-screen bg-gradient-to-br from-background via-background to-muted/10 flex items-center relative overflow-hidden">
        
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
        
        <div className="max-w-[1800px] mx-auto px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-32 items-center min-h-[80vh]">
            
            {/* Ultra-Premium Content */}
            <div className="lg:col-span-6 space-y-20">
              <div className="space-y-16">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="text-xs text-muted-foreground/40 font-light uppercase tracking-[0.4em] mb-3">
                      Commercial & Industrial
                    </div>
                    <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/40"></div>
                  </div>
                </div>

                <div className="space-y-12">
                  <h1 className="text-[clamp(3.5rem,8vw,10rem)] font-extralight text-foreground leading-[0.7] tracking-[-0.03em]">
                    Power
                    <br />
                    <span className="text-muted-foreground/30 italic">redefined</span>
                  </h1>
                  
                  <div className="space-y-8 max-w-lg">
                    <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent opacity-60"></div>
                    
                    <p className="text-2xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em]">
                      Two revolutionary systems. Infinite possibilities. 
                      <span className="text-foreground/50 italic block mt-2">
                        NESS POD for architectural elegance. NESS CUBE for industrial might.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-14 py-7 rounded-full text-xl font-light tracking-wide transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  Discover Your Solution
                </Button>
                
                <div className="flex items-center space-x-12 opacity-40">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm text-muted-foreground font-light">1,247 active installations</span>
                  </div>
                  <div className="text-xs text-muted-foreground/30">•</div>
                  <div className="text-sm text-muted-foreground font-light">42.8 MWh deployed</div>
                </div>
              </div>
            </div>

            {/* Immersive Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                {/* Hero Image with Premium Treatment */}
                <div className="aspect-[4/3] relative rounded-[3rem] overflow-hidden">
                  <img 
                    src={nessUnitsHero} 
                    alt="NESS Energy Systems Portfolio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1200 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-primary/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Sophisticated Floating Elements */}
                <div className="absolute -bottom-20 -left-20 backdrop-blur-3xl bg-background/85 border border-muted-foreground/5 rounded-3xl p-12 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Building2 className="w-8 h-8 text-blue-500" />
                      <Factory className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg font-light text-foreground">Two Systems</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Every Environment</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-16 -right-16 backdrop-blur-3xl bg-background/85 border border-muted-foreground/5 rounded-3xl p-10 shadow-2xl">
                  <div className="text-center space-y-3">
                    <div className="text-5xl font-extralight text-foreground tracking-tight">99.97%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Uptime</div>
                    <div className="w-12 h-px bg-primary mx-auto opacity-60"></div>
                  </div>
                </div>

                {/* Ambient Effects */}
                <div className="absolute -inset-40 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-56 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center space-y-32">
            
            {/* Core Philosophy */}
            <div className="max-w-6xl mx-auto space-y-20">
              <div className="space-y-10">
                <div className="inline-block">
                  <div className="text-xs text-muted-foreground/30 font-light uppercase tracking-[0.4em] mb-4">
                    Our Vision
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                </div>
                
                <h2 className="text-[clamp(3rem,6vw,8rem)] font-extralight text-foreground leading-[0.75] tracking-[-0.03em]">
                  Energy without
                  <br />
                  <span className="text-muted-foreground/30 italic">compromise</span>
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-12">
                <p className="text-3xl font-extralight text-muted-foreground leading-[1.5] tracking-[-0.02em]">
                  In boardrooms and factory floors. In hospitals and data centers. 
                  <span className="text-foreground/60 italic"> 
                    NESS systems don't just provide backup power—they redefine what's possible.
                  </span>
                </p>
                
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-40"></div>
              </div>
            </div>

            {/* Premium Performance Metrics */}
            <div className="grid md:grid-cols-4 gap-20 max-w-6xl mx-auto">
              {[
                { value: "60%", label: "Peak Reduction", desc: "Intelligent load optimization" },
                { value: "22mo", label: "ROI Timeline", desc: "Guaranteed payback period" },
                { value: "25yr", label: "System Life", desc: "Long-term value creation" },
                { value: "24/7", label: "Monitoring", desc: "Continuous optimization" }
              ].map((metric, i) => (
                <div key={i} className="text-center space-y-8 group cursor-pointer">
                  <div className="text-7xl font-extralight text-foreground tracking-tight group-hover:text-primary transition-colors duration-700">
                    {metric.value}
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-[0.3em]">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground/60 font-light leading-relaxed">
                      {metric.desc}
                    </div>
                    <div className="w-8 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-16 transition-all duration-500 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Product Showcase */}
      <section className="py-56 bg-background">
        <div className="max-w-[1800px] mx-auto px-12">
          
          {/* Section Introduction */}
          <div className="text-center max-w-5xl mx-auto mb-48 space-y-16">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-xs text-muted-foreground/30 font-light uppercase tracking-[0.4em] mb-4">
                  Product Portfolio
                </div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              
              <h2 className="text-[clamp(3rem,6vw,7rem)] font-extralight tracking-[-0.02em] text-foreground leading-[0.8]">
                Two philosophies.
                <br />
                <span className="text-muted-foreground/30 italic">One mission.</span>
              </h2>
            </div>
            
            <p className="text-2xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em] max-w-3xl mx-auto">
              Every space has its own energy personality. NESS POD speaks the language of elegance. 
              NESS CUBE commands with industrial authority.
            </p>
          </div>

          {/* Premium Product Grid */}
          <div className="space-y-56">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`grid lg:grid-cols-12 gap-32 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Visual */}
                <div className={`lg:col-span-6 ${
                  index % 2 === 1 ? 'lg:col-start-7' : ''
                }`}>
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-muted/5 via-background to-muted/10 rounded-[4rem] p-20 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 ease-out relative z-10"
                      />
                      
                      {/* Sophisticated Overlays */}
                      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute inset-0 bg-gradient-conic from-primary/3 via-transparent to-primary/3 opacity-40"></div>
                    </div>
                    
                    {/* Environment Badge */}
                    <div className="absolute top-8 left-8">
                      <div className="backdrop-blur-2xl bg-background/90 border border-muted-foreground/10 rounded-2xl px-6 py-3">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
                          {product.environment}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Philosophy */}
                <div className={`lg:col-span-6 space-y-16 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  
                  {/* Product Identity */}
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-6">
                        <div className={`w-16 h-16 rounded-3xl ${
                          product.id === 'pod' ? 'bg-blue-500/10' : 'bg-green-500/10'
                        } flex items-center justify-center`}>
                          {product.id === 'pod' ? 
                            <Building2 className="w-8 h-8 text-blue-600" /> : 
                            <Factory className="w-8 h-8 text-green-600" />
                          }
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-6xl font-extralight tracking-tight text-foreground">
                            {product.name}
                          </h3>
                          <div className="text-lg text-muted-foreground/60 font-light italic">
                            {product.subtitle}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                    
                    <p className="text-xl font-extralight text-muted-foreground leading-[1.7] tracking-[-0.01em] max-w-2xl">
                      {product.philosophy}
                    </p>
                  </div>

                  {/* Technical Excellence */}
                  <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      {product.keyMetrics.map((metric, i) => (
                        <div key={i} className="space-y-4 group cursor-pointer">
                          <div className="space-y-2">
                            <div className="text-3xl font-extralight text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
                              {metric.label}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground/60 font-light">
                            {metric.desc}
                          </div>
                          <div className="w-6 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-10 transition-all duration-300"></div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <div className="text-xs text-muted-foreground/60 uppercase tracking-[0.3em]">
                        Applications
                      </div>
                      <div className="space-y-3">
                        {product.applications.map((app, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-1 h-1 rounded-full bg-primary opacity-60"></div>
                            <span className="text-foreground/70 font-light">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Exploration CTA */}
                  <button className="group inline-flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors duration-500">
                    <span className="font-light text-lg">Explore {product.name}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Case Studies */}
      <section className="py-56 bg-gradient-to-b from-muted/5 to-background">
        <div className="max-w-[1600px] mx-auto px-12">
          
          {/* Premium Section Header */}
          <div className="text-center max-w-5xl mx-auto mb-40 space-y-16">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-xs text-muted-foreground/30 font-light uppercase tracking-[0.4em] mb-4">
                  Success Stories : Real Impact
                </div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              
              <h2 className="text-[clamp(3rem,6vw,7rem)] font-extralight tracking-[-0.02em] text-foreground leading-[0.8]">
                Transforming
                <br />
                <span className="text-muted-foreground/30 italic">industries</span>
              </h2>
            </div>
            
            <p className="text-xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em] max-w-3xl mx-auto">
              From corporate boardrooms to manufacturing floors, NESS systems are redefining 
              what's possible when power meets purpose.
            </p>
          </div>

          {/* Premium Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="group cursor-pointer">
                
                {/* Sophisticated Case Study Card */}
                <div className="relative backdrop-blur-xl bg-background/30 border border-muted-foreground/10 rounded-3xl p-12 hover:bg-background/50 transition-all duration-700 hover:shadow-2xl">
                  
                  {/* Study Header */}
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <img src={study.icon} alt={`${study.title} case study icon`} className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-extralight text-foreground">
                          {study.capacity}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          System Scale
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                        {study.title}
                      </h3>
                      <div className="text-sm text-muted-foreground/60 font-light">
                        {study.location}
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-8 mb-12">
                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground/60 uppercase tracking-[0.3em]">
                        Challenge
                      </div>
                      <p className="text-foreground/80 font-light leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground/60 uppercase tracking-[0.3em]">
                        Solution
                      </div>
                      <p className="text-foreground/80 font-light leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-[0.3em]">
                      Results
                    </div>
                    <div className="space-y-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-foreground/70 font-light text-sm">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevated Engagement */}
      <section className="py-40 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-[1400px] mx-auto px-12 text-center">
          
          <div className="space-y-32">
            {/* Sophisticated Introduction */}
            <div className="space-y-16">
              <div className="inline-block">
                <div className="text-xs text-muted-foreground/30 font-light uppercase tracking-[0.4em] mb-4">
                  Ready to Transform
                </div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>

              <h4 className="text-6xl font-extralight text-foreground leading-tight tracking-[-0.02em] max-w-4xl mx-auto">
                Your energy future
                <br />
                <span className="text-muted-foreground/40 italic">starts here</span>
              </h4>
              
              <p className="text-xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em] max-w-2xl mx-auto">
                Connect with our energy architects to design a system 
                that transforms your operations and defines your competitive edge.
              </p>
            </div>

            {/* Premium Engagement */}
            <div className="space-y-16">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-20 py-8 rounded-full text-2xl font-light tracking-wide transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl">
                Schedule Consultation
              </Button>
              
              <div className="flex items-center justify-center space-x-16 opacity-50">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-light">Enterprise-grade security</span>
                </div>
                <div className="text-xs text-muted-foreground/30">•</div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-light">Customized solutions</span>
                </div>
                <div className="text-xs text-muted-foreground/30">•</div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-light">25-year partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialPremium;