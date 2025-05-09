import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { Download } from 'lucide-react';

const mockData = [
  { tipo: 'Factura', metodo: 'Manual', fecha: '21 abril. 2025', monto: -400.0 },
  { tipo: 'Factura', metodo: 'Electrónica', fecha: '20 abril. 2025', monto: 830.0 },
  { tipo: 'Factura', metodo: 'Electrónica', fecha: '20 abril. 2025', monto: -50.0 },
  { tipo: 'Boleta', metodo: 'Manual', fecha: '19 abril. 2025', monto: 70.0 },
  { tipo: 'Factura', metodo: 'Manual', fecha: '12 abril. 2025', monto: 90.0 },
  { tipo: 'Boleta', metodo: 'Electrónica', fecha: '11 abril. 2025', monto: 250.0 },
  { tipo: 'Factura', metodo: 'Electrónica', fecha: '20 abril. 2025', monto: -70.0 }
];

const HistorialComprobantes: React.FC = () => {
  const [filtro, setFiltro] = useState<'Ventas' | 'Compras' | 'Total'>('Compras');

  return (
    <Layout title="Historial de comprobantes">
      {/* Filtros */}
      <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-start sm:gap-4 mb-4 max-w-xl mx-auto">
        <select className="px-4 py-2 rounded-xl bg-white shadow font-bold text-slate-800">
          <option>Desde</option>
        </select>
        <select className="px-4 py-2 rounded-xl bg-white shadow font-bold text-slate-800">
          <option>Hasta</option>
        </select>
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {['Ventas', 'Compras', 'Total'].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltro(tipo as 'Ventas' | 'Compras' | 'Total')}
            className={`px-5 py-2 rounded-xl shadow font-bold transition ${
              filtro === tipo ? 'bg-white text-blue-800' : 'bg-white/40 text-blue-900'
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista de comprobantes */}
      <div className="space-y-4">
        {mockData.map((item, i) => (
          <div
            key={i}
            className={`flex justify-between items-center bg-white rounded-2xl px-5 py-3 shadow ${
              item.monto < 0 ? 'bg-red-50' : 'bg-white'
            }`}
          >
            <div>
              <p className="text-orange-500 font-bold text-sm">{item.tipo}</p>
              <p className="text-slate-600 text-sm">{item.metodo}</p>
              <p className="text-slate-500 text-sm">{item.fecha}</p>
            </div>
            <div className="text-right">
              <p className={`font-bold text-lg ${
                item.monto < 0 ? 'text-red-500' : 'text-blue-800'
              }`}>
                {item.monto < 0 ? `-S/. ${Math.abs(item.monto).toFixed(2)}` : `S/. ${item.monto.toFixed(2)}`}
              </p>
              <button className="text-slate-500 hover:text-blue-700">
                <Download className="w-5 h-5 mt-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HistorialComprobantes;
