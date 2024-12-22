import { ScreenWrapper } from '../components/ScreenWrapper';
import { Login } from '../components/Login';

export function SignUpScreen() {
  return (
    <ScreenWrapper>
      <Login title="Sign Up" bannerImage={require('../assets/signup.png')} />
    </ScreenWrapper>
  );
}