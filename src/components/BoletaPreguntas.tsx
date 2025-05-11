import React, { useState } from 'react';
import EmitirBoleta from './EmitirBoleta';
import SubirArchivoBoleta from './SubirArchivoBoleta';

interface Props {
  onVolver: () => void;
}

const BoletaPreguntas: React.FC<Props> = ({ onVolver }) => {
  const [vista, setVista] = useState<'opciones' | 'emitir' | 'subir'>('opciones');

  if (vista === 'emitir') {
    return <EmitirBoleta onVolver={() => setVista('opciones')} />;
  }

  if (vista === 'subir') {
    return <SubirArchivoBoleta onVolver={() => setVista('opciones')} />;
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-8">
        <img
          src="/assets/Boleta-icono.png"
          alt="Boleta"
          className="w-20 h-20 mx-auto object-contain mb-4"
        />
        <h2 className="text-xl font-bold text-orange-600">Boleta</h2>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setVista('emitir')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Boleta Electrónica
        </button>
        <button
          onClick={() => setVista('subir')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Subir archivo boleta
        </button>
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Escanear boleta
        </button>
      </div>

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
