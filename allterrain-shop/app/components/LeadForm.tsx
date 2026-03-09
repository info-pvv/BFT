'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LeadFormData {
  name: string;
  phone: string;
  vehicle: string;
  options: string[];
  comment?: string;
}

interface AdditionalOption {
  id: string;
  name: string;
  price: number;
}

interface LeadFormProps {
  vehicleName?: string;
  vehicleSlug?: string;
  additionalOptions?: AdditionalOption[];
  endpoint?: string;
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 11 && (cleaned.startsWith('7') || cleaned.startsWith('8'));
}

function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  
  if (!match) return '';
  
  const [, first, part1, part2, part3, part4] = match;
  
  if (!first) return '';
  
  let result = '+7';
  if (part1) result += ` (${part1}`;
  if (part2) result += `) ${part2}`;
  if (part3) result += `-${part3}`;
  if (part4) result += `-${part4}`;
  
  return result;
}

export default function LeadForm({ 
  vehicleName = '', 
  vehicleSlug = '',
  additionalOptions = [],
  endpoint = '' 
}: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    watch,
    reset,
  } = useForm<LeadFormData>({
    defaultValues: {
      name: '',
      phone: '',
      vehicle: vehicleName,
      options: [],
      comment: '',
    },
  });

  const onSubmit: SubmitHandler<LeadFormData> = async (data) => {
    const formattedData = {
      ...data,
      phone: data.phone.replace(/\D/g, ''),
      timestamp: new Date().toISOString(),
    };

    const API_ENDPOINT = endpoint || 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      reset();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  const watchedOptions = watch('options') || [];

  const handleOptionChange = (optionId: string, checked: boolean) => {
    const currentOptions = watch('options') || [];
    if (checked) {
      setValue('options', [...currentOptions, optionId]);
    } else {
      setValue('options', currentOptions.filter((id) => id !== optionId));
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="bg-green-900/30 border border-green-800 rounded-xl p-8 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
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
        <p className="text-slate-400">
          Менеджер свяжется с вами в ближайшее время для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-2">Оставить заявку</h2>
      <p className="text-slate-400 text-sm mb-6">
        Заполните форму и мы свяжемся с вами в ближайшее время
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Имя */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Ваше имя *
          </label>
          <input
            type="text"
            {...register('name', {
              required: 'Введите имя',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
            })}
            placeholder="Иван Иванов"
            className={`w-full bg-slate-700 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b35] transition-colors ${
              errors.name ? 'border-red-500' : 'border-slate-600'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Телефон */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Введите номер телефона',
              validate: {
                isValid: (value) =>
                  validatePhone(value) || 'Введите корректный номер (например, +7 (999) 123-45-67)',
              },
              onChange: (e) => {
                const formatted = formatPhone(e.target.value);
                setValue('phone', formatted, { shouldValidate: true });
              },
            })}
            placeholder="+7 (___) ___-__-__"
            maxLength={18}
            className={`w-full bg-slate-700 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b35] transition-colors ${
              errors.phone ? 'border-red-500' : 'border-slate-600'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Выбор комплектации */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Комплектация *
          </label>
          <select
            {...register('vehicle', {
              required: 'Выберите комплектацию',
            })}
            className={`w-full bg-slate-700 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff6b35] transition-colors ${
              errors.vehicle ? 'border-red-500' : 'border-slate-600'
            }`}
          >
            <option value="">Выберите комплектацию</option>
            <option value="Борей — Стандарт">Стандарт (520 000 ₽)</option>
            <option value="Борей — Оптима">Оптима (540 000 ₽)</option>
            <option value="Борей — Профи">Профи (590 000 ₽)</option>
          </select>
          {errors.vehicle && (
            <p className="text-red-500 text-sm mt-1">{errors.vehicle.message}</p>
          )}
        </div>

        {/* Дополнительные опции */}
        {additionalOptions.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Дополнительные опции
            </label>
            <div className="space-y-2">
              {additionalOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={watchedOptions.includes(option.id)}
                    onChange={(e) => handleOptionChange(option.id, e.target.checked)}
                    className="w-4 h-4 text-[#ff6b35] bg-slate-600 border-slate-500 rounded focus:ring-[#ff6b35]"
                  />
                  <span className="ml-3 text-slate-300 flex-1">{option.name}</span>
                  <span className="text-[#ff6b35] font-semibold text-sm">
                    +{new Intl.NumberFormat('ru-RU').format(option.price)} ₽
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Комментарий */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Комментарий
          </label>
          <textarea
            {...register('comment')}
            placeholder="Пожелания, вопросы, удобное время для звонка..."
            rows={3}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
          />
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#ff6b35] hover:bg-[#e55a28] disabled:bg-[#ff6b35]/50 disabled:cursor-not-allowed !text-white font-semibold py-4 px-4 rounded-lg transition-colors"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Отправка...
            </span>
          ) : (
            'Отправить заявку'
          )}
        </button>

        <p className="text-slate-500 text-xs text-center">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <Link href="/privacy" className="text-[#ff6b35] hover:underline">
            политикой конфиденциальности
          </Link>
        </p>
      </form>
    </div>
  );
}
