// src/components/CheckoutPage.js
import React, { useState } from 'react';
import { ArrowLeft, Search, User, Clock, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VisitorCheckout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visitorData, setVisitorData] = useState(null);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  // Mock visitor data
  const mockVisitors = [
    {
      id: 'V-12345',
      name: 'John Smith',
      company: 'Acme Corp',
      checkinTime: '10:30 AM',
      checkinDate: '2023-06-15',
      whomToMeet: 'Sarah Johnson',
      purpose: 'Business Meeting',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 'V-67890',
      name: 'Emily Davis',
      company: 'Tech Solutions',
      checkinTime: '1:15 PM',
      checkinDate: '2023-06-15',
      whomToMeet: 'Michael Chen',
      purpose: 'Job Interview',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ];

  const handleSearch = () => {
    if (!searchTerm) return;
    
    // Find visitor by ID or name
    const foundVisitor = mockVisitors.find(visitor => 
      visitor.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      visitor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setVisitorData(foundVisitor || null);
  };

  const handleCheckout = () => {
    if (visitorData) {
      // In a real app, this would call an API to update the checkout status
      setIsCheckedOut(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setVisitorData(null);
        setSearchTerm('');
        setIsCheckedOut(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full sm:w-96">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center justify-between p-4">
          <button className="text-black flex size-12 items-center justify-center rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-black text-lg font-bold leading-tight flex-1 text-center">
            Visitor Check-out
          </h2>
          <div className="size-12" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-2 max-h-[80vh] overflow-y-auto">
        {/* Search Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-black text-lg font-semibold">Find Visitor</h3>
          </div>
          
          <div className="relative">
            <Input
              placeholder="Enter Pass ID or Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 rounded-xl border border-gray-200 bg-white focus:border-gray-200 pl-12 text-base"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600" />
          </div>
          
          <Button 
            onClick={handleSearch}
            className="mt-4 w-full h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg"
          >
            Search Visitor
          </Button>
        </div>

        {/* Visitor Details */}
        {visitorData && !isCheckedOut && (
          <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-black font-bold text-lg">Visitor Details</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200">
                  <img 
                    src={visitorData.photo} 
                    alt={visitorData.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg">{visitorData.name}</h4>
                  <p className="text-gray-600">{visitorData.company}</p>
                  <p className="text-blue-600 font-mono mt-1">{visitorData.id}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Check-in Time</p>
                    <p className="font-medium">{visitorData.checkinTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Check-in Date</p>
                    <p className="font-medium">{visitorData.checkinDate}</p>
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Meeting With</p>
                    <p className="font-medium">{visitorData.whomToMeet}</p>
                  </div>
                </div>
                
                <div className="col-span-2 flex items-start gap-2">
                  <div className="w-4 h-4 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                      <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zm0 1.5h8.25a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
                      <path d="M8.25 7.5A.75.75 0 019 8.25v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 018.25 7.5zm7.5 0a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Purpose</p>
                    <p className="font-medium">{visitorData.purpose}</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                Check-out Visitor
              </Button>
            </div>
          </div>
        )}

        {/* Checkout Success */}
        {isCheckedOut && (
          <div className="mt-8 text-center py-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Check-out Successful!</h3>
            <p className="text-gray-600 mb-6">
              {visitorData?.name} has been successfully checked out.
            </p>
            <p className="text-gray-500 text-sm">
              Returning to search in a moment...
            </p>
          </div>
        )}

        {/* Search Results Empty State */}
        {!visitorData && searchTerm && (
          <div className="mt-8 text-center py-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">No Visitor Found</h3>
            <p className="text-gray-600">
              No active visitor found with ID or name matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Initial State */}
        {!searchTerm && !visitorData && !isCheckedOut && (
          <div className="mt-10 text-center py-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                <User className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Find Visitor to Check-out</h3>
            <p className="text-gray-600">
              Enter a visitor's Pass ID or name to begin the check-out process
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitorCheckout;