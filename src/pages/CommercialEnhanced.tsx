import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { OptimizedWebPImage } from "@/components/ui/optimized-webp-image";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";

const CommercialEnhanced = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    monthlySpend: ""
  });

  const calculateSavings = (spend: number) => {
    const annualSavings = spend * 12 * 0.42; // 42% savings
    const paybackPeriod = 3.2; // years
    const twentyFiveYearValue = annualSavings * 25;
    
    return {
      annualSavings: Math.round(annualSavings),
      paybackPeriod,
      twentyFiveYearValue: Math.round(twentyFiveYearValue)
    };
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const savings = monthlySpend ? calculateSavings(parseInt(monthlySpend)) : null;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight text-foreground leading-[0.85] tracking-[-0.04em]">
              Power that never
              <span className="block font-light text-primary">fails you</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              While competitors shut down, you stay open
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-lg text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">99.98% uptime guaranteed</span>
            </div>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 rounded-full"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See your advantage
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="pt-16">
              <OptimizedWebPImage
                src="/src/assets/industrial-solar-facility.jpg"
                alt="Industrial solar facility with NESS energy storage"
                className="w-full max-w-4xl mx-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Every blackout
                <span className="block text-destructive">costs you money</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">₹2.4L</div>
                  <p className="text-muted-foreground">lost per hour of downtime</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">73%</div>
                  <p className="text-muted-foreground">of businesses hit monthly</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground">your competitor stayed powered</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-10 py-6 rounded-full"
              >
                Never lose business again
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                One system.
                <span className="block text-primary">Every scale.</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="p-8 space-y-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">100kWh</div>
                    <h3 className="text-xl font-semibold">Small Business</h3>
                    <p className="text-muted-foreground">Perfect for retail, small manufacturing</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Power Output:</span>
                      <span>50kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Runtime:</span>
                      <span>2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Footprint:</span>
                      <span>2m × 1m</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200 ring-2 ring-primary/20">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">500kWh</div>
                    <h3 className="text-xl font-semibold">Medium Enterprise</h3>
                    <p className="text-muted-foreground">Ideal for factories, data centers</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Power Output:</span>
                      <span>250kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Runtime:</span>
                      <span>2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Footprint:</span>
                      <span>6m × 3m</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 space-y-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">1MWh</div>
                    <h3 className="text-xl font-semibold">Large Industrial</h3>
                    <p className="text-muted-foreground">For heavy industry, campuses</p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Power Output:</span>
                      <span>500kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Runtime:</span>
                      <span>2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Footprint:</span>
                      <span>12m × 6m</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Button 
                size="lg"
                className="text-lg px-10 py-6 rounded-full"
              >
                Configure yours
              </Button>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                While others
                <span className="block text-primary">lost millions</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <Card className="p-8 space-y-6 border-0 shadow-sm text-left">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Apex Manufacturing</h3>
                    <p className="text-muted-foreground">
                      "Full production during Chennai floods. Our NESS system kept us running 
                      while competitors shut down for 3 days."
                    </p>
                    <div className="text-2xl font-bold text-primary">₹2.4Cr saved</div>
                  </div>
                </Card>

                <Card className="p-8 space-y-6 border-0 shadow-sm text-left">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">TechPark Bangalore</h3>
                    <p className="text-muted-foreground">
                      "Zero tenant complaints during the 6-hour grid failure. 
                      Our property value increased 15% after NESS installation."
                    </p>
                    <div className="text-2xl font-bold text-primary">₹8.2Cr value</div>
                  </div>
                </Card>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-10 py-6 rounded-full"
              >
                Read their stories
              </Button>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-32 px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Your advantage
                <span className="block text-primary">in numbers</span>
              </h2>
              
              <Card className="p-12 border-0 shadow-sm max-w-2xl mx-auto">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-lg font-medium text-foreground">
                      Monthly electricity spend
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                      <Input
                        type="number"
                        placeholder="500000"
                        className="pl-8 text-lg py-6 text-center"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {savings && (
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {formatCurrency(savings.annualSavings)}
                        </div>
                        <div className="text-sm text-muted-foreground">Annual savings</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {savings.paybackPeriod} years
                        </div>
                        <div className="text-sm text-muted-foreground">Payback period</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          {formatCurrency(savings.twentyFiveYearValue)}
                        </div>
                        <div className="text-sm text-muted-foreground">25-year value</div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
              
              <Button 
                size="lg"
                className="text-lg px-12 py-6 rounded-full"
                disabled={!monthlySpend}
              >
                Lock in these savings
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-16">
              <h2 className="text-5xl md:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Ready to never worry
                <span className="block text-primary">about power again?</span>
              </h2>
              
              <Card className="p-12 border-0 shadow-sm max-w-2xl mx-auto">
                <form className="space-y-6">
                  <Input
                    placeholder="Company name"
                    className="text-lg py-6"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                  <Input
                    placeholder="Your contact"
                    className="text-lg py-6"
                    value={formData.contact}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  />
                  <Input
                    placeholder="Monthly electricity spend"
                    className="text-lg py-6"
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData(prev => ({ ...prev, monthlySpend: e.target.value }))}
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 rounded-full"
                  >
                    Get free assessment in 24 hours
                  </Button>
                </form>
              </Card>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Target className="w-4 h-4" />
                <span>Join 2,847 businesses saving millions</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommercialEnhanced;