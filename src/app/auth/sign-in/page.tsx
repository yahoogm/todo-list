import { SignIn } from '@/components/organisms';
import { HeaderAndFooter } from '@/components/templates';

export const metadata = {
  title: 'Sign In',
};

const SignInPage = () => {
  return (
    <HeaderAndFooter>
      <SignIn />
    </HeaderAndFooter>
  );
};

export default SignInPage;
