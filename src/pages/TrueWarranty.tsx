import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import heroHomeowners from "@/assets/hero-homeowners.jpg";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: `url(${heroHomeowners})` }}
        />
        
        {/* Content */}
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10 py-32">
          <div className="space-y-12 animate-fade-up">
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-charcoal leading-[0.9] tracking-tight">
              Not a number.<br />A promise.
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-charcoal/80 max-w-2xl mx-auto leading-relaxed mt-16">
              Everyone sells 6000 or 10,000 cycles.<br />
              Numbers don't protect you.
            </p>
            
            <div className="pt-16">
              <Button className="bg-energy hover:bg-energy-bright text-white px-12 py-6 text-lg rounded-xl transition-all duration-300">
                <a href="#warranty-terms">Explore Our Warranty</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) The Truth (Pull-Quote Block) */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center space-y-16">
            <div className="space-y-12">
              <blockquote className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-tight">
                "At Nunam, a warranty isn't a piece of paper. It's a contract of trust."
              </blockquote>
              
              <p className="text-xl md:text-2xl font-light text-charcoal/70 max-w-3xl mx-auto leading-relaxed mt-12">
                Not a random claim — a promise we stand behind, just like we stand with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Comparison — Market vs. Nunam */}
      <section className="py-40 bg-muted/10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Market Card */}
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-charcoal/10">
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-charcoal mb-12">Market Standard</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">After 5 Years</p>
                      <p className="text-charcoal/60 mt-1">Repair-only, no replacement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Test Conditions</p>
                      <p className="text-charcoal/60 mt-1">25 °C lab cycles, gentle usage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Fine Print</p>
                      <p className="text-charcoal/60 mt-1">Complex exclusions & asterisks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Support</p>
                      <p className="text-charcoal/60 mt-1">Reactive ticketing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Accountability</p>
                      <p className="text-charcoal/60 mt-1">Blame-shift to "misuse"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Value</p>
                      <p className="text-charcoal/60 mt-1">A number on paper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nunam Card */}
            <div className="bg-white rounded-2xl p-12 shadow-sm border-2 border-energy">
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-energy mb-12">Nunam Promise</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">After 5 Years</p>
                      <p className="text-charcoal/60 mt-1">Full replacement coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Test Conditions</p>
                      <p className="text-charcoal/60 mt-1">Real-world heat, real loads</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Fine Print</p>
                      <p className="text-charcoal/60 mt-1">Transparent, plain-language terms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Support</p>
                      <p className="text-charcoal/60 mt-1">Proactive monitoring + predictive care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-charcoal/10">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Accountability</p>
                      <p className="text-charcoal/60 mt-1">We stand with you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-charcoal">Value</p>
                      <p className="text-charcoal/60 mt-1">Peace of mind, guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Proof, Not Hype */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center space-y-16">
            <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight">
              Built for your world.
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl font-light text-charcoal/70 max-w-2xl mx-auto">
              <p>Indian summers. Real loads. Daily life.</p>
              <p>Field data. Live health monitoring.</p>
              <p>Plain-language terms you can read.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Closing — The Promise */}
      <section id="warranty-terms" className="py-40 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-20">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              Power you can trust.<br />
              Not numbers you can't.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button className="bg-energy hover:bg-energy-bright text-white px-12 py-6 text-lg rounded-xl transition-all duration-300">
                <Link to="/downloads">See Warranty Terms</Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg rounded-xl transition-all duration-300"
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
