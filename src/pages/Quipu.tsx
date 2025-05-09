import React from 'react';
import Layout from '../layouts/Layout';

const Quipu: React.FC = () => {
  return (
    <Layout title="Quipu">
      <div className="flex flex-col items-center max-w-sm mx-auto py-4">
        <img
          src="/assets/avatar.png"
          alt="Quipu"
          className="w-28 h-auto object-contain mb-4"
        />

        <div className="bg-white rounded-2xl shadow-md p-6 w-full text-left">
          <p className="text-lg font-bold text-slate-800 mb-4">
            ¡Hola! Soy Quipu, tu asistente para emprendedores. ¿En qué te puedo ayudar hoy?
          </p>

          <div className="space-y-3">
            <button className="w-full bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-xl text-left hover:bg-slate-200 transition">
              ¿Cuánto debo declarar este mes?
            </button>
            <button className="w-full bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-xl text-left hover:bg-slate-200 transition">
              ¿Qué impuestos me tocan?
            </button>
            <input
              type="text"
              placeholder="Escribir consulta..."
              className="w-full bg-slate-100 text-slate-700 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quipu;