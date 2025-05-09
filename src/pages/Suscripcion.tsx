import React from 'react';
import Layout from '../layouts/Layout';

const Suscripcion: React.FC = () => {
  const planes = [
    'Plan Quipu Emprende',
    'Plan Quipu Crece',
    'Plan Quipu Pro',
  ];

  return (
    <Layout title="Suscripción">
      <div className="flex flex-col items-center gap-6 max-w-sm mx-auto py-4">
        {planes.map((plan, index) => (
          <button
            key={index}
            className="bg-blue-900 text-white text-center text-lg font-bold px-6 py-4 rounded-2xl w-full shadow hover:bg-blue-800 transition"
          >
            {plan}
          </button>
        ))}
        <img
          src="/assets/avatar.png"
          alt="Kappi"
          className="w-44 h-auto mt-4 object-contain"
        />
      </div>
    </Layout>
  );
};

export default Suscripcion;
