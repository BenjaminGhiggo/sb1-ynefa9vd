import React, { useState } from 'react';
import Layout from '../layouts/Layout';

interface Props {
  onConectar: () => void;
}

const IniciarSesionSunat: React.FC<Props> = ({ onConectar }) => {
  const [ruc, setRuc] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  return (
    <Layout title="Emisor de boletas/facturas">
      <div className="max-w-md mx-auto bg-white p-4 rounded-xl border-2 border-blue-700 text-center mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Iniciar sesión con</h2>
        <h1 className="text-3xl font-extrabold text-blue-900 mb-4">SUNAT</h1>
        <img
          src="/assets/avatar.png"
          alt="Kappi"
          className="mx-auto w-24 h-24 object-contain"
        />
      </div>

      <form className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <label className="block font-bold text-blue-900">RUC</label>
          <input
            value={ruc}
            onChange={(e) => setRuc(e.target.value)}
            placeholder="Completar..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-bold text-blue-900">Usuario SOL:</label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Completar..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-bold text-blue-900">Clave SOL:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Completar..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="button"
          onClick={onConectar}
          className="block bg-green-500 text-white text-center font-bold py-3 rounded-full w-full mt-6"
        >
          CONECTAR CON SUNAT
        </button>
      </form>
    </Layout>
  );
};

export default IniciarSesionSunat;
