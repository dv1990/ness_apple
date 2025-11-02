import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IndiaInstallationMap from "@/components/IndiaInstallationMap";
import { 
  ArrowRight, 
  Shield, 
  Home, 
  Building2, 
  Zap, 
  Heart, 
  Star, 
  CheckCircle,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { WhyNess } from "@/components/WhyNess";

const Index = () => {
  return (
    <Layout>
      {/* Simplified Hero - One Statement, One Path */}
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          <div className="space-y-12">
            <h1 className="text-6xl md:text-8xl font-light text-foreground leading-tight tracking-tight">
              Never lose power.
              <br />
              <span className="text-energy font-medium">Ever again.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              While others plan around power cuts, 
              <span className="text-foreground font-medium"> you forget they exist.</span>
            </p>

            <Link to="/contact">
              <Button className="bg-energy hover:bg-energy-dark text-white px-16 py-8 text-2xl font-medium rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 mt-8">
                Begin your transformation
                <ArrowRight className="w-8 h-8 ml-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sonos-Style Social Proof - Credibility Through Real Stories */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy-bg text-energy rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Stories from our community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              When expertise meets <span className="text-energy font-medium">life's moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Real families sharing the difference NESS made when it mattered most
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/60 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Mumbai Family</span>
                </div>
                <blockquote className="text-2xl font-light text-foreground leading-relaxed mb-4">
                  "Three days without power. Our neighbors were miserable. 
                  We barely noticed."
                </blockquote>
                <div className="text-muted-foreground text-sm">
                  — Priya Sharma, Bandra West
                </div>
              </div>
              <div className="pt-4 border-t border-border/20">
                <div className="text-energy font-medium text-lg">₹1.2L saved annually</div>
                <div className="text-muted-foreground text-sm">48-hour backup during Cyclone Tauktae</div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Restaurant Business</span>
                </div>
                <blockquote className="text-2xl font-light text-foreground leading-relaxed mb-4">
                  "Every order delivered. Every customer happy. 
                  Even during the blackout."
                </blockquote>
                <div className="text-muted-foreground text-sm">
                  — Ravi Kumar, Café Mocha, Bengaluru
                </div>
              </div>
              <div className="pt-4 border-t border-border/20">
                <div className="text-energy font-medium text-lg">65% cost reduction</div>
                <div className="text-muted-foreground text-sm">Zero downtime in 18 months</div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Manufacturing Excellence</span>
                </div>
                <blockquote className="text-2xl font-light text-foreground leading-relaxed mb-4">
                  "Production never stopped. Competitors lost weeks. 
                  We gained market share."
                </blockquote>
                <div className="text-muted-foreground text-sm">
                  — Sunita Rao, Precision Tools Ltd, Chennai
                </div>
              </div>
              <div className="pt-4 border-t border-border/20">
                <div className="text-energy font-medium text-lg">₹50L saved over 2 years</div>
                <div className="text-muted-foreground text-sm">24/7 operations maintained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sonos-Inspired Product Intelligence */}
      <section className="py-40 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Confident, Human-Focused Header */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              One system. <span className="text-energy font-medium">Every scenario.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              NESS intelligently scales from protecting your morning coffee to powering entire industrial complexes
            </p>
          </div>
          
          {/* Simplified, Outcome-Focused Product Grid */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* NESS Home - Family-Focused */}
            <Link to="/residential" className="group">
              <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-energy-bg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-energy/20 transition-colors">
                    <Home className="w-8 h-8 text-energy" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-light text-foreground">For Families</h3>
                    <p className="text-muted-foreground">5–15 kWh capacity</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-2xl font-light text-foreground leading-relaxed">
                    Your children never ask <span className="text-energy font-medium">"Why are the lights off?"</span>
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-energy" />
                      <span>Seamless 20ms switchover</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-energy" />
                      <span>Whisper-quiet operation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-energy" />
                      <span>48+ hour family backup</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-energy font-medium group-hover:text-energy-bright transition-colors flex items-center">
                  Protect your family
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* NESS Pod - Business-Focused */}
            <Link to="/commercial" className="group">
              <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-light text-foreground">For Business</h3>
                    <p className="text-muted-foreground">25–100 kWh capacity</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-2xl font-light text-foreground leading-relaxed">
                    Your customers never experience <span className="text-accent font-medium">"Sorry, we're closed due to power"</span>
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-accent" />
                      <span>Zero revenue loss</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-accent" />
                      <span>AI-powered optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-accent" />
                      <span>24-month ROI guarantee</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-accent font-medium group-hover:text-accent/80 transition-colors flex items-center">
                  Secure your operations
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* NESS Cube - Industrial-Focused */}
            <Link to="/commercial" className="group">
              <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-10 hover:bg-card/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-light text-foreground">For Industry</h3>
                    <p className="text-muted-foreground">1+ MWh capacity</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-2xl font-light text-foreground leading-relaxed">
                    Your production never stops while <span className="text-primary font-medium">competitors lose millions</span>
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      <span>Industrial-grade reliability</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      <span>Unlimited scalability</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      <span>Complete grid integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-primary font-medium group-hover:text-primary/80 transition-colors flex items-center">
                  Scale with confidence
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why NESS Component */}
      <WhyNess />

      {/* Minimal Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-700 font-medium tracking-wide uppercase">Installations</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">₹2.4Cr</div>
              <div className="text-sm text-gray-700 font-medium tracking-wide uppercase">Saved</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-700 font-medium tracking-wide uppercase">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-700 font-medium tracking-wide uppercase">Year warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Installation Map */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy-bg text-energy rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Trusted across India</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              From <span className="text-energy font-medium">Himachal to Kanyakumari</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              150+ installations delivered • 100MWh+ energy in 24 months • 15+ villages 100% solar powered
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20">
            <IndiaInstallationMap />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-8">
              Every dot represents a family or business that chose reliability and peace of mind
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-white px-10 py-5 text-lg font-medium rounded-xl">
                Join our growing community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sonos-Style Values & Legacy Section */}
      <section className="py-40 bg-gradient-to-b from-muted/20 via-background to-muted/20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="mb-12">
            <div className="w-3 h-3 bg-energy rounded-full mx-auto mb-6"></div>
            <p className="text-sm font-medium text-energy tracking-wider uppercase">
              More than technology
            </p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-foreground leading-tight mb-12">
            <span className="text-energy font-medium">Values</span> that outlast
            <br />
            any warranty
          </h2>
          
          {/* Values Grid - Sonos-Inspired */}
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mt-20 mb-20">
            <div className="text-left space-y-6">
              <div className="w-12 h-12 bg-energy-bg rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-energy" />
              </div>
              <h3 className="text-2xl font-light text-foreground">Immediate Peace</h3>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>Every NESS installation eliminates stress from your daily life</p>
                <p>No more candle emergencies or spoiled food</p>
                <p>No more expensive generator maintenance</p>
              </div>
              <div className="text-energy font-medium">Starting today: ₹15,000+ annual savings</div>
            </div>
            
            <div className="text-left space-y-6">
              <div className="w-12 h-12 bg-energy-bg rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-energy" />
              </div>
              <h3 className="text-2xl font-light text-foreground">Generational Legacy</h3>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>Clean air your children will breathe for decades</p>
                <p>Energy security that transcends climate uncertainties</p>
                <p>A sustainable choice they'll be proud to inherit</p>
              </div>
              <div className="text-energy font-medium">For the next 25+ years</div>
            </div>
          </div>
          
          {/* The Promise - Sonos-Style Confident Statement */}
          <div className="bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-12 max-w-3xl mx-auto">
            <div className="mb-6">
              <Badge variant="outline" className="border-energy text-energy px-4 py-2">
                The NESS Commitment
              </Badge>
            </div>
            <p className="text-2xl font-light text-foreground leading-relaxed">
              We don't just install energy systems. 
              <br />
              <span className="text-energy font-medium">We protect what matters most to you.</span>
            </p>
            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="text-muted-foreground">
                Every installation, every interaction, every innovation serves one purpose: 
                ensuring your family never has to worry about power again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sonos-Inspired Confident CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            The decision that changes <span className="text-energy">everything</span>
          </h2>
          <p className="text-xl font-light text-background/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Join over 10,000 families and 500+ businesses who chose reliability, 
            savings, and peace of mind with NESS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-white px-12 py-6 text-xl font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your NESS Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link to="/installers">
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 hover:scale-105">
                Find Certified Installer
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm text-background/70">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-energy" />
              <span>Free expert consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-energy" />
              <span>White-glove installation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-energy" />
              <span>25-year performance warranty</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;