import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import apiClient from "../services/ApiClient";
import Header from "../components/layout/Header";
import { ActionFooter } from "../components/layout/Footer";
import { Heading, Text } from "../components/ui/typography";

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
    <div className="relative flex min-h-screen flex-col bg-white p-4">
      <Header 
        title="Visitor Check-out"
        showBackButton={true}
      />

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <Text size="base" weight="medium" className="pb-1">Email/Mobile</Text>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Email or Mobile"
            className="form-input flex w-full resize-none overflow-hidden rounded-xl border border-[#dce5dc] bg-white h-10 p-[15px] placeholder:text-[#638863]"
          />
        </label>
      </div>

      <ActionFooter 
        actionText="Check"
        onActionClick={handleCheck}
      />
    </div>
  );
}
