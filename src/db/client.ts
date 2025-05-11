import config from './config';
import path from 'path';
import fs from 'fs/promises';

type CollectionName =
  | 'principal'
  | 'emisionBoletaFactura'
  | 'historialComprobantes'
  | 'misMetricas'
  | 'alertas'
  | 'asesorias'
  | 'declaracionDelMes'
  | 'suscripcion'
  | 'quipu'
  | 'preguntasFrecuentes';

const base = path.join(__dirname, 'collections');

export const connect = async () => {
  console.log(`🔌 Conectando a MongoDB simulado en ${config.mongo.uri}/${config.mongo.dbName}`);
  return {
    collection: async (name: CollectionName) => {
      const file = path.join(base, `${collectionFilename(name)}`);
      const txt = await fs.readFile(file, 'utf8');
      const data = JSON.parse(txt);
      return {
        find: async () => data,
        findOne: async (query: any) => data.find((d: any) => d.id === query.id),
        insertOne: async (doc: any) => { data.push(doc); await fs.writeFile(file, JSON.stringify(data, null,2)); return { insertedId: doc.id } }
        // podrías añadir updateOne, deleteOne, etc.
      };
    }
  };
};

function collectionFilename(name: CollectionName) {
  switch (name) {
    case 'principal':             return '1_principal.json';
    case 'emisionBoletaFactura':  return '2_emisionBoletaFactura.json';
    case 'historialComprobantes': return '3_historialComprobantes.json';
    case 'misMetricas':           return '4_misMetricas.json';
    case 'alertas':               return '5_alertas.json';
    case 'asesorias':             return '6_asesorias.json';
    case 'declaracionDelMes':     return '7_declaracionDelMes.json';
    case 'suscripcion':           return '8_suscripcion.json';
    case 'quipu':                 return '9_quipu.json';
    case 'preguntasFrecuentes':   return '10_preguntasFrecuentes.json';
  }
}
