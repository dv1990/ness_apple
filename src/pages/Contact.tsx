import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-6 py-32">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-display mb-8">Contact NESS Energy</h1>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your energy future? Choose your path below.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl animate-fade-in-up">
          <Tabs defaultValue="homeowner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="homeowner">Homeowner</TabsTrigger>
              <TabsTrigger value="distributor">Distributor</TabsTrigger>
              <TabsTrigger value="installer">Installer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="homeowner">
              <ContactForm type="homeowner" />
            </TabsContent>
            
            <TabsContent value="distributor">
              <ContactForm type="distributor" />
            </TabsContent>
            
            <TabsContent value="installer">
              <ContactForm type="installer" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;