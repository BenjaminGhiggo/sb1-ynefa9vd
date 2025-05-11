import React, { useState } from 'react';
import EmitirFactura from './EmitirFactura';
import SubirArchivoFactura from './SubirArchivoFactura';
import EscanearFactura from './EscanearFactura';

type Vista = 'opciones' | 'emitir' | 'subir' | 'escanear';

interface Props {
  onVolver: () => void;
}

const FacturaPreguntas: React.FC<Props> = ({ onVolver }) => {
  const [vista, setVista] = useState<Vista>('opciones');

  if (vista === 'emitir') {
    return <EmitirFactura onVolver={() => setVista('opciones')} />;
  }
  if (vista === 'subir') {
    return <SubirArchivoFactura onVolver={() => setVista('opciones')} />;
  }
  if (vista === 'escanear') {
    return <EscanearFactura onVolver={() => setVista('opciones')} />;
  }

  return (
    <div className="max-w-md mx-auto text-center">
      {/* Encabezado */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-8">
        <img
          src="/assets/Factura-icono.png"
          alt="Factura"
          className="w-20 h-20 mx-auto object-contain mb-4"
        />
        <h2 className="text-xl font-bold text-orange-600">Factura</h2>
      </div>

      {/* Opciones */}
      <div className="space-y-4">
        <button
          onClick={() => setVista('emitir')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Factura Electrónica
        </button>
        <button
          onClick={() => setVista('subir')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Subir archivo factura
        </button>
        <button
          onClick={() => setVista('escanear')}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Escanear factura
        </button>
      </div>
    </div>
  );
};

export default FacturaPreguntas;
