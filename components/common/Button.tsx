import React from 'react';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
