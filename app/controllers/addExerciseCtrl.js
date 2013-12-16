function addExerciseCtrl($scope, $location, stateService){

    $scope.exerciseName = null;

    $scope.redirect = function(path) {
        $location.path(path);
    };

    $scope.addExercise = function(){
        stateService.functions.addExercise($scope.exerciseName);
        $scope.redirect('exercises');
    };
}