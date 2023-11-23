import { FormSignIn } from '@/components/molecules';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center px-4 capitalize">
      <div className="px-6 pb-6 pt-11 flex flex-col items-center w-[500px]">
        <div className="text-xl md:text-2xl mb-10 text-white">sign in</div>
        <FormSignIn />
        <div className="flex space-x-3 mt-4">
          <div>not have an account?</div>
          <Link href={'/auth/sign-up'} className="text-blue-400">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
