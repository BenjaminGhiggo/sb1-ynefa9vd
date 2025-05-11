import React from 'react';
import Retroceder from './Retroceder';
import { X, Plus } from 'lucide-react';

interface Props {
  archivos: File[];
  onAddMore: () => void;
  onRemove: (idx: number) => void;
  onGuardar: () => void;
  onVolver: () => void;
}

const EscanearFacturaReview: React.FC<Props> = ({
  archivos,
  onAddMore,
  onRemove,
  onGuardar,
  onVolver,
}) => (
  <div className="max-w-md mx-auto text-center pb-24">
    <h2 className="text-xl font-bold text-blue-800 mb-6">Escanear Factura</h2>

    <div className="bg-white border border-blue-500 rounded-xl p-6 text-left">
      {/* Botón para añadir más */}
      <button
        onClick={onAddMore}
        className="flex items-center gap-2 mb-4 text-blue-800 font-bold"
      >
        <Plus className="w-6 h-6" />
        Escanea más archivos
      </button>
      <hr className="border-blue-200 mb-4" />

      {/* Lista de archivos escaneados */}
      <ul className="space-y-3">
        {archivos.map((file, i) => (
          <li key={i} className="flex justify-between items-center">
            <div>
              <p className="text-blue-800">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)}MB
              </p>
            </div>
            <button onClick={() => onRemove(i)}>
              <X className="w-5 h-5 text-orange-500" />
            </button>
          </li>
        ))}
      </ul>

      {/* Botón Guardar */}
      {archivos.length > 0 && (
        <button
          onClick={onGuardar}
          className="mt-6 bg-blue-900 text-white py-2 px-6 rounded-full font-semibold shadow"
        >
          Guardar
        </button>
      )}
    </div>

    <Retroceder onClick={onVolver} />
  </div>
);

export default EscanearFacturaReview;
