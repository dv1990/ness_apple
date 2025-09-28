import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight } from "@/components/ui/icons";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Pure Ive Minimalism */}
      <section className="min-h-screen flex items-center justify-center bg-pearl px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Ultra-minimal status indicator */}
          <div className="inline-flex items-center gap-3 mb-16 opacity-60">
            <div className="w-1 h-1 rounded-full bg-charcoal"></div>
            <span className="text-caption text-silver tracking-[0.2em] uppercase">
              For Modern Homes
            </span>
          </div>

          {/* Ive's signature typography hierarchy */}
          <h1 className="text-display-large md:text-[9rem] leading-[0.8] tracking-tight text-charcoal mb-8">
            Power
            <br />
            <span className="text-energy font-thin">redefined</span>
          </h1>
          
          {/* Single, focused benefit */}
          <p className="text-body-large text-silver max-w-2xl mx-auto mb-20 leading-relaxed">
            The luxury of continuous power. The responsibility of clean energy.
          </p>

          {/* Single action */}
          <Button 
            className="bg-charcoal text-pearl hover:bg-graphite px-8 py-4 rounded-full text-body font-medium tracking-wide transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(20,20,20,0.3)]"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover NESS
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* The Truth - Ive's emotional storytelling */}
      <section className="py-40 bg-whisper">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          {/* Single profound question */}
          <h2 className="text-display md:text-[6rem] leading-[0.85] tracking-tight text-charcoal mb-20">
            What if power
            <br />
            <span className="text-silver font-thin">never failed?</span>
          </h2>

          {/* Three fundamental truths - no decoration */}
          <div className="grid md:grid-cols-3 gap-20">
            
            <div className="space-y-6">
              <h3 className="text-title-large text-charcoal font-light">Seamless</h3>
              <p className="text-body text-silver leading-relaxed">
                Your life continues uninterrupted. Work, comfort, security—all preserved.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-title-large text-charcoal font-light">Clean</h3>
              <p className="text-body text-silver leading-relaxed">
                Every moment powered by the sun. A gift of cleaner air for your children.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-title-large text-charcoal font-light">Intelligent</h3>
              <p className="text-body text-silver leading-relaxed">
                Technology that learns, adapts, and optimizes—so you never have to think about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Ive's product showcase precision */}
      <section id="products" className="py-40 bg-pearl">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Minimal section introduction */}
          <div className="text-center mb-32">
            <h2 className="text-display leading-[0.9] tracking-tight text-charcoal mb-8">
              Three systems.
              <br />
              <span className="text-energy font-thin">One perfect fit.</span>
            </h2>
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

          {/* Minimal footer message */}
          <div className="text-center mt-32">
            <p className="text-body-large text-silver italic font-light max-w-2xl mx-auto leading-relaxed">
              "The future belongs to those who choose clean energy today."
            </p>
            <div className="mt-12">
              <Button 
                variant="outline" 
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-pearl px-8 py-3 rounded-full font-medium"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);