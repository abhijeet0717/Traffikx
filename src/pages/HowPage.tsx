
import { useState, useEffect, useRef } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Logo } from '@/components/Logo';
import { 
  Lightbulb, 
  Search, 
  Upload, 
  Database, 
  Zap,
  CheckCircle,
  Code,
  PenTool,
  BookOpen,
  Save,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  color = 'primary'
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color?: string
}) => {
  return (
    <div className="flex flex-col items-start p-6 glass-panel rounded-lg h-full">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${color}/10 mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const WorkflowStep = ({ 
  number, 
  title, 
  description,
  color = "primary" 
}: { 
  number: number, 
  title: string, 
  description: string,
  color?: string 
}) => {
  return (
    <div className="relative">
      <div className={`absolute top-0 left-0 w-10 h-10 rounded-full bg-${color} text-white flex items-center justify-center font-bold text-lg z-10`}>
        {number}
      </div>
      <div className="pl-16">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  );
};

const FeatureShowcase = ({
  title,
  description,
  image,
  features,
  reversed = false
}: {
  title: string,
  description: string,
  image: string,
  features: { icon: React.ReactNode, text: string }[],
  reversed?: boolean
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 my-16`}>
      <div className="w-full md:w-1/2">
        <div className="glass-panel rounded-lg overflow-hidden h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-foreground/80 mb-6">{description}</p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-primary">
                {feature.icon}
              </div>
              <p className="text-foreground/80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueProp = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const HowPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxFactor = 0.4;
        heroRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div ref={heroRef} className="relative w-full max-w-3xl mx-auto">
            <div className="absolute -z-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="glass-panel rounded-full py-5 px-8 inline-block mx-auto mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">How does Traffikx work?</h1>
            </div>
            
            <p className="text-xl text-center text-foreground/80 max-w-2xl mx-auto mb-12">
              There's advanced AI, real-time data, and intelligent systems running behind the scenes — but for cities and commuters, it just feels seamless.
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full">
                Start exploring
              </Button>
            </div>
          </div>
        </div>
        
        {/* Workflow Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">The Traffikx Workflow</h2>
          
          <div className="relative">
            <div className="absolute left-5 top-6 w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            <div className="space-y-16 pl-4">
              <WorkflowStep 
                number={1}
                title="Sense"
                description="We collect real-time data from traffic cameras, sensors, GPS, and road feeds to understand live movement across the city."
              />
              <WorkflowStep 
                number={2}
                title="Analyze"
                description="Our AI models process this data instantly — detecting congestion, signal inefficiencies, roadblocks, and emergency priorities."
              />
              <WorkflowStep 
                number={3}
                title="Optimize"
                description="Traffikx dynamically adjusts traffic signals and flow patterns across intersections to reduce wait time and improve vehicle movement."
              />
              <WorkflowStep 
                number={4}
                title="Respond"
                description="Whether it’s clearing a path for an ambulance or easing school-hour congestion, Traffikx adapts in real-time to what’s happening on the ground."
              />
            </div>
          </div>
        </div>
        
        {/* Feature Showcases */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Real-World Streets</h2>
          
          <FeatureShowcase
            title="Built for developing cities and smart cities alike"
            description="Our system works with existing infrastructure — no expensive overhauls needed."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Works with legacy and smart traffic lights" },
              { icon: <CheckCircle size={24} />, text: "Integrates with CCTV, GPS, and 3rd-party sensors" },
              { icon: <CheckCircle size={24} />, text: "Customizable control dashboard for authorities" },
              { icon: <CheckCircle size={24} />, text: "Cloud + edge deployment for high-speed response" },
            ]}
          />
          
          <FeatureShowcase
            title="Real-time Optimization, Minimal Latency"
            description="Your roads shouldn't wait for reports. Traffikx detects and resolves congestion before it spirals."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Predictive modeling to prevent jams" },
              { icon: <CheckCircle size={24} />, text: "Emergency vehicle prioritization" },
              { icon: <CheckCircle size={24} />, text: "Dynamic signal timers based on real load" },
              { icon: <CheckCircle size={24} />, text: "AI models trained for both peak and off-peak hours" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="Built with Safety & Environment in Mind"
            description="We believe smoother roads aren't just about speed — they're about cleaner air, fewer accidents, and faster emergency response."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Reduced emissions from idle traffic" },
              { icon: <CheckCircle size={24} />, text: "Clearer paths for ambulances and fire trucks" },
              { icon: <CheckCircle size={24} />, text: "Data-driven road safety alerts" },
              { icon: <CheckCircle size={24} />, text: "Helps reduce fuel consumption and carbon footprint" },
            ]}
          />
          
          <FeatureShowcase
            title="Actionable Insights for Authorities"
            description="We turn raw traffic data into useful decisions — in real time and over time."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "Visual heatmaps and congestion dashboards" },
              { icon: <CheckCircle size={24} />, text: "Daily and weekly traffic reports" },
              { icon: <CheckCircle size={24} />, text: "Route-specific optimization suggestions" },
              { icon: <CheckCircle size={24} />, text: "Citizen feedback loop integrations (coming soon)" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="Privacy-First Smart City Tech"
            description="We don't collect personal data. We don't track drivers. We care about cities, not surveillance."
            image="/placeholder.svg"
            features={[
              { icon: <CheckCircle size={24} />, text: "No facial recognition" },
              { icon: <CheckCircle size={24} />, text: "No personal movement tracking" },
              { icon: <CheckCircle size={24} />, text: "Secure infrastructure & encryption-first design" },
              { icon: <CheckCircle size={24} />, text: "You own your city's data" },
            ]}
          />
        </div>
        
        {/* Values Section */}
        <div className="py-16 px-4 rounded-lg glass-panel my-24">
          <h2 className="text-3xl font-bold text-center mb-3">Traffikx is an invisible upgrade for your city</h2>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16">
            No new roads. No massive budgets. Just smarter signals, adaptive systems, and smoother movement — for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueProp
              icon={<Logo size={40} className="text-primary" />}
              title="Works with what you have"
              description="Traffikx integrates with existing infrastructure, making your current traffic systems smarter without costly replacements."
            />
            <ValueProp
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Privacy by design"
              description="We optimize traffic flow without tracking individuals. Your city gets smarter, your citizens stay private."
            />
            <ValueProp
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Invisible intelligence"
              description="The best traffic management is the kind you never notice — seamless flow that just works."
            />
          </div>
          
          <div className="flex justify-center mt-16">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/">
                Transform your city
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8 text-primary" />}
              title="Import"
              description="Easily import your notes, PDFs, images, and web links into your second brain."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Organize"
              description="Our AI automatically categorizes and tags your content for effortless organization."
            />
            <FeatureCard
              icon={<Logo size={40} className="text-primary" />}
              title="Connect"
              description="Discover hidden connections between your ideas with our neural network visualization."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 text-primary" />}
              title="Retrieve"
              description="Instantly find exactly what you're looking for with semantic search that understands context."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Generate"
              description="Get AI-powered insights and suggestions based on your knowledge base."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Execute"
              description="Turn your ideas into action with project management and collaboration tools."
            />
          </div>
        </div>
        
        {/* Who is it for section */}
        <div className="mb-20 glass-panel p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Made for designers, writers, researchers, developers & visual minds of all kinds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Designers</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Writers</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Researchers</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Developers</h3>
            </div>
          </div>
        </div>
        
        {/* Technical Details */}
        <div className="mt-20 glass-panel p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">AI Technology</h3>
              <p className="text-foreground/80 mb-4">
                Our platform uses state-of-the-art large language models and vector embeddings to understand the meaning behind your content, not just keywords.
              </p>
              <h3 className="text-xl font-bold mb-3">Data Storage</h3>
              <p className="text-foreground/80">
                All your data is encrypted end-to-end and stored in secure cloud infrastructure with regular backups and disaster recovery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-foreground/80 mb-4">
                Connect with tools you already use like Notion, Evernote, Google Drive, and more through our extensive API.
              </p>
              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-foreground/80">
                Tailor the experience to your needs with customizable workflows, templates, and visualization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPage;
