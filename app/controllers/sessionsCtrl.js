function sessionsCtrl($scope, $location, $modal, stateService){

    $scope.exercises = stateService.functions.getExercises();
    $scope.currentExercise = stateService.functions.getCurrentExercise();
    $scope.time = false;
    $scope.weight = false;
    $scope.sets = 0;

    $scope.setCurrentExercise = function(exercise){
        $scope.currentExercise = exercise;
        stateService.functions.setCurrentExercise($scope.currentExercise);
        $scope.redirect('newExerciseDetails');
    };

    $scope.toResults = function() {
        $scope.currentExercise.time = $scope.time;
        $scope.currentExercise.weight = $scope.weight;
        var sets = $scope.currentExercise.sets = [];
        for (var i=0;i<$scope.sets;i++){
            var s = "Set " + (i+1);
            sets.push({"setName":s});
        }
        console.log($scope.currentExercise);
        stateService.functions.setCurrentExercise($scope.currentExercise);
        $scope.redirect('newExerciseResults');
    };

    $scope.setWeight = function(condition){
        $scope.weight = condition;
    };

    $scope.setTime = function(condition){
        $scope.time = condition;
    };

    $scope.showModal = function(){
        $modal.open({
            templateUrl: 'app/partials/modal.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance) {
                $scope.newExercise = {
                    "name": ""
                };
                $scope.error = false;
                $scope.submit = function () {
                    if($scope.newExercise.name != ""){
                        stateService.functions.addExercise($scope.newExercise);
                        $scope.currentExercise = $scope.newExercise;
                        $scope.setCurrentExercise = stateService.functions.setCurrentExercise($scope.currentExercise);
                        $modalInstance.dismiss('cancel');
                        $location.path('newExerciseDetails');
                    }
                    else {
                        $scope.error = true;
                    }
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }
        });
    };

    $scope.redirect = function(path) {
        $location.path(path);
    };
}