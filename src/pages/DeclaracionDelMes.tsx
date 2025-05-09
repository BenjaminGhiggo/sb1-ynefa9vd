import React from 'react';
import Layout from '../layouts/Layout';
import { Download } from 'lucide-react';

const declaraciones = [
  { mes: 'Mayo', monto: 256.84, tipo: 'declarar' },
  { mes: 'Abril', monto: 1024.54, tipo: 'descargar' },
  { mes: 'Marzo', monto: 1024.54, tipo: 'descargar' },
];

const DeclaracionDelMes: React.FC = () => {
  return (
    <Layout title="Declaración del Mes">
      <div className="max-w-sm mx-auto py-6 space-y-6">
        {declaraciones.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md px-6 py-4 text-center">
            <h3 className="text-lg font-bold text-slate-800 mb-1">{item.mes}</h3>
            <p className="text-2xl font-bold text-blue-900 mb-4">S/ {item.monto.toFixed(2)}</p>

            {item.tipo === 'declarar' ? (
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-semibold">
                Declarar
              </button>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-semibold">
                  Descargar
                </button>
                <Download className="text-blue-900 w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DeclaracionDelMes;
