import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
export default function Alreadyregistor() {
    const navigater = useNavigate()
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden p-4"
      style={{ fontFamily: `Inter, "Noto Sans", sans-serif` }}
    >
      {/* Header */}
      <div className="flex items-center bg-white pb-2 justify-between">
        <div className="text-[#111811] flex size-12 shrink-0 items-center">
          <ArrowLeft size={24} />
        </div>
        <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Visitor Check-out
        </h2>
      </div>

      {/* Input Field */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111811] text-base font-medium leading-normal pb-2">
            Email/Mobile
          </p>
          <Input
            placeholder="Enter Eamil or Mobile"
            className="form-input flex w-full resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border border-[#dce5dc] bg-white focus:border-[#dce5dc] h-14 placeholder:text-[#638863] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center py-3">
        <button className="w-26 h-12 bg-blue-600 text-white rounded-lg font-bold text-sm" onClick={()=>navigater('/visitorRegistrationSummary')}>
          Check
        </button>
      </div>
    </div>
  );
}
