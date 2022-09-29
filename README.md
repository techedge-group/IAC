# IacApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Install dependencies

Run `npm i` for install all the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Create new theme for custom client.

1) In the Figma file create the assets for the contact and footer component background, define the colors and the corporate logo and export it as png.

2) Add the assets to the brand folder at **iac-app/src/assets/brand.**

3) Go to theme.scss at **iac-app/src/assets/styles/theme.scss.**

4) Create a new theme in the @layer base object.

5) __IMPORTANT:__ The theme name has to be the same as the client domain. Example: If we are creating a new theme for a client named 'example@client.com', the theme name has to be 'client' because the string is extracted from(example@client.com).

6) Complete the properties in the theme.scss with your custom styles.
```
     [data-theme="CLIENT_DOMAIN_NAME"] {
    --color-primary: #000000;
    --color-secondary: #000000;
    --color-primary-dark: #000000;
    --color-secondary-dark: #000000;
    --bg-footer: url('../brand/bg-footer.png');
    --bg-contact: url('../brand/bg-contact.png');
    --logo: url('../brand/logo.png');
  }
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
