import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Building, Zap, Battery, Smartphone, Shield, Award, TrendingUp } from "lucide-react";
import nessPodImage from "@/assets/ness-pod-product.png";
import nessProImage from "@/assets/ness-pro-product.png";
import nessCubeImage from "@/assets/ness-cube-product.png";

const products = [
  {
    id: "pod",
    name: "NESS POD",
    tagline: "Essential Backup",
    image: nessPodImage,
    price: "₹89,999",
    capacity: "3.5 kWh",
    power: "2 kW",
    runtime: "4-6 hours",
    installation: "Plug & Play",
    warranty: "5 years",
    features: [
      "Essential appliances backup",
      "WiFi router & lights",
      "Mobile phone charging",
      "Basic home security"
    ],
    specs: {
      dimensions: "60 x 40 x 20 cm",
      weight: "45 kg",
      charging: "4 hours (AC)",
      efficiency: "92%",
      cycles: "6000+"
    },
    ideal: ["Small apartments", "Starting your clean journey", "First taste of energy independence"],
    highlight: false
  },
  {
    id: "pro",
    name: "NESS PRO",
    tagline: "Complete Home Solution",
    image: nessProImage,
    price: "₹1,89,999",
    capacity: "10.24 kWh",
    power: "5 kW",
    runtime: "8-12 hours",
    installation: "Professional",
    warranty: "10 years",
    features: [
      "Whole home backup",
      "AC & heating systems",
      "Kitchen appliances",
      "EV charging capability",
      "Solar integration",
      "Smart grid management"
    ],
    specs: {
      dimensions: "100 x 70 x 30 cm",
      weight: "120 kg",
      charging: "6 hours (AC/Solar)",
      efficiency: "95%",
      cycles: "8000+"
    },
    ideal: ["Luxury homes", "Complete energy independence", "Families building a clean legacy"],
    highlight: true
  },
  {
    id: "cube",
    name: "NESS CUBE",
    tagline: "Modular Power",
    image: nessCubeImage,
    price: "₹1,39,999",
    capacity: "7.2 kWh",
    power: "3.5 kW",
    runtime: "6-8 hours",
    installation: "Modular",
    warranty: "7 years",
    features: [
      "Expandable system",
      "Medium home coverage",
      "Stackable design",
      "Future expansion ready"
    ],
    specs: {
      dimensions: "50 x 50 x 50 cm",
      weight: "80 kg",
      charging: "5 hours (AC/Solar)",
      efficiency: "94%",
      cycles: "7000+"
    },
    ideal: ["Growing families", "Expanding your clean footprint", "Step-by-step luxury adoption"],
    highlight: false
  }
];

const comparisonCategories = [
  { key: "capacity", label: "Battery Capacity", icon: Battery },
  { key: "power", label: "Power Output", icon: Zap },
  { key: "runtime", label: "Runtime", icon: TrendingUp },
  { key: "installation", label: "Installation", icon: Home },
  { key: "warranty", label: "Warranty", icon: Shield }
];

export const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState(["pod", "pro"]);
  const [viewMode, setViewMode] = useState<"grid" | "comparison">("grid");
  const [activeCategory, setActiveCategory] = useState<string>("capacity");

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));

  const getDisplayValue = (product: any, key: string) => {
    const value = product[key];
    if (typeof value === 'object' && value !== null) {
      return 'View Details';
    }
    return String(value);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-display-small font-light text-foreground">
          Choose Your Family's Clean Energy Legacy
        </h2>
        <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
          Each NESS system is more than technology—it's a luxury investment in your children's future. 
          Compare and discover which system will make you feel best about your environmental impact.
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="glass-card p-1 rounded-full inline-flex">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            onClick={() => setViewMode("grid")}
            className="rounded-full px-6"
          >
            Overview
          </Button>
          <Button
            variant={viewMode === "comparison" ? "default" : "ghost"}
            onClick={() => setViewMode("comparison")}
            className="rounded-full px-6"
          >
            Compare ({selectedProducts.length})
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`glass-card relative overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                product.highlight ? 'ring-2 ring-primary/20' : ''
              } ${selectedProducts.includes(product.id) ? 'ring-2 ring-brand-glow' : ''}`}
              onClick={() => toggleProductSelection(product.id)}
            >
              {product.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 space-y-6">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 rounded-2xl p-8 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Home Battery System`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedProducts.includes(product.id) 
                          ? 'bg-brand-glow border-brand-glow' 
                          : 'border-muted-foreground/30'
                      }`}>
                        {selectedProducts.includes(product.id) && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{product.tagline}</p>
                  </div>

                  <div className="text-3xl font-light text-foreground">
                    {product.price}
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-muted/20">
                    <div>
                      <div className="text-sm text-muted-foreground">Capacity</div>
                      <div className="font-medium">{product.capacity}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Power</div>
                      <div className="font-medium">{product.power}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Runtime</div>
                      <div className="font-medium">{product.runtime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Warranty</div>
                      <div className="font-medium">{product.warranty}</div>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Ideal for:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.ideal.map((use, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {/* Comparison Table */}
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Category Navigation */}
            <div className="flex overflow-x-auto p-4 border-b border-muted/20">
              {comparisonCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category.key
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Product Headers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
              <div className="hidden md:block"></div>
              {selectedProductsData.map((product) => (
                <div key={product.id} className="text-center space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    <p className="text-xl font-light mt-2">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Content */}
            <div className="px-6 pb-6 space-y-4">
              {comparisonCategories.map((category) => (
                <div 
                  key={category.key}
                  className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === category.key ? 'bg-muted/20' : 'hover:bg-muted/10'
                  }`}
                >
                  <div className="flex items-center space-x-3 font-medium text-foreground">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span>{category.label}</span>
                  </div>
                  {selectedProductsData.map((product) => (
                    <div key={product.id} className="text-center">
                      <span className="font-medium">
                        {getDisplayValue(product, category.key)}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Features Comparison */}
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-foreground flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Key Features</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div></div>
                  {selectedProductsData.map((product) => (
                    <div key={product.id} className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="btn-premium px-8 py-4">
              Get Custom Quote for Selected Systems
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};