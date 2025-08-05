import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisitorRegistrationSummary = () => {
    const navigater=useNavigate()
  return (
    <div 
      className="w-full sm:w-96"
      style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Button variant="ghost" size="icon" className="text-[#121416]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Visitor Registration Summary
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Visitor Information */}
        <div className="px-4 pt-5">
          <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Visitor Information
          </h2>
          
          <InfoRow label="Full Name" value="Ethan Harper" />
          <InfoRow label="Mobile Number" value="+1-555-123-4567" />
          <InfoRow label="Email" value="ethan.harper@example.com" />
          <InfoRow label="Company Name" value="Tech Solutions Inc." />
          <InfoRow label="Address" value="123 Innovation Drive, Techville" />
        </div>

        {/* Visit Details */}
        <div className="px-4 pt-5">
          <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Visit Details
          </h2>
          
          <InfoRow label="Whom to Meet" value="Sophia Bennett" />
          <InfoRow label="Purpose of Visit" value="Project Discussion" />
        </div>

        {/* Identification */}
        <div className="px-4 pt-5">
          <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Identification
          </h2>
          
          <InfoRow label="ID Proof Type" value="Driver's License" />
          <div className="flex w-full grow bg-white p-4">
            <div className="w-full aspect-[3/2] rounded-xl overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center rounded-none"
                style={{ 
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBELjwodpMiUbOzbaQRCNJYSmrTn4DRtiViTNXQUmckjblvPSRisTACSCnOKqpW2aH_zmrKfCuMk-58IcqNVDAWYxs1LQPQlUm6px--2gjpJwzo4kQd25UCMIPNDAArvR7cPEejnIcC9FBMoBBY9D123QkyXByfsyo5wmPazvsFgWUnwe9fzqKANnPauiMUwcfZc6e6R17U9aD_7hH7qge3aceD7P7Kdl8LYvasrfDz1z6tt1zCi4sqHjGDRHAkYMny7ZkZ1gXFTEfW")`
                }}
              />
            </div>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="px-4 pt-5">
          <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Vehicle Information (Optional)
          </h2>
          
          <InfoRow label="Vehicle Number" value="ABC-123" />
        </div>

        {/* Visitor Photo */}
        <div className="px-4 pt-5">
          <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Visitor Photo
          </h2>
          
          <div className="flex w-full grow bg-white p-4">
            <div className="w-full aspect-[2/3] rounded-xl overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center rounded-none"
                style={{ 
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBjP7udVRzqIquk6NhYcyl0PH1qH63tSGgRvU-M-m4q0CM43eVCIu_wJNtdMD6a3pUDZl0cTwlPgZsyocsB2qarlRWDUpYDgIayDF8NMtBrXT0deWvq9BifgfxMl41T2e8NlRLQlt5IWVULWuPg4JH1nge0j255PWLr3XQmXn7NYMhplds4ah-diyiB-HfGqqADyDz6gs86w0givozbqosk222ASGZV5Djd6vPX8j-J-IFcLVHUzAhQ0GaGnGecdkHb1JMRwpNTLKw")`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="sticky bottom-0 bg-white border-t">
        <div className="px-4 py-3">
          <Button className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold" onClick={()=>navigater('/visitorPass')}>
            Generate Pass
          </Button>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

// Reusable info row component
const InfoRow = ({ label, value }) => (
  <div className="flex items-center gap-4 min-h-[72px] py-2 border-b border-gray-100">
    <div className="flex flex-col justify-center">
      <p className="text-[#121416] text-base font-medium leading-normal line-clamp-1">
        {label}
      </p>
      <p className="text-[#6a7681] text-sm font-normal leading-normal line-clamp-2">
        {value}
      </p>
    </div>
  </div>
);

export default VisitorRegistrationSummary;