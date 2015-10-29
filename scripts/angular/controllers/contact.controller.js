myApp.controller('contactCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {

 console.log('Contect Controller Init!');

//make inital object to store form data in.
 $scope.customer = {}; //javascript object v [] array
 //add properties to this object customer.
 $scope.customer.firstName = "";
 $scope.customer.lastName = "";
 $scope.customer.email = "";
 $scope.customer.city = "";
 $scope.customer.address = "";
 $scope.customer.zipcode = "";


 //these properies are bound with ng-model in the form inputs. as you type in the form, the customer gets updated via 2 way data binding in angular.

//This function gets called on form submit.
 $scope.submit = function(){


  //now we can see the new object.
  console.log($scope.customer)

  //???Now we post the object to a server:)


 }

}]);

