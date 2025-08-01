
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { 
  Car, 
  FileText, 
  Upload, 
  User, 
  MapPin, 
  Calendar,
  Shield,
  CheckCircle,
  AlertCircle,
  Camera,
  Globe,
  Home,
  CreditCard,
  Phone,
  Mail,
  Edit,
  Save,
  Plus,
  Trash2
} from 'lucide-react';

const Import = () => {
  const showContent = useAnimateIn(false, 300);
  const [activeTab, setActiveTab] = useState('personal');
  const [documents, setDocuments] = useState([
    { id: 1, type: 'license', status: 'verified', uploaded: true },
    { id: 2, type: 'passport', status: 'pending', uploaded: true },
    { id: 3, type: 'registration', status: 'expired', uploaded: false }
  ]);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: <User className="h-4 w-4" /> },
    { id: 'vehicle', label: 'Vehicle Details', icon: <Car className="h-4 w-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="h-4 w-4" /> },
    { id: 'address', label: 'Address & Location', icon: <MapPin className="h-4 w-4" /> }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const PersonalInfoSection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>Basic personal details for account verification</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="email" type="email" placeholder="john.doe@example.com" className="pl-10" defaultValue="john.doe@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="phone" placeholder="+1 (555) 123-4567" className="pl-10" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="dob" type="date" className="pl-10" defaultValue="1990-01-15" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="nationality" placeholder="United States" className="pl-10" defaultValue="United States" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
          <CardDescription>Contact person in case of emergency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyName">Contact Name</Label>
              <Input id="emergencyName" placeholder="Jane Doe" defaultValue="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">Contact Phone</Label>
              <Input id="emergencyPhone" placeholder="+1 (555) 987-6543" defaultValue="+1 (555) 987-6543" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship</Label>
              <Input id="relationship" placeholder="Spouse" defaultValue="Spouse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const VehicleDetailsSection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Primary Vehicle
          </CardTitle>
          <CardDescription>Main vehicle information for traffic services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="make">Vehicle Make</Label>
              <Input id="make" placeholder="Toyota" defaultValue="Toyota" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Vehicle Model</Label>
              <Input id="model" placeholder="Camry" defaultValue="Camry" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input id="year" placeholder="2022" defaultValue="2022" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input id="color" placeholder="Silver" defaultValue="Silver" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licensePlate">License Plate</Label>
              <Input id="licensePlate" placeholder="ABC-1234" defaultValue="ABC-1234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vin">VIN Number</Label>
              <Input id="vin" placeholder="1HGBH41JXMN109186" defaultValue="1HGBH41JXMN109186" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle Registration</CardTitle>
          <CardDescription>Registration and insurance details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="regNumber">Registration Number</Label>
              <Input id="regNumber" placeholder="REG123456789" defaultValue="REG123456789" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regExpiry">Registration Expiry</Label>
              <Input id="regExpiry" type="date" defaultValue="2025-12-31" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Input id="insurance" placeholder="State Farm" defaultValue="State Farm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="policyNumber">Policy Number</Label>
              <Input id="policyNumber" placeholder="POL-987654321" defaultValue="POL-987654321" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Vehicles</CardTitle>
          <CardDescription>Register multiple vehicles under your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Honda Civic 2020</p>
                  <p className="text-sm text-gray-600">License: XYZ-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Another Vehicle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const DocumentsSection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Required Documents
          </CardTitle>
          <CardDescription>Upload and verify your official documents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <div>
                    <h4 className="font-medium">Driver's License</h4>
                    <p className="text-sm text-gray-600">Valid government-issued driver's license</p>
                  </div>
                </div>
                <Badge className={getStatusColor('verified')}>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  View Document
                </Button>
                <Button variant="ghost" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Update
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <div>
                    <h4 className="font-medium">Passport/National ID</h4>
                    <p className="text-sm text-gray-600">Official country identification document</p>
                  </div>
                </div>
                <Badge className={getStatusColor('pending')}>
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Pending Review
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  View Document
                </Button>
                <Button variant="ghost" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Update
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-gray-500" />
                  <div>
                    <h4 className="font-medium">Vehicle Registration</h4>
                    <p className="text-sm text-gray-600">Current vehicle registration certificate</p>
                  </div>
                </div>
                <Badge className={getStatusColor('expired')}>
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Expired
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Document
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-gray-500" />
                  <div>
                    <h4 className="font-medium">Insurance Certificate</h4>
                    <p className="text-sm text-gray-600">Valid vehicle insurance documentation</p>
                  </div>
                </div>
                <Badge className={getStatusColor('verified')}>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  View Document
                </Button>
                <Button variant="ghost" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Update
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Document Upload Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Ensure documents are clear and readable</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Upload high-resolution images (minimum 300 DPI)</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Accepted formats: JPG, PNG, PDF</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Maximum file size: 10MB per document</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const AddressSection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Residential Address
          </CardTitle>
          <CardDescription>Primary residential address information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address1">Street Address</Label>
              <Input id="address1" placeholder="123 Main Street" defaultValue="123 Main Street" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address2">Apartment/Unit (Optional)</Label>
              <Input id="address2" placeholder="Apt 4B" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" defaultValue="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" placeholder="NY" defaultValue="NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" placeholder="10001" defaultValue="10001" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" placeholder="United States" defaultValue="United States" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mailing Address</CardTitle>
          <CardDescription>Address for official correspondence (if different)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="sameAddress" className="rounded" defaultChecked />
            <Label htmlFor="sameAddress">Same as residential address</Label>
          </div>
          <div className="grid grid-cols-1 gap-4 opacity-50">
            <Input placeholder="Street Address" disabled />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="City" disabled />
              <Input placeholder="State" disabled />
              <Input placeholder="ZIP Code" disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location Preferences</CardTitle>
          <CardDescription>Configure location-based services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Location Services</p>
                <p className="text-sm text-gray-600">Enable GPS tracking for traffic updates</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Traffic Notifications</p>
                <p className="text-sm text-gray-600">Receive alerts about traffic conditions</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Route Suggestions</p>
                <p className="text-sm text-gray-600">Get personalized route recommendations</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal': return <PersonalInfoSection />;
      case 'vehicle': return <VehicleDetailsSection />;
      case 'documents': return <DocumentsSection />;
      case 'address': return <AddressSection />;
      default: return <PersonalInfoSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <AnimatedTransition show={showContent} animation="slide-up" duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              User Profile & Documents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your profile with personal information, vehicle details, and required documents for full platform access
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
          <div className="max-w-4xl mx-auto">
            {renderTabContent()}
          </div>

          {/* Action Buttons */}
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Profile Completion</p>
                    <p className="text-sm text-gray-600">75% complete - Upload remaining documents to finish</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Import;
