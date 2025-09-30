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
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 animate-fade-in" 
          style={{ backgroundImage: `url(${warrantyHero})` }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background/95"></div>
        
        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10 py-16 md:py-32">
          <div className="space-y-8 md:space-y-12">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 animate-fade-in">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                True Warranty Promise
              </span>
            </div>
            
            <h1 className="font-extralight text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] tracking-tight animate-fade-in">
              Not a number.<br />
              but <span className="text-primary font-light">A promise.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8 md:mt-16 animate-fade-in">
              Everyone sells 6000 or 10,000 cycles.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-foreground font-normal">Numbers don't protect you.</span>
            </p>
            
            <div className="pt-8 md:pt-16 animate-fade-in">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover-scale w-full sm:w-auto">
                <a href="#warranty-terms">Explore Our Warranty</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) The Truth (Pull-Quote Block) */}
      <section className="py-16 md:py-32 lg:py-40 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 md:space-y-16">
            <div className="space-y-6 md:space-y-12 animate-fade-in">
              {/* Decorative element */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <Shield className="w-8 h-8 text-primary" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              
              <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-foreground leading-tight">
                "At NESS, a warranty isn't a piece of paper. 
                <br className="hidden md:block" />
                <span className="text-primary font-light">It's a contract of trust."</span>
              </blockquote>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6 md:mt-12">
                Not a random claim — <span className="text-foreground font-normal">a promise we stand behind</span>, just like we stand with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Comparison — Market vs. NESS */}
      <section className="py-16 md:py-32 lg:py-40 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground mb-4 md:mb-6">
              The difference is
              <br />
              <span className="text-primary font-light">crystal clear</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              See what sets NESS apart from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Market Card - Enhanced with warning theme */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-md border border-border hover:shadow-xl transition-all duration-300 animate-fade-in relative overflow-hidden">
              {/* Warning gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Market Standard</h3>
                  <div className="bg-muted/50 px-4 py-2 rounded-full">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Industry Norm</span>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-border">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">After 5 Years</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">Repair-only, no replacement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-border">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">Test Conditions</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">25 °C lab cycles, gentle usage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-border">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">Fine Print</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">Complex exclusions & asterisks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-border">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">Support</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">Reactive ticketing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-border">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">Accountability</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">Blame-shift to "misuse"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">Value</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">A number on paper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NESS Card - Enhanced with success theme */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border-2 border-primary hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in relative overflow-hidden">
              {/* Success gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-green-500 to-primary"></div>
              
              {/* Decorative corner badge */}
              <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-wider shadow-lg">
                Our Promise
              </div>
              
              <div className="space-y-6 md:space-y-8 mt-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-primary">NESS Promise</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-primary/20 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">After 5 Years</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">Full replacement coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-primary/20 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Test Conditions</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">Real-world heat, real loads</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-primary/20 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Fine Print</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">Transparent, plain-language terms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-primary/20 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Support</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">Proactive monitoring + predictive care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-primary/20 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Accountability</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">We stand with you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 hover:bg-primary/5 rounded-lg p-3 transition-colors duration-200">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">Value</p>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base font-medium">Peace of mind, guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Proof, Not Hype */}
      <section className="py-16 md:py-32 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center space-y-12 md:space-y-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Real-World Tested
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-tight">
              Built for <span className="text-primary font-light">your world</span>
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-scale">
                <p className="text-xl sm:text-2xl font-light text-foreground mb-2">Indian summers</p>
                <p className="text-sm text-muted-foreground">45°C tested</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-scale">
                <p className="text-xl sm:text-2xl font-light text-foreground mb-2">Real loads</p>
                <p className="text-sm text-muted-foreground">Daily usage</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-scale">
                <p className="text-xl sm:text-2xl font-light text-foreground mb-2">Live monitoring</p>
                <p className="text-sm text-muted-foreground">24/7 health</p>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="text-foreground font-normal">Plain-language terms</span> you can actually read and understand.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Closing — The Promise */}
      <section id="warranty-terms" className="py-16 md:py-32 lg:py-40 bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
          <div className="space-y-12 md:space-y-20">
            <div className="space-y-8 md:space-y-12 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full border border-background/20">
                <Shield className="w-4 h-4 text-background" />
                <span className="text-sm font-medium text-background uppercase tracking-wider">
                  Our Commitment
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-tight">
                Power you can trust.
                <br />
                <span className="text-background/80 font-light">Not numbers you can't.</span>
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8 animate-fade-in">
              <Button asChild className="bg-background text-foreground hover:bg-background/90 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover-scale w-full sm:w-auto">
                <Link to="/downloads">See Warranty Terms</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-background/30 bg-background/10 text-background hover:bg-background/20 hover:border-background/50 backdrop-blur-sm px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/technology">How monitoring protects you</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrueWarranty;
