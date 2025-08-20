import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import apiClient from '../services/ApiClient';
import Header from '../components/layout/Header';
import { StandardFooter } from '../components/layout/Footer';
import { Heading, Text } from '../components/ui/typography';

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
    IdProofNumber: '',
    vehicleNumber: '',
  });

  const [idProofFile, setIdProofFile] = useState(null);
  const [visitorPhoto, setVisitorPhoto] = useState(null);
  const [persons, setPersons] = useState([]);   // 👈 state for persons dropdown
  const [purposes, setPurposes] = useState([]); // 👈 state for purpose dropdown

  // Fetch persons list
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const res = await apiClient.get('api/person/all');
        if (res.data && res.data.success) {
          const options = res.data.data.map((person) => ({
            label: person.name,
            value: person._id,
          }));
          setPersons(options);
        }
      } catch (err) {
        console.error('Error fetching persons:', err);
      }
    };
    fetchPersons();
  }, []);

  // Fetch purposes list
  useEffect(() => {
    const fetchPurposes = async () => {
      try {
        const res = await apiClient.get('api/purpose/all');
        if (res.data && res.data.success) {
          const options = res.data.data.map((purpose) => ({
            label: purpose.name,
            value: purpose._id,
          }));
          setPurposes(options);
        }
      } catch (err) {
        console.error('Error fetching purposes:', err);
      }
    };
    fetchPurposes();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      if (idProofFile) formPayload.append('idProofFile', idProofFile);
      if (visitorPhoto) formPayload.append('visitorPhoto', visitorPhoto);

      await apiClient.post('api/visitor/register-visitor', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Visitor registered!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error || 'Error registering visitor');
      } else {
        alert('Network error');
      }
    }
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
      IdProofNumber: '',
      vehicleNumber: '',
    });
    setIdProofFile(null);
    setVisitorPhoto(null);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <Header 
        title="Register New Visitor"
        showBackButton={true}
      />

      {/* Form */}
      <form
        id="visitor-form"
        onSubmit={handleSubmit}
        className="p-4 pb-24 max-h-[85vh] overflow-y-auto"
      >
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
              options={persons} // 👈 dynamic persons
            />
            <FormSelect
              label="Purpose of Visit"
              value={formData.purpose}
              onChange={(val) => handleSelectChange('purpose', val)}
              options={purposes} // 👈 dynamic purposes
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
              capture="environment"
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
            capture="user"
            placeholder="JPG or PNG, max 5MB"
            inputId="visitor-photo"
          />
        </Section>
      </form>

      {/* Footer */}
      <StandardFooter
        onPrimaryClick={() => document.getElementById('visitor-form').requestSubmit()}
        primaryText="Submit & Generate Pass"
        onSecondaryClick={handleCancel}
        secondaryText="Cancel"
        sticky={true}
      />
    </div>
  );
};

export default Registration;
