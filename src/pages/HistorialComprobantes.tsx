// src/pages/HistorialComprobantes.tsx
import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { Download } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale';

interface Comprobante {
  tipo: 'Boleta' | 'Factura';
  metodo: 'Manual' | 'Electrónica';
  fecha: Date;
  monto: number;
}

const data: Comprobante[] = [
  { tipo: 'Boleta', metodo: 'Manual', fecha: new Date('2025-04-29'), monto: -4596 },
  { tipo: 'Factura', metodo: 'Electrónica', fecha: new Date('2025-04-25'), monto: 14536.4 },
  { tipo: 'Factura', metodo: 'Manual', fecha: new Date('2025-04-20'), monto: -5369 },
  { tipo: 'Boleta', metodo: 'Manual', fecha: new Date('2025-04-19'), monto: 5249.2 },
  { tipo: 'Factura', metodo: 'Manual', fecha: new Date('2025-04-12'), monto: 12986.6 },
  { tipo: 'Boleta', metodo: 'Electrónica', fecha: new Date('2025-04-11'), monto: 5973.1 },
  { tipo: 'Boleta', metodo: 'Electrónica', fecha: new Date('2025-04-08'), monto: -2110 },
  { tipo: 'Factura', metodo: 'Electrónica', fecha: new Date('2025-04-05'), monto: -6097 },
];

const formatoFecha = (fecha: Date): string =>
  fecha.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const HistorialComprobantes: React.FC = () => {
  const [desde, setDesde] = useState(new Date('2025-04-01'));
  const [hasta, setHasta] = useState(new Date('2025-04-30'));
  const [filtro, setFiltro] = useState<'Ventas' | 'Compras' | 'Total'>('Total');

  const filtrado = data.filter((item) => {
    const fechaOk = item.fecha >= desde && item.fecha <= hasta;
    const tipoOk =
      filtro === 'Total'
        ? true
        : filtro === 'Ventas'
        ? item.monto > 0
        : item.monto < 0;
    return fechaOk && tipoOk;
  });

  return (
    <Layout title="Historial de comprobantes">
      {/* Filtros */}
      <div className="flex justify-center gap-2 flex-wrap mb-4">
        <DatePicker
          selected={desde}
          onChange={(date) => date && setDesde(date)}
          locale={es}
          dateFormat="dd/MM/yy"
          className="px-4 py-2 rounded-xl bg-white text-blue-800 font-bold shadow text-center w-[130px]"
        />
        <DatePicker
          selected={hasta}
          onChange={(date) => date && setHasta(date)}
          locale={es}
          dateFormat="dd/MM/yy"
          className="px-4 py-2 rounded-xl bg-white text-blue-800 font-bold shadow text-center w-[130px]"
        />
        {['Ventas', 'Compras', 'Total'].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltro(tipo as any)}
            className={`px-5 py-2 rounded-xl font-bold shadow transition ${
              filtro === tipo
                ? 'bg-blue-700 text-white'
                : 'bg-white text-blue-800'
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="space-y-4">
        {filtrado.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow flex justify-between items-center"
          >
            <div>
              <p className="text-orange-500 font-bold text-sm">{item.tipo}</p>
              <p className="text-blue-800 text-sm">{item.metodo}</p>
              <p className="text-blue-600 text-sm">{formatoFecha(item.fecha)}</p>
            </div>
            <div className="text-right">
              <p
                className={`font-bold text-lg ${
                  item.monto < 0 ? 'text-red-500' : 'text-blue-800'
                }`}
              >
                {item.monto < 0
                  ? `-S/. ${Math.abs(item.monto).toLocaleString('es-PE')}`
                  : `S/. ${item.monto.toLocaleString('es-PE')}`}
              </p>
              <button className="text-blue-800 hover:text-orange-500">
                <Download className="w-5 h-5 mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HistorialComprobantes;
