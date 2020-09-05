import {AsyncStorage} from 'react-native'
export default function (prevState: any, action: any) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        isSign: true,
      };
    case "SIGN_OUT":
      AsyncStorage.clear()
      return {
        isSign: false,
      };
  }
  return prevState;
}
