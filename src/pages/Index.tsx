import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Home, Building2, Wrench, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Apple-Style Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          
          {/* Apple-Style Single Focus */}
          <div className="space-y-12">
            <h1 className="font-display text-6xl md:text-8xl font-light text-gray-900 leading-tight tracking-tight">
              Life,
              <br />
              <span className="font-normal text-gray-900">uninterrupted</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-normal text-gray-700 max-w-3xl mx-auto leading-relaxed">
              When the grid fails, your home doesn't.
            </p>
          </div>

          {/* Single Primary CTA */}
          <div className="mt-16">
            <Button className="bg-black text-white hover:bg-gray-900 px-12 py-5 rounded-xl text-xl font-medium transition-all duration-200 hover:scale-105">
              Discover NESS
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Stories as Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-normal text-gray-900 mb-8">
              Real families. Real peace of mind.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-2xl font-light text-gray-900">"The night our entire street went dark for 3 days"</div>
              <div className="text-sm text-gray-700">The Sharma family, Mumbai</div>
              <div className="text-sm font-medium text-green-600">Saved ₹1.2L in first year</div>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-light text-gray-900">"Our restaurant never missed a single order"</div>
              <div className="text-sm text-gray-700">Café Mocha, Bangalore</div>
              <div className="text-sm font-medium text-green-600">Zero downtime, 40% cost reduction</div>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-light text-gray-900">"Manufacturing continued while others stopped"</div>
              <div className="text-sm text-gray-700">Precision Tools Ltd, Chennai</div>
              <div className="text-sm font-medium text-green-600">₹50L savings in 2 years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Product Showcase */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Minimal Section Header */}
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Three sizes.
              <br />
              <span className="font-normal">Infinite possibilities.</span>
            </h2>
          </div>
          
          {/* Apple-Style Product Grid */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* NESS Home */}
            <Link to="/homeowners" className="group">
              <div className="bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="mb-8">
                  <Home className="w-12 h-12 text-black mb-6" />
                  <h3 className="font-display text-3xl font-normal text-gray-900 mb-2">NESS Home</h3>
                  <p className="text-lg text-gray-700 font-normal">5–15 kWh</p>
                </div>
                
                <p className="text-2xl text-gray-900 leading-relaxed mb-6 font-normal">
                  Your family never worries about power cuts.
                </p>
                
                {/* Progressive Disclosure - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-4 mb-8 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Same day installation</span>
                    <span className="font-medium">Guaranteed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payback period</span>
                    <span className="font-medium">3 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Backup duration</span>
                    <span className="font-medium">48+ hours</span>
                  </div>
                </div>
                
                <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                  Discover how
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* NESS Pod */}
            <Link to="/ci" className="group">
              <div className="bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="mb-8">
                  <Building2 className="w-12 h-12 text-black mb-6" />
                  <h3 className="font-display text-3xl font-normal text-gray-900 mb-2">NESS Pod</h3>
                  <p className="text-lg text-gray-700 font-normal">25–100 kWh</p>
                </div>
                
                <p className="text-2xl text-gray-900 leading-relaxed mb-6 font-normal">
                  Your business never stops, even when the grid does.
                </p>
                
                {/* Progressive Disclosure - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-4 mb-8 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Cost elimination</span>
                    <span className="font-medium">65% reduction</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">ROI guaranteed</span>
                    <span className="font-medium">24 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Downtime protection</span>
                    <span className="font-medium">Zero tolerance</span>
                  </div>
                </div>
                
                <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                  Calculate savings
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* NESS Cube */}
            <Link to="/ci" className="group">
              <div className="bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <h3 className="font-display text-3xl font-normal text-gray-900 mb-2">NESS Cube</h3>
                  <p className="text-lg text-gray-700 font-normal">1+ MWh</p>
                </div>
                
                <p className="text-2xl text-gray-900 leading-relaxed mb-6 font-normal">
                  Industrial operations continue seamlessly, 24/7.
                </p>
                
                {/* Progressive Disclosure - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-4 mb-8 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Grid integration</span>
                    <span className="font-medium">Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">AI monitoring</span>
                    <span className="font-medium">24/7 active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Scale capacity</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                </div>
                
                <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                  Explore enterprise
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Emotional Journey - Human Outcomes First */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Your family sleeps
            <br />
            <span className="font-normal">peacefully</span>
          </h2>
          
          <p className="text-xl text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto mb-16">
            Every night, knowing that power cuts can't touch your home's comfort, security, or daily rhythm.
          </p>

          <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            <div className="text-left">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Zero fire risk</h3>
              <p className="text-gray-700 leading-relaxed font-normal">
                NESS eliminates thermal runaway completely. 
                50,000+ homes protected with zero incidents.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Bills cut by 40%</h3>
              <p className="text-gray-700 leading-relaxed font-normal">
                AI learns your patterns and eliminates waste. 
                Every family saves ₹15,000+ annually.
              </p>
            </div>
          </div>
          
          {/* Progressive Disclosure */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Here's how we guarantee this</p>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <span className="font-medium text-gray-900">LiFePO₄ Chemistry</span>
                <p className="text-gray-700 mt-1">Inherently stable, no thermal runaway</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">AI Optimization</span>
                <p className="text-gray-700 mt-1">Learns usage, predicts needs, saves money</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">15-Year Warranty</span>
                <p className="text-gray-700 mt-1">Performance guaranteed for 6,000+ cycles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Philosophy Section - Balanced Appeal */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-4"></div>
            <p className="text-sm font-medium text-neutral-500 tracking-wider uppercase">
              A message for our times
            </p>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-light text-neutral-900 leading-tight mb-8">
            "Your children will <span className="text-green-600 font-normal">thank you</span>.<br />
            Your electricity bill <span className="text-green-600 font-normal">already has</span>."
          </h2>
          
          {/* Immediate + Future Benefits */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-16 mb-16">
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-normal text-neutral-900">Today's reality</h3>
              <div className="space-y-3 text-lg">
                <p className="text-neutral-700">₹15,000+ saved annually</p>
                <p className="text-neutral-700">Zero power cut stress</p>
                <p className="text-neutral-700">48-hour backup guarantee</p>
              </div>
            </div>
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-normal text-neutral-900">Tomorrow's legacy</h3>
              <div className="space-y-3 text-lg">
                <p className="text-neutral-700">Cleaner air for your children</p>
                <p className="text-neutral-700">Energy independence for India</p>
                <p className="text-neutral-700">Zero regret for your family</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm font-medium text-green-600 tracking-[0.2em] uppercase">
              The Ness Promise
            </p>
          </div>
          
          <p className="text-xl font-normal text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Every month you wait costs your family ₹3,000. Every day you act builds a cleaner future. 
            <br />
            <span className="font-semibold text-neutral-900">Choose NESS today. Protect both.</span>
          </p>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
            Ready to make the switch?
          </h2>
          <p className="text-xl font-normal text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of forward-thinking individuals and organizations 
            powering India's energy independence with NESS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105">
                Get started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/installers">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105">
                Find installer
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-12">
            Free consultation • Same-day installation • 15-year warranty
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;