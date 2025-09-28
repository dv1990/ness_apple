import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Globe,
  Factory,
  Lightbulb,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          <Badge variant="outline" className="mb-8 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Our Mission
          </Badge>
          
          <h1 className="font-display text-6xl md:text-7xl font-thin text-foreground leading-[0.9] tracking-tight mb-8">
            Power India's
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              energy freedom
            </span>
          </h1>
          
          <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            We believe every family and business deserves reliable, clean, and affordable energy. NESS makes this future possible today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Join our mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Our Mission */}
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-light text-foreground">Our Mission</h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To eliminate energy anxiety from every Indian home and business through safe, intelligent, and accessible battery technology.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-light text-foreground">Our Vision</h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    An India where power cuts are history, where every sunrise brings clean energy, and where technology serves humanity's deepest needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light text-foreground mb-16">
            Making a difference
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-thin text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy families</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Partner installers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Cities served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-thin text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6">
              What guides us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Safety First */}
            <Card className="border-0 bg-background/50 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Safety First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every design decision prioritizes the safety of families and communities we serve.
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="border-0 bg-background/50 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Relentless Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never stop improving, always finding simpler, safer, more elegant solutions.
                </p>
              </CardContent>
            </Card>

            {/* Accessibility */}
            <Card className="border-0 bg-background/50 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">For Everyone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced technology should be accessible, understandable, and beneficial for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-thin text-foreground mb-8">
            Ready to power
            <br />
            <span className="text-primary">your future?</span>
          </h2>
          
          <p className="text-xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of families and businesses who chose energy freedom with NESS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Start your journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/installers">
                Become a partner
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;