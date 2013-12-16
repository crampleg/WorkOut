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

    functions.getExercises = function(){
        return exercises;
    };

    functions.addExercise = function(name){
        exercises.push({
            "name": name
        })
    };

    return {functions: functions};
});