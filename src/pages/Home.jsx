import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  UserCheck, 
  LogOut,
  ChevronRight,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // ✅ Create navigate function

  const options = [
    {
      id: 1,
      title: "Register a New Visitor",
      description: "Create a new visitor profile",
      icon: <UserPlus className="w-5 h-5" />,
      color: "bg-[#dce8f3]",
      hoverColor: "hover:bg-[#c9d9ea]",
      route: "/registration" // ✅ Route for option 1
    },
    {
      id: 2,
      title: "Already Registered?",
      description: "Check-in with existing profile",
      icon: <UserCheck className="w-5 h-5" />,
      color: "bg-[#fef3c7]", // Updated color
      hoverColor: "hover:bg-[#fde68a]", // Updated hover color
      route: "/alreadyregistor" // ✅ You can add this if needed
    },
    {
      id: 3,
      title: "Check-out",
      description: "Sign out visitors",
      icon: <LogOut className="w-5 h-5" />,
      color: "bg-[#fee2e2]", // Updated color
      hoverColor: "hover:bg-[#fecaca]", // Updated hover color
      route: "/visitorCheckout" // ✅ Optional
    }
  ];

  const handleContinue = () => {
    const selected = options.find(opt => opt.id === selectedOption);
    if (selected?.route) {
      navigate(selected.route);
    }
  };

  return (
    <div className="w-full sm:w-96">
      {/* Header */}
      {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-center gap-3">
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Acme Corporation</h1>
          <p className="text-sm text-gray-600">Visitor Management System</p>
        </div>
      </div> */}
      
      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Please select an option to proceed
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Choose the action you'd like to perform
        </p>
        
        <div className="space-y-4">
          {options.map((option) => (
            <div 
              key={option.id}
              className={`${option.color} ${option.hoverColor} rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200 ${
                selectedOption === option.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2.5 rounded-lg">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button 
            className="w-full max-w-xs h-12 font-bold text-base bg-blue-600"
            disabled={!selectedOption}
            onClick={handleContinue} // ✅ Trigger navigation here
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
