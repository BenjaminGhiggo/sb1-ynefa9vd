import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import BoletaPreguntas from '../components/BoletaPreguntas';
import FacturaPreguntas from '../components/FacturaPreguntas';

const EmisionBoletaFactura: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const [mostrarBoleta, setMostrarBoleta] = useState(false);
  const [mostrarFactura, setMostrarFactura] = useState(false);

  const handleDocumentClick = (type: string) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  return (
    <Layout title="Emisor de boletas/facturas">
      {mostrarBoleta ? (
        <BoletaPreguntas onVolver={() => setMostrarBoleta(false)} />
      ) : mostrarFactura ? (
        <FacturaPreguntas onVolver={() => setMostrarFactura(false)} />
      ) : (
        <>
          {/* Tarjeta con imagen y título */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center mb-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold text-orange-500 mb-4">Boleta o Factura?</h2>
            <img
              src="/assets/avatar.png"
              alt="Kappi"
              className="mx-auto max-w-[120px] h-auto object-contain"
            />
          </div>

          {/* Botones de selección */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <button
              onClick={() => setMostrarBoleta(true)}
              className="bg-white border border-gray-300 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src="/assets/Boleta-icono.png"
                alt="Boleta"
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-base font-semibold text-orange-600">Boleta</span>
            </button>

            <button
              onClick={() => setMostrarFactura(true)}
              className="bg-white border border-gray-300 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src="/assets/Factura-icono.png"
                alt="Factura"
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-base font-semibold text-orange-600">Factura</span>
            </button>
          </div>
        </>
      )}

      {/* Modal de selección para Factura */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Has seleccionado: {selectedType}
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default EmisionBoletaFactura;