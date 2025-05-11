import React from 'react';

interface RetrocederProps {
  onClick: () => void;
}

const Retroceder: React.FC<RetrocederProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="/assets/retrocer-icon.png"
        alt="Retroceder"
        className="w-[100px] h-auto object-contain"
      />
    </button>
  );
};

export default Retroceder;
