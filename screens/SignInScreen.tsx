import { ScreenWrapper } from '../components/ScreenWrapper';
import { Login } from '../components/Login';

export function SignInScreen() {
  return (
    <ScreenWrapper>
      <Login title="Sign In" bannerImage={require('../assets/login.png')} />
    </ScreenWrapper>
  );
}