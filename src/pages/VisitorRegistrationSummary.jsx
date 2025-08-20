import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { ActionFooter } from '../components/layout/Footer';
import { Heading, Text } from '../components/ui/typography';

const VisitorRegistrationSummary = () => {
  const navigater = useNavigate();
  const location = useLocation();
  const visitor = location.state?.visitor; // Get passed visitor data
  console.log("Visitor Data:", visitor);

  return (
    <div className="w-full sm:w-96">
      <Header 
        title="Visitor Registration Summary"
        showBackButton={true}
      />

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

      <ActionFooter 
        actionText="Generate Pass"
        onActionClick={() => navigater('/visitorPass', { state: { visitor } })}
      />
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
