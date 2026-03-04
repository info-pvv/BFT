'use client';

import { useState } from 'react';

interface LeasingCalculatorProps {
  price: number;
}

export default function LeasingCalculator({ price }: LeasingCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [termMonths, setTermMonths] = useState(36);
  const [interestRate, setInterestRate] = useState(12);

  const downPayment = (price * downPaymentPercent) / 100;
  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);

  const totalPayment = downPayment + monthlyPayment * termMonths;
  const overpayment = totalPayment - price;

  function formatCurrency(value: number): string {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-2">Рассчитать лизинг</h2>
      <p className="text-zinc-400 text-sm mb-6">
        Стоимость техники: {formatCurrency(price)}
      </p>

      <div className="space-y-6">
        {/* Down Payment Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-zinc-300">Первоначальный взнос</label>
            <span className="text-orange-500 font-semibold">
              {downPaymentPercent}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between mt-1 text-xs text-zinc-500">
            <span>0%</span>
            <span>{formatCurrency(downPayment)}</span>
            <span>50%</span>
          </div>
        </div>

        {/* Term Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-zinc-300">Срок лизинга</label>
            <span className="text-orange-500 font-semibold">
              {termMonths} мес.
            </span>
          </div>
          <input
            type="range"
            min="12"
            max="60"
            step="12"
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between mt-1 text-xs text-zinc-500">
            <span>12 мес.</span>
            <span>36 мес.</span>
            <span>60 мес.</span>
          </div>
        </div>

        {/* Interest Rate Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-zinc-300">Процентная ставка</label>
            <span className="text-orange-500 font-semibold">
              {interestRate}%
            </span>
          </div>
          <input
            type="range"
            min="8"
            max="20"
            step="1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between mt-1 text-xs text-zinc-500">
            <span>8%</span>
            <span>14%</span>
            <span>20%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 pt-6 border-t border-zinc-800">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-zinc-500 mb-1">Ежемесячный платёж</p>
            <p className="text-xl font-bold text-orange-500">
              {formatCurrency(Math.abs(monthlyPayment))}
            </p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Переплата</p>
            <p className="text-xl font-bold text-white">
              {formatCurrency(Math.abs(overpayment))}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="flex justify-between">
            <span className="text-zinc-500">Итого:</span>
            <span className="text-white font-semibold">
              {formatCurrency(totalPayment)}
            </span>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded transition-colors">
        Оформить заявку на лизинг
      </button>
    </div>
  );
}
