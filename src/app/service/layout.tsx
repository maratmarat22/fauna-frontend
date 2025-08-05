import Sidebar from '@/components/layout/client/Sidebar';
import { Montserrat, Roboto, Raleway, Great_Vibes } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic'],
});
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic'],
});
const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['cyrillic'],
});
const greatVibes = Great_Vibes({
  weight: '400',
  variable: '--font-great-vibes',
  subsets: ['cyrillic'],
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${montserrat.variable} ${roboto.variable} ${raleway.variable} ${greatVibes.variable} ${montserrat.className} flex antialiased`}
    >
      <Sidebar />
      <main className="h-[calc(100vh-var(--header-height))]">{children}</main>
    </div>
  );
}
