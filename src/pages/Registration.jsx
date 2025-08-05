// src/components/VisitorRegistration.js
import React, { useState } from 'react';
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  Building,
  MapPin,
  UserCircle,
  File,
  Car,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormInput, FormSelect, Section, TwoCol, UploadBox } from '../components/fieldscomponents/filedscomponents';


const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    companyName: '',
    address: '',
    whomToMeet: '',
    purpose: '',
    idProofType: '',
    IdProofNumber:'',
    vehicleNumber: '',
  });

  const [idProofFile, setIdProofFile] = useState(null);
  const [visitorPhoto, setVisitorPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, idProofFile, visitorPhoto });
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      companyName: '',
      address: '',
      whomToMeet: '',
      purpose: '',
      idProofType: '',
       IdProofNumber:'',
      vehicleNumber: '',
    });
    setIdProofFile(null);
    setVisitorPhoto(null);
  };

  const commonInputClass = 'h-12 w-full text-sm px-3 rounded-lg bg-gray-100 border-none';

  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center justify-between p-2">
          <button className="text-[#111518] flex size-12 items-center justify-center rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-[#111518] text-base font-bold leading-tight flex-1 text-center">
            Register New Visitor
          </h2>
          <div className="size-12" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 pb-24 max-h-[85vh] overflow-y-auto">
        {/* Visitor Information */}
        <Section title="Visitor Information" icon={<User className="w-4 h-4 text-blue-600" />} bg="bg-blue-100">
          <TwoCol>
            <FormInput label="Full Name" icon={<User className="w-4 h-4" />} name="fullName" value={formData.fullName} onChange={handleChange} />
            <FormInput label="Mobile Number" icon={<Phone className="w-4 h-4" />} name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            <FormInput label="Email" icon={<Mail className="w-4 h-4" />} name="email" value={formData.email} onChange={handleChange} type="email" />
            <FormInput label="Company Name" icon={<Building className="w-4 h-4" />} name="companyName" value={formData.companyName} onChange={handleChange} />
            <FormInput label="Address" icon={<MapPin className="w-4 h-4" />} name="address" value={formData.address} onChange={handleChange} full />
          </TwoCol>
        </Section>

        {/* Visit Details */}
        <Section title="Visit Details" icon={<UserCircle className="w-4 h-4 text-purple-600" />} bg="bg-purple-100">
          <TwoCol>
            <FormSelect
              label="Whom to Meet"
              value={formData.whomToMeet}
              onChange={(val) => handleSelectChange('whomToMeet', val)}
              options={[
                { label: 'John Smith (Sales)', value: 'john' },
                { label: 'Sarah Johnson (HR)', value: 'sarah' },
                { label: 'Mike Williams (IT)', value: 'mike' },
                { label: 'Lisa Brown (Management)', value: 'lisa' },
              ]}
            />
            <FormSelect
              label="Purpose of Visit"
              value={formData.purpose}
              onChange={(val) => handleSelectChange('purpose', val)}
              options={[
                { label: 'Business Meeting', value: 'meeting' },
                { label: 'Job Interview', value: 'interview' },
                { label: 'Delivery', value: 'delivery' },
                { label: 'Service/Maintenance', value: 'service' },
                { label: 'Other', value: 'other' },
              ]}
            />
          </TwoCol>
        </Section>

        {/* Identification */}
        <Section title="Identification" icon={<File className="w-4 h-4 text-yellow-600" />} bg="bg-yellow-100">
          <div className="space-y-6">
            <FormSelect
              label="ID Proof Type"
              value={formData.idProofType}
              onChange={(val) => handleSelectChange('idProofType', val)}
              options={[
                { label: "Driver's License", value: 'driver' },
                { label: 'Passport', value: 'passport' },
                { label: 'National ID', value: 'national' },
                { label: 'Company ID', value: 'company' },
              ]}
            />
            <FormInput label="ID Proof Number" icon={<Phone className="w-4 h-4" />} name="IdProofNumber" value={formData.IdProofNumber} onChange={handleChange} />
            <UploadBox
              label="Upload ID Proof"
              file={idProofFile}
              onChange={(e) => handleFileUpload(e, setIdProofFile)}
              accept="image/*"
              capture="environment" // 👈 back camera
              placeholder="JPG, PNG or PDF, max 5MB"
              inputId="id-proof"
            />

          </div>
        </Section>

        {/* Vehicle Info */}
        <Section title="Vehicle Information (Optional)" icon={<Car className="w-4 h-4 text-green-600" />} bg="bg-green-100">
          <FormInput label="Vehicle Number" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />
        </Section>

        {/* Visitor Photo */}
        <Section title="Visitor Photo" icon={<UserCircle className="w-4 h-4 text-pink-600" />} bg="bg-pink-100">
          <UploadBox
            label="Upload Visitor Photo"
            file={visitorPhoto}
            onChange={(e) => handleFileUpload(e, setVisitorPhoto)}
            accept="image/*"
            capture="user" // 👈 front camera
            placeholder="JPG or PNG, max 5MB"
            inputId="visitor-photo"
          />

        </Section>
      </form>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <Button
            type="button"
            onClick={handleCancel}
            variant="outline"
            className="h-8 text-sm font-semibold rounded-full bg-gray-100 text-[#111518] hover:bg-gray-200"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="visitor-form"
            className="h-8 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit & Generate Pass
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Registration;




