# AngularQuickStart

This project is an empty Angular5 project, with slight modification to the file structure and some other usefull stuff.

## Features

### File Structure : Modules

Each module should be created in the modules folder and have the following folders inside
```
components
services (if needed)
models (if needed)
```

### Aliases

Alias for environment and app for clear import.

```javascript
import { environment } from '@env/environment';
import { SomeModule } from '@app/core';
```
### Getting Started

Install Angular Cli

```
$ npm install -g @angular/cli
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## References

[1]: https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81
