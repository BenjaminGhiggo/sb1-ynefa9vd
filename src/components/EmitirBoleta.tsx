import React from 'react';
import Retroceder from './Retroceder';

interface Props {
  onVolver: () => void;
}

const EmitirBoleta: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-xl font-bold text-blue-900 mb-6">Emitir Boleta</h2>

      <form className="space-y-5 text-left">
        <div>
          <label className="font-bold text-blue-900">Cliente (Opcional)</label>
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900">DNI (Opcional)</label>
          <input
            type="text"
            placeholder="0.0.000.000"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900">Fecha de emisión</label>
          <input
            type="text"
            placeholder="DD.MM.AAAA"
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900">Concepto</label>
          <textarea
            rows={5}
            placeholder={`Descripción:  Yogurt sabor fresa\n\nCantidad: 5\nPrecio: S/ 3.00\n\nTotal: S/ 15.00`}
            className="w-full border border-blue-400 rounded-xl px-4 py-2 mt-1 resize-none focus:outline-none"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-800 text-white font-bold px-6 py-3 rounded-xl w-[70%]"
          >
            Emitir Boleta
          </button>
        </div>
      </form>

      {/* Botón flotante de retroceso */}
      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default EmitirBoleta;
