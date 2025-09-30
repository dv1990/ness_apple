import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight, Heart, Home, Sparkles, Shield, Zap, Smile } from "lucide-react";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Emotional Connection */}
      <section className="min-h-screen flex items-center justify-center bg-background px-6 sm:px-8 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Emotional indicator with icon */}
          <div className="inline-flex items-center gap-3 mb-12 sm:mb-16 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground tracking-[0.2em] uppercase font-light">
              For Your Family's Comfort
            </span>
          </div>

          {/* Emotionally resonant headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight text-foreground mb-6 sm:mb-8 font-extralight animate-fade-in">
            Never worry about
            <br />
            <span className="text-primary font-light">power again</span>
          </h1>
          
          {/* Emotional benefit statement */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 sm:mb-20 leading-relaxed font-light animate-fade-in">
            Your children sleep soundly. Your work continues uninterrupted. 
            Your home stays comfortable. <span className="text-foreground font-normal">Always.</span>
          </p>

          {/* Dual action with emotional appeal */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => document.getElementById('emotional-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Protects You
              <Heart className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find Your System
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Story Section */}
      <section id="emotional-story" className="py-20 sm:py-32 md:py-40 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          {/* Life moments that matter */}
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-foreground mb-6 sm:mb-8 font-extralight">
              Life's precious moments
              <br />
              <span className="text-primary font-light">protected</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Because some things can't wait for the power to come back
            </p>
          </div>

          {/* Emotional scenarios grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
            
            {/* Scenario 1: Family Time */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Home className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Family dinner time</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                The lights dim across the neighborhood. But at your table, the warm glow continues. 
                Your children don't even notice—they're too busy sharing stories from their day.
              </p>
            </div>

            {/* Scenario 2: Work from Home */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">That important call</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                Mid-presentation, the grid fails. Your neighbor's screen goes dark. 
                Yours doesn't. Your client never knows there was a problem.
              </p>
            </div>

            {/* Scenario 3: Summer Comfort */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Cool summer nights</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                45°C outside. The AC hums quietly. Your baby sleeps peacefully. 
                Even when the whole street is in darkness, your home remains a sanctuary.
              </p>
            </div>

            {/* Scenario 4: Elderly Care */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Medical peace of mind</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                Your parent's oxygen concentrator. Their CPAP machine. Refrigerated medicines. 
                Power failures are no longer a source of anxiety.
              </p>
            </div>

            {/* Scenario 5: Morning Routine */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Smile className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Stress-free mornings</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                No more rushing to charge phones before the cut. No morning panic. 
                Just a smooth start to everyone's day, every single day.
              </p>
            </div>

            {/* Scenario 6: Security */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Always secure</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                Your cameras stay online. Your smart locks keep working. Your gate opens when you arrive. 
                Security doesn't take a break when the grid does.
              </p>
            </div>
          </div>

          {/* Emotional pull quote */}
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-foreground leading-tight mb-6 sm:mb-8">
              "We don't just sell batteries.
              <br />
              <span className="text-primary font-light">We protect what matters most to you."</span>
            </blockquote>
            <p className="text-base sm:text-lg text-muted-foreground font-light">
              Every NESS system is designed with your family's well-being at its heart.
            </p>
          </div>
        </div>
      </section>

      {/* Products - Ive's product showcase precision */}
      <section id="products" className="py-40 bg-pearl">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Emotional section introduction */}
          <div className="text-center mb-20 sm:mb-32">
            <div className="inline-flex items-center gap-3 mb-8 sm:mb-12">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground tracking-[0.2em] uppercase font-light">
                Choose Your Protection
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-foreground mb-6 sm:mb-8 font-extralight">
              Find your peace of mind
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Every home is unique. Every family's needs are different. 
              <br className="hidden sm:block" />
              <span className="text-foreground font-normal">We have the perfect solution for yours.</span>
            </p>
          </div>

          {/* Products - Clean grid, no decoration */}
          <div className="grid md:grid-cols-3 gap-16">
            
            {/* NESS UPS - Essential */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-platinum/30 hover:shadow-[0_32px_64px_-16px_rgba(20,20,20,0.1)] transition-all duration-500">
                
                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-cube-product.png" 
                    alt="NESS UPS" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    loading="lazy"
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS UPS</h3>
                  <p className="text-caption text-silver uppercase tracking-[0.1em]">Essential</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">12h</div>
                      <div className="text-caption text-silver">Backup</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">5ms</div>
                      <div className="text-caption text-silver">Switch</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">5yr</div>
                      <div className="text-caption text-silver">Warranty</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Essential backup for apartments and smaller homes. Reliable, quiet, intelligent.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-platinum/30">
                  <p className="text-caption text-silver mb-6 text-center">From ₹2.5L</p>
                  <Button className="w-full bg-charcoal text-pearl hover:bg-graphite rounded-full py-3 font-medium">
                    Configure UPS
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS AIO - Complete */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-platinum/30 hover:shadow-[0_32px_64px_-16px_rgba(20,20,20,0.1)] transition-all duration-500">
                
                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-pod-product.png" 
                    alt="NESS AIO" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    loading="lazy"
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS AIO</h3>
                  <p className="text-caption text-silver uppercase tracking-[0.1em]">Complete</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">24h</div>
                      <div className="text-caption text-silver">Backup</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">8ms</div>
                      <div className="text-caption text-silver">Switch</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">7yr</div>
                      <div className="text-caption text-silver">Warranty</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Solar and battery combined. Perfect for medium homes seeking energy independence.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-platinum/30">
                  <p className="text-caption text-silver mb-6 text-center">From ₹4.2L</p>
                  <Button className="w-full bg-charcoal text-pearl hover:bg-graphite rounded-full py-3 font-medium">
                    Configure AIO
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS PRO - Ultimate */}
            <div className="group">
              <div className="bg-gradient-to-br from-white/80 to-energy-light/20 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-energy/20 hover:shadow-[0_32px_64px_-16px_rgba(22,163,74,0.15)] transition-all duration-500 relative">
                
                {/* Subtle premium indicator */}
                <div className="absolute top-6 right-6 bg-energy text-white text-xs px-3 py-1 rounded-full font-medium">
                  Ultimate
                </div>

                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-pro-product.png" 
                    alt="NESS PRO" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    priority={true}
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS PRO</h3>
                  <p className="text-caption text-energy uppercase tracking-[0.1em] font-medium">Ultimate</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">48h</div>
                      <div className="text-caption text-silver">Backup</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">3ms</div>
                      <div className="text-caption text-silver">Switch</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">10yr</div>
                      <div className="text-caption text-silver">Warranty</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Complete energy ecosystem. Ultimate backup, intelligence, and luxury for larger homes.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-energy/20">
                  <p className="text-caption text-silver mb-6 text-center">From ₹7.8L</p>
                  <Button className="w-full bg-energy text-white hover:bg-energy-dark rounded-full py-3 font-medium">
                    Configure PRO
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional closing message */}
          <div className="text-center mt-20 sm:mt-32">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12 md:p-16 border border-primary/20 max-w-4xl mx-auto">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-6 sm:mb-8" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-extralight text-foreground mb-6 sm:mb-8 leading-tight">
                "Your family deserves the comfort of never worrying about power.
                <br className="hidden sm:block" />
                <span className="text-primary font-light">Let us give you that peace of mind."</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Join thousands of Indian families who sleep better knowing their homes are protected by NESS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
                  onClick={() => window.location.href = '/contact/homeowner'}
                >
                  Talk to Our Family Care Team
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
                  onClick={() => window.location.href = '/find-installer'}
                >
                  Find Local Installer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);