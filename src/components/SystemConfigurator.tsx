import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Calculator, Home, Zap, Battery, Sun, IndianRupee, 
  CheckCircle, AlertCircle, Download, Share2, 
  Clock, TrendingUp, Leaf, Shield
} from "@/components/ui/icons";
import { useToast } from "@/hooks/use-toast";

interface SystemConfiguration {
  dailyLoad: number;
  peakLoad: number;
  backupHours: number;
  solarCapacity: number;
  batteryCapacity: number;
  inverterCapacity: number;
  systemType: 'hybrid' | 'off-grid' | 'grid-tie';
  location: string;
  roofArea: number;
}

interface SystemRecommendation {
  batteryUnits: number;
  solarPanels: number;
  inverterSize: number;
  totalCost: number;
  monthlySavings: number;
  paybackPeriod: number;
  co2Reduction: number;
  systemEfficiency: number;
}

const SystemConfigurator = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("requirements");
  const [config, setConfig] = useState<SystemConfiguration>({
    dailyLoad: 0,
    peakLoad: 0,
    backupHours: 8,
    solarCapacity: 0,
    batteryCapacity: 0,
    inverterCapacity: 0,
    systemType: 'hybrid',
    location: '',
    roofArea: 0
  });
  
  const [recommendation, setRecommendation] = useState<SystemRecommendation | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Appliance presets for quick load calculation
  const appliances = [
    { name: "LED Lights (10W)", power: 10, hours: 8 },
    { name: "Ceiling Fan (70W)", power: 70, hours: 12 },
    { name: "Refrigerator (150W)", power: 150, hours: 24 },
    { name: "TV (100W)", power: 100, hours: 6 },
    { name: "Laptop (65W)", power: 65, hours: 8 },
    { name: "Washing Machine (500W)", power: 500, hours: 1 },
    { name: "Air Conditioner (1500W)", power: 1500, hours: 8 },
    { name: "Water Heater (2000W)", power: 2000, hours: 2 }
  ];

  const [selectedAppliances, setSelectedAppliances] = useState<{[key: string]: number}>({});

  // Calculate system requirements
  const calculateSystem = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { dailyLoad, peakLoad, backupHours, solarCapacity, roofArea } = config;
      
      // Battery sizing (kWh needed for backup)
      const requiredBatteryCapacity = (dailyLoad * backupHours) / 24;
      const recommendedBatteryUnits = Math.ceil(requiredBatteryCapacity / 5.1); // Assuming 5.1kWh per unit
      
      // Solar sizing based on daily load and location factor
      const locationFactor = 4.5; // Average sun hours in India
      const requiredSolarCapacity = dailyLoad / locationFactor;
      const maxRoofSolar = roofArea * 0.15; // 150W per sq ft
      const recommendedSolarPanels = Math.ceil(Math.min(requiredSolarCapacity, maxRoofSolar) / 0.54); // 540W panels
      
      // Inverter sizing (125% of peak load)
      const recommendedInverterSize = Math.ceil(peakLoad * 1.25);
      
      // Cost calculations (approximate)
      const batteryCost = recommendedBatteryUnits * 120000; // ₹1.2L per unit
      const solarCost = recommendedSolarPanels * 25000; // ₹25k per panel
      const inverterCost = recommendedInverterSize * 50; // ₹50 per W
      const installationCost = (batteryCost + solarCost + inverterCost) * 0.15;
      const totalCost = batteryCost + solarCost + inverterCost + installationCost;
      
      // Savings calculation
      const electricityRate = 8; // ₹8 per kWh
      const monthlySavings = (dailyLoad * 30 * electricityRate * 0.8); // 80% solar offset
      const paybackPeriod = totalCost / (monthlySavings * 12);
      
      // Environmental impact
      const co2Factor = 0.82; // kg CO2 per kWh in India
      const annualCo2Reduction = dailyLoad * 365 * co2Factor * 0.8;
      
      // System efficiency
      const systemEfficiency = Math.min(95, (recommendedSolarPanels * 0.54 / requiredSolarCapacity) * 100);
      
      setRecommendation({
        batteryUnits: recommendedBatteryUnits,
        solarPanels: recommendedSolarPanels,
        inverterSize: recommendedInverterSize,
        totalCost: Math.round(totalCost),
        monthlySavings: Math.round(monthlySavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        co2Reduction: Math.round(annualCo2Reduction),
        systemEfficiency: Math.round(systemEfficiency)
      });
      
      setIsCalculating(false);
      setActiveTab("results");
    }, 2000);
  };

  // Update daily load based on selected appliances
  useEffect(() => {
    const totalLoad = Object.entries(selectedAppliances).reduce((total, [applianceName, quantity]) => {
      const appliance = appliances.find(a => a.name === applianceName);
      if (appliance) {
        return total + (appliance.power * appliance.hours * quantity) / 1000; // Convert to kWh
      }
      return total;
    }, 0);
    
    const peakLoad = Object.entries(selectedAppliances).reduce((peak, [applianceName, quantity]) => {
      const appliance = appliances.find(a => a.name === applianceName);
      if (appliance) {
        return Math.max(peak, appliance.power * quantity / 1000); // Convert to kW
      }
      return peak;
    }, 0);
    
    setConfig(prev => ({ ...prev, dailyLoad: totalLoad, peakLoad: peakLoad }));
  }, [selectedAppliances]);

  const handleApplianceChange = (applianceName: string, quantity: number) => {
    setSelectedAppliances(prev => ({
      ...prev,
      [applianceName]: quantity
    }));
  };

  const generateProposal = () => {
    toast({
      title: "Proposal Generated",
      description: "Professional system proposal has been generated and is ready for download."
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
          <Calculator className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">System Configurator</span>
        </div>
        <h1 className="text-4xl font-thin text-foreground">
          Design the Perfect
          <br />
          <span className="text-primary">Energy System</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional system sizing and proposal generation in minutes
        </p>
      </div>

      {/* Configuration Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="requirements" className="flex items-center space-x-2">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Requirements</span>
          </TabsTrigger>
          <TabsTrigger value="appliances" className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">Load Calculation</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center space-x-2">
            <Battery className="w-4 h-4" />
            <span className="hidden sm:inline">System Design</span>
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span className="hidden sm:inline">Results</span>
          </TabsTrigger>
        </TabsList>

        {/* Requirements Tab */}
        <TabsContent value="requirements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Project Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select value={config.location} onValueChange={(value) => setConfig(prev => ({...prev, location: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi, NCR</SelectItem>
                      <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                      <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad, Telangana</SelectItem>
                      <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>System Type</Label>
                  <Select value={config.systemType} onValueChange={(value: 'hybrid' | 'off-grid' | 'grid-tie') => setConfig(prev => ({...prev, systemType: value}))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hybrid">Hybrid (Grid + Solar + Battery)</SelectItem>
                      <SelectItem value="off-grid">Off-Grid (Solar + Battery Only)</SelectItem>
                      <SelectItem value="grid-tie">Grid-Tie (Solar + Grid)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Available Roof Area (sq ft)</Label>
                  <Input 
                    type="number" 
                    placeholder="Enter roof area"
                    value={config.roofArea || ''} 
                    onChange={(e) => setConfig(prev => ({...prev, roofArea: parseInt(e.target.value) || 0}))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Required Backup Hours</Label>
                  <Select value={config.backupHours.toString()} onValueChange={(value) => setConfig(prev => ({...prev, backupHours: parseInt(value)}))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Hours</SelectItem>
                      <SelectItem value="8">8 Hours</SelectItem>
                      <SelectItem value="12">12 Hours</SelectItem>
                      <SelectItem value="24">24 Hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button onClick={() => setActiveTab("appliances")} className="w-full">
                Continue to Load Calculation
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appliances Tab */}
        <TabsContent value="appliances" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Select Appliances</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {appliances.map((appliance) => (
                    <div key={appliance.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{appliance.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {appliance.power}W × {appliance.hours}h = {appliance.power * appliance.hours / 1000}kWh/day
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label className="text-sm">Qty:</Label>
                        <Input
                          type="number"
                          min="0"
                          max="10"
                          className="w-16"
                          value={selectedAppliances[appliance.name] || 0}
                          onChange={(e) => handleApplianceChange(appliance.name, parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Load Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Daily Load:</span>
                      <span className="font-medium">{config.dailyLoad.toFixed(1)} kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peak Load:</span>
                      <span className="font-medium">{config.peakLoad.toFixed(1)} kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Load:</span>
                      <span className="font-medium">{(config.dailyLoad * 30).toFixed(0)} kWh</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button 
                    onClick={() => setActiveTab("system")} 
                    className="w-full"
                    disabled={config.dailyLoad === 0}
                  >
                    Design System
                    <Battery className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* System Design Tab */}
        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Battery className="w-5 h-5" />
                <span>System Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Load Requirements</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>Daily Energy Need:</span>
                        <span className="font-medium">{config.dailyLoad.toFixed(1)} kWh</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>Peak Power Need:</span>
                        <span className="font-medium">{config.peakLoad.toFixed(1)} kW</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>Backup Duration:</span>
                        <span className="font-medium">{config.backupHours} hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Site Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>Location:</span>
                        <span className="font-medium capitalize">{config.location || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>Roof Area:</span>
                        <span className="font-medium">{config.roofArea} sq ft</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>System Type:</span>
                        <span className="font-medium capitalize">{config.systemType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={calculateSystem} 
                  size="lg"
                  disabled={!config.location || config.dailyLoad === 0 || isCalculating}
                  className="min-w-48"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      Generate System Design
                      <Calculator className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Results Tab */}
        <TabsContent value="results" className="space-y-6">
          {recommendation && (
            <>
              {/* System Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">{recommendation.batteryUnits}</div>
                    <div className="text-sm text-muted-foreground">NESS Battery Units</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {recommendation.batteryUnits * 5.1}kWh Total
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Sun className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">{recommendation.solarPanels}</div>
                    <div className="text-sm text-muted-foreground">Solar Panels</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {(recommendation.solarPanels * 0.54).toFixed(1)}kW Capacity
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">{recommendation.inverterSize}</div>
                    <div className="text-sm text-muted-foreground">kW Inverter</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Hybrid System
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Financial Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <IndianRupee className="w-5 h-5" />
                    <span>Financial Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>Total System Cost</span>
                        <span className="text-2xl font-bold text-foreground">
                          ₹{(recommendation.totalCost / 100000).toFixed(1)}L
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>Monthly Savings</span>
                        <span className="text-xl font-semibold text-primary">
                          ₹{recommendation.monthlySavings.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>Payback Period</span>
                        <span className="text-xl font-semibold">
                          {recommendation.paybackPeriod} years
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                        <Leaf className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-lg font-semibold text-foreground mb-1">
                          {recommendation.co2Reduction} kg CO₂
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Reduced annually
                        </div>
                      </div>
                      
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">System Efficiency</div>
                        <Progress value={recommendation.systemEfficiency} className="mb-2" />
                        <div className="text-lg font-semibold">{recommendation.systemEfficiency}%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={generateProposal} size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Proposal
                </Button>
                
                <Button variant="outline" size="lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Configuration
                </Button>
                
                <Button variant="outline" size="lg" onClick={() => setActiveTab("requirements")}>
                  <Calculator className="w-4 h-4 mr-2" />
                  New Configuration
                </Button>
              </div>

              {/* System Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Why This System Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Optimal Battery Sizing</div>
                          <div className="text-sm text-muted-foreground">
                            {recommendation.batteryUnits} units provide {config.backupHours}h backup with room for growth
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Smart Solar Integration</div>
                          <div className="text-sm text-muted-foreground">
                            Solar panels maximize roof space and reduce grid dependency by 80%
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Future-Proof Design</div>
                          <div className="text-sm text-muted-foreground">
                            Modular system allows easy expansion as energy needs grow
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Quick ROI</div>
                          <div className="text-sm text-muted-foreground">
                            System pays for itself in {recommendation.paybackPeriod} years through savings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemConfigurator;