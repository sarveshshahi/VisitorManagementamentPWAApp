// src/components/VisitorPass.js
import React, { useRef } from 'react';
import { Printer, ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';

const VisitorPass = () => {
  const passRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => passRef.current,
    documentTitle: 'visitor-pass',
    pageStyle: `
      @page {
        size: auto;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `
  });

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center justify-between p-4">
          <div className="w-12 flex justify-start">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
          <h2 className="text-[#111518] text-lg font-bold leading-tight flex-1 text-center">
            Visitor Pass
          </h2>
          <div className="w-12 flex justify-end">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrint}
            >
              <Printer className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Pass Content */}
      <div 
        ref={passRef} 
        className="p-6 bg-gradient-to-b from-blue-50 to-white"
      >
        {/* Pass Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-1 mb-6 w-full max-w-xs">
            <div className="bg-white rounded-xl p-4 flex items-center justify-center">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                ACME CORPORATION
              </h1>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm">Visitor Pass</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto my-2 rounded-full"></div>
          </div>
        </div>

        {/* Visitor Info */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrPSB--2GwOu-hHS14hHcbFvJUkHMXAElTgOBAFewgMPD3avzQrrHjg7BR30iXE-izAr4HSf2u1-xb1pZlHWptOR_7K5ogNbCXofgc5YYPBLZ-7RBs6S6Vv7ne-FBctB40ql7rryOnu5vrPBYk2kQqRlfM1P47rle9B-nZ-cH0CRteb5SxX4avUnlQZBVNWft-DXEHakQfLwGtphJL5eaBz7I-yB7mVjF0W2XeTvB4___h-ZeDKwyHrVRC2wF0w0_NUCP03Sh5JJNM" 
                alt="Visitor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              VISITOR
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Ethan Carter</h2>
          <p className="text-gray-500 text-center mb-4">
            Your visitor pass has been generated. Scan for visitor details.
          </p>
        </div>

        {/* Pass Details */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between border-b pb-3">
              <div className="text-gray-500 font-medium">Host Name</div>
              <div className="text-gray-800 font-medium">Olivia Bennett</div>
            </div>
            
            <div className="flex justify-between border-b pb-3">
              <div className="text-gray-500 font-medium">Purpose of Visit</div>
              <div className="text-gray-800 font-medium">Meeting</div>
            </div>
            
            <div className="flex justify-between">
              <div className="text-gray-500 font-medium">Check-in Time</div>
              <div className="text-gray-800 font-medium">July 22, 2025 · 1:30 PM</div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md mb-3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA129p5UY9o2jRRr-PI2HQLG25CsfVngDfqyGcSckm_HZToWfuhcF2qvql_O5skj5sPLGX5t0aKgqiHSRgAfDAqxalOecoeQQ-jkcfX4EkUgEMMO0HYcNI3GuFDZkBpjXt54ce8wbTknSLaxtHuiQ1DphbSRGq5rnGEI4fpaHqCQzBEwLfH_N37zH9F-0k_ce_FJRp96-0w4BxpAMLWIRs9gSU6Dby4D6w5KhxA3MVjrlqHFsbTU-kwTWcEP819L4UFsQKOkiAwf5zU" 
              alt="QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm font-medium">
            Pass ID: <span className="text-blue-600 font-bold">1234567890</span>
          </p>
        </div>

        {/* Validity */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-1 mb-6">
          <div className="bg-white rounded-xl p-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Valid until</p>
              <p className="text-gray-800 font-bold">July 22, 2025 · 5:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <Button 
          onClick={handlePrint}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-base"
        >
          <Printer className="w-5 h-5 mr-2" />
          Print Visitor Pass
        </Button>
      </div>
    </div>
  );
};

export default VisitorPass;