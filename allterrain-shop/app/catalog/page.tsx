import { Metadata } from 'next';
import CatalogClient from './CatalogClient';

export const metadata: Metadata = {
  title: 'Каталог — Вездеход «Борей»: покоритель бездорожья',
  description: 'Ваш пропуск в самые труднодоступные уголки природы. 3 комплектации от 520 000 руб. Создан для тех, кто ценит свободу и надежность.',
  keywords: 'вездеход Борей, купить вездеход, каталог вездеходов, цены на вездеходы, Борей Стандарт, Борей Оптима, Борей Профи',
  openGraph: {
    title: 'Каталог вездеходов «Борей»',
    description: 'Ваш пропуск в самые труднодоступные уголки природы',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}
