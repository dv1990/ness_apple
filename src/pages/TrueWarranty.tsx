import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Shield, TrendingUp, BarChart3, Battery, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

// Image paths - will be lazy-loaded via WebPImage where possible
const warrantyHero = "@/assets/warranty-hero-trust.jpg";
const nessPodProduct = "@/assets/ness-pod-product.png";

const TrueWarranty = () => {
  useEffect(() => {
    // Set page title
    document.title = "True Warranty | NESS Energy";
    
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      {/* 1) Hero — The Myth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Minimalist Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-whisper via-background to-whisper"></div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10 py-20 md:py-32">
          <div className="space-y-12 md:space-y-20">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-foreground/5 px-8 py-4 rounded-full border border-foreground/10 animate-fade-in">
              <Shield className="w-5 h-5 text-foreground/60" />
              <span className="text-sm font-medium text-foreground/80 uppercase tracking-widest">
                True Warranty
              </span>
            </div>
            
            <h1 className="font-extralight text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.85] tracking-tighter animate-fade-in">
              A warranty<br />
              <span className="font-light">you can trust.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Not numbers.<br className="hidden sm:block" /> Not fine print.<br className="hidden sm:block" /> <span className="text-foreground font-normal">Just a promise we keep.</span>
            </p>
            
            <div className="pt-12 animate-fade-in">
              <Button asChild className="bg-foreground hover:bg-foreground/90 text-background px-16 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto font-medium">
                <a href="#warranty-terms">Explore Our Warranty</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Product Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-foreground leading-[1.05] tracking-tight">
                Engineered<br />to last.
              </h2>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Every NESS battery is monitored 24/7. We know its health before you do.
              </p>
            </div>
            <div className="animate-fade-in">
              <img src={nessPodProduct} alt="NESS Pod Battery" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 3) What Makes It Different */}
      <section className="py-32 md:py-48 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-foreground mb-8 leading-tight tracking-tight">
              What makes it<br />
              <span className="font-light">different?</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto">
              Three things that actually matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Market Card */}
            <div className="space-y-12 animate-fade-in">
              <div className="pb-6 border-b border-border/30">
                <h3 className="text-3xl font-extralight text-foreground/60">Others</h3>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/40"></div>
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-light text-foreground/70 mb-2">Repair only after 5 years</p>
                    <p className="text-base text-muted-foreground">If it fails, you wait. And hope.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/40"></div>
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-light text-foreground/70 mb-2">Lab conditions</p>
                    <p className="text-base text-muted-foreground">25°C tests. Not your reality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/40"></div>
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-light text-foreground/70 mb-2">Blame shifting</p>
                    <p className="text-base text-muted-foreground">Pages of exclusions and asterisks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NESS Card */}
            <div className="space-y-12 animate-fade-in">
              <div className="pb-6 border-b border-foreground/20">
                <h3 className="text-3xl font-light text-foreground">NESS</h3>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-foreground" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-normal text-foreground mb-2">Full replacement. All 10 years.</p>
                    <p className="text-base text-muted-foreground">Or pro rata refund. Your choice.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-foreground" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-normal text-foreground mb-2">Real-world tested</p>
                    <p className="text-base text-muted-foreground">45°C Indian summers. Actual loads.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-foreground" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <p className="text-2xl font-normal text-foreground mb-2">We stand with you</p>
                    <p className="text-base text-muted-foreground">Plain language. Zero fine print.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Why It Works */}
      <section className="py-32 md:py-48 bg-whisper/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-20 md:space-y-24 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-foreground leading-tight tracking-tight">
              Why it works
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-background flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-10 h-10 text-foreground/80" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground mb-2">Monitored</p>
                  <p className="text-base text-muted-foreground">24/7 health tracking</p>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-background flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-10 h-10 text-foreground/80" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground mb-2">Predictive</p>
                  <p className="text-base text-muted-foreground">We catch issues early</p>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-background flex items-center justify-center shadow-sm">
                  <Battery className="w-10 h-10 text-foreground/80" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground mb-2">Tested</p>
                  <p className="text-base text-muted-foreground">45°C, real conditions</p>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-background flex items-center justify-center shadow-sm">
                  <Shield className="w-10 h-10 text-foreground/80" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground mb-2">Guaranteed</p>
                  <p className="text-base text-muted-foreground">Plain language terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Closing CTA */}
      <section id="warranty-terms" className="py-32 md:py-48 bg-charcoal text-pearl relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="space-y-16 md:space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-extralight leading-[1.05] tracking-tight">
                Trust matters.
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-70 max-w-2xl mx-auto">
                Read our warranty. No legal degree required.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in">
              <Button asChild className="bg-pearl text-charcoal hover:bg-pearl/90 px-12 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto font-normal shadow-lg">
                <Link to="/downloads">Read Warranty Terms</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border border-pearl/40 bg-transparent text-pearl hover:bg-pearl/10 hover:border-pearl/60 px-12 py-6 text-base rounded-full transition-all duration-300 w-full sm:w-auto font-normal"
              >
                <Link to="/technology">See How Monitoring Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrueWarranty;
