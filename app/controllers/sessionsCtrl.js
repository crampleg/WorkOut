function sessionsCtrl($scope, $location, stateService){

    $scope.exercises = stateService.functions.getExercises();
    $scope.currentExercise = null;

    $scope.setExercise = function(exercise){
        $scope.currentExercise = exercise;
    };
    $scope.redirect = function(path) {
        $location.path(path);
    };
}