
export type TrafficItem = {
  id: string;
  title: string;
  url: string;
  type: string;
  createdDate: string;
  source: string;
  keywords: string[];
  pitch: string;
  writer: string;
};

export const trafficItems: TrafficItem[] = [
  {
    id: '1',
    title: 'AI-Powered Route Optimization',
    url: '/traffikx/route-optimization',
    type: 'Algorithm',
    createdDate: '2024-01-15',
    source: 'Traffic Research',
    keywords: ['AI', 'Route Planning', 'Real-time Data'],
    pitch: 'Real-time AI algorithms suggest fastest routes',
    writer: 'Traffic Team'
  },
  {
    id: '2',
    title: 'Smart Calendar Integration',
    url: '/traffikx/calendar-sync',
    type: 'Feature',
    createdDate: '2024-01-22',
    source: 'User Research',
    keywords: ['Calendar', 'Scheduling', 'Commute Planning'],
    pitch: 'Integrates with calendars to anticipate travel needs',
    writer: 'UX Research'
  },
  {
    id: '3',
    title: 'Vehicle-Type Route Segregation',
    url: '/traffikx/vehicle-segregation',
    type: 'System',
    createdDate: '2024-02-10',
    source: 'Traffic Analysis',
    keywords: ['Bikes', 'Cars', 'Public Transport', 'Optimization'],
    pitch: 'Separate optimized routes for different vehicle types',
    writer: 'Transport Team'
  },
  {
    id: '4',
    title: 'Predictive Traffic Analysis',
    url: '/traffikx/predictive-analysis',
    type: 'Analytics',
    createdDate: '2024-02-18',
    source: 'Historical Data',
    keywords: ['Prediction', 'Traffic Patterns', 'Machine Learning'],
    pitch: 'Uses historical data to predict congestion trends',
    writer: 'Data Science'
  },
  {
    id: '5',
    title: 'Weekend Traffic Planning',
    url: '/traffikx/weekend-planning',
    type: 'Feature',
    createdDate: '2024-03-05',
    source: 'User Feedback',
    keywords: ['Weekend', 'Events', 'Leisure Travel', 'Planning'],
    pitch: 'Optimal departure time suggestions for weekend travel',
    writer: 'Product Team'
  }
];

export const columns = [
  { id: 'title', name: 'Title', sortable: true },
  { id: 'url', name: 'URL', sortable: false },
  { id: 'type', name: 'Type', sortable: true },
  { id: 'createdDate', name: 'Created Date', sortable: true },
  { id: 'keywords', name: 'Keywords', sortable: false },
  { id: 'source', name: 'Source', sortable: true },
  { id: 'pitch', name: 'Pitch', sortable: false },
  { id: 'writer', name: 'Writer', sortable: true },
];
