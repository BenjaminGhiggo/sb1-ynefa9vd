import React, { useState } from 'react';
import Retroceder from './Retroceder';
import SubirArchivoBoletaImagenDocumento from './SubirArchivoBoletaImagenDocumento';

interface Props {
  onVolver: () => void;
}

const SubirArchivoBoleta: React.FC<Props> = ({ onVolver }) => {
  const [verOpciones, setVerOpciones] = useState(false);

  if (verOpciones) {
    return <SubirArchivoBoletaImagenDocumento onVolver={() => setVerOpciones(false)} />;
  }

  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-xl font-bold text-blue-800 mb-6">Subir archivo boleta</h2>

      <div
        className="bg-white border border-blue-500 rounded-xl p-8 shadow-md cursor-pointer"
        onClick={() => setVerOpciones(true)}
      >
        <img
          src="/assets/icon-upload.png"
          alt="Subir"
          className="mx-auto w-auto h-16 mb-4"
        />
        <p className="text-blue-800 font-medium">Click para subir archivo</p>
      </div>

      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default SubirArchivoBoleta;
