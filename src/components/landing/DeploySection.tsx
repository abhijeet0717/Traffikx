import { Activity, TrendingUp, Layout, Maximize, MapPin, Clock, Route, BarChart } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
interface DeploySectionProps {
  show: boolean;
}
export const DeploySection = ({
  show
}: DeploySectionProps) => {
  const deployFeatures = [{
    icon: <MapPin size={32} className="text-primary" />,
    title: "Real-World Impact",
    description: "Reduce daily commute time by up to 30-50% through intelligent route optimization."
  }, {
    icon: <Clock size={32} className="text-primary" />,
    title: "Time Savings",
    description: "Save 5-10 hours per week with AI-powered departure time and route suggestions."
  }, {
    icon: <Route size={32} className="text-primary" />,
    title: "Smart Routing",
    description: "Leverage AI to identify alternative routes and avoid peak hour congestion automatically."
  }, {
    icon: <BarChart size={32} className="text-primary" />,
    title: "Traffic Analytics",
    description: "Gain insights with built-in traffic analytics to track your time savings and carbon footprint reduction."
  }];
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Impact</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">
            Transform your daily commute and reduce traffic congestion citywide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {deployFeatures.map((feature, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};