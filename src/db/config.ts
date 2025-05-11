// src/db/config.ts
export default {
  mongo: {
    uri: import.meta.env.VITE_MONGO_URI || 'mongodb://usuario:clave@localhost:27017/quipu',
    dbName: import.meta.env.VITE_MONGO_DB_NAME || 'quipu'
  }
};
