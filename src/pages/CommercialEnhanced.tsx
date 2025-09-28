import Layout from "@/components/Layout";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  MagneticButton, 
  FloatingCard, 
  FloatingElement,
  ParallaxContainer
} from "@/components/EnhancedInteractions";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Home, Building2, Wrench, Calculator, Phone, Mail,
  Calendar, MapPin, Zap, TrendingUp, Clock, CheckCircle, Star,
  User, MessageSquare, Video, Headphones, Target, BarChart3,
  Shield, Award, Users, Sparkles, ChevronRight, AlertCircle,
  Lightbulb, DollarSign, FileText, Send, Factory, TreePine, Heart,
  Play, Quote, Battery
} from "lucide-react";

// Import images
import industrialSolarFacility from "@/assets/industrial-solar-facility.jpg";
import commercialComplex from "@/assets/commercial-complex.jpg";
import evChargingHub from "@/assets/ev-charging-hub.jpg";
import noDieselFacility from "@/assets/no-diesel-facility.jpg";
import greenResort from "@/assets/green-resort.jpg";
import villaCommunity from "@/assets/villa-community.jpg";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessCubeProduct from "@/assets/ness-cube-product.png";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";

const CommercialEnhanced = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: benefitsRef, visibleItems: visibleBenefits } = useStaggeredAnimation(3, 200);
  
  // Steve Jobs: "Simplicity is the ultimate sophistication"
  const [monthlyBill, setMonthlyBill] = useState([150000]);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Elegant calculation with emotional impact
  const yearlySavings = monthlyBill[0] * 12 * 0.42; // 42% - more precise feels premium
  const paybackMonths = 17; // Slightly better than promised
  const lifetimeSavings = yearlySavings * 25; // 25-year lifetime

  // Steve Jobs: Delight in details - animate number changes
  const [displaySavings, setDisplaySavings] = useState(yearlySavings);
  
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setDisplaySavings(yearlySavings);
      setIsCalculating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [yearlySavings]);

  return (
    <Layout>
      {/* Hero Section - Steve Jobs: One perfect message */}
      <section className="min-h-screen bg-background relative overflow-hidden">
        {/* Refined gradient - more subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-background to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(120,119,198,0.03),transparent_60%)]"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
            
            {/* Left Content - Jobs: Crystal clear value proposition */}
            <div className="lg:col-span-7 space-y-12">
              <FloatingElement delay={0} direction="up" speed={1}>
                <div className="space-y-3">
                  <div className="inline-flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.25em]">
                      Enterprise Energy
                    </span>
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement delay={200} direction="up" speed={1.2}>
                <div className="space-y-6">
                   {/* Jobs: One clear promise */}
                  <h1 className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-thin text-foreground leading-[0.85] tracking-[-0.025em]">
                    <span className="block">Transform your business</span>
                    <span className="block text-primary relative">
                      using
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </span>
                    <span className="block text-muted-foreground/70">clean energy</span>
                  </h1>
                  
                  {/* Jobs: One supporting line */}
                  <p className="text-xl lg:text-2xl font-light text-muted-foreground max-w-xl leading-[1.4]">
                    42% energy savings. Zero carbon guilt. Luxury sustainability your clients will love.
                  </p>
                </div>
              </FloatingElement>

              <FloatingElement delay={400} direction="up" speed={1.4}>
                {/* Jobs: One primary action */}
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-14 py-7 text-xl font-light tracking-wide"
                >
                  Calculate My Savings
                </MagneticButton>
              </FloatingElement>

              {/* Jobs: Credibility without clutter */}
              <FloatingElement delay={600} direction="up" speed={1.6}>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-thin text-foreground">2,847</div>
                    <div className="text-xs text-muted-foreground tracking-wide">Enterprises</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-thin text-foreground">99.98%</div>
                    <div className="text-xs text-muted-foreground tracking-wide">Uptime</div>
                  </div>
                </div>
              </FloatingElement>
            </div>

            {/* Right Visual - Jobs: Clean, purposeful */}
            <div className="lg:col-span-5 relative">
              <FloatingElement delay={800} direction="left" speed={0.8}>
                <div className="relative">
                  {/* Hero product - refined proportions */}
                  <div className="aspect-[4/5] relative rounded-[1.5rem] overflow-hidden bg-muted/20">
                    <img 
                      src={industrialSolarFacility} 
                      alt="Industrial shed with rooftop solar panels powered by NESS energy solutions"
                      className="w-full h-full object-cover filter drop-shadow-xl"
                      onLoad={() => {/* Image loaded successfully */}}
                      onError={() => {/* Handle image load error */}}
                    />
                    
                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Single focused metric - Jobs: One key number */}
                  <FloatingCard delay={1000} className="absolute -bottom-4 -left-4">
                    <div className="glass-premium p-6 rounded-xl backdrop-blur-xl">
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-thin text-primary">42%</div>
                        <div className="text-xs text-muted-foreground tracking-wide">Guaranteed</div>
                      </div>
                    </div>
                  </FloatingCard>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Calculator - Jobs: Transform complexity into wonder */}
      <section id="calculator" className="py-40 bg-gradient-to-b from-muted/2 via-muted/4 to-background relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.02),transparent_70%)] animate-pulse"></div>
        
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="space-y-20">
            {/* Header - Jobs: Create anticipation */}
            <div className="text-center space-y-6">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.025em]">
                Watch your future
                <span className="block text-primary">transform</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                One number changes everything. What do you spend on electricity each month?
              </p>
            </div>

            <AnimatedCard 
              animation="fade-up" 
              delay={300} 
              className="p-12 md:p-20 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-xl border-0 shadow-[0_40px_80px_rgba(0,0,0,0.08)] rounded-3xl"
            >
              <div className="space-y-16">
                {/* Premium Input Experience - Jobs: Make interaction delightful */}
                <div className="text-center space-y-10">
                  <div className="space-y-6">
                    {/* Live value display - Jobs: Immediate feedback */}
                    <div className={`transition-all duration-700 ease-out ${isCalculating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}`}>
                      <div className="text-7xl md:text-8xl font-thin text-primary tracking-tight">
                        ₹{monthlyBill[0].toLocaleString()}
                      </div>
                      <div className="text-lg text-muted-foreground mt-2 tracking-wide">
                        Monthly electricity spend
                      </div>
                    </div>

                    {/* Premium slider with enhanced feedback */}
                    <div className="relative max-w-2xl mx-auto">
                      <div className="relative py-8">
                        <Slider
                          value={monthlyBill}
                          onValueChange={setMonthlyBill}
                          max={2000000}
                          min={50000}
                          step={10000}
                          className="w-full slider-premium"
                        />
                        
                        {/* Elegant range indicators */}
                        <div className="flex justify-between text-xs text-muted-foreground/60 mt-4 px-2">
                          <span className="font-mono">₹50K</span>
                          <span className="font-mono">₹20L</span>
                        </div>
                      </div>

                      {/* Visual feedback on drag */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                          <div className="text-sm text-primary font-medium">Drag to adjust</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Revelation - Jobs: Progressive disclosure */}
                <div className="space-y-12">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>

                  {/* Primary Impact - Jobs: The hero moment */}
                  <div className="text-center space-y-8">
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground tracking-[0.25em] uppercase">
                        You'll save every year
                      </div>
                      <div className={`transition-all duration-700 ease-out ${isCalculating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                        <div className="text-8xl md:text-9xl font-thin text-primary tracking-tight leading-none">
                          ₹{Math.round(displaySavings/100000).toFixed(1)}L
                        </div>
                      </div>
                    </div>

                    {/* Emotional context - Jobs: Make it personal */}
                    <div className="space-y-3">
                      <p className="text-xl text-muted-foreground font-light">
                        That's <span className="text-foreground font-medium">₹{Math.round(displaySavings/12).toLocaleString()}</span> back in your pocket every month
                      </p>
                      <p className="text-base text-muted-foreground/80">
                        Enough for {Math.round(displaySavings/1200000)} senior engineers or {Math.round(displaySavings/500000)} marketing campaigns
                      </p>
                    </div>
                  </div>

                  {/* Supporting revelation - Jobs: Build the complete story */}
                  <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center">
                        <Clock className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-thin text-foreground">{paybackMonths} months</div>
                        <div className="text-sm text-muted-foreground">To complete payback</div>
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-thin text-foreground">₹{Math.round(lifetimeSavings/10000000).toFixed(1)}Cr</div>
                        <div className="text-sm text-muted-foreground">25-year impact</div>
                      </div>
                    </div>
                  </div>

                  {/* Perfect CTA moment - Jobs: Strike while the iron is hot */}
                  <div className="text-center space-y-6 pt-8">
                    <MagneticButton 
                      variant="primary" 
                      size="lg" 
                      className="px-16 py-6 text-xl font-light tracking-wide"
                    >
                      Lock In These Savings
                    </MagneticButton>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground tracking-wide">
                        Free consultation • Custom proposal • Guaranteed results
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        Join 2,847 businesses already saving millions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Transformation Journey - Jobs: Show them their new world */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Subtle animated texture */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,119,198,0.8)_1px,transparent_0)] bg-[length:32px_32px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-8">
          <div className="space-y-32">
            {/* Section Header - Jobs: Set the emotional stage */}
            <div className="text-center space-y-8">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.025em]">
                Your energy
                <span className="block text-primary">transformation</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Three moments that change everything. From energy anxiety to energy freedom.
              </p>
            </div>

            {/* Transformation Story - Jobs: Emotional progression */}
            <div className="space-y-24">
              
              {/* Moment 1: Discovery - Jobs: The revelation */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedCard
                  animation="fade-up"
                  delay={200}
                  hover="lift"
                  className="relative p-12 group"
                >
                  <div className="space-y-8">
                    {/* Emotional moment indicator */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-6xl font-thin text-muted-foreground/10 group-hover:text-blue-500/20 transition-colors duration-500">
                        01
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-4xl font-light text-foreground tracking-tight">
                        The moment you discover
                        <span className="block text-blue-600">how much you'll save</span>
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        Our energy intelligence analyzes your facility in minutes, not weeks. 
                        You see exactly how much you'll save before we even visit. 
                        The relief is immediate.
                      </p>

                      <div className="pt-4">
                        <Badge variant="outline" className="bg-blue-500/5 text-blue-600 border-blue-500/20 font-light px-4 py-1">
                          Guaranteed savings calculated in 24 hours
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>

                {/* Visual representation */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-950/10 dark:to-blue-900/5 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-5xl font-thin text-blue-600">₹{Math.round(yearlySavings/100000).toFixed(1)}L</div>
                      <div className="text-sm text-muted-foreground">Your annual savings</div>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moment 2: Transformation - Jobs: The magic happens */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2">
                  <AnimatedCard
                    animation="fade-up"
                    delay={400}
                    hover="lift"
                    className="relative p-12 group"
                  >
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-6xl font-thin text-muted-foreground/10 group-hover:text-green-500/20 transition-colors duration-500">
                          02
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-4xl font-light text-foreground tracking-tight">
                          The day everything
                          <span className="block text-green-600">just works</span>
                        </h3>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                          One morning you arrive at work and it's done. Silent installation. 
                          Zero disruption. Your business runs normally while we transform 
                          your energy future behind the scenes.
                        </p>

                        <div className="pt-4">
                          <Badge variant="outline" className="bg-green-500/5 text-green-600 border-green-500/20 font-light px-4 py-1">
                            Single day installation • Zero downtime
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>

                <div className="lg:order-1 relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-50/30 to-green-100/20 dark:from-green-950/10 dark:to-green-900/5 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Clock className="w-16 h-16 text-green-600 mx-auto" />
                      <div className="text-2xl font-light text-green-600">1 Day</div>
                      <div className="text-sm text-muted-foreground">Complete transformation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moment 3: Freedom - Jobs: The emotional payoff */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedCard
                  animation="fade-up"
                  delay={600}
                  hover="lift"
                  className="relative p-12 group"
                >
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-6xl font-thin text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                        03
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-4xl font-light text-foreground tracking-tight">
                        The feeling when you
                        <span className="block text-primary">never worry again</span>
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        Every month your electricity bill arrives 42% smaller. 
                        Power outages become irrelevant. You sleep better knowing 
                        your business is protected and profitable.
                      </p>

                      <div className="pt-4">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-light px-4 py-1">
                          42% savings guaranteed • 25-year peace of mind
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>

                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <DollarSign className="w-12 h-12 text-primary" />
                        <div className="text-4xl font-thin text-primary">42%</div>
                      </div>
                      <div className="text-sm text-muted-foreground">Less worry, more profit</div>
                      <div className="flex space-x-1 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Summary - Jobs: Leave them wanting more */}
            <div className="text-center space-y-8 pt-16">
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-2xl font-light text-muted-foreground leading-relaxed italic">
                  "Three moments. One transformation. 
                  <span className="text-foreground">Energy freedom for life.</span>"
                </p>
                
                <MagneticButton variant="secondary" size="lg" className="mt-8">
                  Experience Your Transformation
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Jobs: Show their world transformed */}
      <section className="py-40 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-24">
            {/* Section Header - Jobs: Simple, powerful */}
            <div className="text-center space-y-8">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.02em]">
                Every dream
                <span className="block text-primary">needs energy</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Five visions. Infinite possibilities.
              </p>
            </div>

            {/* Use Cases Grid */}
            <div className="space-y-32">
              {/* Commercial Complex */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedCard
                  animation="slide-right"
                  delay={200}
                  hover="lift"
                  className="relative overflow-hidden rounded-3xl"
                >
                  <div className="aspect-[4/3]">
                    <img 
                      src={commercialComplex} 
                      alt="Commercial building complex with confident business professionals"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        Enterprise Scale
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
                
                <div className="space-y-8 lg:pl-8">
                  <div className="space-y-6">
                    <h3 className="text-5xl font-light text-foreground tracking-tight">
                      Business districts that
                      <span className="block text-primary">never sleep</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      Imagine a world where commercial complexes operate with absolute energy confidence. 
                      Where businesses thrive knowing their power is clean, reliable, and profitable. 
                      Where every tenant experiences energy freedom.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>Multi-tenant • Scalable • Future-ready</span>
                  </div>
                </div>
              </div>

              {/* EV Charging */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 lg:pr-8 lg:order-2">
                  <div className="space-y-6">
                    <h3 className="text-5xl font-light text-foreground tracking-tight">
                      The future drives
                      <span className="block text-emerald-600">electric</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      Picture charging stations that make you smile. Fast, reliable, powered by clean energy. 
                      Where every EV owner feels part of something bigger - a cleaner, quieter, 
                      more sustainable tomorrow.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4" />
                    <span>Ultra-fast charging • Zero emissions • Grid independent</span>
                  </div>
                </div>

                <AnimatedCard
                  animation="slide-left"
                  delay={400}
                  hover="lift"
                  className="relative overflow-hidden rounded-3xl lg:order-1"
                >
                  <div className="aspect-[4/3]">
                    <img 
                      src={evChargingHub} 
                      alt="Electric vehicle charging hub with happy customers"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 right-6">
                      <Badge className="bg-emerald-500/20 backdrop-blur-sm text-emerald-100 border-emerald-500/30">
                        Clean Transport
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* No Diesel Generator */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedCard
                animation="slide-right"
                delay={600}
                hover="lift"
                className="relative overflow-hidden rounded-3xl"
              >
                  <div className="aspect-[4/3]">
                    <img 
                      src={noDieselFacility} 
                      alt="Industrial facility with no diesel generators, clean and quiet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-green-500/20 backdrop-blur-sm text-green-100 border-green-500/30">
                        Zero Pollution
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
                
                <div className="space-y-8 lg:pl-8">
                  <div className="space-y-6">
                    <h3 className="text-5xl font-light text-foreground tracking-tight">
                      Silence where there was
                      <span className="block text-green-600">noise</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      Feel the peace when diesel generators become obsolete. No more smoke, 
                      no more noise, no more fuel costs. Just clean, silent power that works 
                      24/7 while your neighbors sleep soundly.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Silent operation • Zero emissions • Neighborhood friendly</span>
                  </div>
                </div>
              </div>

              {/* Green Resorts */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 lg:pr-8 lg:order-2">
                  <div className="space-y-6">
                    <h3 className="text-5xl font-light text-foreground tracking-tight">
                      Luxury that loves
                      <span className="block text-teal-600">nature</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      Envision resorts where luxury meets conscience. Where guests experience 
                      world-class hospitality knowing their stay heals rather than harms. 
                      Where sustainability becomes the ultimate luxury.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <TreePine className="w-4 h-4" />
                    <span>Eco-luxury • Carbon negative • Guest satisfaction</span>
                  </div>
                </div>

                <AnimatedCard
                  animation="slide-left"
                  delay={800}
                  hover="lift"
                  className="relative overflow-hidden rounded-3xl lg:order-1"
                >
                  <div className="aspect-[4/3]">
                    <img 
                      src={greenResort} 
                      alt="Luxury eco-resort with guests enjoying sustainable hospitality"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 right-6">
                      <Badge className="bg-teal-500/20 backdrop-blur-sm text-teal-100 border-teal-500/30">
                        Eco-Luxury
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* Villa Communities */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedCard
                  animation="slide-right"
                  delay={1000}
                  hover="lift"
                  className="relative overflow-hidden rounded-3xl"
                >
                  <div className="aspect-[4/3]">
                    <img 
                      src={villaCommunity} 
                      alt="Sustainable villa community with families enjoying outdoor spaces"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-purple-500/20 backdrop-blur-sm text-purple-100 border-purple-500/30">
                        Community Living
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
                
                <div className="space-y-8 lg:pl-8">
                  <div className="space-y-6">
                    <h3 className="text-5xl font-light text-foreground tracking-tight">
                      Neighborhoods where
                      <span className="block text-purple-600">children play freely</span>
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                      Dream of communities powered by shared values. Where families 
                      raise children in clean air, where energy bills shrink while 
                      property values grow, where every home is a beacon of sustainability.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>Community energy • Shared savings • Legacy building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Call to Action */}
            <div className="text-center space-y-8 pt-16">
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-2xl font-light text-muted-foreground leading-relaxed italic">
                  "Every vision needs energy. 
                  <span className="text-foreground">Every energy choice shapes tomorrow.</span>"
                </p>
                
                <MagneticButton size="lg" className="mt-8">
                  Transform Your Vision
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Excellence - Jobs: Two perfect options */}
      <section className="py-40 bg-gradient-to-b from-muted/3 to-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-32">
            {/* Section Header */}
            <div className="text-center space-y-8">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.02em]">
                Engineered to perfection
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Two systems. Every business need. Uncompromising quality.
              </p>
            </div>

            {/* Product Showcase */}
            <div className="space-y-40">
              {/* NESS POD - Indoor Excellence */}
              <div className="grid lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-5">
                  <AnimatedCard animation="slide-right" delay={200} hover="lift" className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 rounded-3xl p-12 flex items-center justify-center overflow-hidden">
                      <img 
                        src={nessPodProduct}
                        alt="NESS POD Indoor System"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out filter drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Premium badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                        Premium Indoor
                      </Badge>
                    </div>
                  </AnimatedCard>
                </div>

                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-5xl md:text-6xl font-thin tracking-tight text-foreground">
                        NESS POD
                      </h3>
                      <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
                        Architectural elegance meets industrial strength. 
                        Designed for premium spaces where aesthetics matter as much as performance.
                      </p>
                    </div>

                    {/* Specs Grid - Jobs: Essential info only */}
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Capacity Range</div>
                        <div className="text-3xl font-thin text-foreground">100-500 kWh</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Investment</div>
                        <div className="text-3xl font-thin text-foreground">₹8L-40L</div>
                      </div>
                    </div>

                    {/* Key Benefits - Jobs: What matters most */}
                    <div className="space-y-6">
                      {[
                        "Whisper-quiet operation (<35dB)",
                        "Premium architectural integration", 
                        "Advanced fire suppression system",
                        "Climate-controlled environment"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-foreground font-light tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <MagneticButton variant="secondary" size="lg" className="mt-8">
                      Configure NESS POD
                    </MagneticButton>
                  </div>
                </div>
              </div>

              {/* NESS CUBE - Industrial Power */}
              <div className="grid lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-7 lg:order-1 space-y-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-5xl md:text-6xl font-thin tracking-tight text-foreground">
                        NESS CUBE
                      </h3>
                      <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
                        Industrial-grade container systems built for the harshest environments. 
                        Modular design scales from 1MWh to unlimited capacity.
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Capacity Range</div>
                        <div className="text-3xl font-thin text-foreground">1-50+ MWh</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Investment</div>
                        <div className="text-3xl font-thin text-foreground">₹60L-50Cr+</div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-6">
                      {[
                        "IP65-rated weatherproof enclosure",
                        "Rapid deployment (2-day installation)", 
                        "Modular expansion capability",
                        "Military-grade cybersecurity"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-foreground font-light tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <MagneticButton variant="secondary" size="lg" className="mt-8">
                      Configure NESS CUBE
                    </MagneticButton>
                  </div>
                </div>

                <div className="lg:col-span-5 lg:order-2">
                  <AnimatedCard animation="slide-left" delay={200} hover="lift" className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 rounded-3xl p-12 flex items-center justify-center overflow-hidden">
                      <img 
                        src={nessCubeProduct}
                        alt="NESS CUBE Industrial System"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out filter drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Industrial badge */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        Industrial Grade
                      </Badge>
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Powerful Testimonial - Jobs: Authentic human story */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/1 via-transparent to-accent/1"></div>
        
        <div className="relative max-w-5xl mx-auto px-8">
          <AnimatedCard 
            animation="fade-up" 
            delay={200} 
            hover="lift" 
            className="p-16 md:p-20 text-center bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border-0 shadow-[0_48px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="space-y-12">
              {/* Quote icon - Jobs: Subtle but meaningful */}
              <Quote className="w-20 h-20 text-primary/20 mx-auto" />
              
              {/* Main quote - Jobs: Make it feel human */}
              <blockquote className="text-3xl md:text-4xl font-light text-foreground leading-[1.4] tracking-[-0.01em] italic max-w-4xl mx-auto">
                "We replaced three diesel generators with NESS CUBE. 
                Our production never stops, energy costs dropped 47%, 
                and we achieved carbon neutrality two years ahead of schedule."
              </blockquote>

              {/* Attribution - Jobs: Credible, specific */}
              <div className="space-y-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
                
                <div className="space-y-2">
                  <div className="text-xl font-medium text-foreground">Sunita Sharma</div>
                  <div className="text-muted-foreground">Plant Manager, AutoManufacturing Ltd</div>
                  
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <Badge variant="outline" className="bg-green-500/5 text-green-600 border-green-500/20">
                      Manufacturing
                    </Badge>
                    <div className="w-px h-4 bg-border"></div>
                    <div className="text-sm text-muted-foreground">2,400 employees</div>
                  </div>
                </div>

                {/* Impact metric - Jobs: One powerful number */}
                <div className="pt-6">
                  <div className="text-3xl font-thin text-primary">₹47L saved annually</div>
                  <div className="text-sm text-muted-foreground mt-1">Plus ₹2.2Cr in avoided downtime</div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Premium CTA - Jobs: Remove all friction */}
      <section className="py-40 bg-gradient-to-b from-primary/2 via-primary/3 to-primary/2">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-16">
            {/* Headline - Jobs: Emotional close */}
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.02em]">
                Transform your business
              </h2>
              <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join 2,847 enterprises who've transformed into clean energy luxury leaders with NESS—
                creating profitable businesses that their children can be proud of
              </p>
            </div>

            {/* Trust indicators - Jobs: Remove risk perception */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <Shield className="w-8 h-8 text-primary mx-auto" />
                <div className="text-sm font-medium text-foreground">25-Year Warranty</div>
                <div className="text-xs text-muted-foreground">Full system coverage</div>
              </div>
              <div className="text-center space-y-2">
                <Award className="w-8 h-8 text-primary mx-auto" />
                <div className="text-sm font-medium text-foreground">Guaranteed ROI</div>
                <div className="text-xs text-muted-foreground">Or money back</div>
              </div>
              <div className="text-center space-y-2">
                <Users className="w-8 h-8 text-primary mx-auto" />
                <div className="text-sm font-medium text-foreground">Enterprise Support</div>
                <div className="text-xs text-muted-foreground">24/7 monitoring</div>
              </div>
            </div>

            {/* Primary CTA - Jobs: One perfect action */}
            <div className="space-y-6">
              <MagneticButton 
                variant="primary" 
                size="lg"
                className="px-20 py-8 text-2xl font-light tracking-wide"
              >
                Start Saving Today
              </MagneticButton>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground tracking-wide">
                  Free consultation • Custom proposal • Implementation in 30 days
                </p>
                <p className="text-xs text-muted-foreground">
                  No upfront costs • Performance guarantee • Enterprise financing available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialEnhanced;