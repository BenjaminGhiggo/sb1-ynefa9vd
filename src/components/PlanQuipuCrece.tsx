import React from 'react';

interface Props {
  onVolver: () => void;
}

const PlanQuipuCrece: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Plan Quipu Crece</h2>
      <p className="text-sm text-gray-700 mb-6">
        Para negocios en crecimiento que necesitan orden y claridad contable.
      </p>

      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-6">
        <h3 className="text-4xl font-bold text-orange-500 mb-2">S/. 99</h3>
        <p className="text-sm text-gray-600 mb-4">Mensual</p>

        <h4 className="text-left font-bold text-blue-800 mb-2">Incluye:</h4>
        <ul className="text-left text-sm list-disc pl-5 space-y-1 text-gray-800">
          <li><strong>Emisión 500</strong> de boletas y facturas</li>
          <li>Registro automático de ventas y gastos</li>
          <li>Recordatorios de vencimientos</li>
          <li>Historial inteligente de comprobantes</li>
          <li>Exportación de reportes en Excel y PDF</li>
          <li>Declaración de impuestos mensual desde la app</li>
          <li><strong>IA asistente 24/7</strong></li>
          <li>5 usuarios conectados</li>
        </ul>
      </div>

      <button className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold text-sm shadow">
        Prueba gratuita de 1 mes
      </button>

      <div className="mt-6">
        <button
          onClick={onVolver}
          className="text-blue-800 underline text-sm"
        >
          ← Volver
        </button>
      </div>
    </div>
  );
};

export default PlanQuipuCrece;
