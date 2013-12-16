function menuCtrl($scope, $location){

    $scope.redirect = function(path) {
        $location.path(path);
    };
}