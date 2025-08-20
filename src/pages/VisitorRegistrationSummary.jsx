import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const VisitorRegistrationSummary = () => {
  const navigater = useNavigate();
  const location = useLocation();
  const visitor = location.state?.visitor; // Get passed visitor data
  console.log("Visitor Data:", visitor);

  return (
    <div 
      className="w-full sm:w-96"
      style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-3 justify-between">
          <Button variant="ghost" size="icon" className="text-[#121416]">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-[#121416] text-md font-bold leading-tight flex-1 text-center pr-12">
            Visitor Registration Summary
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Visitor Information */}
        <div className="px-4 pt-4">
          <h2 className="text-[#121416] text-base font-bold pb-2">
            Visitor Information
          </h2>
          <InfoRow label="Full Name" value={visitor?.fullName || "-"} />
          <InfoRow label="Mobile Number" value={visitor?.mobileNumber || "-"} />
          <InfoRow label="Email" value={visitor?.email || "-"} />
          <InfoRow label="Company Name" value={visitor?.companyName || "-"} />
          <InfoRow label="Address" value={visitor?.address || "-"} />
        </div>

        {/* Visit Details */}
        <div className="px-4 pt-4">
          <h2 className="text-[#121416] text-base font-bold pb-2">
            Visit Details
          </h2>
          <InfoRow label="Whom to Meet" value={visitor?.whomToMeet?.name || "-"} />
          <InfoRow label="Purpose of Visit" value={visitor?.purpose?.name || "-"} />
        </div>

        {/* Identification */}
        <div className="px-4 pt-4">
          <h2 className="text-[#121416] text-base font-bold pb-2">
            Identification
          </h2>
          <InfoRow label="ID Proof Type" value={visitor?.idProofType || "-"} />
          <InfoRow label="ID Proof Number" value={visitor?.IdProofNumber || "-"} />
          <div className="flex w-full grow bg-white p-3">
            <div className="w-full aspect-[3/2] rounded-lg overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${visitor?.idProofFileUrl || ""}')` }}
              />
            </div>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="px-4 pt-4">
          <h2 className="text-[#121416] text-base font-bold pb-2">
            Vehicle Information (Optional)
          </h2>
          <InfoRow label="Vehicle Number" value={visitor?.vehicleNumber || "-"} />
        </div>

        {/* Visitor Photo */}
        <div className="px-4 pt-4">
          <h2 className="text-[#121416] text-base font-bold pb-2">
            Visitor Photo
          </h2>
          <div className="flex w-full grow bg-white p-3">
            <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${visitor?.visitorPhotoUrl || ""}')` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="sticky bottom-0 bg-white border-t">
        <div className="px-4 py-2">
          <Button 
            className="w-full h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
            onClick={() => navigater('/visitorPass', { state: { visitor } })}
          >
            Generate Pass
          </Button>
        </div>
      </div>
    </div>
  );
};

// Reusable info row
const InfoRow = ({ label, value }) => (
  <div className="flex items-center gap-3 min-h-[60px] py-1 border-b border-gray-100">
    <div className="flex flex-col justify-center">
      <p className="text-[#121416] text-sm font-semibold">{label}</p>
      <p className="text-[#6a7681] text-xs font-normal">{value}</p>
    </div>
  </div>
);

export default VisitorRegistrationSummary;
