// components/PetForm.tsx
import React, { useState } from 'react';

interface PetFormProps {
  onPetInfoChange: (petInfo: any) => void;
}

const PetForm: React.FC<PetFormProps> = ({ onPetInfoChange }) => {
  const [formData, setFormData] = useState({
    petName: '',
    species: '',
    breed: '',
    age: '',
    gender: '', // Add gender field
    description: '', // Add description field
    photo: '',
    ownerName: '', // Add ownerName field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onPetInfoChange(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const photoFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          const photoDataUrl = event.target.result as string;
          setFormData({ ...formData, photo: photoDataUrl });
          onPetInfoChange({ photo: photoDataUrl });
        }
      };

      reader.readAsDataURL(photoFile);
    }
  };

  return (
    <div className="petForm w-7/12 p-16 pt-12 bg-slate-100">
      <h2 className="text-4xl font-semibold mb-10">Fill Pet Information</h2>
      <div>
        {/* 1st Form Block */}
        <div className="grid grid-cols-2 mb-10">
          <div className="flex text-xl">
            <label htmlFor="petName" className="">
              Pet Name:
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="tommy, bunny, ..."
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
          <div className="flex text-xl">
            <label htmlFor="species" className="">
              Species:
            </label>
            <input
              type="text"
              id="species"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="dog, cat, bird, ..."
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
        </div>
        {/* 2nd Form Block */}
        <div className="grid grid-cols-2 mb-10">
          <div className="flex text-xl">
            <label htmlFor="breed" className="">
              Breed:
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Bulldog, Beagle, ..."
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
          <div className="flex text-xl">
            <label htmlFor="age" className="">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder=""
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
        </div>
        {/* 3rd Form Block */}
        <div className="grid grid-cols-2 mb-10">
          <div className="flex text-xl">
            <label htmlFor="gender" className="">
              Gender:
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Male, Female, ..."
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
          <div className="flex text-xl">
            <label htmlFor="ownerName" className="">
              Owner Name:
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="John Doe, Jane Smith, ..."
              className="border-b-2 bg-transparent ml-4 outline-none"
            />
          </div>
        </div>
        {/* Description */}
        <div className="mb-8">
          <label htmlFor="description" className="text-xl">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full outline-none"
            placeholder="Enter a description..."
          />
        </div>
        {/* Photo */}
        <div className="">
          <label htmlFor="photo" className="text-xl">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PetForm;
