import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import warrantyHero from "@/assets/warranty-hero-trust.jpg";

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
              Not a number.<br />
              but <span className="font-light">A promise.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Everyone sells 6000 or 10,000 cycles.<br />
              <span className="text-foreground font-normal">Numbers don't protect you.</span>
            </p>
            
            <div className="pt-12 animate-fade-in">
              <Button asChild className="bg-foreground hover:bg-foreground/90 text-background px-16 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto font-medium">
                <a href="#warranty-terms">Explore Our Warranty</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) The Truth (Pull-Quote Block) */}
      <section className="py-24 md:py-40 lg:py-48 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-16 md:space-y-24">
            <div className="space-y-12 md:space-y-16 animate-fade-in">
              <blockquote className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground leading-[1.1] tracking-tight">
                "At NESS, a warranty isn't<br className="hidden md:block" /> a piece of paper.<br />
                <span className="font-light">It's a contract of trust."</span>
              </blockquote>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Not a random claim — <span className="text-foreground font-normal">a promise we stand behind</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Comparison — Market vs. NESS */}
      <section className="py-24 md:py-40 lg:py-48 bg-whisper">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-foreground mb-6 leading-tight tracking-tight">
              The difference is<br />
              <span className="font-light">crystal clear</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Market Card */}
            <div className="bg-background rounded-3xl p-10 md:p-12 shadow-sm border border-border relative overflow-hidden animate-fade-in">
              {/* Orange accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>
              
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-foreground">Market Standard</h3>
                  <div className="bg-muted/60 px-5 py-2.5 rounded-full">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Industry Norm</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b border-border/60">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">After 5 Years</p>
                      <p className="text-muted-foreground text-base">Repair-only, no replacement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-border/60">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Test Conditions</p>
                      <p className="text-muted-foreground text-base">25 °C lab cycles, gentle usage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-border/60">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Fine Print</p>
                      <p className="text-muted-foreground text-base">Complex exclusions & asterisks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-border/60">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Support</p>
                      <p className="text-muted-foreground text-base">Reactive ticketing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-border/60">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Accountability</p>
                      <p className="text-muted-foreground text-base">Blame-shift to "misuse"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Value</p>
                      <p className="text-muted-foreground text-base">A number on paper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NESS Card */}
            <div className="bg-charcoal rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in">
              {/* Top badge */}
              <div className="absolute -top-px -right-px bg-foreground text-background px-8 py-3 rounded-bl-3xl">
                <span className="text-xs font-bold uppercase tracking-widest">Our Promise</span>
              </div>
              
              <div className="space-y-8 md:space-y-10 mt-8">
                <h3 className="text-3xl sm:text-4xl font-semibold text-pearl">NESS Promise</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b border-pearl/20">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">After 5 Years</p>
                      <p className="text-pearl/70 text-base">Full replacement coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-pearl/20">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">Test Conditions</p>
                      <p className="text-pearl/70 text-base">Real-world heat, real loads</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-pearl/20">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">Fine Print</p>
                      <p className="text-pearl/70 text-base">Transparent, plain-language terms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-pearl/20">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">Support</p>
                      <p className="text-pearl/70 text-base">Proactive monitoring + predictive care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-pearl/20">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">Accountability</p>
                      <p className="text-pearl/70 text-base">We stand with you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-7 h-7 bg-pearl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl text-lg mb-1">Value</p>
                      <p className="text-pearl/70 text-base">Peace of mind, guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Proof, Not Hype */}
      <section className="py-24 md:py-40 lg:py-48 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-16 md:space-y-20 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground leading-tight tracking-tight">
              Built for <span className="font-light">your world</span>
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
              <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl font-light text-foreground mb-3">Indian summers</p>
                <p className="text-base text-muted-foreground">45°C tested</p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl font-light text-foreground mb-3">Real loads</p>
                <p className="text-base text-muted-foreground">Daily usage</p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl font-light text-foreground mb-3">Live monitoring</p>
                <p className="text-base text-muted-foreground">24/7 health</p>
              </div>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="text-foreground font-normal">Plain-language terms</span> you can read and understand.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Closing — The Promise */}
      <section id="warranty-terms" className="py-24 md:py-40 lg:py-48 bg-charcoal text-pearl relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="space-y-16 md:space-y-24">
            <div className="space-y-12 md:space-y-16 animate-fade-in">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-[1.05] tracking-tight">
                Power you can trust.<br />
                <span className="font-light opacity-70">Not numbers you can't.</span>
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in">
              <Button asChild className="bg-pearl text-charcoal hover:bg-pearl/90 px-14 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto font-medium shadow-xl">
                <Link to="/downloads">See Warranty Terms</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-pearl/30 bg-transparent text-pearl hover:bg-pearl/10 hover:border-pearl/50 px-14 py-7 text-lg rounded-full transition-all duration-300 w-full sm:w-auto font-medium"
              >
                <Link to="/technology">How Monitoring Protects You</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrueWarranty;
