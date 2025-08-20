import React, { useRef } from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
import { useLocation, useNavigate } from 'react-router-dom';

const VisitorPass = () => {
  const passRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const visitor = location.state?.visitor;
  console.log("Visitor Data:", visitor);

  const handlePrint = useReactToPrint({
    content: () => passRef.current,
    documentTitle: 'visitor-pass',
    pageStyle: `
      @page { size: auto; margin: 0; }
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
    `
  });

  return (
    <div 
      className="w-full sm:w-96"
      style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex items-center p-3 justify-between">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-[#121416]"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-[#121416] text-md font-bold leading-tight flex-1 text-center pr-12">
            Visitor Pass
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-[#121416]"
            onClick={handlePrint}
          >
            <Printer className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Pass Content */}
      <div ref={passRef} className="flex-1 overflow-y-auto px-4 py-6 bg-gradient-to-b from-blue-50 to-white">
        {/* Company Branding */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-1 mb-2 w-full max-w-xs">
            <div className="bg-white rounded-xl p-2 flex items-center justify-center">
              <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                ACME CORPORATION
              </h1>
            </div>
          </div>
        </div>

        {/* Visitor Photo */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={visitor?.visitorPhotoUrl || "https://via.placeholder.com/150"} 
                alt="Visitor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              VISITOR
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {visitor?.fullName || "Unknown Visitor"}
          </h2>
        </div>

        {/* Pass Details */}
        <div className="bg-white rounded-2xl shadow-sm p-3 mb-4 border border-gray-100">
          <DetailRow label="Host Name" value={visitor?.whomToMeet?.name || "-"} />
          <DetailRow label="Purpose of Visit" value={visitor?.purpose?.name || "-"} />
          <DetailRow label="Check-in Time" value={new Date().toLocaleString()} />
          <DetailRow label="Pass Id Number" value={visitor?.purpose?._id || "-"} border={false} />
        </div>

        {/* Validity */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-1 mb-6">
          <div className="bg-white rounded-xl p-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Valid until</p>
              <p className="text-gray-800 font-bold">
                {new Date(Date.now() + 4 * 60 * 60 * 1000).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
<div className="fixed bottom-0 left-0 w-full bg-white border-t">
  <div className="max-w-md mx-auto px-4 py-2">
    <Button 
      onClick={handlePrint}
      className="w-full h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
    >
      <Printer className="w-5 h-5 mr-2" />
      Print Visitor Pass
    </Button>
  </div>
</div>

    </div>
  );
};

// Reusable detail row
const DetailRow = ({ label, value, border = true }) => (
  <div className={`flex justify-between py-2 ${border ? 'border-b' : ''} border-gray-100`}>
    <div className="text-gray-500 font-medium text-sm">{label}</div>
    <div className="text-gray-800 font-semibold text-sm">{value}</div>
  </div>
);

export default VisitorPass;
