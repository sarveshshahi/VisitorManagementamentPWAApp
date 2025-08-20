import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import ResetModalButton from '../components/ResetModalButton';
import { Button } from '@/components/ui/button';
import Header from '../components/layout/Header';
import { ActionFooter } from '../components/layout/Footer';
import { Heading, Text } from '../components/ui/typography';
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
      <DownloadAppModal />
      <ResetModalButton />
      <Header 
        title="Select an Option"
        showBackButton={true}
      />
      <div className="p-6">
        <Heading size="h2" className="text-center mb-2">
          Please select an option to proceed
        </Heading>
        <Text size="sm" className="text-center mb-6">
          Choose the action you'd like to perform
        </Text>
        
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
        
        <ActionFooter 
          actionText="Continue"
          disableAction={!selectedOption}
          onActionClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default Home;