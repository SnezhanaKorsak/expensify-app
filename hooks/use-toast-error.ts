import Toast from 'react-native-toast-message';

export const useToastError = (text: string, subText?: string) => {
  Toast.show({
    type: 'error',
    text1: text,
    text2: subText || '',
  });
};