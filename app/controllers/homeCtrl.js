function homeCtrl($scope, $location){

    var listViewBtn = $('#list-view-btn');
    var calendarViewBtn = $('#calendar-view-btn');
    $scope.isCalendarView = false;

    $scope.setView = function(view){
        if(view == 'calendar'){
            listViewBtn.removeClass('pressed');
            calendarViewBtn.addClass('pressed');
            $scope.isCalendarView = true;
        }
        else if (view == 'list'){
            calendarViewBtn.removeClass('pressed');
            listViewBtn.addClass('pressed');
            $scope.isCalendarView = false;
        }
    };

    $scope.redirect = function(path) {
        $location.path(path);
    };
}