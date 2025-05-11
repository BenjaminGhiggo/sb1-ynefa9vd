import React, { useState, useRef } from 'react';
import Retroceder from './Retroceder';
import { X, Plus } from 'lucide-react';

interface Props {
  onVolver: () => void;
}

const SubirArchivoFacturaImagenDocumento: React.FC<Props> = ({ onVolver }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string | null>(null);
  const [archivos, setArchivos] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSeleccion = (tipo: string) => {
    setTipoSeleccionado(tipo);
  };

  const handleArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevosArchivos = Array.from(e.target.files || []);
    const permitidos = nuevosArchivos.filter(file =>
      ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)
    );
    setArchivos(prev => [...prev, ...permitidos]);
  };

  const eliminarArchivo = (index: number) => {
    setArchivos(prev => prev.filter((_, i) => i !== index));
  };

  const abrirInput = () => {
    inputRef.current?.click();
  };

  return (
    <div className="max-w-md mx-auto text-center pb-24">
      <h2 className="text-xl font-bold text-blue-800 mb-6">
        Subir archivo factura
      </h2>

      <div className="bg-white border border-blue-500 rounded-xl p-6">
        {!tipoSeleccionado ? (
          <>
            <div className="mb-6">
              <button onClick={() => handleSeleccion('imagen')} className="flex flex-col items-center w-full mb-6">
                <img src="/assets/icon-image.png" alt="Imagen" className="h-24 mx-auto" />
                <p className="text-blue-800 font-medium mt-2">Imagen</p>
              </button>
              <button onClick={() => handleSeleccion('documento')} className="flex flex-col items-center w-full">
                <img src="/assets/icon-pdf.png" alt="Documento" className="h-24 mx-auto" />
                <p className="text-blue-800 font-medium mt-2">Documento</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className="border border-blue-400 rounded-lg p-4 mb-4 cursor-pointer"
              onClick={abrirInput}
            >
              <div className="flex items-center justify-center gap-2 text-blue-800 font-bold">
                <Plus className="w-6 h-6" />
                Añade más archivos
              </div>
              <input
                type="file"
                ref={inputRef}
                className="hidden"
                accept=".png,.jpg,.jpeg,.pdf"
                multiple
                onChange={handleArchivo}
              />
            </div>

            <ul className="text-left text-blue-800 space-y-2 text-sm">
              {archivos.map((file, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-1">
                  <div>
                    <p>{file.name}</p>
                    <p className="text-xs">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
                  </div>
                  <button onClick={() => eliminarArchivo(index)}>
                    <X className="text-orange-500 w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>

            {archivos.length > 0 && (
              <button className="mt-6 bg-blue-900 text-white py-2 px-6 rounded-full font-semibold shadow">
                Guardar
              </button>
            )}
          </>
        )}
      </div>

      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default SubirArchivoFacturaImagenDocumento;
