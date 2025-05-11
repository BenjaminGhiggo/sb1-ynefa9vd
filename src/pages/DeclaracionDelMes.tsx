import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeclaracionDelMes: React.FC = () => {
  const [paso, setPaso] = useState(1);
  const navigate = useNavigate();

  const siguiente = () => setPaso((prev) => prev + 1);
  const atras = () => {
  if (paso > 1) {
    setPaso(paso - 1);
  } else {
    navigate(-1);
  }
  };


  return (
    <Layout title="Declaración del Mes">
      <div className="relative max-w-md mx-auto p-4 space-y-4">
        {/* Botón retroceder */}
        <button
          onClick={atras}
          className="absolute bottom-4 right-4 bg-yellow-400 border-4 border-blue-900 text-white rounded-full p-3 shadow-md"
        >
          <ArrowLeft />
        </button>

        {paso === 1 && (
          <>
            <h2 className="text-blue-800 font-bold text-xl">Declara tus impuestos</h2>
            <div className="bg-white rounded-xl p-4 space-y-4">
              <h3 className="font-bold text-blue-800 text-lg">Impuesto general a las ventas</h3>
              {['IGV - Cuenta propia', 'IGV - Cuenta propia tasa 18%', 'IGV - Cuenta propia tasa Especial 10%', 'Con convenio de estabilidad'].map((text, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="radio" name="igv" className="accent-blue-600" defaultChecked={i === 1} />
                  <span>{text}</span>
                </label>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4 space-y-2">
              <h3 className="font-bold text-blue-800 text-lg">Impuesto a la Renta/Régimen</h3>
              {['Régimen General', 'Régimen Especial', 'Régimen Tributario MYPE', 'Régimen Amazonía', 'Convenio Estabilidad - Pagos a cuenta', 'Régimen Agrario - Ley 31110', 'Acuicultura - Ley 31666'].map((text, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="radio" name="renta" className="accent-blue-600" defaultChecked={text.includes('MYPE')} />
                  <span>{text}</span>
                </label>
              ))}
            </div>

            <button onClick={siguiente} className="bg-green-500 text-white px-6 py-2 rounded-full w-full font-bold text-lg">Siguiente</button>
          </>
        )}

        {paso === 2 && (
          <>
            <div className="bg-white rounded-xl p-4 space-y-3">
              <h3 className="font-bold text-blue-800 text-lg">Ventas</h3>
              <p>Venta Neta Gravada: <strong>S/ 32,835</strong></p>
              <p>IGV (18%): <strong>S/ 5,910.3</strong></p>
              <p>Total Ventas: <strong>S/ 38,745.3</strong></p>
            </div>
            <div className="bg-white rounded-xl p-4 space-y-3">
              <h3 className="font-bold text-blue-800 text-lg">Compras</h3>
              <p>Compra Neta Gravada: <strong>S/ 15,400</strong></p>
              <p>IGV crédito fiscal: <strong>S/ 2,772</strong></p>
              <p>Total Compras: <strong>S/ 18,172</strong></p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-blue-800 text-lg">Inconsistencias</h3>
              <ul className="text-sm text-red-500 list-disc pl-4">
                <li>Boleta B001-1234 no fue informada a SUNAT</li>
                <li>Factura F001-3456 fue rechazada por RUC inválido</li>
              </ul>
            </div>
            <button onClick={siguiente} className="bg-green-500 text-white px-6 py-2 rounded-full w-full font-bold text-lg">Siguiente</button>
          </>
        )}

        {paso === 3 && (
          <>
            <div className="bg-white rounded-xl p-4 space-y-3">
              <h3 className="font-bold text-blue-800 text-lg">Pago de impuesto</h3>
              <p>IGV por pagar (Ventas - Compras): <strong>S/ 3,138.3</strong></p>
              <p>Otros tributos (ISRL): <strong>S/ 492.525</strong></p>
              <p>Total a pagar: <strong>S/ 3,630.825</strong></p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-blue-800 text-lg">Opciones de pago</h3>
              <div className="space-y-2">
                <button onClick={siguiente} className="w-full text-left border-b py-2">💰 Efectivo en puntos de pago</button>
                <button onClick={siguiente} className="w-full text-left py-2">📱 Transferencia electrónica</button>
              </div>
            </div>
          </>
        )}

        {paso === 4 && (
          <>
            <div className="bg-yellow-100 rounded-xl p-6 text-center space-y-4">
              <img src="/assets/yape.png" alt="Yape" className="w-12 h-auto mx-auto" />
              <h3 className="font-bold text-blue-800 text-lg">Pagar con Yape</h3>
              <input placeholder="Ingrese tu número Yape" className="w-full border rounded px-3 py-2" />
              <div className="flex gap-2 justify-center">
                {Array(6).fill(0).map((_, i) => (
                  <input key={i} maxLength={1} className="w-10 h-10 border rounded text-center" />
                ))}
              </div>
              <button className="bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full">
                Yapear S/ 300.00
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default DeclaracionDelMes;
