import Layout from "@/components/Layout";
import { MagneticButton } from "@/components/EnhancedInteractions";
import { Shield, Clock, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { WebPImage } from "@/components/ui/webp-image";

// Import images
import batteryTechnology from "@/assets/battery-technology.jpg";
import rdLaboratory from "@/assets/rd-laboratory.jpg";
import systemArchitecture from "@/assets/system-architecture.jpg";

const TechnologyEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Simple, Dramatic, Focused */}
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32 w-full">
          <div className="text-center space-y-16">
            
            {/* Simple headline */}
            <div className="opacity-0 animate-fade-in">
              <h1 className="font-display text-7xl md:text-9xl font-extralight text-foreground leading-[0.85] tracking-tight">
                Safe by
                <br />
                <span className="text-primary">design</span>
              </h1>
            </div>

            {/* Hero Metrics - Make them CINEMATIC */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-3 gap-8 md:gap-16">
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-extralight text-primary tabular-nums">
                    10M+
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                    Data Points Collected
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-extralight text-foreground tabular-nums">
                    100MWh+
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                    Energy Delivered
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-7xl md:text-8xl font-extralight text-foreground tabular-nums">
                    99%
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* One simple message */}
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zero fire risk. Lasts 15 years. Powers your family's future.
            </p>

            {/* ONE clear CTA */}
            <Link to="/contact">
              <MagneticButton variant="primary" size="lg" className="text-lg px-12 py-6">
                See It In Action
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Core Truths - Visual, Emotional, Simple */}
      <section className="py-40 bg-muted/10">
        <div className="max-w-[1400px] mx-auto px-8">
          
          {/* Truth 1: Safety */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Sleep easy.
                <br />
                Every night.
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                LiFePO4 chemistry makes thermal runaway physically impossible. 
                Not unlikely. Impossible.
              </p>
              <div className="text-7xl font-extralight text-primary">
                0
              </div>
              <p className="text-lg text-muted-foreground">
                Fire incidents in 15,000+ installations
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <WebPImage
                src={batteryTechnology}
                alt="NESS Battery Technology"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Truth 2: Longevity */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <WebPImage
                src={rdLaboratory}
                alt="NESS R&D Laboratory"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Install once.
                <br />
                Use for 15 years.
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                A battery that outlasts your kid's childhood. 
                Tested on 30,000+ cells over multiple years.
              </p>
              <div className="text-7xl font-extralight text-primary">
                6000+
              </div>
              <p className="text-lg text-muted-foreground">
                Charge cycles at 80% depth
              </p>
            </div>
          </div>

          {/* Truth 3: Pride */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Feel proud.
                <br />
                About your impact.
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Clean technology that makes you feel good about your family's footprint. 
                Every day.
              </p>
              <div className="text-7xl font-extralight text-primary">
                Zero
              </div>
              <p className="text-lg text-muted-foreground">
                Carbon emissions from your energy
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <WebPImage
                src={systemArchitecture}
                alt="NESS System Architecture"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* One Simple Comparison - No tables, just truth */}
      <section className="py-40 bg-background">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="space-y-16">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                The truth about batteries
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {/* Lead Acid */}
                <div className="space-y-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Lead Acid
                  </div>
                  <div className="text-6xl font-extralight text-muted-foreground">
                    3-5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years lifespan
                  </div>
                </div>

                {/* Li-ion */}
                <div className="space-y-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Li-ion NMC
                  </div>
                  <div className="text-6xl font-extralight text-muted-foreground">
                    5-8
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years lifespan
                  </div>
                </div>

                {/* NESS */}
                <div className="space-y-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                    NESS LiFePO4
                  </div>
                  <div className="text-6xl font-extralight text-primary">
                    15+
                  </div>
                  <div className="text-sm text-foreground font-medium">
                    Years lifespan
                  </div>
                </div>
              </div>

              <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
                Chemistry matters. Choose technology that lasts.
              </p>
            </div>
        </div>
      </section>

      {/* For Installers - Simple, Focused */}
      <section className="py-40 bg-muted/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                For installers who care
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Install premium systems. Build your reputation. 
                Sleep well knowing your customers are safe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-12 space-y-6 text-center bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-7xl font-extralight text-primary">
                  2-4
                </div>
                <p className="text-lg text-muted-foreground">
                  Hours to install
                </p>
              </div>

              <div className="p-12 space-y-6 text-center bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-7xl font-extralight text-primary">
                  99.8%
                </div>
                <p className="text-lg text-muted-foreground">
                  First-time success rate
                </p>
              </div>

              <div className="p-12 space-y-6 text-center bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-7xl font-extralight text-primary">
                  Zero
                </div>
                <p className="text-lg text-muted-foreground">
                  Callbacks reported
                </p>
              </div>
            </div>

            <Link to="/installers">
              <MagneticButton variant="secondary" size="lg">
                Become a Certified Installer
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - One clear action */}
      <section className="py-40 bg-background">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-light text-foreground leading-tight">
                Experience it yourself
              </h2>
              <p className="text-2xl font-light text-muted-foreground max-w-2xl mx-auto">
                See the technology. Touch the quality. Feel the difference.
              </p>
            </div>

            <Link to="/contact">
              <MagneticButton variant="primary" size="lg" className="text-lg px-16 py-8">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyEnhanced;
