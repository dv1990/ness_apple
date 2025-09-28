import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Building2, Zap, TrendingUp, Clock, CheckCircle,
  Shield, DollarSign, Sparkles
} from "lucide-react";

// Optimized image imports - only hero image loaded immediately
const industrialSolarFacility = "/src/assets/industrial-solar-facility.jpg";

const CommercialEnhanced = () => {
  const [monthlyBill, setMonthlyBill] = useState([150000]);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const yearlySavings = monthlyBill[0] * 12 * 0.42;
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
      {/* Optimized Hero Section - Fast Initial Load */}
      <section className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-background to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
            
            {/* Left Content - Immediate Load */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-3 animate-fade-in">
                <div className="inline-flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.25em]">
                    Enterprise Energy
                  </span>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-thin text-foreground leading-[0.85] tracking-[-0.025em]">
                  <span className="block">Transform your business</span>
                  <span className="block text-primary relative">
                    using
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                  </span>
                  <span className="block text-muted-foreground/70">clean energy</span>
                </h1>
                
                <p className="text-xl lg:text-2xl font-light text-muted-foreground max-w-xl leading-[1.4]">
                  42% energy savings. Zero carbon guilt. Luxury sustainability your clients will love.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-14 py-7 text-xl font-light tracking-wide hover:scale-105 transition-transform"
                  size="lg"
                >
                  Calculate My Savings
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
            </div>

            {/* Right Visual - Optimized Image Load */}
            <div className="lg:col-span-5 relative">
              <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="aspect-[4/5] relative rounded-[1.5rem] overflow-hidden bg-muted/20">
                  <img 
                    src={industrialSolarFacility} 
                    alt="Industrial facility with NESS energy solutions"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-xl p-6 rounded-xl border border-border/20">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-thin text-primary">42%</div>
                    <div className="text-xs text-muted-foreground tracking-wide">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Calculator Section - No Heavy Components */}
      <section id="calculator" className="py-40 bg-gradient-to-b from-muted/2 via-muted/4 to-background">
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="space-y-20">
            <div className="text-center space-y-6">
              <h2 className="text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-[-0.025em]">
                Watch your future
                <span className="block text-primary">transform</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                One number changes everything. What do you spend on electricity each month?
              </p>
            </div>

            <div className="p-12 md:p-20 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-xl border border-border/20 rounded-3xl">
              <div className="space-y-16">
                <div className="text-center space-y-10">
                  <div className="space-y-6">
                    <div className={`transition-all duration-700 ease-out ${isCalculating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}`}>
                      <div className="text-7xl md:text-8xl font-thin text-primary tracking-tight">
                        ₹{monthlyBill[0].toLocaleString()}
                      </div>
                      <div className="text-lg text-muted-foreground mt-2 tracking-wide">
                        Monthly electricity spend
                      </div>
                    </div>

                    <div className="relative max-w-2xl mx-auto">
                      <div className="relative py-8">
                        <input
                          type="range"
                          min={50000}
                          max={2000000}
                          step={10000}
                          value={monthlyBill[0]}
                          onChange={(e) => setMonthlyBill([parseInt(e.target.value)])}
                          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                        />
                        
                        <div className="flex justify-between text-xs text-muted-foreground/60 mt-4 px-2">
                          <span className="font-mono">₹50K</span>
                          <span className="font-mono">₹20L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>

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

                    <div className="space-y-3">
                      <p className="text-xl text-muted-foreground font-light">
                        That's <span className="text-foreground font-medium">₹{Math.round(displaySavings/12).toLocaleString()}</span> back in your pocket every month
                      </p>
                      <p className="text-base text-muted-foreground/80">
                        Enough for {Math.round(displaySavings/1200000)} senior engineers or {Math.round(displaySavings/500000)} marketing campaigns
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center">
                        <Clock className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-thin text-foreground">17 months</div>
                        <div className="text-sm text-muted-foreground">To complete payback</div>
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-thin text-foreground">₹{Math.round(displaySavings * 25/10000000).toFixed(1)}Cr</div>
                        <div className="text-sm text-muted-foreground">25-year impact</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-6 pt-8">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="px-16 py-6 text-xl font-light tracking-wide"
                    >
                      Lock In These Savings
                    </Button>
                    
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
            </div>
          </div>
        </div>
      </section>

      {/* Simple Transformation Section */}
      <section className="py-40 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-32">
            <div className="text-center space-y-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-500 font-bold">UPDATED</span>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-7xl md:text-8xl font-extralight text-foreground leading-[0.8] tracking-[-0.03em] mb-8">
                Every dream
                <span className="block text-primary font-light">needs energy.</span>
              </h2>
              <p className="text-2xl text-muted-foreground font-extralight max-w-2xl mx-auto leading-[1.4]">
                Behind every breakthrough. Every innovation. Every success story.
                <br />
                <span className="text-foreground font-medium">There's reliable power making it possible.</span>
              </p>
            </div>

            <div className="space-y-40">
              {/* Moment 1 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="p-12 bg-card/40 rounded-3xl">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-6xl font-thin text-muted-foreground/10">01</div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-5xl font-extralight text-foreground tracking-tight leading-[0.95]">
                        The moment you discover
                        <span className="block text-primary font-light">your savings</span>
                      </h3>
                      
                      <p className="text-xl text-muted-foreground leading-[1.6] font-extralight max-w-lg">
                        Intelligence reveals opportunity in minutes. Clarity replaces uncertainty. 
                        Relief arrives instantly.
                      </p>

                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-light px-4 py-1">
                        Guaranteed savings calculated in 24 hours
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-thin text-primary">₹{Math.round(yearlySavings/100000).toFixed(1)}L</div>
                    <div className="text-sm text-muted-foreground">Your annual savings</div>
                  </div>
                </div>
              </div>

              {/* Moment 2 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2 p-12 bg-card/40 rounded-3xl">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-6xl font-thin text-muted-foreground/10">02</div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-5xl font-extralight text-foreground tracking-tight leading-[0.95]">
                        The day everything
                        <span className="block text-primary font-light">simply works</span>
                      </h3>
                      
                      <p className="text-xl text-muted-foreground leading-[1.6] font-extralight max-w-lg">
                        Seamless transformation. Silent precision. 
                        Your world improves while you work.
                      </p>

                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-light px-4 py-1">
                        Single day installation • Zero downtime
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="lg:order-1 aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Clock className="w-16 h-16 text-primary mx-auto" />
                    <div className="text-2xl font-light text-primary">1 Day</div>
                    <div className="text-sm text-muted-foreground">Complete transformation</div>
                  </div>
                </div>
              </div>

              {/* Moment 3 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="p-12 bg-card/40 rounded-3xl">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-6xl font-thin text-muted-foreground/10">03</div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-5xl font-extralight text-foreground tracking-tight leading-[0.95]">
                        The feeling when you
                        <span className="block text-primary font-light">never worry again</span>
                      </h3>
                      
                      <p className="text-xl text-muted-foreground leading-[1.6] font-extralight max-w-lg">
                        Freedom from energy anxiety. Confidence in every decision. 
                        Peace in knowing your future is secure.
                      </p>

                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-light px-4 py-1">
                        42% savings guaranteed • 25-year peace of mind
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <DollarSign className="w-12 h-12 text-primary" />
                      <div className="text-4xl font-thin text-primary">42%</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Less worry, more profit</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 pt-16">
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-2xl font-light text-muted-foreground leading-relaxed italic">
                  "Three moments. One transformation. 
                  <span className="text-foreground">Energy freedom for life.</span>"
                </p>
                
                <Button variant="secondary" size="lg" className="mt-8">
                  Experience Your Transformation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialEnhanced;