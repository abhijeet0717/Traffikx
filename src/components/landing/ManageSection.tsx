import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { FeatureIllustration } from './FeatureIllustration';
import { FeatureIcon } from './FeatureIllustrations/FeatureIcon';
interface ManageSectionProps {
  show: boolean;
}
export const ManageSection = ({
  show
}: ManageSectionProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const features = [{
    title: "Calendar Sync",
    description: "Seamlessly integrate with your calendar for proactive departure time suggestions."
  }, {
    title: "Route Import",
    description: "Import traffic data (Google Maps API, satellite tracking, GPS data) or create custom route entries."
  }, {
    title: "AI Integration",
    description: "Fully customizable AI algorithms that adapt to your specific commuting patterns and preferences."
  }, {
    title: "Visual Planning",
    description: "Visualize routes with interactive maps, traffic density heat maps, and real-time congestion displays."
  }, {
    title: "Smart Context",
    description: "Context-aware routing based on time, weather, events, and personal calendar integration."
  }, {
    title: "Predictive AI",
    description: "AI-powered predictions that analyze historical data to forecast optimal departure times."
  }, {
    title: "Multi-Source",
    description: "Collect traffic data from GPS, satellite feeds, and live traffic reports automatically."
  }, {
    title: "Vehicle Agnostic",
    description: "Optimized routes for any vehicle type - cars, bikes, public transport, or walking."
  }, {
    title: "Smart Search",
    description: "Find optimal routes with intelligent search considering traffic, distance, and time factors."
  }, {
    title: "Private Data",
    description: "Keep all your travel patterns and preferences secure in a private, encrypted system."
  }, {
    title: "Live Updates",
    description: "Real-time recognition of traffic incidents, construction, and route changes."
  }, {
    title: "Route Sharing",
    description: "Share optimal routes and commute insights with family, friends, or team members."
  }];
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
  };
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Optimize</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">The first AI-powered traffic optimization system for your daily commute.</p>
        </div>

        <FeatureIllustration featureIndex={activeFeature} className="transition-all duration-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => <div key={index} className={`flex flex-col items-center text-center transition-all duration-300 ${activeFeature === index ? 'scale-105' : 'hover:scale-102'} cursor-pointer`} onClick={() => handleFeatureClick(index)}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${activeFeature === index ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-primary/10'}`}>
                <FeatureIcon index={index} size={32} />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};