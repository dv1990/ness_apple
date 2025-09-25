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

      {/* Steve Jobs Style: The Moment of Truth */}
      <section className="py-40 bg-background relative overflow-hidden">
        
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          
          {/* The Promise - Bigger, Bolder */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-9xl font-thin text-foreground leading-[0.8] tracking-[-0.02em] mb-8">
              It just
            </h2>
            <h2 className="text-7xl md:text-9xl font-thin text-primary leading-[0.8] tracking-[-0.02em]">
              works
            </h2>
          </div>

          {/* The Story - More Dramatic Spacing */}
          <div className="space-y-20 mb-32">
            
            {/* Step 1: The Problem - Larger, More Dramatic */}
            <AnimatedCard delay={300} className="transform">
              <div className="flex items-center justify-center space-x-8 py-12">
                <div className="text-6xl opacity-70">⚡</div>
                <div className="text-3xl md:text-4xl font-thin text-muted-foreground">Power goes out</div>
              </div>
            </AnimatedCard>

            {/* Dramatic Pause */}
            <div className="flex justify-center py-8">
              <div className="w-0.5 h-16 bg-gradient-to-b from-muted/30 to-primary/50"></div>
            </div>

            {/* Step 2: The Magic - Hero Moment */}
            <AnimatedCard delay={600} className="transform">
              <div className="flex items-center justify-center space-x-8 py-12">
                <div className="text-6xl">✨</div>
                <div className="text-3xl md:text-4xl font-thin text-foreground">NESS takes over</div>
                <div className="text-lg font-light text-primary px-4 py-2 rounded-full bg-primary/10">
                  in 10ms
                </div>
              </div>
            </AnimatedCard>

            {/* Another Dramatic Pause */}
            <div className="flex justify-center py-8">
              <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-energy/50"></div>
            </div>

            {/* Step 3: The Result - Pure Joy */}
            <AnimatedCard delay={900} className="transform">
              <div className="flex items-center justify-center space-x-8 py-12">
                <div className="text-6xl">🏠</div>
                <div className="text-3xl md:text-4xl font-thin text-energy">You never notice</div>
              </div>
            </AnimatedCard>
          </div>

          {/* The Truth - Simplified, More Powerful */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="text-2xl font-light text-muted-foreground leading-relaxed">
              No switches to flip.
              <br />
              No buttons to press.
              <br />
              No coal dependency.
            </p>
            
            {/* The Emotional Hook - Steve's Signature Move */}
            <div className="pt-12">
              <p className="text-xl font-light text-primary/80 italic leading-relaxed">
                Just pure, clean energy that makes you feel good
                <br />
                about every breath your children take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steve Jobs Style: Powerful Single Message */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={officeInterior} 
            alt="Modern home with uninterrupted power" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-thin text-white leading-[0.85] tracking-tight">
              Legacy without
              <br />
              <span className="text-white/60">compromise</span>
            </h2>
            <p className="text-2xl font-light text-white/80">
              Clean energy luxury that your children will thank you for.
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