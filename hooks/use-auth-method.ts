import Toast from 'react-native-toast-message';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../config/firebase';
import { useAppDispatch } from './use-store';
import { setUserLoading } from '../store/user/slice';

type Props = {
  email: string;
  password: string;
  isSignedIn: boolean;
}

export const useAuthMethod = ({ email, password, isSignedIn }: Props) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Email and password are required',
      });

      return;
    }

    try {
      dispatch(setUserLoading(true));

      if (isSignedIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof FirebaseError ? error.message : 'Something went wrong';

      Toast.show({
        type: 'error',
        text1: 'Authentication failed',
        text2: errorMessage,
      });
    } finally {
      dispatch(setUserLoading(false));
    }

  };

  return { handleSubmit };
};