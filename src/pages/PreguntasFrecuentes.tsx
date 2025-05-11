import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../layouts/Layout';

interface QA {
  question: string;
  answer: string;
}

const faqs: QA[] = [
  {
    question: '¿Cuándo debo declarar mis impuestos?',
    answer:
      'Cada mes, según el cronograma de SUNAT y tu último dígito de RUC.',
  },
  {
    question: '¿Qué debo declarar si solo emito boletas?',
    answer:
      'Debes declarar tu IGV e Impuesto a la Renta según tu régimen.',
  },
  {
    question: '¿Cómo sé cuánto debo pagar?',
    answer:
      'Quipu.ia calcula automáticamente según tus comprobantes.',
  },
  {
    question: '¿Qué pasa si no declaro a tiempo?',
    answer:
      'SUNAT puede aplicar multas y generar intereses.',
  },
  {
    question: '¿Puedo declarar si no tuve ingresos este mes?',
    answer:
      'Sí. Se debe presentar una declaración en “cero”.',
  },
  {
    question: '¿Cómo pago mis impuestos?',
    answer:
      'Desde la app Quipu.ia o generando un código para pagar en bancos autorizados.',
  },
  {
    question: '¿Qué régimen tributario tengo?',
    answer:
      'Quipu.ia te ayuda a identificarlo automáticamente con tus datos.',
  },
  {
    question: '¿Qué documentos necesito para declarar?',
    answer:
      'Solo tus RUC, clave SOL y tus comprobantes del mes (boletas/facturas).',
  },
];

const PreguntasFrecuentes: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [consulta, setConsulta] = useState('');

  return (
    <Layout title="Preguntas frecuentes">
      {/* Contenedor del acordeón */}
      <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b last:border-none">
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : idx)
                }
                className="w-full flex justify-between items-center py-3"
              >
                <span className="text-blue-900 font-semibold text-base text-left">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-500" />
                )}
              </button>
              {isOpen && (
                <p className="text-blue-800 text-sm pb-3">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Campo de consulta libre */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex items-center bg-white rounded-xl shadow-md p-3">
          <input
            type="text"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            placeholder="Escribir consulta..."
            className="flex-1 border-none focus:ring-0 text-gray-500 placeholder-gray-400"
          />
          <button className="p-2 bg-blue-900 rounded-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
</button>

        </div>
      </div>
    </Layout>
  );
};

export default PreguntasFrecuentes;
