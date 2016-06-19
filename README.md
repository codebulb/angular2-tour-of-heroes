# angular2-tour-of-heroes
Angular 2’s official "Tour of Heroes" tutorial as a simple, lean Angular 2 project seed.

## What is this?
This is a minimalistic project setup for an Angular 2 application which is based on the code of [Angular 2’s official “Tour of Heroes” tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html). You can use it as a seed (skeleton) to build your own clean Angular 2 project on top of it.

In contrast to [the “inofficial” tutorial’s GitHub repository](https://github.com/johnpapa/angular2-tour-of-heroes), this project setup features:
* a port of the tutorial’s business code to ECMAScript 6 / 7 (still also available in TypeScript)
* a build tool and live server (Grunt), rather than invoking the TypeScript compiler and publishing to the “development only” *lite-server* directly via npm.
* a clean directory structure which also separates generated files from manually crafted ones.
* Angular 2 and other dependencies put up to date.

## How to use it
1. Fork / clone / download this repository / the desired branch (see below)
2. Use `npm install` to install the necessary dependencies
3. Run the transpiler, watch for changes, start the server, and launch the browser by using `npm start`

### ECMAScript 6 / 7 or TypeScript?
The entire project setup has been built in two versions, one for use with ECMAScript 6 / 7 code, and one for use with TypeScript code. The separate versions are put in different branches of this repository:
* [The ECMASript 6 / 7 branch](https://github.com/codebulb/angular2-tour-of-heroes/tree/es7)
* [The TypeScript branch](https://github.com/codebulb/angular2-tour-of-heroes/tree/ts)

## For more information
[**This blog post**](http://www.codebulb.ch/2016/06/angular-2-official-tutorial-projects-in-es6-typescript-seed-part-1.html) explains how this project setup has been created, and how you can create a similar Angular 2 project setup from scratch.

Other sources of information:
* [Angular 2’s official “Tour of Heroes” tutorial page](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html)
* [Angular 2’s inofficial “Tour of Heroes” GitHub repository](https://github.com/johnpapa/angular2-tour-of-heroes)
* [An identical project setup, but based on the code from Angular 2’s official “QuickStart” tutorial](https://github.com/codebulb/angular2-quickstart)
