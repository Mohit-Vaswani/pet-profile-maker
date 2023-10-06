"use client"
import PetCard from '@/components/PetCard';
import PetForm from '@/components/PetForm';
import React, { useState } from 'react';

const page: React.FC = () => {
  const [petInfo, setPetInfo] = useState({
    petName: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    description: '',
    photo: '',
    ownerName: '',
  });

  const handlePetInfoChange = (newPetInfo: any) => {
    setPetInfo({ ...petInfo, ...newPetInfo });
  };

  return (
      <main className="w-full h-screen flex">
          <PetCard petInfo={petInfo} />
          <PetForm onPetInfoChange={handlePetInfoChange} />
      </main>
  );
};

export default page;
