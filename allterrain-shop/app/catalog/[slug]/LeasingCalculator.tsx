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
    <div id="leasing" className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-2">Рассчитать лизинг</h2>
      <p className="text-slate-400 text-sm mb-6">
        Стоимость техники: {formatCurrency(price)}
      </p>

      <div className="space-y-6">
        {/* Down Payment Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-300 text-sm">Первоначальный взнос</label>
            <span className="text-[#ff6b35] font-semibold">{downPaymentPercent}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff6b35]"
          />
          <div className="flex justify-between mt-1 text-xs text-slate-500">
            <span>10%</span>
            <span className="text-slate-300">{formatCurrency(downPayment)}</span>
            <span>50%</span>
          </div>
        </div>

        {/* Term Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-300 text-sm">Срок лизинга</label>
            <span className="text-[#ff6b35] font-semibold">{termMonths} мес.</span>
          </div>
          <input
            type="range"
            min="12"
            max="60"
            step="12"
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff6b35]"
          />
          <div className="flex justify-between mt-1 text-xs text-slate-500">
            <span>12 мес.</span>
            <span>36 мес.</span>
            <span>60 мес.</span>
          </div>
        </div>

        {/* Interest Rate Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-300 text-sm">Процентная ставка</label>
            <span className="text-[#ff6b35] font-semibold">{interestRate}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="15"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff6b35]"
          />
          <div className="flex justify-between mt-1 text-xs text-slate-500">
            <span>10%</span>
            <span>12.5%</span>
            <span>15%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-500 mb-1">Ежемесячный платёж</p>
            <p className="text-xl font-bold text-[#ff6b35]">
              {formatCurrency(Math.abs(monthlyPayment))}
            </p>
          </div>
          <div>
            <p className="text-slate-500 mb-1">Переплата</p>
            <p className="text-xl font-bold text-white">
              {formatCurrency(Math.abs(overpayment))}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex justify-between">
            <span className="text-slate-500">Итого:</span>
            <span className="text-white font-semibold">
              {formatCurrency(totalPayment)}
            </span>
          </div>
        </div>
      </div>

      <a
        href="#form"
        className="block w-full mt-6 bg-[#ff6b35] hover:bg-[#e55a28] !text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors"
      >
        Оформить заявку на лизинг
      </a>
    </div>
  );
}
