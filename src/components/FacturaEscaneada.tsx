// src/components/FacturaEscaneada.tsx
import React from 'react';
import Retroceder from './Retroceder';

interface Props {
  imagen: string;
  onVolver: () => void;
  onConfirmar: () => void;
}

const FacturaEscaneada: React.FC<Props> = ({ imagen, onVolver, onConfirmar }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-xl font-bold text-blue-800 mb-6">Factura escaneada</h2>

      <img src={imagen} alt="Factura escaneada" className="w-full rounded-xl mb-4" />

      <button
        onClick={onConfirmar}
        className="bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition mr-4"
      >
        Confirmar
      </button>

      <button
        onClick={onVolver}
        className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
      >
        Volver a escanear
      </button>

      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default FacturaEscaneada;
