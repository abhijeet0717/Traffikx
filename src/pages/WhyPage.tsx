
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Lightbulb, RefreshCw, Stars, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySection = ({ 
  title, 
  content, 
  icon, 
  id 
}: { 
  title: string, 
  content: React.ReactNode, 
  icon: React.ReactNode,
  id: string 
}) => {
  return (
    <div id={id} className="mb-20 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
      </div>
      <div className="text-foreground/80 space-y-4">
        {content}
      </div>
    </div>
  );
};

const WhyPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-hidden font-['Poppins',sans-serif]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text">
            Why?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything we do starts with this question.
          </p>
          
          <div className="mt-10 glass-panel p-8 md:p-10 rounded-lg max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
            <p className="text-xl md:text-2xl text-foreground/90">
              Why should Traffikx exist? Why should anyone care about solving traffic?
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 mt-6">
              Eventually, the "why" led us here.
            </p>
          </div>
        </div>
        
        <WhySection
          id="why-1"
          icon={<Lightbulb className="w-6 h-6 text-primary" />}
          title="Because traffic isn't just about vehicles — it's about lives, time, and the world we live in."
          content={
            <>
              <p>
                We've always looked at traffic not just as an inconvenience, but as a systemic problem—one that affects emergency response, pollution, productivity, and public well-being. Every minute lost in congestion is a moment that could've been spent on something meaningful. Every stalled ambulance is a life put at risk. Every idling engine is another breath of toxic air.
              </p>
              <p>
                So we asked ourselves: Why does traffic still work the way it did 30 years ago? Why haven't we used AI to manage roads in real time? Why do we accept this chaos when we could create order?
              </p>
              <p>
                With Traffikx, we asked — why not? Why not rethink how cities move? Why not build a system that learns, adapts, and flows — just like the people it serves?
              </p>
            </>
          }
        />
        
        <WhySection
          id="why-2"
          icon={<Heart className="w-6 h-6 text-primary" />}
          title="Because time matters. Because clean air matters. Because ambulances shouldn't have to wait."
          content={
            <>
              <p>
                Because traffic shouldn't cost cities billions. Because smarter systems can lead to better cities.
              </p>
            </>
          }
        />
        
        <WhySection
          id="why-3"
          icon={<RefreshCw className="w-6 h-6 text-primary" />}
          title="We're building Traffikx not just for India — but for the world."
          content={
            <>
              <p>
                For a future where your commute doesn't steal your day. Where traffic signals think ahead. Where roads respond. Where cities breathe.
              </p>
            </>
          }
        />
        
        <WhySection
          id="why-4"
          icon={<Zap className="w-6 h-6 text-primary" />}
          title="We're not just building another tool. We're building infrastructure for the future."
          content={
            <>
              <p>
                And we believe it's worth getting right.
              </p>
            </>
          }
        />
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/">
              Transform Your City
              <Stars size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
