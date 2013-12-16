 <!-- Declare a module -->
var WOLog = angular.module('WOLog', []);

<!--Routing-->
WOLog.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/menu.html",
        controller:"menuCtrl"
    }).when("/exercises", {
        templateUrl:"app/partials/exercises.html",
        controller:"exerciseCtrl"
    }).when("/addExercise", {
        templateUrl:"app/partials/addExercise.html",
        controller:"addExerciseCtrl"
    }).when("/newSession", {
        templateUrl:"app/partials/newSession.html",
        controller:"newSessionCtrl"
    }).when("/newExercise", {
        templateUrl:"app/partials/newExercise.html",
        controller:"newExerciseCtrl"
    }).otherwise({
        redirectTo:"/"
    })
 });


