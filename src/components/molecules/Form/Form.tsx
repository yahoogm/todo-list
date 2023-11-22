import { Button, Input } from '@/components/atoms';
import Link from 'next/link';

const FormSignIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 capitalize">
      <div className="px-6 pb-6 pt-11 flex flex-col items-center w-[500px]">
        <div className="text-xl md:text-2xl mb-10 text-white">sign in</div>
        <form>
          <div className="mb-4">
            <Input placeholder="Username or email" type="text" />
          </div>
          <div className="mb-10">
            <Input placeholder="Password" type="password" />
          </div>
          <div className="w-full">
            <Button text="Login" btnColor="btn-primary" />
          </div>
        </form>

        <div className="flex space-x-3 mt-4">
          <div>not have an account?</div>
          <Link href={''} className="text-blue-400">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
