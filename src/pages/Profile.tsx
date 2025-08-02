
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Car,
  Shield,
  FileText,
  Star,
  Clock,
  Navigation,
  Settings,
  Edit3,
  Camera,
  Globe,
  CheckCircle,
  AlertTriangle,
  Award,
  TrendingUp,
  Activity,
  CreditCard,
  Home,
  Users
} from 'lucide-react';

const Profile = () => {
  const showContent = useAnimateIn(false, 300);
  const [activeTab, setActiveTab] = useState('overview');

  // Demo user data
  const userData = {
    personalInfo: {
      name: 'John Alexander Doe',
      email: 'john.doe@traffikx.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: 'January 15, 1990',
      nationality: 'United States',
      memberSince: 'March 2024',
      profileCompletion: 85
    },
    address: {
      street: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    vehicles: [
      {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Silver',
        licensePlate: 'ABC-1234',
        status: 'active',
        insurance: 'Valid until Dec 2025'
      },
      {
        id: 2,
        make: 'Honda',
        model: 'Civic',
        year: 2020,
        color: 'Blue',
        licensePlate: 'XYZ-5678',
        status: 'active',
        insurance: 'Valid until Oct 2025'
      }
    ],
    documents: [
      { type: 'Driver License', status: 'verified', expiry: 'Dec 2027' },
      { type: 'Passport', status: 'verified', expiry: 'Jun 2030' },
      { type: 'Vehicle Registration', status: 'verified', expiry: 'Mar 2025' },
      { type: 'Insurance Certificate', status: 'verified', expiry: 'Dec 2025' }
    ],
    preferences: {
      notifications: true,
      locationServices: true,
      trafficAlerts: true,
      routeSuggestions: true,
      dataSharing: false
    },
    activity: {
      totalTrips: 247,
      totalDistance: '3,420 km',
      avgTripTime: '28 min',
      fuelSaved: '$342',
      co2Reduced: '145 kg'
    },
    achievements: [
      { name: 'Early Adopter', description: 'Joined Traffikx in first quarter', earned: 'Mar 2024' },
      { name: 'Eco Driver', description: 'Saved 100+ kg CO2 emissions', earned: 'Jul 2024' },
      { name: 'Route Master', description: 'Completed 200+ trips', earned: 'Dec 2024' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
      case 'active': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700';
    }
  };

  const OverviewSection = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <button className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border dark:border-gray-700">
                <Camera className="h-3 w-3 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{userData.personalInfo.name}</h1>
                <Button variant="outline" size="sm">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Details
                </Button>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{userData.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{userData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since {userData.personalInfo.memberSince}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Profile Completion</span>
                  <span>{userData.personalInfo.profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${userData.personalInfo.profileCompletion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Navigation className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Trips</p>
                <p className="text-2xl font-bold">{userData.activity.totalTrips}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Distance</p>
                <p className="text-2xl font-bold">{userData.activity.totalDistance}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Time</p>
                <p className="text-2xl font-bold">{userData.activity.avgTripTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Achievements</p>
                <p className="text-2xl font-bold">{userData.achievements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Trip completed successfully</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Downtown to Airport • 45 min • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full">
                  <Navigation className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Route optimized</p>
                  <p className="text-xs text-gray-600">Saved 12 minutes • Yesterday</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-yellow-100 p-1.5 rounded-full">
                  <Award className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Achievement unlocked</p>
                  <p className="text-xs text-gray-600">Route Master • 3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="bg-yellow-100 p-1.5 rounded-full">
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{achievement.name}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                  <span className="text-xs text-gray-500">{achievement.earned}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const VehiclesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Vehicles</h2>
        <Button variant="outline">
          <Car className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>
      
      <div className="grid gap-4">
        {userData.vehicles.map((vehicle, index) => (
          <Card key={vehicle.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {vehicle.make} {vehicle.model} {vehicle.year}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>License: {vehicle.licensePlate}</span>
                      <span>Color: {vehicle.color}</span>
                      <Badge className={getStatusColor(vehicle.status)}>
                        {vehicle.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{vehicle.insurance}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const DocumentsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Documents & Verification</h2>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>
      
      <div className="grid gap-4">
        {userData.documents.map((doc, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    {doc.type === 'Driver License' && <CreditCard className="h-5 w-5 text-green-600" />}
                    {doc.type === 'Passport' && <Globe className="h-5 w-5 text-green-600" />}
                    {doc.type === 'Vehicle Registration' && <Car className="h-5 w-5 text-green-600" />}
                    {doc.type === 'Insurance Certificate' && <Shield className="h-5 w-5 text-green-600" />}
                  </div>
                  <div>
                    <h3 className="font-medium">{doc.type}</h3>
                    <p className="text-sm text-gray-600">Expires: {doc.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(doc.status)}>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {doc.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const SettingsSection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Account Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Full Name</p>
              <p className="text-gray-900">{userData.personalInfo.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
              <p className="text-gray-900">{userData.personalInfo.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Phone</p>
              <p className="text-gray-900">{userData.personalInfo.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Date of Birth</p>
              <p className="text-gray-900">{userData.personalInfo.dateOfBirth}</p>
            </div>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit Details
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
          <CardDescription>Your registered address</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3">
            <Home className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium">{userData.address.street}</p>
              <p className="text-gray-600">
                {userData.address.city}, {userData.address.state} {userData.address.zipCode}
              </p>
              <p className="text-gray-600">{userData.address.country}</p>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            <Edit3 className="h-4 w-4 mr-2" />
            Update Address
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your app preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(userData.preferences).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-sm text-gray-600">
                  {key === 'notifications' && 'Receive push notifications'}
                  {key === 'locationServices' && 'Allow location tracking'}
                  {key === 'trafficAlerts' && 'Get traffic condition alerts'}
                  {key === 'routeSuggestions' && 'Receive route recommendations'}
                  {key === 'dataSharing' && 'Share anonymized data for improvements'}
                </p>
              </div>
              <Button variant="outline" size="sm">
                {value ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="h-4 w-4" /> },
    { id: 'vehicles', label: 'Vehicles', icon: <Car className="h-4 w-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection />;
      case 'vehicles': return <VehiclesSection />;
      case 'documents': return <DocumentsSection />;
      case 'settings': return <SettingsSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <AnimatedTransition show={showContent} animation="slide-up" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              User Profile
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Manage your personal information, vehicles, documents, and account settings
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-black dark:border-white text-black dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Profile;
