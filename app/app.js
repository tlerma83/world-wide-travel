"use strict";

let app = angular.module('BookApp', ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/books.html',
      controller: 'BookCtrl'
    }).
    otherwise("/");
});

app.run(($location, FBCreds) =>{
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});
