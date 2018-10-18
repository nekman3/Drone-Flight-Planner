# DroneFlightPlanner

This project allows user to create and store drone flight plans.

## Setup

* Install [Visual Studio Code](http://code.visualstudio.com/)
* You must have `angular/cli` installed as global. If you don't, use:

```bash
npm install -g @angular/cli
```

* Install dependencies:

```bash
npm install
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

This project uses json-server in order to save data to db.json file.

* Run `npm run mock:server` for a json server. 
* Open a new terminal and run `npm start` for a dev server. 
* Navigate to `http://localhost:4207/`. The app will automatically reload if you change any of the source files.

## Running unit tests

* Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running unit tests coverage report

* Run `npm run test:coverage` to generate html coverage report.
* Go to coverage folder and open index.html to view the report.

## Improvements for consideration

* Add more rules to tslint.
* Add documentation tool.
