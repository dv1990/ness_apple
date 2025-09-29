import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import IndiaInstallationMap from "@/components/IndiaInstallationMap";
import { OptimizedWebPImage } from "@/components/ui/optimized-webp-image";
import { ArrowRight, Shield, Target } from "lucide-react";

// Import actual images that exist for commercial page
import industrialHero from "@/assets/industrial-complex-hero.jpg";
import noDieselFacility from "@/assets/industrial-solar-facility.jpg";
import nessCube from "@/assets/ness-cube-product.png";
import nessPod from "@/assets/ness-pod-product.png";
import nessPro from "@/assets/ness-pro-product.png";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const CommercialEnhanced = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("500kWh");
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

  const capacityOptions = [
    {
      capacity: "100kWh",
      title: "Small Business",
      description: "Retail, small manufacturing",
      power: "50kW",
      runtime: "2 hours",
      footprint: "2m × 1m"
    },
    {
      capacity: "500kWh", 
      title: "Medium Enterprise",
      description: "Factories, data centers",
      power: "250kW",
      runtime: "2 hours", 
      footprint: "6m × 3m"
    },
    {
      capacity: "1MWh",
      title: "Large Industrial", 
      description: "Heavy industry, campuses",
      power: "500kW",
      runtime: "2 hours",
      footprint: "12m × 6m"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-foreground leading-[0.85] tracking-[-0.04em]">
              Power that never
              <span className="block text-primary">fails you</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              While competitors shut down, you stay open
            </p>
            
            <div className="flex items-center justify-center space-x-3 text-base md:text-lg text-foreground">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">99.98% uptime guaranteed</span>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See your advantage
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="pt-8 md:pt-16">
              <img
                src={industrialHero}
                alt="Modern industrial facility powered by NESS energy storage"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Every blackout
                <span className="block text-destructive">costs you money</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div className="space-y-3 md:space-y-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary">₹2.4L</div>
                  <p className="text-muted-foreground text-sm md:text-base">lost per hour of downtime</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary">73%</div>
                  <p className="text-muted-foreground text-sm md:text-base">of businesses hit monthly</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground text-sm md:text-base">your competitor stayed powered</p>
                </div>
              </div>
              
              <div className="pt-8 md:pt-12">
                <img
                  src={noDieselFacility}
                  alt="Industrial facility operating during power outage with NESS backup power"
                  className="w-full max-w-3xl mx-auto rounded-xl opacity-90"
                />
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
              >
                Never lose business again
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                One system.
                <span className="block text-primary">Every scale.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {capacityOptions.map((option, index) => {
                  const productImages = [
                    nessCube,
                    nessPod,
                    nessPro
                  ];
                  
                  return (
                    <div 
                      key={option.capacity}
                      className={`p-6 md:p-8 space-y-4 md:space-y-6 bg-background rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-lg ${
                        selectedCapacity === option.capacity ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedCapacity(option.capacity)}
                    >
                      <div className="w-full h-32 md:h-40 mb-4 flex items-center justify-center">
                        <img
                          src={productImages[index]}
                          alt={`NESS ${option.title} - ${option.capacity} energy storage system`}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <div className="text-2xl md:text-3xl font-bold text-primary">{option.capacity}</div>
                        <h3 className="text-lg md:text-xl font-semibold">{option.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{option.description}</p>
                      </div>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Power Output:</span>
                          <span>{option.power}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Runtime:</span>
                          <span>{option.runtime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Footprint:</span>
                          <span>{option.footprint}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button 
                size="lg"
                className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
              >
                Configure yours
              </Button>
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Proven across
                <span className="block text-primary">India</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div className="space-y-3 md:space-y-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary">150+</div>
                  <p className="text-muted-foreground text-sm md:text-base">Installations delivered</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary">100MWh+</div>
                  <p className="text-muted-foreground text-sm md:text-base">Energy delivered in 24 months</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
                  <p className="text-muted-foreground text-sm md:text-base">Villages 100% solar powered</p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 pt-8">
                <div className="p-6 md:p-8 bg-background rounded-xl border">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">MLINDA, Jharkhand</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    15+ villages running entirely on solar batteries with zero grid dependency. 
                    Seamless operations powering rural transformation.
                  </p>
                </div>
                
                <div className="text-base md:text-lg text-muted-foreground">
                  <span className="text-foreground font-medium">From Himachal to Kanyakumari</span> — 
                  NESS systems power businesses across India's diverse climates
                </div>
              </div>

              {/* Installation Map */}
              <div className="pt-12 md:pt-16">
                <h3 className="text-2xl md:text-3xl font-light text-center mb-8 md:mb-12">
                  Trusted across <span className="text-primary">India</span>
                </h3>
                <IndiaInstallationMap />
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                While others
                <span className="block text-primary">lost millions</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                While others
                <span className="block text-primary">lost millions</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-xl bg-background border">
                  <img
                    src={manufacturingFacility}
                    alt="Apex Manufacturing facility with NESS energy storage"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold">Apex Manufacturing</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      "Full production during Chennai floods. Our NESS system kept us running 
                      while competitors shut down for 3 days."
                    </p>
                    <div className="text-xl md:text-2xl font-bold text-primary">₹2.4Cr saved</div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-background border">
                  <img
                    src={officeInterior}
                    alt="TechPark Bangalore powered by NESS energy storage"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold">TechPark Bangalore</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      "Zero tenant complaints during the 6-hour grid failure. 
                      Our property value increased 15% after NESS installation."
                    </p>
                    <div className="text-xl md:text-2xl font-bold text-primary">₹8.2Cr value</div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
              >
                Read their stories
              </Button>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 md:py-32 px-4 md:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Your advantage
                <span className="block text-primary">in numbers</span>
              </h2>
              
              <div className="p-8 md:p-12 bg-background rounded-xl shadow-lg max-w-2xl mx-auto">
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-base md:text-lg font-medium text-foreground block">
                      Monthly electricity spend
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                      <Input
                        type="number"
                        placeholder="500000"
                        className="pl-8 text-base md:text-lg py-4 md:py-6 text-center border-2 focus:border-primary transition-colors"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {savings && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t">
                      <div className="text-center space-y-2">
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {formatCurrency(savings.annualSavings)}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">Annual savings</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {savings.paybackPeriod} years
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">Payback period</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {formatCurrency(savings.twentyFiveYearValue)}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">25-year value</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
                disabled={!monthlySpend}
              >
                Lock in these savings
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-12 md:space-y-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-foreground leading-[0.9] tracking-[-0.03em]">
                Ready to never worry
                <span className="block text-primary">about power again?</span>
              </h2>
              
              <div className="p-8 md:p-12 bg-background rounded-xl shadow-lg max-w-2xl mx-auto">
                <form className="space-y-4 md:space-y-6">
                  <Input
                    placeholder="Company name"
                    className="text-base md:text-lg py-4 md:py-6 border-2 focus:border-primary transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                  <Input
                    placeholder="Your contact"
                    className="text-base md:text-lg py-4 md:py-6 border-2 focus:border-primary transition-colors"
                    value={formData.contact}
                    onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  />
                  <Input
                    placeholder="Monthly electricity spend"
                    className="text-base md:text-lg py-4 md:py-6 border-2 focus:border-primary transition-colors"
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData(prev => ({ ...prev, monthlySpend: e.target.value }))}
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full text-base md:text-lg py-4 md:py-6 rounded-full hover:scale-105 transition-transform duration-200"
                  >
                    Get free assessment in 24 hours
                  </Button>
                </form>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm md:text-base">
                <Target className="w-4 h-4 flex-shrink-0" />
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