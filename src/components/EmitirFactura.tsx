import React from 'react';

interface Props {
  onVolver: () => void;
}

const EmitirFactura: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Emitir Factura</h2>

      <form className="space-y-4 text-left">
        <div>
          <label className="font-bold text-slate-800">Cliente</label>
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="w-full border rounded-xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-bold text-slate-800">RUC</label>
          <input
            type="text"
            placeholder="0.0.000.000"
            className="w-full border rounded-xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-bold text-slate-800">Fecha de emisión</label>
          <input
            type="text"
            placeholder="DD.MM.AAAA"
            className="w-full border rounded-xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-bold text-slate-800">Concepto</label>
          <input
            type="text"
            className="w-full border rounded-xl px-4 py-2 mt-1"
          />
        </div>

        <div>
          <label className="font-bold text-slate-800">Monto</label>
          <input
            type="text"
            placeholder="S/ 0.00"
            className="w-full border rounded-xl px-4 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white font-bold px-6 py-3 w-full rounded-xl mt-4"
        >
          Emitir Factura
        </button>
      </form>

      <button
        onClick={onVolver}
        className="mt-6 text-blue-800 underline text-sm"
      >
        ← Volver
      </button>
    </div>
  );
};

export default EmitirFactura;
