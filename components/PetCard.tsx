// components/PetCard.tsx
import React from 'react';
import { PawPrint } from 'lucide-react';

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
    <div className='w-5/12 petCardContainer flex justify-center items-center'>
      <div className="m-10 top-0 left-0 border-2 absolute rounded-md p-2 border-black w-16"><PawPrint size={48} /></div>
    <div className="petCard flex justify-between items-start">
      <div className="">
        <div className="">
          <label className="">Pet Name:</label>
          <p className="">{petInfo.petName}</p>
        </div>
        <div className="">
          <label className="">Species:</label>
          <p className="">{petInfo.species}</p>
        </div>
        <div className="">
          <label className="">Breed:</label>
          <p className="">{petInfo.breed}</p>
        </div>
        <div className="">
          <label className="">Age:</label>
          <p className="">{petInfo.age}</p>
        </div>
        <div className="">
          <label className="">Gender:</label>
          <p className="">{petInfo.gender}</p>
        </div>
        <div className="">
          <label className="">Description:</label>
          <p className="">{petInfo.description}</p>
        </div>
        <div className="">
          <label className="">Owner Name:</label>
          <p className="">{petInfo.ownerName}</p>
        </div>
      </div>
      <div>
      <div className="border-2 rounded-full object-cover border-black">
        <img src={petInfo.photo} alt={petInfo.petName} className="w-20 h-20 rounded-full" />
      </div>
      </div>
    </div>
    </div>
  );
};

export default PetCard;
