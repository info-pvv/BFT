import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Борей | TERRAFORGE',
  description: 'Политика обработки персональных данных компании TERRAFORGE',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Политика конфиденциальности
      </h1>

      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">1. Общие положения</h2>
            <p className="text-zinc-300 mb-4">
              Настоящая политика обработки персональных данных составлена в соответствии 
              с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» 
              и определяет порядок обработки персональных данных и меры по обеспечению 
              безопасности персональных данных, предпринимаемые ООО «ТЕРРАФОРГ» (далее — Оператор).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">
              2. Цели обработки данных
            </h2>
            <p className="text-zinc-300 mb-4">
              Оператор обрабатывает персональные данные Пользователя только в случае их 
              заполнения и/или отправки Пользователем самостоятельно через специальные формы, 
              расположенные на сайте. Заполняя соответствующие формы, Пользователь выражает 
              своё согласие с данной Политикой.
            </p>
            <p className="text-zinc-300">
              Оператор обрабатывает персональные данные в следующих целях:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
              <li>Связь с Пользователем, включая направление уведомлений</li>
              <li>Обработка заявок на тест-драйв и консультацию</li>
              <li>Предоставление доступа Пользователю к сервисам сайта</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">
              3. Обрабатываемые данные
            </h2>
            <p className="text-zinc-300 mb-4">
              Оператор может обрабатывать следующие персональные данные Пользователя:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Другие данные, предоставленные Пользователем</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">
              4. Безопасность данных
            </h2>
            <p className="text-zinc-300 mb-4">
              Оператор принимает необходимые организационные и технические меры для защиты 
              персональной информации Пользователя от неправомерного или случайного доступа, 
              уничтожения, изменения, блокирования, копирования, предоставления, распространения.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">
              5. Права пользователя
            </h2>
            <p className="text-zinc-300 mb-4">
              Пользователь имеет право:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
              <li>Получить информацию об обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">6. Согласие на обработку данных</h2>
            <p className="text-zinc-300 mb-4">
              Заполняя формы на сайте и отправляя свои персональные данные, Пользователь
              выражает свое согласие на обработку персональных данных.
            </p>
            <p className="text-zinc-300 mb-4">
              Согласие может быть отозвано Пользователем в любой момент путем направления
              письменного уведомления Оператору.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">7. Заключительные положения</h2>
            <p className="text-zinc-300 mb-4">
              Политика действует бессрочно до момента ее замены новой версией.
              Актуальная версия Политики размещена на сайте и доступна по ссылке.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">8. Контакты</h2>
            <p className="text-zinc-300 mb-4">
              Для получения информации по вопросам обработки персональных данных,
              пожалуйста, свяжитесь с нами:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
              <li>Email: privacy@terraforge.ru</li>
              <li>Телефон: +7 (921) 820-92-45</li>
              <li>Адрес: Вологда, ул. Индустриальная, 42</li>
            </ul>
          </section>

          <div className="mt-8 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              Последнее обновление: 4 марта 2026 г.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
