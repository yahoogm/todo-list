import { SignUp } from '@/components/organisms';
import { HeaderAndFooter } from '@/components/templates';

export const metadata = {
  title: 'Sign Up',
};

const SignUpPage = () => {
  return (
    <HeaderAndFooter>
      <SignUp />
    </HeaderAndFooter>
  );
};

export default SignUpPage;
