 <!-- Declare a module -->
var WOLog = angular.module('WOLog', ['ui.bootstrap']);

<!--Routing-->
WOLog.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/menu.html",
        controller:"menuCtrl"
    }).when("/exercises", {
        templateUrl:"app/partials/exercises.html",
        controller:"exercisesCtrl"
    }).when("/sessions", {
        templateUrl:"app/partials/sessions.html",
        controller:"sessionsCtrl"
    }).when("/newSession", {
        templateUrl:"app/partials/newSession.html",
        controller:"sessionsCtrl"
    }).when("/newExercise", {
        templateUrl:"app/partials/newExercise.html",
        controller:"sessionsCtrl"
    }).when("/newExerciseDetails", {
        templateUrl:"app/partials/newExerciseDetails.html",
        controller:"sessionsCtrl"
    }).when("/newExerciseResults", {
        templateUrl:"app/partials/newExerciseResults.html",
        controller:"sessionsCtrl"
    }).otherwise({
        redirectTo:"/"
    })
 });


