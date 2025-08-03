import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
interface DesignSectionProps {
  show: boolean;
}
export const DesignSection = ({
  show
}: DesignSectionProps) => {
  const templateCategories = [{
    title: "Commuter Routes",
    images: [
      { name: "Mumbai Traffic", src: "/traffic-maps/mumbai.PNG" },
      { name: "Delhi Routes", src: "/traffic-maps/delhi 2.PNG" },
      { name: "Bangalore Network", src: "/traffic-maps/Banglore.PNG" },
      { name: "Chennai Flow", src: "/traffic-maps/chennai.PNG" }
    ]
  }, {
    title: "Business Travel", 
    images: [
      { name: "Chicago Downtown", src: "/traffic-maps/Chicago.PNG" },
      { name: "Chicago Complex", src: "/traffic-maps/chicago maze.PNG" },
      { name: "New York Grid", src: "/traffic-maps/New York.PNG" },
      { name: "NY 81st Street", src: "/traffic-maps/new york 8ist.PNG" }
    ]
  }, {
    title: "City Planning",
    images: [
      { name: "Ahmedabad Network", src: "/traffic-maps/amedabad.PNG" },
      { name: "Bengaluru Metro", src: "/traffic-maps/Bengluru.PNG" },
      { name: "Bengaluru Routes", src: "/traffic-maps/bengluru 7.PNG" },
      { name: "Bangalore Traffic", src: "/traffic-maps/banglore 6.PNG" }
    ]
  }, {
    title: "Personal Journeys",
    images: [
      { name: "Lucknow Roads", src: "/traffic-maps/Lucknow.PNG" },
      { name: "Patna Navigation", src: "/traffic-maps/Patna.PNG" },
      { name: "Ranchi Routes", src: "/traffic-maps/Ranchi.PNG" },
      { name: "San Francisco", src: "/traffic-maps/san fransico.PNG" }
    ]
  }];
  const [currentImages, setCurrentImages] = useState<{name: string, src: string}[]>([]);
  const [category, setCategory] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCategory(prev => (prev + 1) % templateCategories.length);
        setCurrentImages(templateCategories[(category + 1) % templateCategories.length].images);
        setAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [category]);
  useEffect(() => {
    setCurrentImages(templateCategories[0].images);
  }, []);
  const changeCategory = (index: number) => {
    if (category === index || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCategory(index);
      setCurrentImages(templateCategories[index].images);
      setAnimating(false);
    }, 500);
  };
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-foreground md:text-8xl">Plan</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">Choose from 200+ optimized route templates tailored to your travel needs.</p>
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {templateCategories.map((cat, idx) => <button key={idx} onClick={() => changeCategory(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${category === idx ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'}`} aria-label={cat.title} />)}
        </div>

        <AnimatedTransition show={!animating} animation="fade" duration={500} className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary">
            {templateCategories[category].title}
          </h3>
        </AnimatedTransition>

        <div className="relative">
          <AnimatedTransition show={!animating} animation="fade" duration={500}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {currentImages.map((image, idx) => <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="relative h-40 bg-gradient-to-br from-primary/5 to-primary/20 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="font-medium text-sm text-white">
                        {image.name}
                      </span>
                    </div>
                  </div>
                </Card>)}
            </div>
          </AnimatedTransition>
        </div>

        <div className="flex justify-center mt-10">
          
        </div>
      </div>
    </AnimatedTransition>;
};