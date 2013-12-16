function exerciseCtrl($scope, $location, stateService){

    $scope.exercises = stateService.functions.getExercises();

    $scope.redirect = function(path) {
        $location.path(path);
    };
}