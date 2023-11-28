'use client';

import { HeaderAndFooter } from '@/components/templates';
import { getToken } from '../utils/getToken';
import { useRouter } from 'next/navigation';

export default function Home() {
  const token = getToken('token');
  const router = useRouter();

  if (token) router.push('/task');
  return (
    <HeaderAndFooter>
      <div>The Todo</div>
    </HeaderAndFooter>
  );
}
