// src/pages/Alertas.tsx
import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { Bell, CalendarDays, CheckSquare, Clock3, Repeat2, ChevronRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Alertas: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [repeatOption, setRepeatOption] = useState('1 vez por semana');
  const [selectedHour, setSelectedHour] = useState('08:00 p.m.');

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <Layout title="Alertas">
      <div className="max-w-md mx-auto py-6 space-y-8">
        {/* NOTIFICACIONES */}
        <section>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Notificaciones</h3>

          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Bell className="text-orange-500 w-6 h-6" />
              <div>
                <p className="text-blue-900 font-bold">Sube tus boletas y Facturas</p>
                <p className="text-blue-800 text-sm">1 vez por semana, 08 p.m.</p>
              </div>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-orange-500 w-6 h-6" />
              <div>
                <p className="text-blue-900 font-bold">Declara tus impuestos</p>
                <p className="text-blue-800 text-sm">5 may. 2025</p>
              </div>
            </div>
            <ChevronRight />
          </div>
        </section>

        {/* RECORDATORIOS */}
        <section>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Recordatorios</h3>

          <div
            className="bg-white p-4 rounded-2xl shadow flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="flex items-center gap-3">
              <CheckSquare className="text-blue-900 w-6 h-6" />
              <div>
                <p className="text-blue-900 font-bold">Pagar cuota mensual</p>
                <p className="text-blue-800 text-sm">1 may. 2025</p>
              </div>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-orange-500 w-6 h-6" />
              <div>
                <p className="text-blue-900 font-bold">Preparar tu inventario</p>
                <p className="text-blue-800 text-sm">30 abr. 2025</p>
              </div>
            </div>
            <ChevronRight />
          </div>
        </section>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] rounded-2xl p-6 space-y-4 max-w-sm">
            <div className="space-y-2">
              <label className="block font-semibold text-lg text-center">Selecciona la fecha</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                calendarClassName="!border-none"
              />
            </div>

            <div className="flex items-center gap-2 border-t pt-4 text-blue-800 font-medium">
              <Clock3 className="w-5 h-5" />
              <span>{selectedHour}</span>
            </div>

            <div className="flex items-center gap-2 text-blue-800 font-medium">
              <Repeat2 className="w-5 h-5" />
              <span>{repeatOption}</span>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <button
                className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-full"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-orange-600 text-white font-bold px-4 py-2 rounded-full"
                onClick={handleSave}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Alertas;
