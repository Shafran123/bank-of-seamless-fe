// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_base_url: 'http://localhost:2400',
  firebase:{
    apiKey: "AIzaSyBtNytBDzxcL1dm7TUZeiFhOW96e_Ad4TM",
    authDomain: "bankofseamless.firebaseapp.com",
    projectId: "bankofseamless",
    storageBucket: "bankofseamless.appspot.com",
    messagingSenderId: "111544366252",
    appId: "1:111544366252:web:0edccdc1bbce69b4be5b09",
    measurementId: "G-7F72N8NP54"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
