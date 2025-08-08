import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Section = ({ title, icon, children, bg }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-4">
      <div className={`${bg} p-2 rounded-lg`}>{icon}</div>
      <h2 className="text-[#111518] text-base font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

export const TwoCol = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
);

export const FormInput = ({ label, icon, name, value, onChange, type = 'text', full = false }) => (
  <div className={full ? 'md:col-span-2 space-y-1' : 'space-y-1'}>
    <label className="text-sm font-medium text-[#111518] flex items-center gap-2">
      {icon} {label}
    </label>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className="h-9 w-full text-sm px-3 rounded-lg bg-white border-none"
    />
  </div>
);

export const FormSelect = ({ label, value, onChange, options }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-[#111518]">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-12 w-full text-sm px-3 rounded-lg bg-white border-none">
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export const UploadBox = ({ label, file, onChange, accept, placeholder, inputId, capture }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-100 rounded-lg">
    <div className="flex-1">
      <p className="text-[#111518] font-medium text-sm">{label}</p>
      <p className="text-gray-500 text-xs mt-1">{file ? file.name : placeholder}</p>
    </div>
    <div className="w-full sm:w-auto">
      <input type="file" id={inputId} className="hidden" onChange={onChange} accept={accept}  capture={capture}  />
      <label
        htmlFor={inputId}
        className="flex items-center justify-center h-12 w-full sm:w-auto px-4 bg-gray-200 text-sm text-[#111518] rounded-lg font-medium cursor-pointer hover:bg-gray-300"
      >
        {file ? 'Change File' : 'Upload'}
      </label>
    </div>
  </div>
);

// Optional: You can also export all components as a single object
export default {
  Section,
  TwoCol,
  FormInput,
  FormSelect,
  UploadBox
};