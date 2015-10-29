myApp.controller('homeCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.message = 'Welcome!';
    $scope.currentId = 1;

    var root = 'http://jsonplaceholder.typicode.com';

    $http({

        url: root + '/comments',
        method: 'GET'

    }).then(function(response) {
        console.log(response);
       $scope.comments = response.data;

    });

    $scope.showComment = function(index){

        $scope.currentItem = index;
        console.log($scope.currentItem);

    }
}]);
