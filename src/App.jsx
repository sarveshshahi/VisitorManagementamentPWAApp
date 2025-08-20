// src/components/CheckInPage.js
import React from 'react';
import DownloadAppModal from './components/DownloadAppModal';
import ResetModalButton from './components/ResetModalButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import qrImg from './assets/qr.png'; 
import Header from './components/layout/Header';
import { ActionFooter } from './components/layout/Footer';
import { Heading, Text } from './components/ui/typography';

import { 
  Shield, 
  Home, 
  Search, 
  Plus, 
  Bell, 
  User 
} from 'lucide-react';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-96">
      <DownloadAppModal />
      <ResetModalButton />
      {/* Header */}
      <Header 
        title="Welcome to Acme Co."
        showBackButton={false}
      />

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* QR Code Section */}
        <div className="flex flex-col items-center mb-8">
          <Card className="w-48 h-48 rounded-xl overflow-hidden p-0 flex items-center justify-center">
            <img src={qrImg} alt="QR Code" className="w-full h-full object-contain" />
          </Card>
          <Text size="sm" weight="medium" className="mt-2 mb-4">Scan QR</Text>
          <Text size="sm" color="muted" className="mb-0">OR</Text>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 max-w-xs mx-auto w-full">
          <Button 
            className="h-12 text-lg bg-blue-700 hover:bg-[#0a6bc9] font-bold" 
            onClick={()=>navigate('/home')}
          >
            Check-in
          </Button>
          <Button 
            variant="outline" 
            className="h-12 bg-[#ffffff2] hover:bg-[#e4e7eb] text-[#111418] text-lg font-bold"
          >
            Have an Invite?
          </Button>
        </div>
      </main>
    </div>
  );
};

export default App;