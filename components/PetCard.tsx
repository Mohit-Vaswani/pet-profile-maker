// components/PetCard.tsx
import React from 'react';

interface PetCardProps {
  petInfo: {
    petName: string;
    species: string;
    breed: string;
    age: string;
    gender: string;
    description: string;
    photo: string;
    ownerName: string;
  };
}

const PetCard: React.FC<PetCardProps> = ({ petInfo }) => {
  return (
    <div className="petCard w-5/12">
      <div className="m-10 border-2 rounded-md p-2 border-black w-16">
        <img src={petInfo.photo} alt={petInfo.petName} className="w-16 h-16 rounded-full" />
      </div>

      <h2 className="text-xl font-semibold mb-4">Pet Card</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Pet Name:</label>
          <p className="mt-1 text-gray-900">{petInfo.petName}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Species:</label>
          <p className="mt-1 text-gray-900">{petInfo.species}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Breed:</label>
          <p className="mt-1 text-gray-900">{petInfo.breed}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Age:</label>
          <p className="mt-1 text-gray-900">{petInfo.age}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Gender:</label>
          <p className="mt-1 text-gray-900">{petInfo.gender}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <p className="mt-1 text-gray-900">{petInfo.description}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Owner Name:</label>
          <p className="mt-1 text-gray-900">{petInfo.ownerName}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
