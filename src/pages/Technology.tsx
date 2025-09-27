import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LazySection } from "@/components/ui/lazy-section";
import { usePerformanceTracking } from "@/lib/performance-monitor";
import { ArrowRight, Heart, Home, Building2, Factory, Play, Download, Lightbulb, Users, Clock, CheckCircle, Zap, Shield, Brain } from "lucide-react";
import batteryTechnology from "@/assets/battery-technology.jpg";
import aiSoftware from "@/assets/ai-software.jpg";
import rdLaboratory from "@/assets/rd-laboratory.jpg";
import systemArchitecture from "@/assets/system-architecture.jpg";
import deyeLogo from "@/assets/deye-logo.png";
import studerLogo from "@/assets/studer-logo.png";
import victronLogo from "@/assets/victron-logo.png";
import solisLogo from "@/assets/solis-logo.png";
import fimerLogo from "@/assets/fimer-logo.png";

const Technology = () => {
  const { endTracking } = usePerformanceTracking('Technology');
  React.useEffect(() => endTracking, [endTracking]);

  return (
    <Layout>
      {/* Steve Jobs-style Hero - "One More Thing" */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-8 space-y-20">
          
          {/* Opening Statement */}
          <div className="space-y-12">
            <div className="text-gray-400 text-lg font-light tracking-wide">
              Today, everything changes.
            </div>
            
            <h1 className="text-8xl md:text-9xl font-extralight tracking-tighter leading-[0.8]">
              It just
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                works
              </span>
            </h1>
            
            <p className="text-3xl font-extralight text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The most advanced energy storage system ever created.
              <br />
              So intelligent, it's invisible.
            </p>
          </div>

          {/* Revolutionary Stats */}
          <div className="grid grid-cols-3 gap-16 max-w-4xl mx-auto py-16">
            <div className="space-y-4">
              <div className="text-6xl font-ultralight text-cyan-400">99.9%</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">Uptime</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-ultralight text-blue-400">0.1s</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">Switch Time</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-ultralight text-cyan-400">25</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">Year Life</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Button className="bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Experience the Future
            </Button>
            
            <div className="text-gray-500 text-sm">
              Available now
            </div>
          </div>
        </div>
      </section>

      {/* "Think Different" Product Reveal */}
      <LazySection sectionName="product-reveal" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Product Hero Shot */}
          <div className="text-center space-y-20">
            <div className="space-y-8">
              <h2 className="text-7xl font-ultralight text-gray-900 tracking-tight">
                Breakthrough
              </h2>
              <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                We didn't just make a better battery. We reimagined what energy storage could be.
              </p>
            </div>

            {/* Product Image with Dramatic Reveal */}
            <div className="relative">
              <div className="aspect-[16/10] max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50">
                <OptimizedImage 
                  src={batteryTechnology}
                  alt="Revolutionary energy storage technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Innovation Callout */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-4 rounded-full">
                <div className="text-sm font-medium">Every cell. Every second. Perfectly orchestrated.</div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Three Pillars - Jobs Style */}
      <LazySection sectionName="three-pillars" className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-32">
            <h2 className="text-6xl font-ultralight text-gray-900 tracking-tight mb-8">
              Three breakthroughs.
              <br />
              <span className="text-gray-500">One revolution.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-20">
            
            {/* Pillar 1: Intelligence */}
            <div className="text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-gray-900">Intelligence</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  AI that predicts the future. Every cell monitored 1,000 times per second. 
                  It knows what you need before you do.
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="text-4xl font-ultralight text-blue-500 mb-2">98.7%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Prediction Accuracy</div>
              </div>
            </div>

            {/* Pillar 2: Reliability */}
            <div className="text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-gray-900">Reliability</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Zero points of failure. Redundant systems. Military-grade protection. 
                  When everything else fails, this doesn't.
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="text-4xl font-ultralight text-green-500 mb-2">25</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Year Warranty</div>
              </div>
            </div>

            {/* Pillar 3: Simplicity */}
            <div className="text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-gray-900">Simplicity</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Plug it in. It works. Add more units. They work together. 
                  No configuration. No complexity.
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="text-4xl font-ultralight text-purple-500 mb-2">0</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Setup Required</div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* "One More Thing" Technology Deep Dive */}
      <LazySection sectionName="technology-deep-dive" className="py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-32">
            <div className="text-gray-400 text-lg mb-8">One more thing...</div>
            <h2 className="text-6xl font-ultralight tracking-tight">
              The technology
              <br />
              <span className="text-gray-500">behind the magic</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Technology Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                <OptimizedImage 
                  src={aiSoftware}
                  alt="AI-powered energy intelligence"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-2xl">
                <div className="space-y-2">
                  <div className="text-3xl font-light">1M+</div>
                  <div className="text-sm text-gray-600">Data Points/Hour</div>
                </div>
              </div>
            </div>

            {/* Technology Story */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-4xl font-light">
                  "Every cell has a story.
                  <br />
                  We listen to all of them."
                </h3>
                
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  Our AI doesn't just monitor your system. It understands it. 
                  It learns from millions of data points, predicts problems before they happen, 
                  and optimizes performance in real-time.
                </p>
              </div>

              <div className="space-y-6 p-8 rounded-2xl border border-gray-800 bg-gray-900/50">
                <div className="text-sm text-gray-400 uppercase tracking-widest">
                  Revolutionary Features
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Predictive cell balancing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Self-healing algorithms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Automatic load optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Zero-downtime updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Partnerships - Minimalist */}
      <LazySection sectionName="partnerships" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Works with everything
            </h2>
            <p className="text-lg text-gray-600">
              Seamlessly integrates with the tools you already trust
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {[
              { name: "Deye", logo: deyeLogo },
              { name: "Studer", logo: studerLogo },
              { name: "Victron", logo: victronLogo },
              { name: "Solis", logo: solisLogo },
              { name: "FIMER", logo: fimerLogo }
            ].map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                <OptimizedImage 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
       </LazySection>

      {/* Final CTA - Jobs Style */}
      <section className="py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center space-y-16">
          
          <div className="space-y-8">
            <h2 className="text-6xl font-ultralight tracking-tight">
              The future of energy
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                starts now
              </span>
            </h2>
            
            <p className="text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              Don't wait for tomorrow's technology. Experience it today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-6 rounded-full text-lg font-medium transition-all duration-300">
              <Download className="mr-2 w-5 h-5" />
              Download Specs
            </Button>
          </div>

          <div className="text-gray-500 text-sm">
            Available through certified installers worldwide
          </div>
        </div>
       </section>
    </Layout>
  );
};

export default React.memo(Technology);