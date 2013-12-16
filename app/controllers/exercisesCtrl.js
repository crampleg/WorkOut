function exercisesCtrl($scope, $location, $modal, $log, stateService){



    $scope.exercises = stateService.functions.getExercises();

    $scope.showModal = function(){
        $modal.open({
            templateUrl: 'app/partials/modal.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance) {
                $scope.newExercise = {
                    "name": null
                };
                $scope.error = false;
                $scope.submit = function () {
                    if($scope.newExercise.name != null){
                        stateService.functions.addExercise($scope.newExercise);
                        $modalInstance.dismiss('cancel');
                    }
                    else {
                        $scope.error = true;
                    }
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };

    $scope.redirect = function(path) {
        $location.path(path);
    };
}
