// src/components/EscanearBoleta.tsx
import React, { useEffect, useRef, useState } from 'react';
import Retroceder from './Retroceder';
import EscanearBoletaReview from './EscanearBoletaReview';

interface Props {
  onVolver: () => void;
}

const EscanearBoleta: React.FC<Props> = ({ onVolver }) => {
  const [phase, setPhase] = useState<'scan' | 'review'>('scan');
  const [archivos, setArchivos] = useState<File[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Inicializa la cámara
  useEffect(() => {
    if (phase === 'scan') {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch(console.error);
    }
    // al desmontar o cambiar de fase, detenemos la cámara
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(t => t.stop());
    };
  }, [phase]);

  // Capturar imagen actual del video
  const capture = () => {
    if (!canvasRef.current || !videoRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    const video = videoRef.current;
    canvasRef.current.width = video.videoWidth;
    canvasRef.current.height = video.videoHeight;
    ctx?.drawImage(video, 0, 0);
    canvasRef.current.toBlob(blob => {
      if (blob) {
        const file = new File([blob], `Boleta_${Date.now()}.jpg`, {
          type: 'image/jpeg',
        });
        setArchivos(prev => [...prev, file]);
        setPhase('review');
      }
    }, 'image/jpeg');
  };

  // Añadir más escaneos (volvemos a fase scan)
  const handleAddMore = () => setPhase('scan');

  // Quitar un archivo de la lista
  const handleRemove = (idx: number) =>
    setArchivos(prev => prev.filter((_, i) => i !== idx));

  // Guardar (aquí pones tu lógica real)
  const handleGuardar = () => {
    console.log('Archivos a guardar:', archivos);
    onVolver(); // después de guardar volvemos
  };

  if (phase === 'review') {
    return (
      <EscanearBoletaReview
        archivos={archivos}
        onAddMore={handleAddMore}
        onRemove={handleRemove}
        onGuardar={handleGuardar}
        onVolver={onVolver}
      />
    );
  }

  // Phase = 'scan'
  return (
    <div className="relative w-full h-screen bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
      <canvas ref={canvasRef} className="hidden" />

      {/* Overlay de esquinas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="border-blue-600 border-4 rounded-tl-lg absolute top-4 left-4 w-12 h-12" />
        <div className="border-blue-600 border-4 rounded-tr-lg absolute top-4 right-4 w-12 h-12" />
        <div className="border-blue-600 border-4 rounded-br-lg absolute bottom-4 right-4 w-12 h-12" />
        <div className="border-blue-600 border-4 rounded-bl-lg absolute bottom-4 left-4 w-12 h-12" />
      </div>

      {/* Botón captura */}
      <button
        onClick={capture}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg"
      />

      <Retroceder onClick={onVolver} />
    </div>
  );
};

export default EscanearBoleta;
