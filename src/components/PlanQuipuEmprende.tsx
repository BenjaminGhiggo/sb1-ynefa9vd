import React from 'react';
import Retroceder from './Retroceder';

interface Props {
  onVolver: () => void;
}

const PlanQuipuEmprende: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Plan Quipu Emprende</h2>
      <p className="text-sm text-gray-700 mb-6">
        Para quienes recién inician su negocio o actividad independiente.
      </p>

      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-6">
        <h3 className="text-4xl font-bold text-orange-500 mb-2">S/. 69</h3>
        <p className="text-sm text-gray-600 mb-4">Mensual</p>

        <h4 className="text-left font-bold text-blue-800 mb-2">Incluye:</h4>
        <ul className="text-left text-sm list-disc pl-5 space-y-1 text-gray-800">
          <li><strong>Emisión 200</strong> de boletas y facturas</li>
          <li>Registro automático de ventas y gastos</li>
          <li>Recordatorios de vencimientos</li>
          <li>Historial inteligente de comprobantes</li>
          <li>Panel básico de métricas</li>
        </ul>
      </div>

      <button className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold text-sm shadow">
        Prueba gratuita de 1 mes
      </button>

      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default PlanQuipuEmprende;
