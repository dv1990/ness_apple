import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, Calculator, Award, Users, Wrench, BookOpen, Download, 
  Sparkles, CheckCircle, Target, Clock, Play, Star, Quote, MapPin,
  TrendingUp, Building2, Phone, Mail, Calendar, FileText, Zap,
  ChevronRight, Upload, User, Shield, Trophy, Briefcase
} from "@/components/ui/icons";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MagneticButton, PlayButton, FloatingCard, ProgressiveDisclosure, ParallaxContainer } from "@/components/EnhancedInteractions";
import SystemConfigurator from "@/components/SystemConfigurator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroIndustrialInstallation from "@/assets/hero-industrial-installation.jpg";
import heroResidentialInstallation from "@/assets/hero-residential-installation.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import configuratorTool from "@/assets/configurator-tool.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const InstallersEnhanced = () => {
  const { toast } = useToast();

  const handleJoinMovement = () => {
    toast({
      title: "Welcome to the movement!",
      description: "We'll contact you within 24 hours to welcome you to the family."
    });
  };

  return (
    <Layout>
      {/* Hero Section - Join the Movement */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Carousel 
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="w-full h-full -ml-0">
              <CarouselItem className="w-full h-full pl-0">
                <img 
                  src={heroIndustrialInstallation} 
                  alt="Professional installation of solar and battery system on industrial shed"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="w-full h-full pl-0">
                <img 
                  src={heroResidentialInstallation} 
                  alt="Professional installation of solar and battery system on home rooftop"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent w-1/2"></div>
        </div>

        <ParallaxContainer speed={0.5}>
          <div className="relative z-10 max-w-[1600px] mx-auto px-8 pb-24 w-full">
            <div className="max-w-4xl space-y-12">
              
              <Badge variant="outline" className="border-white/20 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Clean Energy Movement
              </Badge>

              <div className="space-y-8">
                <h1 className="text-7xl md:text-8xl font-extralight text-white leading-[0.85] tracking-tight">
                  Join the
                  <br />
                  <span className="bg-gradient-to-r from-primary to-brand-glow bg-clip-text text-transparent">movement</span>
                </h1>

                 <p className="text-xl font-light text-white/90 leading-relaxed max-w-2xl">
                   Help families feel genuinely good about their energy choices. 
                   Build the future your own children will inherit.
                 </p>
               </div>

               <div className="flex items-center space-x-6 pt-4">
                 <MagneticButton variant="secondary" size="lg">
                   <Link to="#join" className="flex items-center">
                     Join the Movement
                     <ArrowRight className="w-5 h-5 ml-2" />
                   </Link>
                 </MagneticButton>
                 
                 <PlayButton 
                   onClick={() => {/* TODO: Implement video player */}} 
                   label="Watch the transformation"
                   size="lg"
                 />
               </div>

               {/* Movement Impact */}
               <div className="flex flex-wrap gap-8 pt-8 text-white/80">
                 <div className="text-center">
                   <div className="text-2xl font-thin">2,500+</div>
                   <div className="text-sm">Movement Members</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-thin">₹480Cr</div>
                   <div className="text-sm">Clean Revenue</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-thin">95%</div>
                   <div className="text-sm">Life Satisfaction</div>
                 </div>
               </div>
            </div>
          </div>
        </ParallaxContainer>
      </section>

      {/* The Transformation Story - Lead with Purpose */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl font-thin text-foreground mb-12 tracking-tight leading-[0.85]">
              From installer
              <br />
              <span className="text-primary">to pioneer</span>
            </h2>
            <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This is what happens when business meets purpose
            </p>
          </div>

          {/* The Hero Story - Rajesh's Transformation */}
          <div className="max-w-4xl mx-auto">
            <FloatingCard className="bg-gradient-to-br from-background to-muted/10 border-0 shadow-2xl overflow-hidden" delay={0.2}>
              <CardContent className="p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Quote Section */}
                  <div className="space-y-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                    
                    <p className="text-2xl font-light text-foreground leading-relaxed">
                      "We don't just install batteries—we help families feel genuinely good about their energy choices. 
                      Every installation creates a cleaner legacy for the next generation."
                    </p>
                    
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-medium text-foreground">Rajesh Singh</h4>
                      <p className="text-muted-foreground">Solar Solutions Mumbai</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Mumbai, Maharashtra
                      </div>
                    </div>
                  </div>

                  {/* Transformation Metrics */}
                  <div className="space-y-8">
                    <div className="text-center p-6 bg-primary/5 rounded-2xl">
                      <div className="text-sm text-muted-foreground mb-2">Business Growth</div>
                      <div className="text-4xl font-thin text-primary mb-2">300%</div>
                      <div className="text-sm text-muted-foreground">Since joining the movement</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-background/50 rounded-xl">
                        <div className="text-lg font-thin text-foreground">₹2.4Cr</div>
                        <div className="text-xs text-muted-foreground">Annual Revenue</div>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-xl">
                        <div className="text-lg font-thin text-foreground">450+</div>
                        <div className="text-xs text-muted-foreground">Clean Homes</div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-brand-glow/10 rounded-xl">
                      <div className="text-sm font-medium text-primary">The Real Victory</div>
                      <div className="text-xs text-muted-foreground mt-1">Building India's clean energy future</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </FloatingCard>
          </div>

          {/* Movement Impact */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-12 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-thin text-primary">385%</div>
                <div>Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-thin text-primary">₹4.2Cr</div>
                <div>Average Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-thin text-primary">18mo</div>
                <div>Payback Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement - Simple */}
      <section id="join" className="py-32 bg-muted/10">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="space-y-12">
            <h2 className="font-display text-5xl md:text-7xl font-thin text-foreground leading-[0.85] tracking-tight">
              Ready to become a
              <br />
              <span className="text-primary">clean energy pioneer?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              One partnership. One purpose. Transform families. Build legacies.
            </p>
          </div>

          <FloatingCard className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-2xl max-w-2xl mx-auto mt-16">
            <CardContent className="p-12">
              <div className="space-y-8">
                
                {/* Simple Partnership Promise */}
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl font-light text-foreground">NESS Partner</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join the movement to transform India's energy landscape. One partnership, unlimited purpose.
                  </p>
                </div>

                {/* What You Get */}
                <div className="space-y-4">
                  {[
                    "World-class training & certification",
                    "Dedicated support team",
                    "Premium pricing & margins",
                    "Marketing co-op funds",
                    "Lead generation support",
                    "Exclusive configurator tools"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Simple Form */}
                <div className="space-y-4 pt-6 border-t border-border/20">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your name" />
                    <Input placeholder="Company name" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input type="email" placeholder="Email address" />
                    <Input placeholder="Phone number" />
                  </div>
                  <Textarea placeholder="Tell us about your experience and why you want to join the movement..." rows={3} />
                </div>

                {/* Single Action */}
                <div className="text-center pt-6">
                  <MagneticButton variant="primary" size="lg" onClick={handleJoinMovement}>
                    Join the Movement
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </MagneticButton>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll contact you within 24 hours to welcome you to the family
                  </p>
                </div>
              </div>
            </CardContent>
          </FloatingCard>
        </div>
      </section>

      {/* The Vision - Visual Story */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={trainingWorkshop}
            alt="NESS partners building the future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <div className="text-5xl md:text-7xl font-thin text-white mb-8 leading-[0.85] tracking-tight">
                This is how
                <br />
                <span className="text-white/60">legends are built</span>
              </div>
              <div className="text-xl text-white/80 font-light leading-relaxed">
                Not just installing systems. Creating sanctuaries. Building legacies.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools Showcase */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
              <div className="space-y-8">
                <Badge variant="outline" className="px-4 py-2">
                  <Calculator className="w-4 h-4 mr-2" />
                  Smart Tools
                </Badge>

                <h2 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  System
                  <br />
                  configurator
                </h2>

                <p className="text-lg font-light text-muted-foreground leading-relaxed">
                  Generate accurate system specifications and professional proposals in minutes with our advanced AI-powered configuration tool.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Load pattern analysis",
                  "Optimal component sizing", 
                  "ROI calculations",
                  "Professional documentation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <MagneticButton variant="primary" size="lg">
                    <Calculator className="mr-2 w-5 h-5" />
                    Launch configurator
                  </MagneticButton>
                </DialogTrigger>
                <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
                  <SystemConfigurator />
                </DialogContent>
              </Dialog>
            </div>

            <FloatingCard className="overflow-hidden" delay={0.3}>
              <img 
                src={configuratorTool}
                alt="System configurator tool"
                className="w-full h-full object-cover"
              />
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Steve Jobs Style */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-glow/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <div className="space-y-12">
            <h2 className="font-display text-5xl md:text-7xl font-thin text-background leading-[0.85] tracking-tight">
              The future
              <br />
              <span className="text-background/60">starts now</span>
            </h2>
            
            <p className="text-xl font-light text-background/80 leading-relaxed max-w-2xl mx-auto">
              Join the movement that's transforming how families feel about energy. 
              Your business. Your purpose. Your children's legacy.
            </p>
            
            <MagneticButton variant="secondary" size="lg">
              <Link to="#join" className="flex items-center">
                Join the Movement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </MagneticButton>
            
            <div className="text-sm text-background/50 mt-8">
              The revolution needs you. Are you ready?
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstallersEnhanced;
