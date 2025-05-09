import React from 'react';

interface BoletaPreguntasProps {
  onVolver: () => void;
}

const BoletaPreguntas: React.FC<BoletaPreguntasProps> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      {/* Encabezado */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-8">
        <img
          src="/assets/Boleta-icono.png"
          alt="Boleta"
          className="w-20 h-20 mx-auto object-contain mb-4"
        />
        <h2 className="text-xl font-bold text-orange-600">Boleta</h2>
      </div>

      {/* Opciones */}
      <div className="space-y-4">
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Boleta Electrónica
        </button>
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Subir archivo boleta
        </button>
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Escanear boleta
        </button>
      </div>

      {/* Botón Volver */}
      <button
        onClick={onVolver}
        className="mt-6 text-blue-800 underline text-sm"
      >
        ← Volver
      </button>
    </div>
  );
};

export default BoletaPreguntas;
