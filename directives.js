function myCustomer(){
  return {
    restrict: 'E',
    templateUrl: 'my-customer.html'
  };
}

angular.module('directives', [])

.directive('myCustomer', myCustomer)
