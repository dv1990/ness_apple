import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LazySection } from "@/components/ui/lazy-section";
import { usePerformanceTracking } from "@/lib/performance-monitor";
import { ArrowRight, Calculator, Award, Users, Wrench, BookOpen, Download, Sparkles, CheckCircle, Target, Clock, Play } from "lucide-react";
import installerHero from "@/assets/installer-hero.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import configuratorTool from "@/assets/configurator-tool.jpg";

const Installers = () => {
  const { endTracking } = usePerformanceTracking('Installers');
  React.useEffect(() => endTracking, [endTracking]);

  const partnerTiers = [
    {
      tier: "Registered",
      icon: Users,
      description: "Entry-level partnership with essential tools and resources",
      features: [
        "Product catalog access",
        "Basic installation guides", 
        "Email support",
        "Standard pricing"
      ],
      highlight: false
    },
    {
      tier: "Certified",
      icon: Award,
      description: "Advanced partnership with enhanced benefits and priority support",
      features: [
        "Advanced configurator tools",
        "Technical training access",
        "Phone & chat support",
        "Volume pricing tiers",
        "Marketing co-op funds"
      ],
      highlight: true
    },
    {
      tier: "Elite",
      icon: Target,
      description: "Premium partnership for top-performing installers with exclusive benefits",
      features: [
        "Dedicated account manager",
        "On-site training programs", 
        "Priority technical support",
        "Best pricing tiers",
        "Lead generation support",
        "Certification programs"
      ],
      highlight: false
    }
  ];

  const resources = [
    {
      title: "Technical Documentation",
      description: "Comprehensive specifications and installation guidelines",
      icon: Download,
      action: "Download"
    },
    {
      title: "Configuration Tools", 
      description: "Advanced system sizing and proposal generation",
      icon: Calculator,
      action: "Launch Tool"
    },
    {
      title: "Training Portal",
      description: "Online courses and certification programs", 
      icon: BookOpen,
      action: "Access Portal"
    },
    {
      title: "Technical Support",
      description: "Expert assistance and troubleshooting guidance",
      icon: Wrench,
      action: "Get Support"
    }
  ];

  return (
    <Layout>
      {/* Apple-Grade Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <OptimizedImage 
            src={installerHero} 
            alt="Professional installer"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent w-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 pb-24 w-full">
          <div className="max-w-4xl space-y-12">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 text-white/70">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-xs font-mono uppercase tracking-[0.4em]">Partner Network</span>
            </div>

            {/* Headline */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl font-extralight text-white leading-[0.85] tracking-tight">
                Make your customers
                <br />
                <span className="text-primary font-light">never worry</span>
                <br />
                about power again
              </h1>

              <p className="text-xl font-light text-white/90 leading-relaxed max-w-2xl">
                Install NESS. Your customers get 48-hour backup with zero fire risk. You get zero callbacks and happy customers for life.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6 pt-4">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105">
                Become a partner
              </Button>
              
              <button className="group inline-flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </div>
                <span className="font-light">Watch overview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8">
          <div className="flex flex-col items-center space-y-2 text-white/50">
            <span className="text-xs font-light tracking-wider">Explore</span>
            <div className="w-px h-8 bg-white/20"></div>
            <ArrowRight className="w-3 h-3 rotate-90" />
          </div>
        </div>
      </section>

      {/* Partnership Excellence */}
      <LazySection sectionName="partnerships" className="py-40">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Section Header */}
          <div className="max-w-4xl mb-32 space-y-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Partnership Tiers
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-extralight tracking-tight text-foreground leading-[0.8]">
              Grow your business
              <br />
              <span className="text-muted-foreground/60">with confidence</span>
            </h2>
            
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
              Join thousands of installers who've transformed their business with NESS. Zero callbacks. Happy customers. Profitable growth.
            </p>
          </div>

          {/* Partnership Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div 
                key={tier.tier}
                className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  tier.highlight 
                    ? 'bg-foreground text-background shadow-2xl' 
                    : 'bg-background border border-border/50 hover:border-border'
                }`}
              >
                <div className="p-12 space-y-8">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    tier.highlight ? 'bg-background/10' : 'bg-muted/50'
                  }`}>
                    <tier.icon className={`w-8 h-8 ${
                      tier.highlight ? 'text-background' : 'text-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-3xl font-light mb-3 ${
                        tier.highlight ? 'text-background' : 'text-foreground'
                      }`}>
                        {tier.tier}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        tier.highlight ? 'text-background/70' : 'text-muted-foreground'
                      }`}>
                        {tier.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            tier.highlight ? 'bg-background/60' : 'bg-primary'
                          }`}></div>
                          <span className={`text-sm ${
                            tier.highlight ? 'text-background/80' : 'text-muted-foreground'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <Button 
                    className={`w-full rounded-xl transition-all duration-300 ${
                      tier.highlight 
                        ? 'bg-background text-foreground hover:bg-background/90' 
                        : 'bg-foreground text-background hover:bg-foreground/90'
                    }`}
                  >
                    {tier.highlight ? 'Apply now' : `Join as ${tier.tier}`}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Advanced Configurator Showcase */}
      <LazySection sectionName="configurator" className="py-40 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Smart Tools
                  </span>
                </div>

                <h2 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  Perfect sizing
                  <br />
                  every time
                </h2>

                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  Our AI configurator ensures every customer gets exactly what they need. Right-sized systems mean happy customers and no callbacks.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Intelligent Analysis</h3>
                  <div className="space-y-3">
                    {[
                      "Load pattern analysis",
                      "Optimal component sizing", 
                      "ROI calculations",
                      "Professional documentation"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-xl font-medium">
                <Calculator className="mr-2 w-5 h-5" />
                Launch configurator
              </Button>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src={configuratorTool}
                  alt="System configurator tool"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Resources Grid */}
      <LazySection sectionName="resources" className="py-40">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Header */}
          <div className="max-w-4xl mb-20 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Resources
              </span>
            </div>
            
            <h2 className="text-6xl font-extralight text-foreground leading-tight tracking-tight">
              Support that works
            </h2>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="group p-8 rounded-2xl border border-border/50 hover:border-border transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="space-y-6">
                  
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                    <resource.icon className="w-6 h-6 text-foreground" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <button className="group/btn inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span>{resource.action}</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Training Excellence */}
      <LazySection sectionName="training" className="py-40 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src={trainingWorkshop}
                  alt="Training workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Excellence
                  </span>
                </div>

                <h2 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  Training &
                  <br />
                  certification
                </h2>

                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  Develop expertise and differentiate your business with our comprehensive training programs and industry certifications.
                </p>
              </div>

              {/* Training Options */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Online Learning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Self-paced courses covering installation, commissioning, and maintenance procedures with certification upon completion.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Hands-on Workshops</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Practical training sessions at our facilities or your location for real-world skill development and certification.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-xl font-medium">
                  Start learning
                </Button>
                
                <button className="group inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <span className="text-sm">Schedule workshop</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
       </LazySection>

      {/* Premium CTA */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-8 text-center space-y-16">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-tight tracking-tight">
              Ready to accelerate your business?
            </h2>
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful installers building the future of energy infrastructure
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-12 py-4 rounded-full font-medium text-lg">
              Start partnership application
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

export default React.memo(Installers);