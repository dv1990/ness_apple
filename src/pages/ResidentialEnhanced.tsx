import Layout from "@/components/Layout";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  MagneticButton
} from "@/components/EnhancedInteractions";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Heart
} from "lucide-react";
import { useState } from "react";

// Import images
import heroImage from "@/assets/hero-homeowners.jpg";
import productImage from "@/assets/ness-pro-product.png";
import officeInterior from "@/assets/office-interior.jpg";
import greenFutureCity from "@/assets/green-future-city.jpg";

const ResidentialEnhanced = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  
  const [powerUsage, setPowerUsage] = useState([300]);

  // Calculate savings based on inputs
  const monthlyBill = powerUsage[0] * 8 * 30 / 1000; // Approx calculation
  const yearlySavings = monthlyBill * 12 * 0.7; // 70% savings

  return (
    <Layout>
      {/* Hero Section - Steve Jobs Style: Pure Focus */}
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        
        <div className="max-w-7xl mx-auto px-8 text-center">
          
          {/* Single Focused Message */}
          <div className="space-y-12 max-w-4xl mx-auto">
            
            {/* Simple Status Indicator */}
            <div className="inline-flex items-center space-x-3 opacity-60">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-light text-muted-foreground tracking-wider">
                For the modern Indian home
              </span>
            </div>

            {/* Powerful, Clear Headline */}
            <h1 className="text-7xl md:text-9xl font-thin text-foreground leading-[0.85] tracking-tight">
              Power that
              <br />
              <span className="text-primary font-light">never fails</span>
            </h1>
            
            {/* Single Benefit Statement */}
            <p className="text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The luxury of never worrying. The legacy of clean energy for your children.
            </p>

            {/* Single Call to Action */}
            <div className="pt-8">
              <MagneticButton
                variant="primary"
                size="lg"
                className="text-lg px-12 py-4"
                onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get NESS Home
              </MagneticButton>
            </div>
          </div>

          {/* Minimal Product Showcase */}
          <div className="mt-20">
            <AnimatedCard delay={600} className="max-w-sm mx-auto bg-card/5 border-0">
              <div className="p-8">
                <img 
                  src={productImage} 
                  alt="NESS PRO Home Battery System" 
                  className="w-full h-auto mb-6"
                />
                <div className="space-y-3">
                  <div className="text-4xl font-thin text-primary">48 hours</div>
                  <div className="text-sm text-muted-foreground font-light">
                    Complete peace of mind
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Steve Jobs Style: Visual Story, Not Lists */}
      <section className="py-32 bg-background relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-8">
          
          {/* Emotional Question */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-thin text-foreground mb-8 tracking-tight leading-[0.9]">
              What if your choices
              <br />
              <span className="text-primary">defined tomorrow?</span>
            </h2>
            <p className="text-xl font-light text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
              Every clean energy choice you make today creates a better world for your children. 
              This is how luxury meets legacy.
            </p>
          </div>

          {/* Visual Comparison - Simple & Emotional */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Before: Visual Chaos */}
            <AnimatedCard delay={200} className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-red-100/20 to-red-200/10 rounded-3xl p-12 flex flex-col justify-center items-center text-center border border-red-200/20">
                
                {/* Stress Visual */}
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-red-500/80 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-4">Today</h3>
                  <p className="text-lg font-light text-red-600 leading-relaxed">
                    Dependence on coal power.
                    <br />
                    Environmental guilt.
                    <br />
                    No legacy for children.
                  </p>
                </div>

                {/* Scattered Elements - Visual Chaos */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-red-400/30 rounded-full animate-ping"></div>
                <div className="absolute top-16 right-12 w-2 h-2 bg-red-500/40 rounded-full"></div>
                <div className="absolute bottom-12 left-16 w-3 h-3 bg-red-400/50 rounded-full animate-pulse"></div>
              </div>
            </AnimatedCard>

            {/* After: Visual Harmony */}
            <AnimatedCard delay={400} className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 flex flex-col justify-center items-center text-center border border-primary/10">
                
                {/* Peace Visual */}
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-4">With NESS</h3>
                  <p className="text-lg font-light text-primary leading-relaxed">
                    Clean energy luxury.
                    <br />
                    Environmental pride.
                    <br />
                    A better world for your children.
                  </p>
                </div>

                {/* Organized Elements - Visual Harmony */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-primary/60 rounded-full"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-primary/60 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary/60 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary/60 rounded-full"></div>
              </div>
            </AnimatedCard>
          </div>

          {/* Simple Truth */}
          <div className="text-center mt-24">
            <AnimatedCard delay={600}>
              <p className="text-2xl font-thin text-muted-foreground">
                The future is too important to compromise. 
                Clean energy is the new luxury.
              </p>
            </AnimatedCard>
          </div>

        </div>
      </section>

      {/* Steve Jobs Style: One Simple Truth */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          {/* Single Focused Question */}
          <h2 className="text-6xl md:text-8xl font-thin text-foreground mb-16 tracking-tight leading-[0.85]">
            What's 15 years
            <br />
            <span className="text-primary">of freedom</span>
            <br />
            <span className="text-muted-foreground/70">worth to you?</span>
          </h2>

          {/* Three Simple Truths */}
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto mb-20">
            
            {/* Truth 1: No More Outages */}
            <AnimatedCard className="p-12 bg-card/5 border-0 text-center">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-thin text-foreground mb-4">No more outages</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Power cuts become a thing of the past. Your life continues uninterrupted.
              </p>
            </AnimatedCard>

            {/* Truth 2: Rising Tariff Protection */}
            <AnimatedCard className="p-12 bg-card/5 border-0 text-center">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-thin text-foreground mb-4">Tariff protection</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Lock in today's rates. While electricity prices rise, your costs stay predictable.
              </p>
            </AnimatedCard>

            {/* Truth 3: Clean Air Legacy */}
            <AnimatedCard className="p-12 bg-card/5 border-0 text-center">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-thin text-foreground mb-4">Clean air legacy</h3>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Every day, cleaner air for your children. A gift that keeps giving.
              </p>
            </AnimatedCard>

          </div>

          {/* The Emotional Truth */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-2xl font-light text-primary italic leading-relaxed">
              "Energy independence isn't just about power.
              <br />
              It's about peace of mind."
            </p>
          </div>

          {/* Single Call to Action */}
          <div className="mt-16">
            <MagneticButton
              variant="primary"
              size="lg"
              className="text-lg px-12 py-4"
              onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your NESS System
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* It Just Works - Jony Ive Redesign */}
      <section className="relative py-60 bg-background overflow-hidden">
        
        {/* Ambient background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-energy/[0.02] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          
          {/* The Promise - Pure Typography */}
          <div className="mb-60">
            <div className="space-y-4">
              <h2 className="font-display text-8xl md:text-[12rem] font-extralight text-foreground leading-[0.75] tracking-[-0.04em]">
                It just
              </h2>
              <h2 className="font-display text-8xl md:text-[12rem] font-extralight text-energy leading-[0.75] tracking-[-0.04em]">
                works
              </h2>
            </div>
          </div>

          {/* The Narrative - Horizontal Flow with Transitions */}
          <div className="grid lg:grid-cols-3 gap-16 mb-60">
            
            {/* Moment 1: The Interruption */}
            <div className="relative">
              <div className="max-w-sm mx-auto">
                <div className="space-y-8">
                  {/* Visual Element - Clean geometric */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 border border-muted-foreground/20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out">
                        <div className="w-10 h-10 bg-muted-foreground/10 rounded-full animate-pulse"></div>
                      </div>
                      {/* Animated line extending right on large screens */}
                      <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-muted-foreground/20 to-transparent -translate-y-px hidden lg:block animate-fade-in"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-center animate-fade-in">
                    <h3 className="font-display text-2xl md:text-3xl font-extralight text-foreground leading-tight tracking-tight">
                      Power interruption
                    </h3>
                    <p className="text-base font-light text-muted-foreground leading-relaxed">
                      The moment the grid fails
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moment 2: The Transition */}
            <div className="relative">
              <div className="max-w-sm mx-auto">
                <div className="space-y-8">
                  {/* Visual Element - Seamless transition */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 border border-energy/40 rounded-full flex items-center justify-center bg-energy/[0.05] transition-all duration-1000 ease-in-out hover:bg-energy/[0.1] hover:scale-105">
                        <div className="w-3 h-3 bg-energy rounded-full animate-pulse"></div>
                      </div>
                      {/* Connection line with animation - horizontal on large screens */}
                      <div className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-energy/40 to-transparent -translate-y-px hidden lg:block animate-slide-in-right"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-center animate-fade-in">
                    <h3 className="font-display text-2xl md:text-3xl font-extralight text-foreground leading-tight tracking-tight">
                      Seamless handover
                    </h3>
                    <p className="text-base font-light text-muted-foreground leading-relaxed">
                      NESS responds in 10 milliseconds
                    </p>
                    
                    {/* Timing indicator */}
                    <div className="pt-2">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-energy/[0.05] rounded-full border border-energy/10 animate-scale-in">
                        <div className="w-1.5 h-1.5 bg-energy rounded-full animate-pulse"></div>
                        <span className="text-xs font-light text-energy tracking-wide">10ms response</span>
                      </div>
                    </div>

                    {/* Appliance Icons - No Compromise */}
                    <div className="pt-6 animate-fade-in">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-energy/[0.03] border border-energy/5 hover:bg-energy/[0.05] transition-all duration-300">
                            <div className="w-6 h-6 rounded-md bg-energy/10 flex items-center justify-center">
                              <div className="w-3 h-3 bg-energy/60 rounded-sm"></div>
                            </div>
                            <span className="text-xs text-muted-foreground font-light">AC</span>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-energy/[0.03] border border-energy/5 hover:bg-energy/[0.05] transition-all duration-300">
                            <div className="w-6 h-6 rounded-md bg-energy/10 flex items-center justify-center">
                              <div className="w-3 h-2 bg-energy/60 rounded-sm"></div>
                            </div>
                            <span className="text-xs text-muted-foreground font-light">Washing</span>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-energy/[0.03] border border-energy/5 hover:bg-energy/[0.05] transition-all duration-300">
                            <div className="w-6 h-6 rounded-md bg-energy/10 flex items-center justify-center">
                              <div className="w-2 h-3 bg-energy/60 rounded-full"></div>
                            </div>
                            <span className="text-xs text-muted-foreground font-light">Hair Dryer</span>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-energy/[0.03] border border-energy/5 hover:bg-energy/[0.05] transition-all duration-300">
                            <div className="w-6 h-6 rounded-md bg-energy/10 flex items-center justify-center">
                              <div className="w-3 h-1.5 bg-energy/60 rounded-sm"></div>
                            </div>
                            <span className="text-xs text-muted-foreground font-light">Iron</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm font-light text-energy tracking-wide">
                            No compromise
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Moment 3: The Invisibility */}
            <div className="relative">
              <div className="max-w-sm mx-auto">
                <div className="space-y-8">
                  {/* Visual Element - Perfect circle representing completion */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-energy/20 to-primary/20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out hover:scale-110">
                        <div className="w-1 h-1 bg-foreground rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-center animate-fade-in">
                    <h3 className="font-display text-2xl md:text-3xl font-extralight text-foreground leading-tight tracking-tight">
                      Invisible excellence
                    </h3>
                    <p className="text-base font-light text-muted-foreground leading-relaxed">
                      You never notice the transition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Philosophy - Jony Ive's Design Truth */}
          <div className="space-y-16 max-w-3xl mx-auto">
            
            {/* Core principle */}
            <div className="space-y-8">
              <p className="font-display text-3xl md:text-4xl font-extralight text-foreground leading-relaxed tracking-tight">
                True simplicity is not the absence of complexity,
              </p>
              <p className="font-display text-3xl md:text-4xl font-extralight text-energy leading-relaxed tracking-tight">
                but the mastery of it.
              </p>
            </div>
            
            {/* The details */}
            <div className="pt-16 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-light">No buttons</div>
                  <div className="w-12 h-px bg-muted-foreground/20 mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-light">No switches</div>
                  <div className="w-12 h-px bg-muted-foreground/20 mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-light">No thought</div>
                  <div className="w-12 h-px bg-muted-foreground/20 mx-auto"></div>
                </div>
              </div>
            </div>
            
            {/* The emotion - Apple's signature move */}
            <div className="pt-20">
              <div className="space-y-8">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-energy/20 to-transparent mx-auto"></div>
                <p className="text-xl font-light text-muted-foreground leading-relaxed italic">
                  Just the profound satisfaction of technology
                  <br />
                  that truly serves you.
                </p>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-energy/20 to-transparent mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steve Jobs Style: Powerful Single Message */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={greenFutureCity} 
            alt="Green future city with sustainable energy and clean environment for children" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-thin text-white leading-[0.85] tracking-tight">
              The world you
              <br />
              <span className="text-white/90 font-light">leave behind</span>
            </h2>
            <p className="text-2xl font-light text-white/90 leading-relaxed">
              Every breath your children take will be cleaner because of the choice you make today.
              <br />
              <span className="text-white/70 text-xl italic mt-4 block">This is how love looks like in action.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Steve Jobs Style: Authentic Stories, Not Marketing */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-thin text-foreground mb-8 tracking-tight leading-[0.9]">
              Real families.
              <br />
              <span className="text-muted-foreground/50">Real stories.</span>
            </h2>
          </div>

          {/* Single Featured Story */}
          <AnimatedCard className="max-w-2xl mx-auto p-12 bg-card/5 border-0 text-center">
            <div className="space-y-8">
              
              {/* Simple Quote */}
              <div className="text-4xl text-muted-foreground/30">"</div>
              <p className="text-2xl font-light text-foreground leading-relaxed">
                Three months with NESS PRO, and I finally sleep peacefully knowing I'm not contributing to coal pollution. My children breathe cleaner air, and I feel genuinely good about our energy choices.
              </p>
              <div className="text-4xl text-muted-foreground/30 rotate-180">"</div>
              
              {/* Simple Attribution */}
              <div className="pt-8 border-t border-border/20">
                <div className="text-lg font-light text-muted-foreground">
                  Rajesh Sharma, Gurgaon
                </div>
                <div className="text-sm text-muted-foreground/60 mt-2">
                  Saves ₹18,000 yearly • Zero carbon footprint • Priceless peace of mind
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Simple Social Proof */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 opacity-60">
              <div className="text-sm text-muted-foreground">1,000+ families</div>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
              <div className="text-sm text-muted-foreground">4.9/5 rating</div>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
              <div className="text-sm text-muted-foreground">10-year warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steve Jobs Style: One Perfect Choice - Horizontal Layout */}
      <section id="configurator" className="py-16 bg-muted/5">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-thin text-foreground leading-[0.9] tracking-tight">
              One system. <span className="text-primary">Perfect for you.</span>
            </h2>
          </div>

          {/* Horizontal Product Layout */}
          <AnimatedCard className="p-8 bg-card/5 border-0">
            <div className="flex items-center justify-between gap-12">
              
              {/* Product Visual */}
              <div className="flex-shrink-0">
                <img 
                  src={productImage} 
                  alt="NESS PRO Home Battery System" 
                  className="w-40 h-auto"
                />
              </div>

              {/* Product Info & Benefits */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-light text-foreground mb-6">NESS PRO</h3>
                <div className="flex items-center gap-12">
                  <div>
                    <div className="text-3xl font-thin text-primary">48hrs</div>
                    <div className="text-sm text-muted-foreground">Backup power</div>
                  </div>
                  <div>
                    <div className="text-3xl font-thin text-primary">10ms</div>
                    <div className="text-sm text-muted-foreground">Switch time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-thin text-primary">10yr</div>
                    <div className="text-sm text-muted-foreground">Warranty</div>
                  </div>
                </div>
              </div>

              {/* Single Action */}
              <div className="flex-shrink-0 text-center">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="text-lg px-12 py-4"
                >
                  Get NESS PRO
                </MagneticButton>
                <div className="text-sm text-muted-foreground mt-4">
                  Starting at ₹3.5L • Free installation
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Steve Jobs Style: Eliminate Decision Fatigue */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          <div className="space-y-20">
            <h2 className="text-5xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-tight">
              Ready for
              <br />
              <span className="text-primary">uninterrupted life?</span>
            </h2>

            {/* Single, Clear Action */}
            <div className="space-y-8">
              <MagneticButton 
                variant="primary" 
                size="lg"
                className="text-xl px-16 py-6"
              >
                Get NESS Home
              </MagneticButton>
              
              <div className="space-y-2">
                <p className="text-lg font-light text-muted-foreground">
                  Free consultation • Expert installation • 10-year warranty
                </p>
                <p className="text-sm text-muted-foreground/60">
                  1,000+ families already trust NESS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentialEnhanced;