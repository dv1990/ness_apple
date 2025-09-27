import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, Zap, Sparkles, Shield, Battery, Home, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton, PlayButton, FloatingCard, ParallaxContainer } from "@/components/EnhancedInteractions";

// Import product images
import nessProImage from "@/assets/ness-pro-hero.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessPodProduct from "@/assets/ness-pod-product.png";
import heroHomeownersImage from "@/assets/hero-homeowners.jpg";
import rdLaboratory from '@/assets/rd-laboratory.jpg';
import batteryTechnology from '@/assets/battery-technology.jpg';
import manufacturingFacility from '@/assets/manufacturing-facility.jpg';

const IndexEnhanced = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section - Sonos Inspired "Feel Every Play" Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - High Impact Visual */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroHomeownersImage})`
        }} />
        
        {/* Premium Dark Overlay for Typography */}
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/80"></div>
        
        {/* Hero Content - Apple/Sonos Minimalism */}
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          
          {/* Primary Emotional Message */}
          <div className="space-y-16 animate-fade-up">
            
            {/* Hero Typography - Confident & Emotional */}
            <div className="space-y-8">
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-pearl leading-[0.9] tracking-wide">
                <span className="tracking-[0.02em]">Reliable</span>
                <br />
                <span className="text-energy-bright font-medium">backup power</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-light text-pearl/90 max-w-2xl mx-auto leading-relaxed">
                Lithium battery systems for homes and businesses.
              </p>
            </div>

            {/* Single Clear CTA - Sonos Style */}
            <div className="pt-8">
              <Button className="btn-sonos px-16 py-6 text-xl">
                <Link to="/contact" className="flex items-center">
                  Discover NESS
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Signal - Subtle */}
            <div className="pt-12">
              <p className="text-sm font-light text-pearl/60 uppercase tracking-[0.3em]">
                Trusted by 10,000+ families across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy as Luxury Section - Jony Ive Documentary Style */}
      <section className="py-40 bg-background relative overflow-hidden">
        
        {/* Floating Product - Follows the narrative */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 w-80 h-80 z-20 pointer-events-none opacity-0 animate-fade-in hidden lg:block">
          <div className="relative w-full h-full">
            <img 
              src={nessProProduct} 
              alt="NESS Pro - Energy redefined" 
              className="w-full h-full object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 relative z-10">
          
          {/* Opening Statement */}
          <div className="mb-40">
            <div className="space-y-16">
              <div className="w-px h-16 bg-energy/20 mx-auto"></div>
              
              <div className="text-center space-y-12">
                <h2 className="font-display text-7xl md:text-8xl lg:text-9xl font-extralight text-foreground leading-[0.8] tracking-tighter">
                  At NESS, we treat energy
                </h2>
                <p className="font-display text-5xl md:text-6xl font-extralight text-energy leading-[0.85] tracking-tight">
                  like the new luxury
                </p>
              </div>
              
              <div className="w-px h-16 bg-energy/20 mx-auto"></div>
            </div>
          </div>

          {/* Documentary Narrative - Scrolling Story */}
          <div className="space-y-60">
            
            {/* Chapter 1: Elegant Design */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-2 h-2 bg-energy rounded-full"></div>
                    <span className="text-sm text-energy/60 uppercase tracking-[0.4em] font-light">Elegant Design</span>
                  </div>
                  
                  <h3 className="font-display text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-tight">
                    Batteries are not corner storage products anymore.
                  </h3>
                  
                  <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-xl">
                    But something you now own with pride and rejoice everyday. 
                    A statement of sophistication that transforms your space while powering your life with uncompromising elegance.
                  </p>
                </div>
              </div>
              
              {/* Philosophy Image */}
              <div className="relative lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={heroHomeownersImage} 
                    alt="Luxury home with NESS energy system" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Chapter 2: Craftsmanship */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Craftsmanship Image */}
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={rdLaboratory} 
                    alt="R&D laboratory precision engineering" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              <div className="max-w-2xl ml-auto text-right lg:order-2">
                <div className="space-y-8">
                  <div className="flex items-center justify-end space-x-4 mb-8">
                    <span className="text-sm text-energy/60 uppercase tracking-[0.4em] font-light">Craftsmanship</span>
                    <div className="w-2 h-2 bg-energy rounded-full"></div>
                  </div>
                  
                  <h3 className="font-display text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-tight">
                    Every curve, every surface, every detail.
                  </h3>
                  
                  <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-xl ml-auto">
                    This isn't just energy storage — it's architectural art that elevates your space. 
                    Beautifully designed like a statement piece that defines rather than disrupts.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3: Engineering */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-2 h-2 bg-energy rounded-full"></div>
                    <span className="text-sm text-energy/60 uppercase tracking-[0.4em] font-light">Engineering</span>
                  </div>
                  
                  <h3 className="font-display text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-tight">
                    Precision in every cell.
                  </h3>
                  
                  <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-xl">
                    We test and grade every cell, then group them for perfect balance. 
                    That's how NESS delivers unmatched reliability, year after year.
                  </p>
                  
                  {/* Subtle Visual Element */}
                  <div className="pt-8">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-0.5 bg-energy/40" 
                            style={{
                              height: `${12 + Math.sin(i * 0.8) * 8}px`,
                              animationDelay: `${i * 100}ms`
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-energy/60 font-light tracking-wide">Perfect Balance</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Engineering Image */}
              <div className="relative lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={batteryTechnology} 
                    alt="Advanced battery technology and precision engineering" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Chapter 4: Trust */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Trust Image */}
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={manufacturingFacility} 
                    alt="State-of-the-art manufacturing facility ensuring quality" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              <div className="max-w-2xl ml-auto text-right lg:order-2">
                <div className="space-y-8">
                  <div className="flex items-center justify-end space-x-4 mb-8">
                    <span className="text-sm text-energy/60 uppercase tracking-[0.4em] font-light">Assurance</span>
                    <div className="w-2 h-2 bg-energy rounded-full"></div>
                  </div>
                  
                  <h3 className="font-display text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-tight">
                    A warranty that means something.
                  </h3>
                  
                  <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-xl ml-auto">
                    At NESS, we believe a warranty isn't just a piece of paper. It's a contract of trust.
                    No random claim of 10000 cycles, we standby our batteries and you.
                  </p>
                  
                  {/* Timeline Visual */}
                  <div className="pt-8 flex justify-end">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-energy/60 font-light">15+ Years</span>
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1 h-8 bg-energy/30 transition-colors duration-700" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Crescendo */}
          <div className="pt-60 pb-40">
            <div className="text-center space-y-20">
              
              {/* Closing Statement */}
              <div className="space-y-12">
                <div className="w-px h-20 bg-energy/20 mx-auto"></div>
                
                <div className="space-y-8">
                  <h3 className="font-display text-8xl md:text-9xl font-extralight text-foreground leading-[0.8] tracking-tighter">
                    Own your energy.
                  </h3>
                  <p className="font-display text-4xl md:text-5xl font-extralight text-energy leading-[0.9] tracking-tight">
                    The ultimate luxury.
                  </p>
                </div>
                
                <div className="w-px h-20 bg-energy/20 mx-auto"></div>
              </div>

              {/* Quiet Call to Action */}
              <div className="pt-20">
                <Link 
                  to="/technology" 
                  className="group inline-flex items-center space-x-6 text-lg font-light text-foreground hover:text-energy transition-colors duration-700"
                >
                  <span className="tracking-wide">Discover the technology</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" />
                </Link>
              </div>
              
              {/* Silent Signature */}
              <div className="pt-32">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-px bg-energy/20" 
                      style={{
                        height: `${6 + Math.sin(i * 0.5) * 3}px`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-6 font-light tracking-widest uppercase">
                  Silent by Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Validation Section - Sonos "Giles Martin" Style */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Expert Quote - Large & Impactful */}
          <div className="text-center space-y-16">
            
            <div className="space-y-8">
              <Quote className="w-16 h-16 mx-auto text-energy/30" />
              
              <blockquote className="font-display text-4xl md:text-5xl font-light text-foreground leading-relaxed">
                "It's an engineering approach to peace of mind."
              </blockquote>
            </div>

            {/* Expert Credentials */}
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-energy/10 flex items-center justify-center">
                <Battery className="w-10 h-10 text-energy" />
              </div>
              
              <div>
                <p className="text-xl font-medium text-foreground">Dr. Rajesh Malhotra</p>
                <p className="text-lg text-muted-foreground">
                  Former ISRO Scientist & NESS Energy Advisor
                </p>
              </div>
            </div>

            {/* Supporting Stats */}
            <div className="pt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-light text-energy mb-2">6,000+</div>
                  <p className="text-sm text-muted-foreground">Charge cycles guaranteed</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-energy mb-2">99.7%</div>
                  <p className="text-sm text-muted-foreground">System uptime achieved</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-energy mb-2">15</div>
                  <p className="text-sm text-muted-foreground">Years comprehensive warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Night Everything Changed - Apple-Style Emotional Section */}
      <section className="py-40 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Central Story - Apple Style */}
          <div className="text-center space-y-20">
            
            {/* Main Headline - Emotional Hook */}
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.9] tracking-tight">
                The night everything
                <br />
                <span className="text-energy font-light">changed.</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
                  While your neighbor's smart home went dark,
                  <br />
                  <span className="text-foreground">yours kept working perfectly.</span>
                </p>
              </div>
            </div>

            {/* Visual Contrast - Split Screen Effect */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-5xl mx-auto">
              
              {/* Left Side - The Problem */}
              <FloatingCard delay={100} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50/30 to-red-100/50 dark:from-red-950/30 dark:to-red-900/50 p-16 h-[400px] flex flex-col justify-center border border-red-200/30 dark:border-red-800/30">
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-transparent"></div>
                  </div>
                  
                  <div className="relative space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-red-500 opacity-60"></div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-red-700 dark:text-red-300 mb-4">
                      Their house
                    </h3>
                    
                    <div className="space-y-3 text-red-600 dark:text-red-400">
                      <p className="text-lg font-light">Security system: offline</p>
                      <p className="text-lg font-light">Climate control: failed</p>
                      <p className="text-lg font-light">Entertainment: dead</p>
                      <p className="text-lg font-light">Comfort: compromised</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Right Side - The Solution */}
              <FloatingCard delay={200} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-energy-light/10 to-energy/5 p-16 h-[400px] flex flex-col justify-center border border-energy/20 shadow-energy-glow/20">
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-energy to-transparent"></div>
                  </div>
                  
                  <div className="relative space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-energy/10 flex items-center justify-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-energy animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-energy mb-4">
                      Your home
                    </h3>
                    
                    <div className="space-y-3 text-energy-dark dark:text-energy-light">
                      <p className="text-lg font-light">Security system: protected</p>
                      <p className="text-lg font-light">Climate control: perfect</p>
                      <p className="text-lg font-light">Entertainment: seamless</p>
                      <p className="text-lg font-light">Peace of mind: <em>priceless</em></p>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </div>

            {/* Single Powerful Conclusion */}
            <div className="space-y-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-energy to-transparent mx-auto"></div>
              <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
                The difference isn't just technology.
                <br />
                <span className="text-foreground font-medium">It's confidence in what matters most.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Stories - Real Human Impact */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 text-energy rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Stories from our community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              When expertise meets <span className="text-energy font-medium">life's moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Real families sharing how NESS made the difference when it mattered most
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Mumbai Family</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "48 hours of seamless power during Cyclone Tauktae"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                While the entire neighborhood was in darkness, our kids continued online classes, 
                wife worked from home, and we kept all essentials running. NESS didn't just provide 
                backup power—it provided peace of mind.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">AM</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Arjun Mehta</p>
                  <p className="text-xs text-muted-foreground">Bandra, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Delhi Business</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "Zero downtime during peak wedding season"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Our photography studio runs critical equipment worth lakhs. During the power crisis 
                last October, NESS kept everything running seamlessly. Not a single shoot was 
                cancelled, not a single client disappointed.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">PS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Lajpat Nagar, Delhi</p>
                </div>
              </div>
            </div>

            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Bangalore Villa</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "Smart home never missed a beat"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                We have a fully automated home—from security to climate control to entertainment. 
                Even during extended outages, everything works exactly as designed. 
                Visitors can't even tell when we're on backup power.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">RK</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ravi Kumar</p>
                  <p className="text-xs text-muted-foreground">Whitefield, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium */}
      <section className="py-40 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroHomeownersImage})`
        }} />
        <div className="absolute inset-0 bg-charcoal/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/90"></div>
        
        <div className="max-w-5xl mx-auto px-8 text-center relative">
          
          <div className="space-y-16">
            
            {/* Compelling Headline */}
            <div className="space-y-8">
              <h2 className="text-7xl md:text-8xl font-light text-pearl leading-[0.85] mb-8">
                Your moment.
                <br />
                <span className="text-energy-bright">Your power.</span>
                <br />
                <span className="text-pearl/70">Your choice.</span>
              </h2>
              <p className="text-2xl text-pearl/80 font-light max-w-3xl mx-auto leading-relaxed">
                Join thousands who chose <span className="text-energy-bright font-medium">confidence over compromise</span>.
              </p>
            </div>

            {/* Premium CTA */}
            <div className="space-y-8">
              <Button className="btn-sonos px-16 py-6 text-xl">
                <Link to="/contact" className="flex items-center">
                  Start your journey
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </Button>
              
              <p className="text-sm text-pearl/60 uppercase tracking-[0.2em]">
                Free consultation • Custom design • White-glove installation
              </p>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default IndexEnhanced;