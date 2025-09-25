import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Play, CheckCircle, Zap, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton, PlayButton, FloatingCard, ParallaxContainer } from "@/components/EnhancedInteractions";

// Import product images
import nessProImage from "@/assets/ness-pro-hero.png";
import heroHomeownersImage from "@/assets/hero-homeowners.jpg";

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
      {/* Hero Section - True Steve Jobs Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-6xl mx-auto px-8 text-center">
          
          {/* Clean, Emotional Typography */}
          <div className="space-y-20">
            
            {/* Primary Message - Premium */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg font-light text-muted-foreground uppercase tracking-[0.3em]">
                  Introducing
                </p>
                <h1 className="font-display text-8xl md:text-9xl font-thin text-foreground leading-[0.85] tracking-tight">
                  Perfection
                </h1>
              </div>
              <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The world's most intelligent home energy system.
                <br />
                <span className="text-primary">Available exclusively for discerning homeowners.</span>
              </p>
            </div>

            {/* Hero Product - Centered and Pure */}
            <div className="py-16">
              <div className="relative mx-auto max-w-lg">
                <img 
                  src={nessProImage} 
                  alt="NESS PRO" 
                  className="w-full h-auto object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                  }}
                />
              </div>
              
              <div className="mt-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-thin text-foreground">
                  <span className="text-energy">NESS</span> PRO
                </h2>
                <p className="text-xl text-muted-foreground font-light">
                  Handcrafted for homes that <span className="text-energy font-medium">accept nothing less</span>
                </p>
                <div className="pt-4">
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-light">
                    By invitation only
                  </Badge>
                </div>
              </div>
            </div>

            {/* Exclusive CTA */}
            <div className="space-y-6">
              <MagneticButton variant="primary" size="lg" className="px-16 py-6 text-xl">
                <Link to="/contact" className="flex items-center">
                  Request Private Consultation
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </MagneticButton>
              
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm font-light">
                  Limited to 50 installations this quarter
                </p>
                <p className="text-xs text-muted-foreground/70">
                  White-glove installation by certified artisans • 15-year comprehensive warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Social Proof Section */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm font-light text-muted-foreground uppercase tracking-[0.3em] mb-6">
              Trusted by the finest addresses
            </p>
            <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-8">
              Already chosen by India's <span className="text-energy">most prestigious homes</span>
            </h2>
          </div>

          {/* Prestigious Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <FloatingCard delay={100} className="text-center group">
              <div className="glass-card-premium bg-card/40 backdrop-blur-xl p-8 rounded-2xl border-0">
                <div className="text-2xl font-light text-foreground mb-2">Lutyens' Delhi</div>
                <p className="text-muted-foreground text-sm">Heritage bungalows & diplomatic residences</p>
              </div>
            </FloatingCard>
            
            <FloatingCard delay={200} className="text-center group">
              <div className="glass-card-premium bg-card/40 backdrop-blur-xl p-8 rounded-2xl border-0">
                <div className="text-2xl font-light text-foreground mb-2">Malabar Hill</div>
                <p className="text-muted-foreground text-sm">Mumbai's most exclusive addresses</p>
              </div>
            </FloatingCard>
            
            <FloatingCard delay={300} className="text-center group">
              <div className="glass-card-premium bg-card/40 backdrop-blur-xl p-8 rounded-2xl border-0">
                <div className="text-2xl font-light text-foreground mb-2">Bandra West</div>
                <p className="text-muted-foreground text-sm">Premium penthouses & celebrity homes</p>
              </div>
            </FloatingCard>
          </div>

          {/* Elite Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-thin text-energy">500+</div>
              <p className="text-sm text-muted-foreground">Discerning families</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-energy">₹50Cr+</div>
              <p className="text-sm text-muted-foreground">Average home value</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-energy">100%</div>
              <p className="text-sm text-muted-foreground">Satisfaction guarantee</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-energy">Invite</div>
              <p className="text-sm text-muted-foreground">Only application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Craftsmanship Section */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-32">
            <p className="text-sm font-light text-muted-foreground uppercase tracking-[0.3em] mb-6">
              Artisanal Excellence
            </p>
            <h2 className="text-5xl md:text-6xl font-thin text-foreground mb-8">
              Materials worthy of your <span className="text-energy">estate</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              German engineering meets Indian craftsmanship in perfect harmony
            </p>
          </div>

          {/* Luxury Materials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Materials List */}
            <div className="space-y-12">
              <FloatingCard delay={100} className="group">
                <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-muted/20 transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-energy mt-3"></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-foreground">Aerospace-Grade Aluminum</h3>
                    <p className="text-muted-foreground font-light">The same material protecting satellites now safeguards your energy investment</p>
                  </div>
                </div>
              </FloatingCard>
              
              <FloatingCard delay={200} className="group">
                <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-muted/20 transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-energy mt-3"></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-foreground">German-Engineered Safety Systems</h3>
                    <p className="text-muted-foreground font-light">Precision safety protocols developed in Munich's finest laboratories</p>
                  </div>
                </div>
              </FloatingCard>
              
              <FloatingCard delay={300} className="group">
                <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-muted/20 transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-energy mt-3"></div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-foreground">Handcrafted Installation</h3>
                    <p className="text-muted-foreground font-light">Master artisans ensure every detail meets your exacting standards</p>
                  </div>
                </div>
              </FloatingCard>
            </div>

            {/* Visual Element */}
            <FloatingCard delay={400} className="group">
              <div className="glass-card-premium bg-gradient-to-br from-muted/10 to-background p-12 rounded-3xl border-0">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-foreground">Lifetime Distinction</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Every NESS PRO installation is a testament to your commitment to excellence. 
                      A legacy investment that appreciates with time.
                    </p>
                    <div className="pt-4">
                      <Badge variant="outline" className="px-4 py-2 text-sm font-light border-energy text-energy">
                        Certified Premium Installation
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Benefits - Interactive Visual Presentation */}
      <section className="py-40 bg-gradient-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header - Premium */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-thin text-foreground mb-8">
              Uncompromising <span className="text-energy">Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Three pillars of excellence that distinguish the <span className="text-energy font-medium">extraordinary home</span>
            </p>
          </div>

          {/* Interactive Benefit Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Benefit 1 - Uninterrupted Power */}
            <FloatingCard delay={100} className="group cursor-pointer h-[400px] glass-card-premium hover:shadow-energy border-0 bg-card/40 backdrop-blur-xl">
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-thin text-foreground mb-4 group-hover:text-primary transition-colors">
                      Effortless <span className="text-energy">Sophistication</span>
                    </h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      Your wine collection stays perfectly chilled. Your smart home ecosystem never falters. <span className="text-energy font-medium">Luxury, uninterrupted.</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-border/20">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Imperceptible transition (20ms)
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Complete estate coverage
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Benefit 2 - Financial Freedom */}
            <FloatingCard delay={200} className="group cursor-pointer h-[400px] glass-card-premium hover:shadow-energy border-0 bg-card/40 backdrop-blur-xl">
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-thin text-foreground mb-4 group-hover:text-primary transition-colors">
                      Intelligent <span className="text-energy">Investment</span>
                    </h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      Returns exceeding market expectations. A single investment that <span className="text-energy font-medium">appreciates your property value</span> while eliminating energy costs.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-border/20">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    15% annual returns (conservative)
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    25-year performance guarantee
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Benefit 3 - Peace of Mind */}
            <FloatingCard delay={300} className="group cursor-pointer h-[400px] glass-card-premium hover:shadow-energy border-0 bg-card/40 backdrop-blur-xl">
              <div className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-thin text-foreground mb-4 group-hover:text-primary transition-colors">
                      Exclusive <span className="text-energy">Engineering</span>
                    </h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      German-engineered safety systems. <span className="text-energy font-medium">AI-powered intelligence</span>. Technology worthy of your discerning taste.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-border/20">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Aerospace-grade materials
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Continuous intelligence monitoring
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Apple-Inspired Before & After Section */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          
          {/* Elegant Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-foreground mb-6 tracking-tight">
              The difference is <span className="text-energy">everything</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              How <span className="text-energy font-medium">NESS PRO</span> elevates the luxury lifestyle
            </p>
          </div>

          {/* Premium Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Before Card - Problems */}
            <FloatingCard delay={100} className="group relative">
              <div className="glass-card-premium border-0 bg-card/30 backdrop-blur-xl p-12 h-full">
                
                {/* Card Header */}
                <div className="flex items-center mb-12">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-4 animate-pulse"></div>
                  <h3 className="text-3xl font-thin text-foreground">
                    Before <span className="text-energy">NESS</span>
                  </h3>
                </div>

                {/* Luxury Problems List */}
                <div className="space-y-8">
                  {[
                    "Wine collection compromised during outages",
                    "Smart home ecosystem suddenly goes dark", 
                    "Art preservation systems fail unexpectedly",
                    "Home theater and entertainment rooms shut down",
                    "Climate control for premium spaces interrupted"
                  ].map((problem, index) => (
                    <FloatingCard 
                      key={index} 
                      delay={200 + index * 100}
                      className="flex items-start group/item hover:bg-red-50/50 dark:hover:bg-red-950/20 p-4 rounded-2xl transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-6 mt-0.5 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/40 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover/item:text-foreground transition-colors">
                        {problem}
                      </p>
                    </FloatingCard>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* After Card - Solutions */}
            <FloatingCard delay={200} className="group relative">
              <div className="glass-card-premium border-0 bg-card/30 backdrop-blur-xl p-12 h-full">
                
                {/* Card Header */}
                <div className="flex items-center mb-12">
                  <div className="w-4 h-4 rounded-full bg-energy mr-4">
                    <div className="w-full h-full rounded-full bg-energy animate-ping"></div>
                  </div>
                  <h3 className="text-3xl font-thin text-foreground">
                    With <span className="text-energy">NESS</span> PRO
                  </h3>
                </div>

                {/* Luxury Solutions List */}
                <div className="space-y-8">
                  {[
                    "Perfect wine storage conditions maintained indefinitely",
                    "Seamless smart home automation continues flawlessly",
                    "Art and collectibles perfectly preserved at all times", 
                    "Entertainment spaces remain fully operational",
                    "Climate-controlled luxury throughout every room"
                  ].map((solution, index) => (
                    <FloatingCard 
                      key={index} 
                      delay={300 + index * 100}
                      className="flex items-start group/item hover:bg-green-50/50 dark:hover:bg-green-950/20 p-4 rounded-2xl transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-energy/20 flex items-center justify-center mr-6 mt-0.5 group-hover/item:bg-energy/30 transition-colors">
                        <CheckCircle className="w-4 h-4 text-energy" />
                      </div>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover/item:text-foreground transition-colors">
                        {solution}
                      </p>
                    </FloatingCard>
                  ))}
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Connecting Line Animation */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 via-muted to-energy animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-energy flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA - Premium and Compelling */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroHomeownersImage})`,
          }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-primary/60"></div>
        
        <div className="max-w-5xl mx-auto px-8 text-center relative">
          
          <div className="space-y-16">
            
            {/* Compelling Headline - Premium */}
            <div className="space-y-8">
              <h2 className="text-7xl md:text-8xl font-thin text-white leading-[0.85] mb-8">
                Your legacy.
                <br />
                <span className="text-energy-bright">Your standards.</span>
                <br />
                <span className="text-white/70">Your home.</span>
              </h2>
              <p className="text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                Join the select few who never compromise on <span className="text-energy-bright font-medium">excellence</span>.
              </p>
            </div>

            {/* Exclusive CTA Button */}
            <div className="space-y-8">
              <MagneticButton 
                variant="secondary" 
                size="lg" 
                className="px-16 py-6 text-xl bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-elegant"
              >
                <Link to="/contact" className="flex items-center">
                  Request Private Preview
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </MagneticButton>
              
              {/* Additional Options */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <PlayButton 
                  onClick={() => setIsVideoPlaying(true)}
                  label="View Estate Integration"
                />
                <Link 
                  to="/technology" 
                  className="text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Explore the engineering excellence
                </Link>
              </div>
            </div>

            {/* Exclusive Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-thin text-white mb-2">Starting from</div>
                <div className="text-sm text-white/60">Contact for personalized quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-white mb-2">15 Years</div>
                <div className="text-sm text-white/60">Comprehensive care program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-white mb-2">Exclusive</div>
                <div className="text-sm text-white/60">Limited installations quarterly</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexEnhanced;