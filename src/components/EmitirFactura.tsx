// src/components/EmitirFactura.tsx
import React from 'react';
import Retroceder from './Retroceder';

interface Props {
  onVolver: () => void;
}

const EmitirFactura: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-xl font-bold text-blue-900 mb-6">Emitir Factura</h2>

      <form className="space-y-5 text-left">
        {/* Cliente */}
        <div>
          <label className="font-bold text-blue-900">Cliente</label>
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        {/* DNI / RUC */}
        <div>
          <label className="font-bold text-blue-900">DNI/RUC</label>
          <input
            type="text"
            placeholder="0.0.000.000"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Fecha de emisión */}
        <div>
          <label className="font-bold text-blue-900">Fecha de emisión</label>
          <input
            type="text"
            placeholder="DD.MM.AAAA"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Concepto */}
        <div>
          <label className="font-bold text-blue-900">Concepto</label>
          <textarea
            rows={5}
            placeholder={`Descripción:  Yogurt sabor fresa\n\nCantidad: 5\nPrecio: S/ 3.00\n\nTotal: S/ 15.00`}
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 resize-none focus:outline-none"
          />
        </div>

        {/* Botón emitir */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-900 transition"
          >
            Emitir Factura
          </button>
        </div>
      </form>

      {/* Botón flotante de retroceso */}
      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default EmitirFactura;
