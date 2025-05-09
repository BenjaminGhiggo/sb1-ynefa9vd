import React from 'react';
import Layout from '../layouts/Layout';

const AsesoriaGenai: React.FC = () => {
  return (
    <Layout title="Asesoría por GenAI">
      <div className="max-w-sm mx-auto py-4 space-y-8">
        {/* Primera sección */}
        <div className="text-center">
          <p className="text-lg font-bold text-blue-900 mb-4">
            ¿Ya sabes cómo declarar tus impuestos con nuestra app?
          </p>
          <img
            src="/assets/video-declaracion.png"
            alt="Video declaración"
            className="rounded-md w-full object-contain shadow"
          />
        </div>

        {/* Segunda sección */}
        <div className="text-center">
          <p className="text-lg font-bold text-blue-900 mb-4">
            Como crear tu usuario en la SUNAT
          </p>
          <img
            src="/assets/video-sunat.png"
            alt="Video SUNAT"
            className="rounded-md w-full object-contain shadow"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AsesoriaGenai;
