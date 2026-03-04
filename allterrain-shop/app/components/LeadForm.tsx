'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface LeadFormData {
  name: string;
  phone: string;
  vehicle: string;
  comment?: string;
}

interface LeadFormProps {
  vehicleName?: string;
  endpoint?: string;
}

// Простая валидация российского номера телефона
function validatePhone(phone: string): boolean {
  // Удаляем все нецифровые символы
  const cleaned = phone.replace(/\D/g, '');
  // Проверяем длину (11 цифр для РФ, начиная с 7 или 8)
  return cleaned.length === 11 && (cleaned.startsWith('7') || cleaned.startsWith('8'));
}

// Форматирование номера телефона
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

export default function LeadForm({ vehicleName = '', endpoint = '' }: LeadFormProps) {
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
      comment: '',
    },
  });

  const onSubmit: SubmitHandler<LeadFormData> = async (data) => {
    // Форматируем телефон перед отправкой
    const formattedData = {
      ...data,
      phone: data.phone.replace(/\D/g, ''),
    };

    // TODO: Замените на ваш endpoint (Formspree, EmailJS или свой API)
    const API_ENDPOINT = endpoint || 'YOUR_API_ENDPOINT_HERE';

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
      // В реальном приложении здесь нужно показать ошибку пользователю
    }
  };

  // Следим за полем телефона для форматирования
  const phoneValue = watch('phone');

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-2">Оставить заявку</h2>
      <p className="text-zinc-400 text-sm mb-6">
        Заполните форму и мы свяжемся с вами в ближайшее время
      </p>

      {isSubmitSuccessful ? (
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
            Менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Имя */}
          <div>
            <input
              type="text"
              {...register('name', {
                required: 'Введите имя',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа',
                },
              })}
              placeholder="Ваше имя"
              className={`w-full bg-zinc-800 border rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors ${
                errors.name ? 'border-red-500' : 'border-zinc-700'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Телефон */}
          <div>
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
              className={`w-full bg-zinc-800 border rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors ${
                errors.phone ? 'border-red-500' : 'border-zinc-700'
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Модель вездехода */}
          <div>
            <input
              type="text"
              {...register('vehicle', {
                required: 'Выберите модель',
              })}
              placeholder="Модель вездехода"
              readOnly={!!vehicleName}
              className={`w-full bg-zinc-800 border rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors ${
                errors.vehicle ? 'border-red-500' : 'border-zinc-700'
              } ${vehicleName ? 'opacity-75 cursor-not-allowed' : ''}`}
            />
            {errors.vehicle && (
              <p className="text-red-500 text-sm mt-1">{errors.vehicle.message}</p>
            )}
          </div>

          {/* Комментарий */}
          <div>
            <textarea
              {...register('comment')}
              placeholder="Комментарий (необязательно)"
              rows={3}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded transition-colors"
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

          <p className="text-zinc-500 text-xs text-center">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="/privacy" className="text-orange-500 hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
