import React, { useState } from 'react';
import EmitirFactura from './EmitirFactura';

interface Props {
  onVolver: () => void;
}

const FacturaPreguntas: React.FC<Props> = ({ onVolver }) => {
  const [irAFactura, setIrAFactura] = useState(false);

  if (irAFactura) {
    return <EmitirFactura onVolver={() => setIrAFactura(false)} />;
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
          onClick={() => setIrAFactura(true)}
          className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow"
        >
          Factura Electrónica
        </button>
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Subir archivo Factura
        </button>
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow">
          Escanear Factura
        </button>
      </div>

      {/* Botón Volver */}
      
    </div>
  );
};

export default FacturaPreguntas;
