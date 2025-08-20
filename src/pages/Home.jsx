import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  UserCheck, 
  LogOut,
  ChevronRight,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const options = [
    {
      id: 1,
      title: "Register a New Visitor",
      description: "Create a new visitor profile",
      icon: <UserPlus className="w-5 h-5" />,
      route: "/registration"
    },
    {
      id: 2,
      title: "Already Registered?",
      description: "Check-in with existing profile",
      icon: <UserCheck className="w-5 h-5" />,
      route: "/alreadyregistor"
    },
    {
      id: 3,
      title: "Check-out",
      description: "Sign out visitors",
      icon: <LogOut className="w-5 h-5" />,
      route: "/visitorCheckout"
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
      <div className="p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
          Please select an option to proceed
        </h2>
        <p className="text-sm text-black-500 text-center mb-6">
          Choose the action you'd like to perform
        </p>
        
        <div className="space-y-4">
          {options.map((option) => (
            <div 
              key={option.id}
              className={`bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200 ${
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
                    <h3 className="font-bold text-sm text-gray-800">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button 
            className="w-full p-3 h-12 rounded-xl font-bold text-lg bg-blue-600"
            disabled={!selectedOption}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;