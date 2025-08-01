
import React, { useState, useEffect } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CalendarDays, AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';
import { format, isToday, isSameDay } from 'date-fns';

// Mock data for holidays and congestion levels
const holidayData = [
  {
    date: new Date(2025, 0, 1), // January 1, 2025
    name: "New Year's Day",
    congestionLevel: "high",
    expectedDelay: "45-60 minutes",
    peakHours: "10:00 AM - 2:00 PM",
    affectedAreas: ["Downtown", "Shopping Districts", "Highways"]
  },
  {
    date: new Date(2025, 1, 14), // February 14, 2025
    name: "Valentine's Day",
    congestionLevel: "medium",
    expectedDelay: "20-30 minutes",
    peakHours: "6:00 PM - 9:00 PM",
    affectedAreas: ["Restaurant Areas", "Entertainment Districts"]
  },
  {
    date: new Date(2025, 2, 17), // March 17, 2025
    name: "St. Patrick's Day",
    congestionLevel: "high",
    expectedDelay: "50-70 minutes",
    peakHours: "2:00 PM - 11:00 PM",
    affectedAreas: ["City Center", "Pub Districts", "Event Venues"]
  },
  {
    date: new Date(2025, 3, 20), // April 20, 2025
    name: "Easter Sunday",
    congestionLevel: "medium",
    expectedDelay: "25-35 minutes",
    peakHours: "11:00 AM - 3:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Parks"]
  },
  {
    date: new Date(2025, 4, 26), // May 26, 2025
    name: "Memorial Day",
    congestionLevel: "very-high",
    expectedDelay: "60-90 minutes",
    peakHours: "9:00 AM - 6:00 PM",
    affectedAreas: ["Highways", "Beach Areas", "Parks", "Shopping Centers"]
  },
  {
    date: new Date(2025, 6, 4), // July 4, 2025
    name: "Independence Day",
    congestionLevel: "very-high",
    expectedDelay: "75-120 minutes",
    peakHours: "12:00 PM - 11:00 PM",
    affectedAreas: ["Event Venues", "Beaches", "Fireworks Locations", "Highways"]
  },
  {
    date: new Date(2025, 9, 31), // October 31, 2025
    name: "Halloween",
    congestionLevel: "medium",
    expectedDelay: "30-40 minutes",
    peakHours: "5:00 PM - 9:00 PM",
    affectedAreas: ["Residential Areas", "Shopping Districts", "Entertainment Areas"]
  },
  {
    date: new Date(2025, 10, 27), // November 27, 2025
    name: "Thanksgiving",
    congestionLevel: "very-high",
    expectedDelay: "90-150 minutes",
    peakHours: "2:00 PM - 8:00 PM",
    affectedAreas: ["Airports", "Highways", "Family Areas", "Shopping Centers"]
  },
  {
    date: new Date(2025, 11, 25), // December 25, 2025
    name: "Christmas Day",
    congestionLevel: "high",
    expectedDelay: "40-55 minutes",
    peakHours: "10:00 AM - 4:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Gift Shops"]
  },
  {
    date: new Date(2025, 11, 31), // December 31, 2025
    name: "New Year's Eve",
    congestionLevel: "very-high",
    expectedDelay: "80-120 minutes",
    peakHours: "8:00 PM - 2:00 AM",
    affectedAreas: ["City Center", "Event Venues", "Entertainment Districts", "Times Square Area"]
  }
];

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState<any>(null);

  // Get congestion level for a specific date
  const getCongestionForDate = (date: Date) => {
    return holidayData.find(holiday => isSameDay(holiday.date, date));
  };

  // Get congestion color based on level
  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const holiday = getCongestionForDate(date);
      setSelectedHoliday(holiday);
    } else {
      setSelectedHoliday(null);
    }
  };

  useEffect(() => {
    // Set initial selected holiday if today is a holiday
    const today = new Date();
    const todayHoliday = getCongestionForDate(today);
    if (todayHoliday) {
      setSelectedHoliday(todayHoliday);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedTransition show={showContent} animation="fade" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Traffic Calendar</h1>
            <p className="text-muted-foreground">
              View traffic congestion predictions for holidays and special events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Holiday Traffic Calendar
                  </CardTitle>
                  <CardDescription>
                    Select a date to view traffic congestion predictions. Colored dots indicate congestion levels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    modifiers={{
                      holiday: holidayData.map(h => h.date)
                    }}
                    modifiersStyles={{
                      holiday: { fontWeight: 'bold' }
                    }}
                  />
                  
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Congestion Levels</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span>Low</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span>Very High</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Selected Date</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div>
                      <p className="font-medium text-lg">
                        {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                      </p>
                      {selectedHoliday ? (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-medium text-primary">{selectedHoliday.name}</h4>
                            <Badge className={getCongestionColor(selectedHoliday.congestionLevel)}>
                              {selectedHoliday.congestionLevel.replace('-', ' ').toUpperCase()} CONGESTION
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Expected Delay: {selectedHoliday.expectedDelay}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <span>Peak Hours: {selectedHoliday.peakHours}</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-sm mb-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Affected Areas:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selectedHoliday.affectedAreas.map((area: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {selectedHoliday.congestionLevel === 'very-high' && (
                            <Alert>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                Severe traffic delays expected. Consider alternative routes or travel times.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      ) : (
                        <p className="text-muted-foreground mt-2">No special events or holidays on this date.</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Select a date to view details</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming High-Traffic Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {holidayData
                      .filter(holiday => holiday.date > new Date())
                      .slice(0, 4)
                      .map((holiday, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{holiday.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(holiday.date, 'MMM d, yyyy')}
                            </p>
                          </div>
                          <Badge className={getCongestionColor(holiday.congestionLevel)} variant="outline">
                            {holiday.congestionLevel.replace('-', ' ')}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default ManagePage;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CalendarDays, AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';
import { format, isToday, isSameDay } from 'date-fns';

// Mock data for holidays and congestion levels
const holidayData = [
  {
    date: new Date(2025, 0, 1), // January 1, 2025
    name: "New Year's Day",
    congestionLevel: "high",
    expectedDelay: "45-60 minutes",
    peakHours: "10:00 AM - 2:00 PM",
    affectedAreas: ["Downtown", "Shopping Districts", "Highways"]
  },
  {
    date: new Date(2025, 1, 14), // February 14, 2025
    name: "Valentine's Day",
    congestionLevel: "medium",
    expectedDelay: "20-30 minutes",
    peakHours: "6:00 PM - 9:00 PM",
    affectedAreas: ["Restaurant Areas", "Entertainment Districts"]
  },
  {
    date: new Date(2025, 2, 17), // March 17, 2025
    name: "St. Patrick's Day",
    congestionLevel: "high",
    expectedDelay: "50-70 minutes",
    peakHours: "2:00 PM - 10:00 PM",
    affectedAreas: ["City Center", "Parade Routes", "Entertainment Districts"]
  },
  {
    date: new Date(2025, 3, 20), // April 20, 2025
    name: "Easter Sunday",
    congestionLevel: "medium",
    expectedDelay: "25-40 minutes",
    peakHours: "8:00 AM - 2:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Parks"]
  },
  {
    date: new Date(2025, 4, 26), // May 26, 2025
    name: "Memorial Day",
    congestionLevel: "high",
    expectedDelay: "60-80 minutes",
    peakHours: "9:00 AM - 6:00 PM",
    affectedAreas: ["Highways", "Beach Areas", "Parks", "Shopping Centers"]
  },
  {
    date: new Date(2025, 6, 4), // July 4, 2025
    name: "Independence Day",
    congestionLevel: "very-high",
    expectedDelay: "75-120 minutes",
    peakHours: "12:00 PM - 11:00 PM",
    affectedAreas: ["Event Venues", "Beaches", "Fireworks Locations", "Highways"]
  },
  {
    date: new Date(2025, 9, 31), // October 31, 2025
    name: "Halloween",
    congestionLevel: "medium",
    expectedDelay: "30-40 minutes",
    peakHours: "5:00 PM - 9:00 PM",
    affectedAreas: ["Residential Areas", "Shopping Districts", "Entertainment Areas"]
  },
  {
    date: new Date(2025, 10, 27), // November 27, 2025
    name: "Thanksgiving",
    congestionLevel: "very-high",
    expectedDelay: "90-150 minutes",
    peakHours: "2:00 PM - 8:00 PM",
    affectedAreas: ["Airports", "Highways", "Family Areas", "Shopping Centers"]
  },
  {
    date: new Date(2025, 11, 25), // December 25, 2025
    name: "Christmas Day",
    congestionLevel: "high",
    expectedDelay: "40-55 minutes",
    peakHours: "10:00 AM - 4:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Gift Shops"]
  },
  {
    date: new Date(2025, 11, 31), // December 31, 2025
    name: "New Year's Eve",
    congestionLevel: "very-high",
    expectedDelay: "80-120 minutes",
    peakHours: "8:00 PM - 2:00 AM",
    affectedAreas: ["City Center", "Event Venues", "Entertainment Districts", "Times Square Area"]
  }
];

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState<any>(null);

  // Get congestion level for a specific date
  const getCongestionForDate = (date: Date) => {
    return holidayData.find(holiday => isSameDay(holiday.date, date));
  };

  // Get congestion color based on level
  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const holiday = getCongestionForDate(date);
      setSelectedHoliday(holiday);
    } else {
      setSelectedHoliday(null);
    }
  };

  useEffect(() => {
    // Set initial selected holiday if today is a holiday
    const today = new Date();
    const todayHoliday = getCongestionForDate(today);
    if (todayHoliday) {
      setSelectedHoliday(todayHoliday);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedTransition show={showContent} animation="fade" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Traffic Calendar</h1>
            <p className="text-muted-foreground">
              View traffic congestion predictions for holidays and special events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Holiday Traffic Calendar
                  </CardTitle>
                  <CardDescription>
                    Select a date to view traffic congestion predictions. Colored dots indicate congestion levels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    modifiers={{
                      holiday: holidayData.map(h => h.date)
                    }}
                    modifiersStyles={{
                      holiday: { fontWeight: 'bold' }
                    }}
                  />
                  
                  {/* Legend */}
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Congestion Levels</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span>Low</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span>Very High</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Current Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Selected Date</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div>
                      <p className="font-medium text-lg">
                        {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                      </p>
                      {selectedHoliday ? (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-medium text-primary">{selectedHoliday.name}</h4>
                            <Badge className={getCongestionColor(selectedHoliday.congestionLevel)}>
                              {selectedHoliday.congestionLevel.replace('-', ' ').toUpperCase()} CONGESTION
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Expected Delay: {selectedHoliday.expectedDelay}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <span>Peak Hours: {selectedHoliday.peakHours}</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-sm mb-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Affected Areas:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selectedHoliday.affectedAreas.map((area: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {selectedHoliday.congestionLevel === 'very-high' && (
                            <Alert>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                Severe traffic delays expected. Consider alternative routes or travel times.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      ) : (
                        <p className="text-muted-foreground mt-2">No special events or holidays on this date.</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Select a date to view details</p>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Holidays */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming High-Traffic Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {holidayData
                      .filter(holiday => holiday.date > new Date())
                      .slice(0, 4)
                      .map((holiday, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{holiday.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(holiday.date, 'MMM d, yyyy')}
                            </p>
                          </div>
                          <Badge className={getCongestionColor(holiday.congestionLevel)} variant="outline">
                            {holiday.congestionLevel.replace('-', ' ')}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default ManagePage;

  // Holiday data with traffic congestion predictions
  const holidayData: HolidayData[] = [
    {
      date: new Date(2024, 11, 25), // Christmas
      name: "Christmas Day",
      congestionLevel: 'medium',
      expectedDelay: '15-30 minutes',
      peakHours: '10:00 AM - 2:00 PM',
      affectedAreas: ['Shopping Districts', 'Airport', 'Highway Exits']
    },
    {
      date: new Date(2024, 11, 31), // New Year's Eve
      name: "New Year's Eve",
      congestionLevel: 'very-high',
      expectedDelay: '45-90 minutes',
      peakHours: '8:00 PM - 2:00 AM',
      affectedAreas: ['Downtown', 'Entertainment District', 'Main Bridges', 'Public Transit']
    },
    {
      date: new Date(2025, 0, 1), // New Year's Day
      name: "New Year's Day",
      congestionLevel: 'low',
      expectedDelay: '5-10 minutes',
      peakHours: '11:00 AM - 4:00 PM',
      affectedAreas: ['Residential Areas', 'Parks']
    },
    {
      date: new Date(2024, 11, 24), // Christmas Eve
      name: "Christmas Eve",
      congestionLevel: 'high',
      expectedDelay: '30-60 minutes',
      peakHours: '3:00 PM - 8:00 PM',
      affectedAreas: ['Shopping Centers', 'Grocery Stores', 'Religious Centers']
    },
    {
      date: new Date(2025, 1, 14), // Valentine's Day
      name: "Valentine's Day",
      congestionLevel: 'medium',
      expectedDelay: '20-40 minutes',
      peakHours: '5:00 PM - 9:00 PM',
      affectedAreas: ['Restaurant Districts', 'Shopping Malls', 'Flower Markets']
    },
    {
      date: new Date(2025, 6, 4), // Independence Day
      name: "Independence Day",
      congestionLevel: 'very-high',
      expectedDelay: '60-120 minutes',
      peakHours: '6:00 PM - 11:00 PM',
      affectedAreas: ['Beaches', 'Parks', 'Highways', 'Event Venues']
    }
  ];

  const getCongestionForDate = (date: Date): HolidayData | null => {
    return holidayData.find(holiday => 
      holiday.date.toDateString() === date.toDateString()
    ) || null;
  };

  const getCongestionColor = (level: string): string => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const holiday = getCongestionForDate(date);
      setSelectedHoliday(holiday);
    }
  };

  useEffect(() => {
    // Set initial selected holiday if today is a holiday
    const today = new Date();
    const todayHoliday = getCongestionForDate(today);
    if (todayHoliday) {
      setSelectedHoliday(todayHoliday);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedTransition show={showContent} animation="fade" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Traffic Calendar</h1>
            <p className="text-muted-foreground">
              View traffic congestion predictions for holidays and special events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Holiday Traffic Calendar
                  </CardTitle>
                  <CardDescription>
                    Select a date to view traffic congestion predictions. Bold dates indicate holidays with traffic data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    modifiers={{
                      holiday: holidayData.map(h => h.date)
                    }}
                    modifiersStyles={{
                      holiday: { fontWeight: 'bold', color: '#ef4444' }
                    }}
                  />
                  
                  {/* Legend */}
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Congestion Levels</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span>Low</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span>Very High</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Current Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Selected Date</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div>
                      <p className="font-medium text-lg">
                        {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                      </p>
                      {selectedHoliday ? (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-medium text-primary">{selectedHoliday.name}</h4>
                            <Badge className={getCongestionColor(selectedHoliday.congestionLevel)}>
                              {selectedHoliday.congestionLevel.replace('-', ' ').toUpperCase()} CONGESTION
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Expected Delay: {selectedHoliday.expectedDelay}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <span>Peak Hours: {selectedHoliday.peakHours}</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-sm mb-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Affected Areas:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selectedHoliday.affectedAreas.map((area: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {selectedHoliday.congestionLevel === 'very-high' && (
                            <Alert>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                Severe traffic delays expected. Consider alternative routes or travel times.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      ) : (
                        <p className="text-muted-foreground mt-2">No special events or holidays on this date.</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Select a date to view details</p>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Holidays */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming High-Traffic Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {holidayData
                      .filter(holiday => holiday.date > new Date())
                      .slice(0, 4)
                      .map((holiday, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{holiday.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(holiday.date, 'MMM d, yyyy')}
                            </p>
                          </div>
                          <Badge className={getCongestionColor(holiday.congestionLevel)} variant="outline">
                            {holiday.congestionLevel.replace('-', ' ')}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
}

// Mock data for holidays and congestion levels
const holidayData = [
  {
    date: new Date(2025, 0, 1), // January 1, 2025
    name: "New Year's Day",
    congestionLevel: "high",
    expectedDelay: "45-60 minutes",
    peakHours: "10:00 AM - 2:00 PM",
    affectedAreas: ["Downtown", "Shopping Districts", "Highways"]
  },
  {
    date: new Date(2025, 1, 14), // February 14, 2025
    name: "Valentine's Day",
    congestionLevel: "medium",
    expectedDelay: "20-30 minutes",
    peakHours: "6:00 PM - 9:00 PM",
    affectedAreas: ["Restaurant Areas", "Entertainment Districts"]
  },
  {
    date: new Date(2025, 2, 17), // March 17, 2025
    name: "St. Patrick's Day",
    congestionLevel: "high",
    expectedDelay: "50-70 minutes",
    peakHours: "2:00 PM - 11:00 PM",
    affectedAreas: ["City Center", "Pub Districts", "Event Venues"]
  },
  {
    date: new Date(2025, 3, 20), // April 20, 2025
    name: "Easter Sunday",
    congestionLevel: "medium",
    expectedDelay: "25-35 minutes",
    peakHours: "11:00 AM - 3:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Parks"]
  },
  {
    date: new Date(2025, 4, 26), // May 26, 2025
    name: "Memorial Day",
    congestionLevel: "very-high",
    expectedDelay: "60-90 minutes",
    peakHours: "9:00 AM - 6:00 PM",
    affectedAreas: ["Highways", "Beach Areas", "Parks", "Shopping Centers"]
  },
  {
    date: new Date(2025, 6, 4), // July 4, 2025
    name: "Independence Day",
    congestionLevel: "very-high",
    expectedDelay: "75-120 minutes",
    peakHours: "12:00 PM - 11:00 PM",
    affectedAreas: ["Event Venues", "Beaches", "Fireworks Locations", "Highways"]
  },
  {
    date: new Date(2025, 9, 31), // October 31, 2025
    name: "Halloween",
    congestionLevel: "medium",
    expectedDelay: "30-40 minutes",
    peakHours: "5:00 PM - 9:00 PM",
    affectedAreas: ["Residential Areas", "Shopping Districts", "Entertainment Areas"]
  },
  {
    date: new Date(2025, 10, 27), // November 27, 2025
    name: "Thanksgiving",
    congestionLevel: "very-high",
    expectedDelay: "90-150 minutes",
    peakHours: "2:00 PM - 8:00 PM",
    affectedAreas: ["Airports", "Highways", "Family Areas", "Shopping Centers"]
  },
  {
    date: new Date(2025, 11, 25), // December 25, 2025
    name: "Christmas Day",
    congestionLevel: "high",
    expectedDelay: "40-55 minutes",
    peakHours: "10:00 AM - 4:00 PM",
    affectedAreas: ["Religious Centers", "Family Areas", "Gift Shops"]
  },
  {
    date: new Date(2025, 11, 31), // December 31, 2025
    name: "New Year's Eve",
    congestionLevel: "very-high",
    expectedDelay: "80-120 minutes",
    peakHours: "8:00 PM - 2:00 AM",
    affectedAreas: ["City Center", "Event Venues", "Entertainment Districts", "Times Square Area"]
  }
];

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState<any>(null);

  // Get congestion level for a specific date
  const getCongestionForDate = (date: Date) => {
    return holidayData.find(holiday => isSameDay(holiday.date, date));
  };

  // Get congestion color based on level
  const getCongestionColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const holiday = getCongestionForDate(date);
      setSelectedHoliday(holiday);
    } else {
      setSelectedHoliday(null);
    }
  };

  // Custom day render for calendar
  const renderDay = (day: Date) => {
    const holiday = getCongestionForDate(day);
    const isSelected = selectedDate && isSameDay(day, selectedDate);
    const todayClass = isToday(day) ? 'ring-2 ring-primary' : '';
    
    let congestionIndicator = '';
    if (holiday) {
      switch (holiday.congestionLevel) {
        case 'medium': congestionIndicator = 'border-b-2 border-yellow-400'; break;
        case 'high': congestionIndicator = 'border-b-2 border-orange-400'; break;
        case 'very-high': congestionIndicator = 'border-b-2 border-red-400'; break;
      }
    }

    return (
      <div className={`relative ${todayClass} ${congestionIndicator}`}>
        {day.getDate()}
        {holiday && (
          <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
            holiday.congestionLevel === 'medium' ? 'bg-yellow-400' :
            holiday.congestionLevel === 'high' ? 'bg-orange-400' :
            holiday.congestionLevel === 'very-high' ? 'bg-red-400' : 'bg-green-400'
          }`} />
        )}
      </div>
    );
  };

  useEffect(() => {
    // Set initial selected holiday if today is a holiday
    const today = new Date();
    const todayHoliday = getCongestionForDate(today);
    if (todayHoliday) {
      setSelectedHoliday(todayHoliday);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedTransition show={showContent} animation="fade" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Traffic Calendar</h1>
            <p className="text-muted-foreground">
              View traffic congestion predictions for holidays and special events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Holiday Traffic Calendar
                  </CardTitle>
                  <CardDescription>
                    Select a date to view traffic congestion predictions. Bold dates indicate holidays with traffic data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    modifiers={{
                      holiday: holidayData.map(h => h.date)
                    }}
                    modifiersStyles={{
                      holiday: { fontWeight: 'bold', color: '#ef4444' }
                    }}
                  />
                  
                  {/* Legend */}
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Congestion Levels</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span>Low</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span>Very High</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Current Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Selected Date</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div>
                      <p className="font-medium text-lg">
                        {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                      </p>
                      {selectedHoliday ? (
                        <div className="mt-4 space-y-3">
                          <div>
                            <h4 className="font-medium text-primary">{selectedHoliday.name}</h4>
                            <Badge className={getCongestionColor(selectedHoliday.congestionLevel)}>
                              {selectedHoliday.congestionLevel.replace('-', ' ').toUpperCase()} CONGESTION
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Expected Delay: {selectedHoliday.expectedDelay}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="h-4 w-4 text-muted-foreground" />
                              <span>Peak Hours: {selectedHoliday.peakHours}</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-sm mb-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Affected Areas:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selectedHoliday.affectedAreas.map((area: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {selectedHoliday.congestionLevel === 'very-high' && (
                            <Alert>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                Severe traffic delays expected. Consider alternative routes or travel times.
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      ) : (
                        <p className="text-muted-foreground mt-2">No special events or holidays on this date.</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Select a date to view details</p>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Holidays */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming High-Traffic Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {holidayData
                      .filter(holiday => holiday.date > new Date())
                      .slice(0, 4)
                      .map((holiday, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{holiday.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(holiday.date, 'MMM d, yyyy')}
                            </p>
                          </div>
                          <Badge className={getCongestionColor(holiday.congestionLevel)} variant="outline">
                            {holiday.congestionLevel.replace('-', ' ')}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default ManagePage;
