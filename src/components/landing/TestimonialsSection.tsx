import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
interface TestimonialsSectionProps {
  showTestimonials: boolean;
}
export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const testimonials = [{
    quote: "Every minute stuck in traffic delays client meetings and affects productivity.",
    name: "Samar Pratap Singh",
    role: "Finance",
    rating: 5
  }, {
    quote: "Getting to remote field sites on time is nearly impossible due to unpredictable traffic.",
    name: "Adarsh Shresth",
    role: "Forest Dept Worker",
    rating: 5
  }, {
    quote: "Daily traffic jams eat into my work hours and energy before I even reach the office.",
    name: "Prashant Kumar",
    role: "Software Developer",
    rating: 4
  }, {
    quote: "Candidates often arrive late for interviews, all because of traffic delays.",
    name: "Mohammad Fateh",
    role: "HR",
    rating: 5
  }, {
    quote: "Half my class arrives late every day, thanks to poor traffic management.",
    name: "Rahul Kumar",
    role: "Teacher",
    rating: 4
  }, {
    quote: "In emergencies, every second counts—traffic often puts lives at risk.",
    name: "Priya Kumari",
    role: "Doctor",
    rating: 5
  }, {
    quote: "Even practice sessions get delayed due to endless traffic snarls.",
    name: "Gourav",
    role: "Cricketer",
    rating: 5
  }, {
    quote: "Punctuality is crucial in my work, but traffic rarely cooperates.",
    name: "Ayushi",
    role: "Government Staff",
    rating: 4
  }, {
    quote: "Traffic congestion keeps customers away and delays my supply deliveries.",
    name: "Jatin Jain",
    role: "Shopkeeper",
    rating: 5
  }, {
    quote: "By the time I reach a shoot location, the light's gone—thanks to traffic!",
    name: "Anjali",
    role: "Content Creator",
    rating: 4
  }, {
    quote: "I leave early every day, yet still get marked late due to traffic.",
    name: "Ravi",
    role: "Student",
    rating: 5
  }, {
    quote: "Lost hours in traffic are lost deals—it's bad for business.",
    name: "Ritik",
    role: "Businessman",
    rating: 5
  }];

  // Component to render star ratings
  const StarRating = ({
    rating
  }: {
    rating: number;
  }) => {
    return <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />)}
      </div>;
  };
  return <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-600 md:text-7xl">
            Real stories of time lost,<br />
             stress gained & lives delayed.
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border border-border/50 p-6 rounded-lg shadow-sm h-full">
              {/* <StarRating rating={testimonial.rating} /> */}
              <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </AnimatedTransition>;
};