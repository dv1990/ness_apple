import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle } from "lucide-react";
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
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: `url(${warrantyHero})` }}
        />
        
        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10 py-16 md:py-32">
          <div className="space-y-8 md:space-y-12 animate-fade-up">
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-charcoal leading-[0.9] tracking-tight">
              Not a number.<br />A promise.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-charcoal/80 max-w-2xl mx-auto leading-relaxed mt-8 md:mt-16">
              Everyone sells 6000 or 10,000 cycles.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Numbers don't protect you.
            </p>
            
            <div className="pt-8 md:pt-16">
              <Button asChild className="bg-energy hover:bg-energy-bright text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto">
                <a href="#warranty-terms">Explore Our Warranty</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) The Truth (Pull-Quote Block) */}
      <section className="py-16 md:py-32 lg:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-8 md:space-y-16">
            <div className="space-y-6 md:space-y-12">
              <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal leading-tight">
                "At NESS, a warranty isn't a piece of paper. It's a contract of trust."
              </blockquote>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-charcoal/70 max-w-3xl mx-auto leading-relaxed mt-6 md:mt-12">
                Not a random claim — a promise we stand behind, just like we stand with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Comparison — Market vs. NESS */}
      <section className="py-16 md:py-32 lg:py-40 bg-muted/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Market Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-charcoal/10">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-charcoal mb-6 md:mb-12">Market Standard</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">After 5 Years</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Repair-only, no replacement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Test Conditions</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">25 °C lab cycles, gentle usage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Fine Print</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Complex exclusions & asterisks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Support</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Reactive ticketing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Accountability</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Blame-shift to "misuse"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Value</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">A number on paper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NESS Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border-2 border-energy">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-energy mb-6 md:mb-12">NESS Promise</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">After 5 Years</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Full replacement coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Test Conditions</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Real-world heat, real loads</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Fine Print</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Transparent, plain-language terms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Support</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Proactive monitoring + predictive care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Accountability</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">We stand with you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm md:text-base">Value</p>
                      <p className="text-charcoal/60 mt-1 text-sm md:text-base">Peace of mind, guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Proof, Not Hype */}
      <section className="py-16 md:py-32 lg:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-12 md:space-y-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
              Built for your world.
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-lg sm:text-xl md:text-2xl font-light text-charcoal/70 max-w-2xl mx-auto">
              <p>Indian summers. Real loads. Daily life.</p>
              <p>Field data. Live health monitoring.</p>
              <p>Plain-language terms you can read.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Closing — The Promise */}
      <section id="warranty-terms" className="py-16 md:py-32 lg:py-40 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="space-y-12 md:space-y-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
              Power you can trust.<br />
              Not numbers you can't.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8">
              <Button asChild className="bg-energy hover:bg-energy-bright text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto">
                <Link to="/downloads">See Warranty Terms</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
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
