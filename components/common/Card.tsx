import React from 'react';
import Image from 'next/image';

export interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="border rounded shadow-md overflow-hidden">
            <Image src={image} alt={title} width={400} height={250} className="w-full h-auto" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;
