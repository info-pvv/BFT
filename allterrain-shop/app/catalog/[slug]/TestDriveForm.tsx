'use client';

import { useState, FormEvent } from 'react';

interface TestDriveFormProps {
  vehicleName: string;
}

export default function TestDriveForm({ vehicleName }: TestDriveFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log('Test drive request:', { vehicleName, ...formData });
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  if (submitted) {
    return (
      <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-zinc-400">
          Менеджер свяжется с вами в ближайшее время для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-2">Заказать тест-драйв</h2>
      <p className="text-zinc-400 text-sm mb-6">
        Оставьте заявку и мы пригласим вас на тест-драйв {vehicleName}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Комментарий (необязательно)"
            rows={3}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded transition-colors"
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
}
