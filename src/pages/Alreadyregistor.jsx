import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import apiClient from "../services/ApiClient";

export default function Alreadyregistor() {
  const navigater = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleCheck = async () => {
    try {
      const isEmail = /\S+@\S+\.\S+/.test(inputValue);
      const params = isEmail ? { email: inputValue } : { mobile: inputValue };

      const response = await apiClient.get("api/visitor/search", { params });
      console.log(response.data); // Optional debug

      if (response.data.success) {
        // Navigate and send data
        navigater('/visitorRegistrationSummary', { state: { visitor: response.data.data[0] } });
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-white p-4" style={{ fontFamily: `Inter, "Noto Sans", sans-serif` }}>
      <div className="flex items-center bg-white pb-2 justify-between">
        <div className="text-[#111811] flex items-center">
          <ArrowLeft size={24} />
        </div>
        <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Visitor Check-out
        </h2>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111811] text-base font-medium leading-normal pb-1">Email/Mobile</p>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Email or Mobile"
            className="form-input flex w-full resize-none overflow-hidden rounded-xl border border-[#dce5dc] bg-white h-10 p-[15px] placeholder:text-[#638863]"
          />
        </label>
      </div>

      <div className="flex justify-center py-3">
        <button className="w-24 h-10 bg-blue-600 text-white rounded-lg font-bold text-sm" onClick={handleCheck}>
          Check
        </button>
      </div>
    </div>
  );
}
