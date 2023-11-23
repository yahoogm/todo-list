import { Footer, Header } from '@/components/atoms';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
};
const HeaderAndFooter = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen justify-between space-y-10">
      <Header />
      <div className="px-32 space-y-32">{children}</div>
      <Footer />
    </div>
  );
};

export default HeaderAndFooter;
