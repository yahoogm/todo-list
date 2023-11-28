import { useRouter } from 'next/navigation';

const useNavigate = () => {
  const router = useRouter();

  const handleNavigate = (url: string = '', method: 'push' | 'back') => {
    if ((method === 'back' && url === '') || undefined) {
      router.back();
    }

    router.push(url);
  };
  return { handleNavigate };
};

export default useNavigate;
