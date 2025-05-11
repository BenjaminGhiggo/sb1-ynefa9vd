import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { ArrowUp, User } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const Quipu: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sugerencias = [
    '¿Cuánto debo declarar este mes?',
    '¿Qué impuestos me tocan?',
    'Cuánto de impuesto debo pagar con régimen MYPE',
  ];

  const enviarConsulta = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Respuesta de la IA' }]);
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enviarConsulta(input);
  };

  return (
    <Layout title="Asistente IA">
      <div className="flex flex-col items-center max-w-md mx-auto py-4">
        {/* Avatar */}
        <img src="/assets/avatar.png" alt="Kappi" className="w-24 mb-2" />

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-md p-4 w-full">
          {/* Intro y sugerencias */}
          {messages.length === 0 && (
            <>
              <p className="text-xl font-bold text-blue-800 mb-4">
                ¡Hola! Soy Kappi, tu asistente para emprendedores. ¿En qué te puedo ayudar hoy?
              </p>

              <div className="space-y-3 mb-4">
                {sugerencias.map((texto, index) => (
                  <button
                    key={index}
                    onClick={() => enviarConsulta(texto)}
                    className="w-full bg-gray-100 text-gray-700 font-semibold px-4 py-3 rounded-xl text-left hover:bg-gray-200 transition"
                  >
                    {texto}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Mensajes del chat */}
          {messages.map((msg, i) => (
            <div key={i} className="flex items-start gap-2 mb-3">
              {msg.role === 'user' ? (
                <div className="flex items-center gap-2 ml-auto">
                  <div className="bg-yellow-200 text-blue-900 font-bold px-4 py-2 rounded-xl">
                    {msg.text}
                  </div>
                  <User className="w-5 h-5 text-blue-700" />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <img src="/assets/avatar.png" className="w-7 h-7" />
                  <div className="bg-green-400 text-blue-900 font-bold px-4 py-2 rounded-xl">
                    {msg.text}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Cargando respuesta */}
          {loading && (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-4 border-gray-300 border-t-black" />
            </div>
          )}

          {/* Input para nueva consulta */}
          <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribir consulta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl bg-gray-100 text-gray-800 outline-none"
            />
            <button type="submit" className="bg-blue-800 text-white p-2 rounded-full">
              <ArrowUp className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Quipu;
