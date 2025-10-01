import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Calculator,
  Shield, 
  Smartphone, 
  Users,
  CheckCircle, 
  ArrowRight, 
  Play, 
  Zap, 
  BatteryCharging 
} from "lucide-react";
import { Link } from "react-router-dom";
// Image paths - will be lazy-loaded via WebPImage where possible
const heroImage = "@/assets/hero-homeowners.jpg";
const productImage = "@/assets/ness-pro-product.png";
const ottImage = "@/assets/carousel-ott-streaming.jpg";
const kitchenImage = "@/assets/carousel-kitchen-appliances.jpg";
const acImage = "@/assets/carousel-ac-comfort.jpg";
const evImage = "@/assets/carousel-ev-charging.jpg";

const Residential = () => {
  return (
    <Layout>
      {/* Minimalist Hero Section */}
      <section className="min-h-screen bg-background flex items-center">
        <div className="max-w-[1600px] mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  Residential Energy Storage
                </span>
              </div>

              <div className="space-y-8">
                <h1 className="font-sf text-6xl md:text-8xl font-extralight text-foreground leading-[0.8] tracking-tight">
                  The backup power
                  <br />
                  <span className="text-muted-foreground/60">that never fails</span>
                </h1>
                
                <p className="text-xl font-light text-muted-foreground max-w-lg leading-relaxed">
                  NESS PRO. Engineered for Indian homes. Your family's comfort, guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium text-lg">
                  Explore NESS PRO
                </Button>
                <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Play className="w-5 h-5" />
                  <span className="font-light">See It In Action</span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="NESS Home Energy System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30"></div>
              </div>

              {/* Floating Product */}
              <div className="absolute -bottom-12 -left-12 bg-background/95 backdrop-blur-xl border border-muted-foreground/10 rounded-2xl p-8">
                <img 
                  src={productImage} 
                  alt="NESS PRO Home Battery System" 
                  className="w-32 h-auto"
                />
              </div>

              {/* Floating Metric */}
              <div className="absolute -top-8 -right-8 bg-background/95 backdrop-blur-xl border border-muted-foreground/10 rounded-2xl p-6 space-y-3">
                <div className="text-2xl font-extralight text-foreground">24hr</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Backup Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value - Single Benefit Focus */}
      <section className="py-40 bg-muted/10">
        <div className="max-w-[1600px] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Zero Outages Promise
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-extralight tracking-[-0.01em] text-foreground leading-[0.75]">
              Your life continues.
              <br />
              <span className="text-muted-foreground/60">Uninterrupted.</span>
            </h2>
          </div>
          
          {/* Visual Proof */}
          <div className="text-center space-y-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="h-1 bg-muted/20 rounded-full">
                <div className="h-full bg-primary rounded-full w-full"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 font-light">
                8-24 hours of seamless backup power
              </p>
            </div>
            
            {/* Simple Description */}
            <div className="max-w-xl mx-auto">
              <p className="text-xl font-light text-foreground/80 leading-relaxed">
                When the grid fails, NESS doesn't. Your refrigerator keeps running. 
                Your Wi-Fi stays connected. Your family stays comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NESS PRO Series - Full Banner Hero */}
      <section className="py-0 bg-background">
        <div className="w-full">
          
          {/* Full Banner Hero Image */}
          <div className="relative h-[80vh] overflow-hidden">
            <img 
              src={heroImage} 
              alt="NESS Home - Complete Energy Solution"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/30 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-[1600px] mx-auto px-8 w-full">
                <div className="text-center space-y-8">
                  <div className="inline-flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <span className="text-sm font-mono text-white/80 uppercase tracking-[0.2em]">
                      NESS PRO Series
                    </span>
                  </div>

                  <h2 className="text-6xl md:text-8xl font-extralight text-white leading-[0.85] tracking-tight">
                    NESS home
                    <br />
                    <span className="text-white/60">Complete energy solution.</span>
                  </h2>

                  <p className="text-xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
                    Your family's comfort, guaranteed. NESS PRO ensures your home never skips a beat, even when everything else does.
                  </p>
                  
                  <div className="pt-8">
                    <Button className="bg-white text-background hover:bg-white/90 px-12 py-6 rounded-full font-medium text-lg">
                      Explore NESS PRO
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Product Card */}
            <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-xs">
              <img 
                src={productImage} 
                alt="NESS PRO Home Battery System" 
                className="w-full h-auto mb-4"
              />
              <div className="text-center space-y-2">
                <div className="text-lg font-medium text-foreground">NESS PRO</div>
                <div className="text-sm text-muted-foreground">Home Energy Storage</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-8 py-40">

          {/* The Experience - What It Feels Like */}
          <div className="space-y-32">
            {/* Real-World Scenario */}
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight tracking-[-0.02em]">
                  Power cuts become invisible
                </h3>
                <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  While your neighbors check their inverters and worry about load shedding, your home stays uninterrupted. 
                  The AC keeps running. Work continues. Life doesn't pause.
                </p>
              </div>
              
              {/* Moment of Truth */}
              <div className="bg-card/30 rounded-3xl p-12 border border-border/20 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-light text-foreground">10ms</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Switch time. Your Wi-Fi won't notice.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-light text-foreground">24hr</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Backup duration. Outlasts most outages.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-light text-foreground">51.2V</div>
                    <p className="text-sm font-light text-muted-foreground">
                      High-voltage efficiency. Less current loss.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-light text-foreground">10x</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Scalable units. Grows with your needs.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/20 text-center">
                  <p className="text-xs font-light text-muted-foreground/70">
                    LiFePO₄ chemistry • Safest battery technology • Zero thermal runaway risk
                  </p>
                </div>
              </div>
            </div>

            {/* Built Different */}
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight tracking-[-0.02em]">
                  Built for Indian realities
                </h3>
                <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Voltage swings. Monsoon floods. Summer heat waves. 
                  <br />
                  NESS PRO handles what India throws at it.
                </p>
              </div>
              
              {/* Three Pillars - Simplified */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-foreground">Never fails</h4>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                      Engineered to work flawlessly for 15 years. 
                      Zero maintenance required.
                    </p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-foreground">Always ready</h4>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                      Learns your patterns. Predicts outages. 
                      Charged and waiting before you need it.
                    </p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-foreground">Invisible guardian</h4>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                      Works silently in the background. 
                      You only notice it when the lights stay on.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progressive Disclosure - Optional Detail */}
            <div className="text-center">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground group">
                Technical Specifications
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Find Installer - Apple-style Discovery */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <div className="space-y-20">
            {/* Discovery Header */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em]">
                Find your installer
              </h2>
              <p className="text-xl font-light text-muted-foreground leading-relaxed tracking-[-0.01em] max-w-2xl mx-auto">
                Connect with certified NESS partners in your area. 
                Expert installation, backed by our quality guarantee.
              </p>
            </div>

            {/* Simple CTA */}
            <div className="space-y-8">
              <Link to="/find-installer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-16 py-6 rounded-full text-xl font-medium transition-all duration-150 shadow-lg hover:shadow-xl">
                  Find Installers Near You
                </Button>
              </Link>
              
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Certified Partners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">500+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion - Apple-style Confidence */}
      <section className="py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <div className="space-y-16">
            {/* Confident Header */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-[-0.02em]">
                When you're ready
              </h2>
              <p className="text-xl font-light text-muted-foreground leading-relaxed tracking-[-0.01em]">
                We'll be here.
              </p>
            </div>

            {/* Clean Form */}
            <div className="bg-card/20 backdrop-blur-sm border border-border/30 p-12 rounded-3xl">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-150 text-foreground placeholder:text-muted-foreground"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full px-6 py-4 bg-background/50 border border-border rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-150 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-150">
                  Schedule Consultation
                </Button>

                <p className="text-sm text-muted-foreground">
                  Free consultation • No obligations
                </p>
              </div>
            </div>

            {/* Simple Trust */}
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">10+ Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">BIS Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;