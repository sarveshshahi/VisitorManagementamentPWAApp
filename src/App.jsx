// src/components/CheckInPage.js
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import qrImg from './assets/qr.png'; 

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
      {/* Header */}
      <header className="flex items-center justify-between p-4 pb-2 bg-white">
        <div className="flex size-12 shrink-0 items-center text-[#111418]">
          <Shield className="w-6 h-6" />
        </div>
        <h2 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Welcome to Acme Co.
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* QR Code Section */}
        <div className="flex flex-col items-center mb-8">
          <Card className="w-48 h-48 rounded-xl overflow-hidden p-0 flex items-center justify-center">
            <img src={qrImg} alt="QR Code" className="w-full h-full object-contain" />
          </Card>
          <p className="text-[#000000] text-sm mt-2 mb-4">Scan QR</p>
          <p className="text-[#60758a] text-sm mb-0">OR</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 max-w-xs mx-auto w-full">
          <Button className="h-12 text-lg bg-blue-700 hover:bg-[#0a6bc9] font-bold" onClick={()=>navigate('/home')}>
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