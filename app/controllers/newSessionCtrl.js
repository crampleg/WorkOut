function newSessionCtrl($scope, $location, stateService){

    $scope.redirect = function(path) {
        $location.path(path);
    };
}