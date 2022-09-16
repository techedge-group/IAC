// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'esgeo-eu-portal-sostenibilidad',
    appId: '1:25981868843:web:5d486e3df903e14fd8836e',
    storageBucket: 'esgeo-eu-portal-sostenibilidad.appspot.com',
    apiKey: 'AIzaSyCOmDIk23qA3FHavuA3CD-v7VGnw2yxUHU',
    authDomain: 'esgeo-eu-portal-sostenibilidad.firebaseapp.com',
    messagingSenderId: '25981868843',
    measurementId: 'G-XET75D5RR2',
  },
  themes : ['iac', 'techedgegroup', 'daimlergroup', 'esgeo'],
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
