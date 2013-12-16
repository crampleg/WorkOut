WOLog.factory("stateService", function ($http) {

    var functions = {};

    var exercises = [
        {
            "name": "Knebøy"
        },
        {
            "name": "Markløft"
        },
        {
            "name": "Bicepscurl"
        },
        {
            "name": "Push-Ups"
        },
        {
            "name": "Militærpress"
        }
    ];

    var currentExercise = null;

    functions.getExercises = function(){
        return exercises;
    };

    functions.addExercise = function(exercise){
        exercises.push(exercise);
    };

    functions.setCurrentExercise = function(exercise){
        currentExercise = exercise;
    };

    functions.getCurrentExercise = function(){
        return currentExercise;
    };

    return {functions: functions};
});