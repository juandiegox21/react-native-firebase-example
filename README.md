# Example [React Native][rnurl] App With [Firebase][rnfirebaseurl] as the backend

I strongly recommend replacing the current Firebase integration with https://rnfirebase.io/ as it covers [issues with draining the users battery][issuedrainingbattery]. In this example we are using the Web App firebase configuration, this is made possible using [Expo][expourl].

<div>
    <img src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="50" />
    <img src="https://avatars.githubusercontent.com/u/1335026?s=64" width="50" />
</div>

# Setting up Firebase

- Create a project in Firebase
- Enable email authentication
- Enable Firestore Database
- Create a new web app and get the Firebase configuration (Credentials)
- Update the credentials accordingly in the .env file

# Installation

Install [EXPO CLI][expocliurl]

```ruby
# Install the command line tools
$ npm install --global expo-cli
```

Install dependencies

```ruby
$ expo install
```

Run expo

```ruby
$ expo start
```

# Screenshots

Signing in

![alt text][signin]

Signing up

![alt text][signup]

The session is persisted, if the app is close you will still be logged in (Click on the picture, it will take you to a video)


![alt text][persistedsession]

<!-- definitions -->

[rnfirebaseurl]: https://rnfirebase.io/
[rnurl]: https://reactnative.dev/
[expourl]: https://expo.dev/
[expocliurl]: https://docs.expo.dev/get-started/installation/
[signin]: https://i.imgur.com/EfNWRhs.gif "Log in and Sign out"
[signup]: https://i.imgur.com/fQoxArz.gif "Sign up and Sign out"
[persistedsession]: https://imgur.com/8PSjGpi.gif "Persisting session"
[issuedrainingbattery]: https://github.com/facebook/react-native/issues/12981
