import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  Smartphone, 
  CheckCircle, 
  Users,
  Star 
} from "lucide-react";
import { Link } from "react-router-dom";
// Image paths - will be lazy-loaded via WebPImage where possible  
const heroImage = "@/assets/hero-homeowners.jpg";
const productImage = "@/assets/ness-pro-product.png";

const ResidentialPremium = () => {
  return (
    <Layout>
      {/* Ultra-Minimalist Hero - Full Viewport Experience */}
      <section className="h-screen bg-gradient-to-b from-background via-background to-muted/20 flex items-center">
        <div className="max-w-[1800px] mx-auto px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-24 items-center min-h-[80vh]">
            
            {/* Ultra-Clean Content */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="inline-block">
                    <div className="text-xs text-muted-foreground/60 font-light uppercase tracking-[0.3em] mb-2">
                      Residential Series
                    </div>
                    <div className="w-8 h-px bg-primary"></div>
                  </div>
                </div>

                <div className="space-y-10">
                  <h1 className="text-[clamp(3rem,8vw,9rem)] font-extralight text-foreground leading-[0.75] tracking-[-0.02em]">
                    Never
                    <br />
                    <span className="text-muted-foreground/40 italic">powerless</span>
                    <br />
                    again
                  </h1>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent opacity-40"></div>
                  
                  <p className="text-2xl font-extralight text-muted-foreground/80 max-w-md leading-[1.6] tracking-[-0.01em]">
                    NESS PRO transforms your home into an energy fortress. 
                    <span className="text-foreground/60 italic"> Seamlessly invisible. Infinitely reliable.</span>
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-12 py-6 rounded-full text-lg font-light tracking-wide transition-all duration-300 hover:scale-105">
                  Experience NESS PRO
                </Button>
                
                <div className="flex items-center space-x-8 opacity-50">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm text-muted-foreground font-light">Live monitoring</span>
                  </div>
                  <div className="text-xs text-muted-foreground/40">•</div>
                  <div className="text-sm text-muted-foreground font-light">10ms response time</div>
                </div>
              </div>
            </div>

            {/* Immersive Visual Experience */}
            <div className="lg:col-span-7 relative">
              <div className="relative group">
                {/* Main Image with Sophisticated Overlay */}
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="NESS Home Energy Sanctuary"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-primary/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements - More Sophisticated */}
                <div className="absolute -bottom-16 -left-16 backdrop-blur-3xl bg-background/80 border border-muted-foreground/5 rounded-3xl p-10 shadow-2xl">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <img 
                        src={productImage} 
                        alt="NESS PRO Battery System" 
                        className="w-24 h-auto"
                      />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg font-light text-foreground">NESS PRO</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Active Protection</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-12 -right-12 backdrop-blur-3xl bg-background/80 border border-muted-foreground/5 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-extralight text-foreground tracking-tight">24</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Hours Protected</div>
                    <div className="w-8 h-px bg-primary mx-auto opacity-60"></div>
                  </div>
                </div>

                {/* Ambient Glow Effect */}
                <div className="absolute -inset-32 bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full opacity-40 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Promise Section */}
      <section className="py-48 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center space-y-24">
            
            {/* Centered Philosophy */}
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="space-y-8">
                <div className="inline-block">
                  <div className="text-xs text-muted-foreground/40 font-light uppercase tracking-[0.3em] mb-4">
                    Our Promise
                  </div>
                  <div className="w-12 h-px bg-primary mx-auto"></div>
                </div>
                
                <h2 className="text-[clamp(3rem,6vw,7rem)] font-extralight text-foreground leading-[0.8] tracking-[-0.02em]">
                  Your world doesn't stop
                  <br />
                  <span className="text-muted-foreground/40 italic">when the power does</span>
                </h2>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-2xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em]">
                  NESS PRO doesn't just store energy—it preserves moments. 
                  The birthday video call that doesn't drop. The work presentation that finishes flawlessly. 
                  The peaceful night's sleep, uninterrupted.
                </p>
                
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-40"></div>
              </div>
            </div>

            {/* Elegant Stats */}
            <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
              <div className="text-center space-y-6 group cursor-pointer">
                <div className="text-6xl font-extralight text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                  99.97%
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    System Uptime
                  </div>
                  <div className="w-8 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mx-auto"></div>
                </div>
              </div>
              
              <div className="text-center space-y-6 group cursor-pointer">
                <div className="text-6xl font-extralight text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                  10<span className="text-2xl">ms</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Switch Response
                  </div>
                  <div className="w-8 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mx-auto"></div>
                </div>
              </div>
              
              <div className="text-center space-y-6 group cursor-pointer">
                <div className="text-6xl font-extralight text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
                  15<span className="text-2xl">yr</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Warranty Period
                  </div>
                  <div className="w-8 h-px bg-muted-foreground/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Intimacy Section */}
      <section className="py-48 bg-background">
        <div className="max-w-[1600px] mx-auto px-12">
          
          <div className="grid lg:grid-cols-12 gap-32 items-center">
            
            {/* Product Showcase */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-square bg-gradient-to-br from-muted/10 via-background to-muted/5 rounded-[3rem] p-16 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={productImage} 
                  alt="NESS PRO Energy System" 
                  className="w-full h-auto relative z-10"
                />
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-conic from-primary/5 via-transparent to-primary/5 opacity-30"></div>
              </div>
            </div>

            {/* Intimate Content */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground/40 font-light uppercase tracking-[0.3em]">
                    NESS PRO Series
                  </div>
                  <div className="w-8 h-px bg-primary"></div>
                </div>

                <h3 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-[-0.02em]">
                  Designed to
                  <br />
                  <span className="text-muted-foreground/50 italic">disappear</span>
                </h3>

                <p className="text-xl font-extralight text-muted-foreground leading-[1.6] tracking-[-0.01em]">
                  The most sophisticated home energy system you'll never notice. 
                  Until the moment you need it most.
                </p>
              </div>

              {/* Refined Feature Set */}
              <div className="space-y-12">
                <div className="space-y-8">
                  {[
                    { icon: Shield, title: "Silent Guardian", desc: "Works invisibly, protecting your home 24/7" },
                    { icon: Zap, title: "Instant Response", desc: "10ms switching—faster than a heartbeat" },
                    { icon: Smartphone, title: "Intuitive Control", desc: "Monitor and manage from anywhere" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-6 group cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="text-lg font-light text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="text-muted-foreground hover:text-foreground group px-0">
                  <span className="font-light">Complete specifications</span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Social Proof */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-[1400px] mx-auto px-12 text-center">
          
          <div className="space-y-24">
            {/* Trust Indicators */}
            <div className="space-y-12">
              <div className="inline-block">
                <div className="text-xs text-muted-foreground/40 font-light uppercase tracking-[0.3em] mb-4">
                  Trusted by families across India
                </div>
                <div className="w-12 h-px bg-primary mx-auto"></div>
              </div>

              <div className="flex items-center justify-center space-x-16 opacity-60">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5</span>
                </div>
                
                <div className="text-xs text-muted-foreground/40">•</div>
                
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">BIS Certified</span>
                </div>
                
                <div className="text-xs text-muted-foreground/40">•</div>
                
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">2,847+ Homes</span>
                </div>
              </div>
            </div>

            {/* Elegant CTA */}
            <div className="space-y-12">
              <h4 className="text-5xl font-extralight text-foreground leading-tight tracking-[-0.02em]">
                Ready to never worry about power again?
              </h4>
              
              <div className="space-y-8">
                <Link to="/find-installer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-16 py-6 rounded-full text-xl font-light tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                    Find Your Installer
                  </Button>
                </Link>
                
                <p className="text-sm text-muted-foreground/60 font-light">
                  Free consultation • Professional installation • 15-year warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Contact */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-2xl mx-auto px-12 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h5 className="text-4xl font-extralight text-foreground leading-tight tracking-[-0.02em]">
                Questions? We're here.
              </h5>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-40"></div>
            </div>

            <div className="bg-background/50 backdrop-blur-xl border border-muted-foreground/10 p-10 rounded-3xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-transparent border border-muted-foreground/20 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50 font-light"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full px-6 py-4 bg-transparent border border-muted-foreground/20 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all duration-300 text-foreground placeholder:text-muted-foreground/50 font-light"
                  />
                </div>

                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-2xl text-lg font-light transition-all duration-300 hover:scale-105">
                  Schedule Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentialPremium;