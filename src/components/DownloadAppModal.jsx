import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DownloadAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the modal
    const hasSeenModal = localStorage.getItem('downloadModalSeen');
    
    // Show the modal after a short delay when the component mounts
    // Only if the user hasn't dismissed it before
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    // Store in localStorage that user has seen the modal
    localStorage.setItem('downloadModalSeen', 'true');
    setIsOpen(false);
  };

  const handleDownload = () => {
    // Logic to handle app download or redirect to app store
    // For demonstration, we'll just open a new tab with a hypothetical app store link
    window.open('https://play.google.com/store/apps', '_blank');
    
    // Store in localStorage that user has seen the modal
    localStorage.setItem('downloadModalSeen', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-[90%] max-w-md p-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Download Our App</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Get a better experience with our mobile app. Download now for faster check-ins and exclusive features.
          </p>
          
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center">
              <Download className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button 
            className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white font-bold"
            onClick={handleDownload}
          >
            Download Now
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={handleClose}
          >
            Continue to Website
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DownloadAppModal;