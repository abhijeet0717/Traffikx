
import { useState } from 'react';
import { Brain, Car, MapPin, Navigation, Network, Search, ArrowRight, ArrowLeft, Route, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type DiagramSection = 'scattered' | 'convergence' | 'organized';

interface DiagramComponentProps {
  onSectionClick: (section: DiagramSection, text: string) => void;
  activeSection: DiagramSection;
}

const DiagramComponent = ({ onSectionClick, activeSection }: DiagramComponentProps) => {
  const scatteredText = "Scattered traffic data, multiple route options, real-time congestion updates, and travel preferences all managed in one intelligent traffic optimization system.";
  const convergenceText = "AI analyzes traffic patterns instantly and understands optimal routes, peak hours, and travel preferences, so you don't have to waste time in traffic.";
  const organizedText = "Search by destination, time, vehicle type, or traffic conditions – whatever you think of first. Smart routing works with real-time data to find optimal paths instantly.";

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 relative h-[180px] md:h-[220px]">
      {/* Scattered Information Side */}
      <div 
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 w-1/3 transform transition-all duration-300 cursor-pointer",
          activeSection === 'scattered' ? "scale-110" : "opacity-70 hover:opacity-100"
        )}
        onClick={() => onSectionClick('scattered', scatteredText)}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Route className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center rotate-12">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center -rotate-12">
            <Navigation className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Convergence in the Middle */}
      <div 
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 cursor-pointer",
          activeSection === 'convergence' ? "scale-110" : "opacity-70 hover:opacity-100"
        )}
        onClick={() => onSectionClick('convergence', convergenceText)}
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <div className="absolute w-full h-full rounded-full bg-primary/5 animate-pulse-slow"></div>
          <div className="absolute w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10"></div>
          <div className="absolute w-3/5 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"></div>
          
          {/* Left arrow */}
          <ArrowRight className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/50" />
          
          {/* Right arrow - changed to ArrowLeft to point toward the center */}
          <ArrowLeft className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/50" />
          
          <div className="absolute w-12 h-12 md:w-16 md:h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 flex items-center justify-center shadow-lg">
            <Route className="w-7 h-7 md:w-9 md:h-9 text-primary" />
          </div>
        </div>
      </div>

      {/* Organized Mind Side */}
      <div 
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 w-1/3 transform transition-all duration-300 cursor-pointer",
          activeSection === 'organized' ? "scale-110" : "opacity-70 hover:opacity-100"
        )}
        onClick={() => onSectionClick('organized', organizedText)}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 glass-panel rounded-lg flex items-center justify-center">
            <Network className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 glass-panel rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 glass-panel rounded-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramComponent;
