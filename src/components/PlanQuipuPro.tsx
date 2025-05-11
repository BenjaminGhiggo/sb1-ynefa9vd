import React from 'react';

interface Props {
  onVolver: () => void;
}

const PlanQuipuPro: React.FC<Props> = ({ onVolver }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Plan Quipu Pro</h2>
      <p className="text-sm text-gray-700 mb-6">
        Para emprendimientos consolidados o equipos de trabajo.
      </p>

      <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 mb-6">
        <h3 className="text-4xl font-bold text-orange-500 mb-2">S/. 899</h3>
        <p className="text-sm text-gray-600 mb-4">Anual</p>

        <h4 className="text-left font-bold text-blue-800 mb-2">Incluye:</h4>
        <ul className="text-left text-sm list-disc pl-5 space-y-1 text-gray-800">
          <li>Todo el plan <strong>Quipu Crece</strong></li>
          <li>Emisión asistida por IA</li>
          <li>Declaración con revisión previa por agente IA</li>
          <li>Hasta 10 usuarios</li>
          <li>Prioridad en soporte técnico</li>
        </ul>
      </div>

      <button className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold text-sm shadow">
        Prueba gratuita de 1 mes
      </button>
    </div>
  );
};

export default PlanQuipuPro;
