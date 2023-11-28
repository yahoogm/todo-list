'use client';

import { HeaderAndFooter } from '@/components/templates';
import { getToken } from '@/utils/getToken';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const Home = () => {
  const token = getToken('token');
  const router = useRouter();

  React.useEffect(() => {
    if (token) router.push('/task');
  }, [token, router]);
  return (
    <HeaderAndFooter>
      {' '}
      <div>The Todo</div>
    </HeaderAndFooter>
  );
};

export default Home;
