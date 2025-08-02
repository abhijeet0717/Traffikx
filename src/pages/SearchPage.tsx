
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Zap, 
  Route, 
  AlertTriangle,
  TrendingUp,
  Fuel,
  DollarSign,
  Car,
  Bike,
  Bus,
  ArrowRight,
  Star
} from 'lucide-react';

const SearchPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      setShowResults(true);
    }
  };

  const routeOptions = [
    {
      id: 1,
      type: 'fastest',
      title: 'Fastest Route',
      duration: '22 min',
      distance: '15.2 km',
      trafficCondition: 'moderate',
      fuelCost: '$3.20',
      savings: null,
      description: 'Via Highway 101 and Main Street',
      highlights: ['Least travel time', 'Moderate traffic'],
      icon: <Zap className="h-5 w-5 text-yellow-600" />,
      color: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20'
    },
    {
      id: 2,
      type: 'shortest',
      title: 'Shortest Route',
      duration: '28 min',
      distance: '12.8 km',
      trafficCondition: 'heavy',
      fuelCost: '$2.80',
      savings: '$0.40',
      description: 'Via Oak Avenue and 5th Street',
      highlights: ['Least distance', 'Lower fuel cost'],
      icon: <Route className="h-5 w-5 text-blue-600" />,
      color: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
    },
    {
      id: 3,
      type: 'best',
      title: 'Best Overall Route',
      duration: '25 min',
      distance: '14.1 km',
      trafficCondition: 'light',
      fuelCost: '$3.00',
      savings: '$0.20',
      description: 'Via Riverside Drive and Central Ave',
      highlights: ['Balanced time & distance', 'Light traffic', 'Scenic route'],
      icon: <Star className="h-5 w-5 text-green-600" />,
      color: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
      recommended: true
    }
  ];

  const getTrafficColor = (condition: string) => {
    switch (condition) {
      case 'light': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'moderate': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'heavy': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800/30';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <AnimatedTransition show={showContent} animation="slide-up" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Smart Route Planning
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the fastest, shortest, and best overall routes to your destination with real-time traffic analysis
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Plan Your Route
              </CardTitle>
              <CardDescription>
                Enter your starting point and destination to find the best routes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      placeholder="Enter starting location"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      placeholder="Enter destination"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={handleSearch}
                    className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white"
                  >
                    Find Routes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Results */}
          {(showResults || true) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Route Options */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Route Options</h2>
                
                {routeOptions.map((route, index) => (
                  <Card key={route.id} className={`relative ${route.color} border-2 transition-all hover:shadow-lg`}>
                    {route.recommended && (
                      <div className="absolute -top-2 left-4">
                        <Badge className="bg-green-600 hover:bg-green-700 text-white">
                          Recommended
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {route.icon}
                          {route.title}
                        </div>
                        <Badge variant="outline" className={getTrafficColor(route.trafficCondition)}>
                          {route.trafficCondition} traffic
                        </Badge>
                      </CardTitle>
                      <CardDescription>{route.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">{route.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>{route.fuelCost}</span>
                          {route.savings && (
                            <span className="text-green-600 dark:text-green-400 text-sm">
                              (Save {route.savings})
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm">Real-time data</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {route.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white">
                        Select This Route
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Preview & Additional Info */}
              <div className="space-y-6">
                {/* Mock Map */}
                <Card>
                  <CardHeader>
                    <CardTitle>Route Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30"></div>
                      <div className="relative z-10 text-center">
                        <MapPin className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Interactive Map View</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Real-time traffic visualization</p>
                      </div>
                      
                      {/* Mock route lines */}
                      <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-32 h-1 bg-blue-500 rounded transform rotate-45"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Travel Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Travel Options</CardTitle>
                    <CardDescription>Choose your preferred mode of transport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                        <Car className="h-6 w-6" />
                        <span className="text-sm">Car</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                        <Bike className="h-6 w-6" />
                        <span className="text-sm">Bike</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
                        <Bus className="h-6 w-6" />
                        <span className="text-sm">Transit</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Traffic Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Traffic Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-orange-800">Construction on Highway 101</p>
                          <p className="text-xs text-orange-600">Expect 15-20 min delays</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <Clock className="h-4 w-4 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800">Rush hour traffic</p>
                          <p className="text-xs text-yellow-600">Heavy traffic until 7 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Route Comparison */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Fastest</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">22 min</span>
                          <Zap className="h-4 w-4 text-yellow-500" />
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Shortest</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">12.8 km</span>
                          <Route className="h-4 w-4 text-blue-500" />
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Most Economical</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">$2.80</span>
                          <DollarSign className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default SearchPage;
