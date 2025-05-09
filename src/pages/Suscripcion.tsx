import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import PlanQuipuEmprende from '../components/PlanQuipuEmprende';
import PlanQuipuCrece from '../components/PlanQuipuCrece';
import PlanQuipuPro from '../components/PlanQuipuPro';

const Suscripcion: React.FC = () => {
  const [planSeleccionado, setPlanSeleccionado] = useState<string | null>(null);

  return (
    <Layout title="Suscripción">
      {planSeleccionado === 'emprende' ? (
        <PlanQuipuEmprende onVolver={() => setPlanSeleccionado(null)} />
      ) : planSeleccionado === 'crece' ? (
        <PlanQuipuCrece onVolver={() => setPlanSeleccionado(null)} />
      ) : planSeleccionado === 'pro' ? (
        <PlanQuipuPro onVolver={() => setPlanSeleccionado(null)} />
      ) : (
        <div className="max-w-md mx-auto text-center space-y-6">
          <button
            onClick={() => setPlanSeleccionado('emprende')}
            className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold shadow"
          >
            Plan Quipu Emprende
          </button>
          <button
            onClick={() => setPlanSeleccionado('crece')}
            className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold shadow"
          >
            Plan Quipu Crece
          </button>
          <button
            onClick={() => setPlanSeleccionado('pro')}
            className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold shadow"
          >
            Plan Quipu Pro
          </button>

          <img
            src="/assets/avatar.png"
            alt="Kappi"
            className="mx-auto w-32 h-auto mt-8"
          />
        </div>
      )}
    </Layout>
  );
};

export default Suscripcion;
