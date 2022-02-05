## Pet Finder Application

A sample **React Native** application that can help to donate a pet or adopt.
This project consumer of [**pet-finder-api**](https://github.com/tarkcelk/pet-finder-api) rest api service.For full fledged work must clone both repos and run locally.

![app-desing-1](https://raw.githubusercontent.com/tarkcelk/pet-finder/master/src/assets/overview/sample-1.PNG)
---
![app-desing-1](https://raw.githubusercontent.com/tarkcelk/pet-finder/master/src/assets/overview/sample-2.PNG)

### Application is about
---
- Pet adoption and donation.
- Users can adopt a pet via searching or filtering that way they can find their wished pets. 
- Users must be registered on application if they want to donate , on adoption they don't have to be registered.
- Users can add their liked pets to favorites to see later , they can see published pets and change their status by their wish.


### Utilities
---
- **axios** for http requests.
- **redux, redux-thunk**  for state management purposes.
- **redux-logger**  for monitoring the state changes.
- **react-navigation** for navigating between screens with stack navigator and drawer support.
- **react-native-image-picker** for picking images from gallery.
- **react-native-form-validator** for validation purposes on forms.
- **react-native-picker** for selecting an item from picker.
- **react-native-vector-icons** for icons.

### Environment
---
- React Native - 0.66.3
- TypeScript
- React - 17.0.2
- Xcode - 12.5
- Android API Level - 30 , Min SDK - 21
- iOS Min Deployment Target - 11 

### How to run locally
---
- yarn install
- [iOS] cd ios && pod install
- [iOS] yarn ios
- [android] yarn android
