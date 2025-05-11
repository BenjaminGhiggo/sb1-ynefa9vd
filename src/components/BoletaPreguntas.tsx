// src/components/BoletaPreguntas.tsx
import React, { useState } from 'react';
import EmitirBoleta from './EmitirBoleta';
import SubirArchivoBoleta from './SubirArchivoBoleta';
import EscanearBoleta from './EscanearBoleta';

type Vista = 'opciones' | 'emitir' | 'subir' | 'escanear';

interface Props {
  onVolver: () => void;
}

const BoletaPreguntas: React.FC<Props> = ({ onVolver }) => {
  const [vista, setVista] = useState<Vista>('opciones');

  if (vista === 'emitir') {
    return <EmitirBoleta onVolver={() => setVista('opciones')} />;
  }
  if (vista === 'subir') {
    return <SubirArchivoBoleta onVolver={() => setVista('opciones')} />;
  }
  if (vista === 'escanear') {
    return <EscanearBoleta onVolver={() => setVista('opciones')} />;
  }

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
        <button
          onClick={() => setVista('escanear')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Escanear boleta
        </button>
      </div>
    </div>
  );
};

export default BoletaPreguntas;
