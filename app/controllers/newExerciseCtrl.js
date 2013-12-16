function newExerciseCtrl($scope, $location, stateService){

    $scope.exerciseName = null;
    $scope.exerciseDetails = false;
    $scope.cancel = false;
    $scope.time = false;
    $scope.weight = false;

    $scope.exercises = stateService.functions.getExercises();

    $scope.setExercise = function(exerciseName){
        $scope.exerciseName = exerciseName;
        $scope.exerciseDetails = true;
        $scope.cancel = true;
    };

    $scope.setExerciseType = function(exerciseType){
        $scope.weight = false;
        $scope.time = false;
        if(exerciseType == 'time'){
            $scope.time = true;
        }
        else if(exerciseType == 'weight'){
            $scope.weight = true;
        }
        else {
            $scope.weight = true;
            $scope.time = true;
        }
    };

    $scope.enterDetails = function(){

    };

    $scope.redirect = function(path) {
        $location.path(path);
    };
}